# 🏠 Find My Home — React + Tailwind CSS v4 Migration Plan

> **Target Stack:** Vite + React 19 · Tailwind CSS v4 · React Router v7 · Zustand · Leaflet/React-Leaflet  
> **Design System:** Sahara — Warm Minimalism  
> **Market Focus:** Jaipur & nearby Rajasthan cities (Ajmer, Alwar, Sikar, Kota, Udaipur, Bikaner)  
> **Current Architecture:** Static HTML SPA with hash-based routing + Node.js API (`server.js`)

---

## 📊 Overview

| Phase | Name | Estimated Effort | Priority |
|-------|------|-----------------|----------|
| 1 | Project Scaffolding & Toolchain | 1–2 days | 🔴 Critical |
| 2 | Sahara Design System (Tailwind v4) | 2–3 days | 🔴 Critical |
| 3 | Core Component Library | 3–4 days | 🔴 Critical |
| 4 | Page Migration | 4–5 days | 🟠 High |
| 5 | Geospatial & Data Layer | 3–4 days | 🟠 High |
| 6 | Routing, Auth & Production Hardening | 2–3 days | 🟡 Medium |

**Total Estimated Effort: 15–21 working days**

---

## Phase 1 — Project Scaffolding & Toolchain

> **Goal:** Bootstrap a clean Vite + React project in the same repo. The old static files live alongside until fully replaced.

### 1.1 Initialize Vite + React

```bash
# Run inside d:/YASH/CODING/FindMyPg
npx -y create-vite@latest app/ -- --template react
cd app
npm install
```

### 1.2 Install Core Dependencies

```bash
# Tailwind CSS v4 (new CSS-first approach, no tailwind.config.js needed)
npm install tailwindcss @tailwindcss/vite

# Routing
npm install react-router-dom@7

# State management
npm install zustand

# Geospatial / Maps
npm install leaflet react-leaflet

# HTTP client
npm install axios

# UI utilities
npm install clsx lucide-react

# Fonts (served locally via fontsource)
npm install @fontsource/eb-garamond @fontsource/manrope
```

### 1.3 Project Folder Structure

```
app/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Images, icons, static files
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Primitive components (Button, Card, Input...)
│   │   ├── listing/         # Listing-specific (ListingCard, ListingGrid...)
│   │   ├── map/             # MapContainer, LocationPin, RadiusCircle...
│   │   ├── search/          # SearchBar, RadiusSelector, FilterPanel...
│   │   └── layout/          # Navbar, Footer, PageWrapper...
│   ├── pages/               # Route-level page components
│   │   ├── Home.jsx         # Marketplace / Location-first search
│   │   ├── Search.jsx       # Search results + Map
│   │   ├── ListingDetail.jsx
│   │   ├── PostProperty.jsx
│   │   ├── OwnerDashboard.jsx
│   │   └── NotFound.jsx
│   ├── store/               # Zustand stores
│   │   ├── searchStore.js   # Location, radius, filters
│   │   └── authStore.js     # Host/owner auth state
│   ├── hooks/               # Custom React hooks
│   │   ├── useGeolocation.js
│   │   ├── useProperties.js
│   │   └── useDebounce.js
│   ├── api/                 # API client wrappers
│   │   └── properties.js    # Axios calls to server.js endpoints
│   ├── lib/                 # Pure utilities
│   │   ├── haversine.js     # Geospatial distance calc
│   │   └── formatters.js    # Currency, date, area formatters
│   ├── styles/
│   │   └── index.css        # Tailwind v4 entry + Sahara design tokens
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

### 1.4 Vite Config

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:8000'   // proxy to existing server.js
    }
  }
})
```

### ✅ Phase 1 Exit Criteria
- [ ] `npm run dev` launches the Vite dev server at `localhost:5173`
- [ ] Proxy to `server.js` on port 8000 works (`/api/properties` returns data)
- [ ] Folder structure matches the spec above
- [ ] No TypeScript (plain JS + JSDoc for now; TS migration can be Phase 7)

---

## Phase 2 — Sahara Design System (Tailwind CSS v4)

> **Goal:** Translate all tokens from `tokens.css` and `sahara/DESIGN.md` into a Tailwind v4 CSS-first design system. No more raw hex colors in components.

### 2.1 Tailwind v4 Entry Point (`src/styles/index.css`)

