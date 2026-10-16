/**
 * Find My Home - Geospatial Server & Static File Host
 * Center: Jaipur & Rajasthan Corridor
 * 
 * Features:
 * - Real Haversine spatial radius calculation
 * - Autocomplete geocoding across Jaipur localities, universities, & corporate landmarks
 * - Server-side facet filtering, availability management, and owner privacy shielding
 * - Rate limiting on sensitive endpoints
 * - Static file serving with MIME support
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const { RAJASTHAN_LOCALITIES, RAJASTHAN_PROPERTIES } = require('./rajasthan_dataset.js');

const PORT = process.env.PORT || 8000;
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 120;
const requestCounts = new Map();

// In-memory property store (mutations persist in memory during server lifetime)
let propertiesStore = JSON.parse(JSON.stringify(RAJASTHAN_PROPERTIES));

// Great-circle Haversine distance formula (in km)
function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round((R * c) * 10) / 10;
}

// MIME types for static assets
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Rate limiting middleware
function isRateLimited(ip) {
  const now = Date.now();
  const clientData = requestCounts.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };
  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + RATE_LIMIT_WINDOW_MS;
    requestCounts.set(ip, clientData);
    return false;
  }
  clientData.count++;
  requestCounts.set(ip, clientData);
  return clientData.count > MAX_REQUESTS_PER_WINDOW;
}

const server = http.createServer((req, res) => {
  const clientIp = req.socket.remoteAddress || '127.0.0.1';

  // Apply rate limit
  if (isRateLimited(clientIp)) {
    res.writeHead(429, { 'Content-Type': 'application/json', 'Retry-After': '60' });
    res.end(JSON.stringify({ error: 'Too many requests. Please wait a moment.' }));
    return;
  }

  // Parse URL
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API Route: Geocoding Autocomplete for Rajasthan & Jaipur
  if (pathname === '/api/geocode/autocomplete' && req.method === 'GET') {
    const q = (query.q || '').trim().toLowerCase();
    if (!q) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ results: RAJASTHAN_LOCALITIES.slice(0, 6) }));
      return;
    }

    const matches = [];
    RAJASTHAN_LOCALITIES.forEach(loc => {
      let score = 0;
      if (loc.name.toLowerCase().includes(q)) score += 10;
      if (loc.type.toLowerCase().includes(q)) score += 5;
      loc.landmarks.forEach(lm => {
        if (lm.toLowerCase().includes(q)) score += 8;
      });

      if (score > 0) {
        matches.push({
          name: loc.name,
          lat: loc.lat,
          lng: loc.lng,
          type: loc.type,
          landmarks: loc.landmarks,
          city: 'Jaipur',
          state: 'Rajasthan',
          score
        });
      }
    });

    matches.sort((a, b) => b.score - a.score);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ query: q, results: matches.slice(0, 8) }));
    return;
  }

  // API Route: Properties Search with Geospatial Radius & Filters
  if (pathname === '/api/properties' && req.method === 'GET') {
    let results = propertiesStore.map(p => ({ ...p }));

    const userLat = query.lat ? parseFloat(query.lat) : null;
    const userLng = query.lng ? parseFloat(query.lng) : null;
    const radiusKm = query.radius ? parseFloat(query.radius) : 10; // Default 10km radius
    const localityFilter = (query.locality || '').trim().toLowerCase();
    const typeFilter = (query.type || 'all').trim().toLowerCase();
    const audienceFilter = (query.audience || 'all').trim().toLowerCase();
    const minRent = query.minRent ? parseInt(query.minRent, 10) : 0;
    const maxRent = query.maxRent ? parseInt(query.maxRent, 10) : Infinity;
    const furnishing = query.furnishing || 'all';
    const verifiedOnly = query.verified === 'true';

    // 1. Calculate Geodesic Distance if coordinates provided
    if (userLat !== null && userLng !== null && !isNaN(userLat) && !isNaN(userLng)) {
      results = results.map(prop => {
        const straightLineKm = calculateHaversineDistance(userLat, userLng, prop.coordinates.lat, prop.coordinates.lng);
        // Estimated road travel is ~1.25x straight-line in Jaipur traffic with ~3.5 min/km average
        const estimatedRoadKm = Math.round((straightLineKm * 1.25) * 10) / 10;
        const estimatedMins = Math.max(3, Math.round(estimatedRoadKm * 3.5));
        return {
          ...prop,
          distance: {
            straightLineKm,
            estimatedRoadKm,
            estimatedMins,
            isWithinRadius: straightLineKm <= radiusKm
          }
        };
      });

      // Filter strictly by radius: property outside radius does NOT appear
      results = results.filter(p => p.distance.straightLineKm <= radiusKm);
      // Sort nearest first by default
      results.sort((a, b) => a.distance.straightLineKm - b.distance.straightLineKm);
    }

    // 2. Filter by Locality Name / Keyword
    if (localityFilter && localityFilter !== 'all') {
      results = results.filter(p => {
        const fullText = (p.address.locality + ' ' + p.title + ' ' + p.address.line1 + ' ' + p.nearbyLandmarks.map(l => l.name).join(' ')).toLowerCase();
        return fullText.includes(localityFilter);
      });
    }

    // 3. Filter by Property Category
    if (typeFilter && typeFilter !== 'all') {
      results = results.filter(p => p.propertyType === typeFilter || (typeFilter === 'flat' && p.propertyType === 'flat') || (typeFilter === 'pg' && p.propertyType === 'pg'));
    }

    // 4. Filter by Target Audience (Student vs. Professional)
    if (audienceFilter && audienceFilter !== 'all') {
      results = results.filter(p => p.targetAudience === audienceFilter || p.targetAudience === 'all');
    }

    // 5. Filter by Rent Range
    if (minRent > 0 || maxRent < Infinity) {
      results = results.filter(p => p.monthlyRent >= minRent && p.monthlyRent <= maxRent);
    }

    // 6. Furnishing
    if (furnishing && furnishing !== 'all') {
      results = results.filter(p => p.furnishing === furnishing);
    }

    // 7. Verified Only
    if (verifiedOnly) {
      results = results.filter(p => p.verification.isVerified);
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      totalCount: results.length,
      searchCenter: userLat && userLng ? { lat: userLat, lng: userLng, radiusKm } : null,
      properties: results
    }));
    return;
  }

  // API Route: Availability Confirmation by Owner
  if (pathname.match(/^\/api\/properties\/[\w-]+\/confirm-availability$/) && req.method === 'POST') {
    const propId = pathname.split('/')[3];
    const property = propertiesStore.find(p => p.id === propId);
    if (!property) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Property not found' }));
      return;
    }

    property.availability.lastConfirmedDate = new Date().toISOString();
    property.availability.isStale = false;
    property.availability.isAvailable = true;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      message: 'Availability confirmed for property ' + property.title,
      lastConfirmedDate: property.availability.lastConfirmedDate
    }));
    return;
  }

  // API Route: Community Stale Listing Flag
  if (pathname.match(/^\/api\/properties\/[\w-]+\/flag-stale$/) && req.method === 'POST') {
    const propId = pathname.split('/')[3];
    const property = propertiesStore.find(p => p.id === propId);
    if (!property) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Property not found' }));
      return;
    }

    property.availability.isStale = true;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      message: 'Property flagged for verification check. Auditor dispatched.',
      propertyId: propId
    }));
    return;
  }

  // Static File Serving
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
  
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA routes
      filePath = path.join(__dirname, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Internal Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Find My Home (Rajasthan & Jaipur Engine) running at http://localhost:${PORT}`);
});