```css
@import "tailwindcss";

/* ────────────────────────────────────────────────
   SAHARA — WARM MINIMALISM DESIGN TOKENS
   Tailwind v4 CSS-first custom properties
──────────────────────────────────────────────── */
@theme {
  /* --- Brand Palette --- */
  --color-sienna:        #c2652a;   /* Primary CTA */
  --color-sienna-dark:   #a0521e;
  --color-sienna-light:  #e8896a;
  --color-rose-dust:     #8c3c3c;   /* Accent */
  --color-linen:         #faf5ee;   /* Page background */
  --color-linen-dark:    #f0e8dd;
  --color-sand:          #e8ddd0;
  --color-warm-gray-100: #f5f0eb;
  --color-warm-gray-200: #e8e0d8;
  --color-warm-gray-400: #a89880;
  --color-warm-gray-600: #7a6a5a;
  --color-warm-gray-800: #3a302a;
  --color-warm-gray-900: #201810;

  /* --- Dark mode surface --- */
  --color-surface-dark:  #1e1812;
  --color-surface-card:  #2a221a;

  /* --- Typography --- */
  --font-serif:  'EB Garamond', Georgia, serif;
  --font-sans:   'Manrope', system-ui, sans-serif;

  /* --- Font sizes (editorial scale) --- */
  --text-display: clamp(2.5rem, 6vw, 4.5rem);
  --text-h1:      clamp(2rem, 4vw, 3rem);
  --text-h2:      clamp(1.5rem, 3vw, 2rem);

  /* --- Spacing --- */
  --spacing-section: clamp(4rem, 8vw, 8rem);

  /* --- Radius --- */
  --radius-card:   12px;
  --radius-btn:    8px;
  --radius-input:  8px;

  /* --- Shadow --- */
  --shadow-soft: 0 2px 16px rgba(58, 48, 42, 0.06);
  --shadow-card: 0 4px 32px rgba(58, 48, 42, 0.10);
}

/* ── Base reset with Sahara warmth ── */
@layer base {
  *, *::before, *::after { box-sizing: border-box; }

  body {
    background-color: var(--color-linen);
    color: var(--color-warm-gray-900);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-serif);
    color: var(--color-warm-gray-900);
    line-height: 1.1;
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--color-surface-dark);
      color: var(--color-warm-gray-200);
    }
    h1, h2, h3, h4 { color: var(--color-warm-gray-100); }
  }
}
```

### 2.2 Primitive Component Tokens

| Token | Tailwind Class Target |
|-------|-----------------------|
| Primary button | `bg-sienna text-white rounded-[8px] hover:bg-sienna-dark` |
| Card | `bg-white rounded-[12px] shadow-soft border border-sand` |
| Input | `border border-warm-gray-200 rounded-[8px] focus:border-sienna` |
| Label | `text-warm-gray-600 font-sans text-sm font-medium` |
| Badge | `bg-linen-dark text-sienna text-xs font-semibold rounded-full px-3 py-1` |

### ✅ Phase 2 Exit Criteria
- [ ] All colors from `tokens.css` present as `@theme` variables
- [ ] Body renders in Sahara warm linen background
- [ ] Dark mode works via `prefers-color-scheme` or manual `dark` class
- [ ] Google Fonts (EB Garamond + Manrope) loading correctly

---

## Phase 3 — Core Component Library

> **Goal:** Build all reusable UI primitives and domain-specific components. No page logic yet.

### 3.1 UI Primitives (`src/components/ui/`)

| Component | Description |
|-----------|-------------|
| `Button.jsx` | Variants: `primary`, `secondary`, `ghost`, `danger`. Size: `sm`, `md`, `lg`. |
| `Input.jsx` | Label + error + icon slot. Sienna focus ring. |
| `Badge.jsx` | Property type tag (PG, Flat, Room, House). Color-coded. |
| `Card.jsx` | Warm white card with soft shadow. Padding variants. |
| `Modal.jsx` | Overlay modal for auth/PIN/contact reveal. |
| `Spinner.jsx` | Warm sienna loading indicator. |
| `Skeleton.jsx` | Warm-toned content placeholders. |
| `Select.jsx` | Styled native select with warm borders. |
| `Slider.jsx` | Range input for radius/price. |
| `Toggle.jsx` | Light/dark mode or feature toggles. |

### 3.2 Layout Components (`src/components/layout/`)

| Component | Description |
|-----------|-------------|
| `Navbar.jsx` | Logo + nav links + dark mode toggle + host CTA. Sticky on scroll. |
| `Footer.jsx` | Links for Jaipur corridors, company, legal. |
| `PageWrapper.jsx` | Max-width container, horizontal padding, section spacing. |
| `SectionHeader.jsx` | Serif headline + body subtext. Editorial layout. |

### 3.3 Listing Components (`src/components/listing/`)

| Component | Description |
|-----------|-------------|
| `ListingCard.jsx` | Image, type badge, title, locality, price/month, distance indicator. |
| `ListingGrid.jsx` | Responsive grid: 1 col mobile → 2 cols tablet → 3 cols desktop. |
| `ListingCarousel.jsx` | Horizontal scroll on mobile. |
| `PriceTag.jsx` | Formatted INR price with `/mo` label. |
| `AmenitiesList.jsx` | Icon + label for WiFi, AC, meals, parking, etc. |
| `ContactReveal.jsx` | Masked number + "Reveal" button (triggers PIN auth). |
| `VerifiedBadge.jsx` | Green check for verified listings. |

### 3.4 Search Components (`src/components/search/`)

| Component | Description |
|-----------|-------------|
| `SearchBar.jsx` | Autocomplete input with Nominatim suggestions + "Use My Location" button. |
| `RadiusSelector.jsx` | Pill buttons: 1, 3, 5, 10, 20 km. |
| `FilterPanel.jsx` | Drawer on mobile, sidebar on desktop. Type, price, amenities. |
| `FilterChip.jsx` | Active filter indicator with clear button. |
| `SortSelector.jsx` | Dropdown: distance, price, date posted. |

### 3.5 Map Components (`src/components/map/`)

| Component | Description |
|-----------|-------------|
| `MapContainer.jsx` | React-Leaflet map. Split view desktop (50/50), full-screen mobile. |
| `PropertyMarker.jsx` | Custom warm-toned marker. Active state on hover/select. |
| `RadiusCircle.jsx` | Leaflet circle showing current search radius. |
| `UserLocationPin.jsx` | Pulsing blue pin for GPS location. |
| `MapControls.jsx` | Zoom in/out, recenter, toggle satellite. |

### ✅ Phase 3 Exit Criteria
- [ ] A dev preview page renders all components in isolation
- [ ] All components accept and apply Tailwind classes via `className` prop
- [ ] No hardcoded hex colors — all from design token variables
- [ ] Responsive breakpoints verified (mobile-first)

---

## Phase 4 — Page Migration

> **Goal:** Port each HTML page to a React route. Use components from Phase 3.

### 4.1 Home Page (`pages/Home.jsx`)
**Migrates from:** `roomly_find_your_place_marketplace/code.html`

- Hero section with **location-first search bar** (SearchBar + RadiusSelector)
- "Popular in Jaipur" quick-select chips: Jagatpura · Malviya Nagar · Mansarovar · Vaishali Nagar · Tonk Road · C-Scheme · Sitapura · Bani Park
- Nearby Rajasthan cities row: Ajmer · Alwar · Sikar · Kota · Udaipur · Bikaner · Jodhpur · Jaisalmer
- Featured listings grid (ListingGrid)
- How It Works section
- Trust badges (verified listings, secure contact)

### 4.2 Search & Results Page (`pages/Search.jsx`)
**Migrates from:** `roomly_search_filter_rentals/code.html`

- Split layout: left = FilterPanel + ListingGrid, right = MapContainer
- Mobile: stacked (map collapsible)
- URL params: `?lat=&lng=&rad=&type=&minPrice=&maxPrice=`
- Real-time filter updates (debounced, no full reload)
- Infinite scroll OR pagination on listing grid

### 4.3 Listing Detail Page (`pages/ListingDetail.jsx`)
**Migrates from:** `roomly_property_details_booking/code.html`

- Image gallery (carousel)
- Full amenities list
- Owner contact reveal (ContactReveal + PIN modal)
- Location on mini-map
- Similar listings nearby
- Share button

### 4.4 Post Property Page (`pages/PostProperty.jsx`)
**Migrates from:** `roomly_post_property_listing_wizard/code.html`

- Multi-step wizard (4 steps):
  1. Property type & basic info
  2. Location picker (map click or address search)
  3. Amenities & pricing
  4. Photos & review
- Progress bar component
- Zustand for wizard state persistence

### 4.5 Owner Dashboard (`pages/OwnerDashboard.jsx`)
**Migrates from:** `roomly_owner_property_management_dashboard/code.html`

- PIN-gated access (authStore)
- Listing management table (edit, delete, mark unavailable)
- Stats cards: views, enquiries, active listings
- Quick-add listing shortcut

### ✅ Phase 4 Exit Criteria
- [ ] All 5 pages render without errors
- [ ] Navigation between pages works via React Router
- [ ] All pages are mobile-responsive
- [ ] No `window.roomly` references remain in React code

---

## Phase 5 — Geospatial & Data Layer

> **Goal:** Connect React frontend to the existing `server.js` API, implement clean data hooks, and migrate geospatial logic.

### 5.1 API Client (`src/api/properties.js`)

```js
import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

export const searchNearby = (lat, lng, radiusKm, filters = {}) =>
  api.get('/properties/nearby', { params: { lat, lng, radius: radiusKm, ...filters } })

export const getPropertyById = (id) =>
  api.get(`/properties/${id}`)

export const autocomplete = (query) =>
  api.get('/autocomplete', { params: { q: query } })

export const postProperty = (data) =>
  api.post('/properties', data)
```

### 5.2 Zustand Stores

```js
// store/searchStore.js
import { create } from 'zustand'

export const useSearchStore = create((set) => ({
  location: null,         // { lat, lng, label }
  radiusKm: 5,
  filters: {},
  results: [],
  loading: false,

  setLocation: (loc) => set({ location: loc }),
  setRadius: (r) => set({ radiusKm: r }),
  setFilters: (f) => set({ filters: f }),
  setResults: (r) => set({ results: r }),
  setLoading: (l) => set({ loading: l }),
}))

// store/authStore.js
export const useAuthStore = create((set) => ({
  isHostAuthed: false,
  setHostAuthed: (v) => set({ isHostAuthed: v }),
}))
```

### 5.3 Custom Hooks

```js
// hooks/useGeolocation.js — wraps navigator.geolocation with permission state, error handling, loading

// hooks/useProperties.js — fetches from /api on location/radius/filter change (debounced)

// hooks/useDebounce.js — generic 300ms debounce for search inputs
```

### 5.4 Rajasthan Data Enhancement

Extend `rajasthan_dataset.js` with all Jaipur corridors and nearby cities:

**Jaipur corridors:** Jagatpura, Malviya Nagar, Mansarovar, Vaishali Nagar, Tonk Road, Sitapura, Bani Park, C-Scheme, Civil Lines, Sanganer, Pratap Nagar, Ajmer Road, Durgapura

**Nearby cities:** Ajmer, Alwar, Sikar, Kota, Tonk, Dausa, Chomu, Shahpura, Udaipur, Bikaner, Jodhpur, Jaisalmer

Schema per listing:
```json
{
  "id": "string",
  "title": "string",
  "type": "PG | Room | Flat | House",
  "lat": 26.7956,
  "lng": 75.8535,
  "city": "Jaipur",
  "locality": "Jagatpura",
  "pricePerMonth": 8000,
  "amenities": ["WiFi", "AC", "Meals"],
  "images": ["url1", "url2"],
  "verified": true,
  "ownerContactMasked": "98XX-XXXX-XX",
  "postedAt": "ISO8601"
}
```

### ✅ Phase 5 Exit Criteria
- [ ] `useProperties` hook fetches live data from `server.js`
- [ ] Map markers update in real-time when radius or location changes
- [ ] Autocomplete suggests Jaipur localities + Rajasthan cities
- [ ] Haversine filtering works correctly for all radius options

---

## Phase 6 — Routing, Auth & Production Hardening

> **Goal:** Finalize React Router setup, secure host routes, add SEO, optimize bundle.

### 6.1 React Router v7 Setup

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<Search />} />
    <Route path="/listing/:id" element={<ListingDetail />} />
    <Route path="/post" element={<PostProperty />} />
    <Route path="/dashboard" element={<ProtectedRoute><OwnerDashboard /></ProtectedRoute>} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
</BrowserRouter>
```

### 6.2 ProtectedRoute Component

```jsx
const ProtectedRoute = ({ children }) => {
  const { isHostAuthed } = useAuthStore()
  return isHostAuthed ? children : <PinAuthModal />
}
```

### 6.3 SEO & Meta Tags (react-helmet-async)

```jsx
<Helmet>
  <title>Find My Home — PGs & Rentals in Jaipur, Rajasthan</title>
  <meta name="description" content="Discover verified PGs, shared rooms, flats and houses near you in Jaipur, Rajasthan. Location-first rental search." />
  <meta property="og:title" content="Find My Home — Jaipur Rentals" />
</Helmet>
```

### 6.4 Performance Optimizations

- **Code splitting:** `React.lazy` + `Suspense` for each page route
- **Image optimization:** `loading="lazy"` on all listing images
- **Map lazy load:** Load Leaflet only on Search and Detail pages
- **Bundle analysis:** `npm run build -- --report` to check chunk sizes

### 6.5 Deprecate Legacy Files

```bash
mkdir _legacy
# Move all old static files after React is fully live
mv index.html pages-bundle.js tokens.css _legacy/
mv roomly_* _legacy/
```

### ✅ Phase 6 Exit Criteria
- [ ] All routes navigate correctly with browser back/forward
- [ ] `/dashboard` redirects to PIN modal if unauthenticated
- [ ] `npm run build` produces a clean production bundle < 500KB gzipped
- [ ] Lighthouse score: Performance ≥ 85, SEO ≥ 90, Accessibility ≥ 80
- [ ] No console errors or warnings in production build

---

## 🗺️ Rajasthan Location Reference

### Jaipur Corridors

| Locality | Lat | Lng |
|----------|-----|-----|
| Jagatpura | 26.7956 | 75.8535 |
| Malviya Nagar | 26.8538 | 75.8058 |
| Mansarovar | 26.8535 | 75.7472 |
| Vaishali Nagar | 26.9260 | 75.7285 |
| Tonk Road | 26.8500 | 75.8200 |
| Sitapura | 26.7645 | 75.8615 |
| Bani Park | 26.9180 | 75.7960 |
| C-Scheme | 26.9130 | 75.8057 |
| Civil Lines | 26.9320 | 75.8040 |
| Sanganer | 26.8200 | 75.8000 |
| Pratap Nagar | 26.8100 | 75.8400 |
| Durgapura | 26.8270 | 75.8000 |

### Nearby Rajasthan Cities

| City | Lat | Lng | ~Distance from Jaipur |
|------|-----|-----|-----------------------|
| Dausa | 26.8910 | 76.3370 | 55 km |
| Chomu | 27.1570 | 75.7240 | 35 km |
| Shahpura | 27.3930 | 75.9560 | 70 km |
| Tonk | 26.1667 | 75.7833 | 95 km |
| Sikar | 27.6094 | 75.1398 | 110 km |
| Ajmer | 26.4499 | 74.6399 | 135 km |
| Alwar | 27.5530 | 76.6346 | 160 km |
| Kota | 25.2138 | 75.8648 | 250 km |
| Bikaner | 28.0229 | 73.3119 | 330 km |
| Jodhpur | 26.2389 | 73.0243 | 330 km |
| Udaipur | 24.5854 | 73.7125 | 400 km |
| Jaisalmer | 26.9157 | 70.9083 | 570 km |

---

## 🚦 Migration Tracking Checklist

```
PHASE 1 — Scaffolding
 [ ] Vite + React project initialized in app/
 [ ] All npm dependencies installed
 [ ] Vite proxy to server.js configured
 [ ] Folder structure created

PHASE 2 — Design System
 [ ] @theme tokens defined in index.css
 [ ] Dark mode base styles working
 [ ] EB Garamond + Manrope fonts loaded

PHASE 3 — Components
 [ ] All UI primitives built (Button, Input, Card, Modal...)
 [ ] Layout components (Navbar, Footer, PageWrapper)
 [ ] Listing components (ListingCard, ListingGrid, AmenitiesList...)
 [ ] Search components (SearchBar, RadiusSelector, FilterPanel...)
 [ ] Map components (MapContainer, PropertyMarker, RadiusCircle...)

PHASE 4 — Pages
 [ ] Home page migrated
 [ ] Search + Map page migrated
 [ ] Listing Detail page migrated
 [ ] Post Property wizard migrated
 [ ] Owner Dashboard migrated

PHASE 5 — Data Layer
 [ ] API client (axios) created and proxied
 [ ] Zustand searchStore wired
 [ ] Zustand authStore wired
 [ ] useGeolocation hook working
 [ ] useProperties hook fetching live data
 [ ] Rajasthan dataset expanded with all localities

PHASE 6 — Production
 [ ] React Router v7 configured
 [ ] ProtectedRoute for /dashboard working
 [ ] SEO meta tags per page (react-helmet-async)
 [ ] Code splitting with React.lazy enabled
 [ ] Production build passing (< 500KB gzipped)
 [ ] Legacy files archived in _legacy/
```

---

## 📝 Developer Notes

- **Do NOT rewrite `server.js`** during migration. It's stable — React app proxies to it.
- **Keep `rajasthan_dataset.js`** as the source of truth for v1. DB migration comes later.
- **PIN auth** is intentionally simple for v1. JWT + proper auth is a Phase 7 concern.
- **Tailwind v4** uses a CSS-first config (`@theme` inside CSS) — there is **no `tailwind.config.js`**.
- Run `node server.js` (port 8000) concurrently with `npm run dev` (port 5173) during development.

---

*Last updated: 2026-10-11 · Find My Home · Jaipur, Rajasthan*
