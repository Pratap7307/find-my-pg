// pages-bundle.js
window.__pages__ = {};
window.__pages__["explore-rentals"] = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Find My Home - Rajasthan's Location-First Rental Discovery</title>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../tokens.css"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @layer base {
      html, body {
        margin: 0;
        padding: 0;
        background-color: var(--color-background);
        color: var(--color-text-primary);
        font-family: 'Inter', sans-serif;
      }
      body { overscroll-behavior: none; }
    }
    ::-webkit-scrollbar { display: none; }
    ::selection { background: var(--color-primary); color: var(--color-on-primary); }
    header { border-bottom: 1px solid var(--color-border-subtle); }
    button:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
    .autocomplete-item:hover { background-color: var(--color-surface-container); }

    /* ── Form Controls & Native Select Contrast Shield ── */
    select, input, textarea { color-scheme: dark; }
    html:not(.dark) select, html:not(.dark) input, html:not(.dark) textarea,
    [data-theme="light"] select, [data-theme="light"] input, [data-theme="light"] textarea { color-scheme: light; }
    select option {
      background-color: #141722 !important;
      color: #F4F5F8 !important;
    }
    html:not(.dark) select option,
    [data-theme="light"] select option {
      background-color: #FFFFFF !important;
      color: #0F172A !important;
    }

    /* ── Fix: Tab buttons — guaranteed contrast in light AND dark mode ── */
    .tab-btn:not(.active) {
      background-color: transparent !important;
      color: var(--color-text-secondary, #555) !important;
      border: 1.5px solid var(--color-border, #ddd);
    }
    .tab-btn:not(.active):hover {
      background-color: var(--color-surface-container, rgba(0,0,0,0.06)) !important;
      color: var(--color-primary) !important;
      border-color: var(--color-primary) !important;
    }
    .tab-btn.active {
      border: 1.5px solid transparent;
    }

    /* ── Fix: Persona toggle buttons contrast ── */
    #persona-student, #persona-pro {
      color: var(--color-text-secondary, #555) !important;
    }
    #persona-student:hover, #persona-pro:hover {
      color: var(--color-primary) !important;
    }
    #persona-student.active-persona, #persona-pro.active-persona {
      background: var(--color-primary);
      color: var(--color-on-primary) !important;
      border-radius: 8px;
    }

    /* ── Micro-animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.4; }
    }
    @keyframes heroGlow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(var(--color-primary-rgb, 255,200,0), 0.4); }
      50%       { box-shadow: 0 0 0 8px rgba(var(--color-primary-rgb, 255,200,0), 0); }
    }
    .fade-up      { animation: fadeUp 0.5s ease both; }
    .fade-up-1    { animation-delay: 0.05s; }
    .fade-up-2    { animation-delay: 0.12s; }
    .fade-up-3    { animation-delay: 0.22s; }
    .fade-up-4    { animation-delay: 0.32s; }
    .fade-up-5    { animation-delay: 0.42s; }

    /* ── Card hover lift ── */
    .listing-card {
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.2s ease;
    }
    .listing-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.18);
    }
    /* ── Corridor card ── */
    .corridor-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .corridor-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.16);
    }
    /* ── Scroll-to-top FAB ── */
    #scroll-top-fab {
      position: fixed; bottom: 24px; right: 24px; z-index: 99;
      width: 44px; height: 44px;
      border-radius: 50%;
      background: var(--color-surface-container-highest);
      border: 1px solid var(--color-border);
      color: var(--color-text-primary);
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
      cursor: pointer;
      opacity: 0; pointer-events: none;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    #scroll-top-fab.visible {
      opacity: 1; pointer-events: all;
    }
    #scroll-top-fab:hover { transform: translateY(-2px); }
    /* ── Search button pulse on hover ── */
    #btn-hero-search-execute:hover {
      box-shadow: 0 0 0 6px rgba(255,200,0,0.25);
    }
    /* ── Trust pill animation ── */
    .trust-badge-live-dot { animation: pulse-dot 1.5s ease infinite; }

    /* ── Custom Dropdown (replaces native <select>) ── */
    .custom-dropdown { position: relative; }
    .custom-dropdown-trigger {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px 6px 10px;
      background: var(--color-surface-container-low);
      border: 1px solid var(--color-border-subtle);
      border-radius: 8px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 600;
      color: var(--color-text-primary);
      user-select: none;
      transition: border-color 0.15s ease, background 0.15s ease;
      white-space: nowrap;
      min-width: 0;
    }
    .custom-dropdown-trigger:hover {
      border-color: var(--color-primary);
      background: var(--color-surface-container);
    }
    .custom-dropdown-trigger .dd-chevron {
      font-size: 16px;
      color: var(--color-text-secondary);
      transition: transform 0.2s ease;
    }
    .custom-dropdown.open .dd-chevron { transform: rotate(180deg); }
    .custom-dropdown-menu {
      display: none;
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      min-width: 220px;
      background: var(--color-surface-container-lowest);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.22);
      z-index: 200;
      overflow: hidden;
      animation: ddOpen 0.15s ease;
    }
    @keyframes ddOpen {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .custom-dropdown.open .custom-dropdown-menu { display: block; }
    .custom-dropdown-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 9px 14px;
      font-size: 12px;
      font-weight: 500;
      color: var(--color-text-primary);
      cursor: pointer;
      transition: background 0.12s ease, color 0.12s ease;
    }
    .custom-dropdown-item:hover {
      background: var(--color-surface-container-low);
      color: var(--color-primary);
    }
    .custom-dropdown-item.selected {
      color: var(--color-primary);
      font-weight: 700;
      background: var(--color-surface-container-low);
    }
    .custom-dropdown-item .dd-item-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--color-primary);
      flex-shrink: 0;
      opacity: 0;
    }
    .custom-dropdown-item.selected .dd-item-dot { opacity: 1; }
  </style>
</head>
<body class="bg-surface font-body text-on-surface antialiased">
  <!-- Top Navigation Header -->
  <header class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-border-subtle">
    <div class="h-20 max-w-[1360px] mx-auto px-6 md:px-8 flex items-center justify-between gap-4">
      <div class="flex items-center gap-6">
        <a class="flex items-center gap-2.5" data-path="explore-rentals" href="#explore-rentals">
          <div class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline font-bold text-lg shadow-sm">
            <span class="material-symbols-outlined text-[22px]">home_pin</span>
          </div>
          <div>
            <span class="font-headline font-bold text-xl tracking-tight text-on-surface block leading-none">Find My Home</span>
            <span class="text-[10px] font-semibold text-primary uppercase tracking-wider block mt-0.5">Rajasthan</span>
          </div>
        </a>
        <!-- Header Custom Locality Dropdown (Zero OS Popup Contrast Bug) -->
        <div class="custom-dropdown relative hidden sm:block" id="header-locality-dropdown">
          <button type="button" class="custom-dropdown-trigger flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg border border-border-subtle hover:border-primary text-xs font-semibold text-on-surface transition-colors cursor-pointer" id="header-locality-btn" aria-haspopup="listbox" aria-expanded="false">
            <span class="material-symbols-outlined text-[18px] text-primary">location_on</span>
            <span class="dd-label" id="header-locality-label">Jaipur (All Regions)</span>
            <span class="material-symbols-outlined text-[16px] text-on-surface-variant dd-chevron transition-transform duration-200">expand_more</span>
          </button>
          <div class="custom-dropdown-menu absolute top-[calc(100%+6px)] left-0 min-w-[240px] bg-surface-elevated border border-border rounded-xl shadow-2xl py-1.5 z-[200] hidden" id="header-locality-menu" role="listbox">
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors selected text-primary font-bold" data-value="all-jaipur" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot"></span>
              <span>Jaipur (All Regions)</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Jagatpura" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Jagatpura (Colleges & Hub)</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Malviya Nagar" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Malviya Nagar (WTP & MNIT)</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Mansarovar" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Mansarovar (Metro Corridor)</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Vaishali Nagar" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Vaishali Nagar (Queens Rd)</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Sitapura Industrial Area" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Sitapura & Tonk Rd (IT SEZ)</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Pratap Nagar" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Pratap Nagar (Coaching Hub)</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Ajmer Road (Mahindra SEZ & Manipal)" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Ajmer Road (Manipal Univ)</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Kukas & Delhi Road" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Kukas (Arya & Amity)</span>
            </div>
          </div>
          <select id="header-locality-select" class="sr-only" aria-hidden="true" tabindex="-1">
            <option value="all-jaipur">Jaipur (All Regions)</option>
            <option value="Jagatpura">Jagatpura (Colleges & Hub)</option>
            <option value="Malviya Nagar">Malviya Nagar (WTP & MNIT)</option>
            <option value="Mansarovar">Mansarovar (Metro Corridor)</option>
            <option value="Vaishali Nagar">Vaishali Nagar (Queens Rd)</option>
            <option value="Sitapura Industrial Area">Sitapura & Tonk Rd (IT SEZ)</option>
            <option value="Pratap Nagar">Pratap Nagar (Coaching Hub)</option>
            <option value="Ajmer Road (Mahindra SEZ & Manipal)">Ajmer Road (Manipal Univ)</option>
            <option value="Kukas & Delhi Road">Kukas (Arya & Amity)</option>
          </select>
        </div>
      </div>
      <nav class="hidden lg:flex items-center gap-6 text-sm" data-active-classes="text-primary font-semibold">
        <a class="text-primary font-semibold transition-colors" data-path="explore-rentals" href="#explore-rentals">Explore Stays</a>
        <a class="text-on-surface-variant hover:text-primary transition-colors" data-path="search-rentals" href="#search-rentals">Map & Search</a>
        <a class="text-on-surface-variant hover:text-primary transition-colors" data-path="property-details" href="#property-details">Featured Stay</a>
        <a class="text-on-surface-variant hover:text-primary transition-colors" data-path="post-free-property" href="#post-free-property">Post Free Property</a>
      </nav>
      <div class="flex items-center gap-3">
        <div class="hidden md:flex items-center bg-surface-container-high p-1 rounded-full text-xs">
          <a class="px-3 py-1.5 rounded-full bg-primary text-on-primary font-semibold shadow-sm transition-all" data-path="explore-rentals" href="#explore-rentals">Tenant</a>
          <a class="px-3 py-1.5 rounded-full text-on-surface-variant hover:text-primary transition-colors" data-path="owner-overview" href="#owner-overview">Host Suite</a>
        </div>
        <a class="px-4 py-2 rounded-xl bg-primary text-on-primary font-semibold text-xs hover:bg-yellow-400 transition-all shadow-sm" data-path="post-free-property" href="#post-free-property">
          + List Room
        </a>
      </div>
    </div>
  </header>

  <main class="w-full pt-20 bg-surface">
    <!-- Top Micro Trust Bar -->
    <div class="w-full bg-surface-container-lowest/80 border-b border-border-subtle py-2.5 px-6">
      <div class="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          <span class="text-on-surface font-medium">Rajasthan Location-First Rental Discovery</span>
          <span class="hidden md:inline text-outline">• Jagatpura, Malviya Nagar, Mansarovar, Vaishali Nagar, Sitapura & Greater Jaipur Corridors</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1 text-primary font-medium">
            <span class="material-symbols-outlined text-[15px]">verified</span> 100% Physical Field Audited
          </span>
          <span class="hidden sm:inline text-outline">•</span>
          <span class="hidden sm:flex items-center gap-1 text-secondary font-medium">
            <span class="material-symbols-outlined text-[15px]">security</span> Verified Deposit & Electricity Meters
          </span>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low/40 via-surface to-surface pt-10 pb-16 border-b border-border-subtle">
      <div class="max-w-[1360px] mx-auto px-6 md:px-8">
        <!-- Hero Header -->
        <div class="max-w-3xl mx-auto text-center mb-8">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-primary/20 text-primary text-xs font-semibold mb-4 shadow-sm">
            <span class="material-symbols-outlined text-[16px]">location_searching</span>
            Rajasthan's Location-First Verified Rental & Coliving Network
          </div>
          <h1 class="font-headline font-extrabold text-3xl sm:text-4xl md:text-5xl text-on-surface tracking-tight leading-[1.15] mb-4">
            Find a place to stay <span class="text-primary underline decoration-secondary decoration-wavy decoration-2">near your college or office.</span>
          </h1>
          <p class="text-on-surface-variant text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Search verified PGs, shared rooms, private flats, and independent houses across Jaipur and nearby educational & IT corridors. Zero brokerage, 1-month deposit cap, and exact distance calculations.
          </p>
        </div>

        <!-- Prominent Location-First Search Console -->
        <div class="max-w-4xl mx-auto bg-surface-container-lowest border border-border rounded-2xl shadow-2xl p-4 sm:p-6 relative z-10 fade-up fade-up-3">
          
          <!-- Audience / Persona Switcher & Category Tabs -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-border-subtle">
            <!-- Property Types -->
            <div class="flex items-center gap-1.5 overflow-x-auto scrollbar-none" id="search-tabs">
              <button class="tab-btn active px-3 py-1.5 rounded-xl text-xs font-semibold bg-primary text-on-primary shadow-sm flex items-center gap-1.5 transition-all cursor-pointer" data-category="all" type="button">
                <span class="material-symbols-outlined text-[16px]">travel_explore</span> All Stays
              </button>
              <button class="tab-btn px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all" data-category="pg" type="button">
                <span class="material-symbols-outlined text-[16px]">domain</span> Co-Living / PG
              </button>
              <button class="tab-btn px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all" data-category="shared_room" type="button">
                <span class="material-symbols-outlined text-[16px]">group</span> Shared Room
              </button>
              <button class="tab-btn px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all" data-category="private_room" type="button">
                <span class="material-symbols-outlined text-[16px]">single_bed</span> Private 1 RK
              </button>
              <button class="tab-btn px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all" data-category="flat" type="button">
                <span class="material-symbols-outlined text-[16px]">apartment</span> Flat
              </button>
              <button class="tab-btn px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all" data-category="independent_house" type="button">
                <span class="material-symbols-outlined text-[16px]">villa</span> House / Villa
              </button>
            </div>

            <!-- Student vs Professional Persona Toggle -->
            <div class="flex items-center gap-1 p-1 bg-surface-container-low rounded-xl border border-border-subtle shrink-0">
              <button id="persona-student" class="px-2.5 py-1 rounded-lg text-xs font-semibold text-on-surface-variant hover:text-primary transition-all flex items-center gap-1 cursor-pointer" title="Sort by proximity to Jaipur colleges & coaching hubs" type="button">
                <span class="material-symbols-outlined text-[15px]">school</span> Student
              </button>
              <button id="persona-pro" class="px-2.5 py-1 rounded-lg text-xs font-semibold text-on-surface-variant hover:text-primary transition-all flex items-center gap-1 cursor-pointer" title="Sort by proximity to Sitapura IT Park, WTP, & SEZs" type="button">
                <span class="material-symbols-outlined text-[15px]">apartment</span> Professional
              </button>
            </div>
          </div>

          <!-- Main Location Search Matrix -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3 mb-4">
            
            <!-- Location / Landmark Input with Geocoding Autocomplete -->
            <div class="md:col-span-6 bg-surface-container-low rounded-xl p-3 border border-border flex flex-col justify-center relative">
              <div class="flex items-center justify-between mb-1">
                <label class="text-[11px] font-semibold text-outline uppercase tracking-wider flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px] text-primary">location_on</span> Locality, College or Landmark
                </label>
                <!-- Use My Location Button -->
                <button id="btn-use-my-location" class="text-[11px] font-bold text-primary hover:underline flex items-center gap-1 cursor-pointer" title="Detect your actual browser location (permission asked on click)" type="button">
                  <span class="material-symbols-outlined text-[14px]">my_location</span> Use My Location
                </button>
              </div>
              <div class="flex items-center gap-2">
                <input id="hero-location-input" autocomplete="off" class="w-full bg-transparent text-sm font-medium text-on-surface placeholder:text-outline focus:outline-none" placeholder="Type locality, college or landmark (e.g. Jagatpura, MNIT, SKIT)..." type="text" value="Jagatpura, Jaipur"/>
                <button id="btn-manual-picker" class="text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer" title="Choose on Map / Select from Jaipur Corridors" type="button">
                  <span class="material-symbols-outlined text-[18px]">map</span>
                </button>
              </div>
              
              <!-- Autocomplete Dropdown List -->
              <div id="autocomplete-dropdown" class="hidden absolute left-0 right-0 top-full mt-1.5 bg-surface-container-lowest border border-border rounded-xl shadow-2xl z-50 overflow-hidden max-h-64 overflow-y-auto"></div>
            </div>

            <!-- Configurable Search Radius (1, 3, 5, 10, 20 km) -->
            <div class="md:col-span-3 bg-surface-container-low rounded-xl p-3 border border-border flex flex-col justify-center">
              <label class="text-[11px] font-semibold text-outline uppercase tracking-wider mb-1 flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px] text-secondary">radar</span> Search Radius
              </label>
              <select id="hero-radius-select" class="w-full bg-transparent text-sm font-medium text-on-surface focus:outline-none cursor-pointer">
                <option value="1">Within 1 km (Walking)</option>
                <option value="3">Within 3 km (Cycle / Auto)</option>
                <option value="5">Within 5 km (Short Commute)</option>
                <option value="10" selected>Within 10 km (Standard)</option>
                <option value="20">Within 20 km (Greater Jaipur)</option>
              </select>
            </div>

            <!-- Monthly Budget -->
            <div class="md:col-span-3 bg-surface-container-low rounded-xl p-3 border border-border flex flex-col justify-center">
              <label class="text-[11px] font-semibold text-outline uppercase tracking-wider mb-1 flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px] text-primary">payments</span> Monthly Budget
              </label>
              <select id="hero-budget-select" class="w-full bg-transparent text-sm font-medium text-on-surface focus:outline-none cursor-pointer">
                <option value="all">All Budgets</option>
                <option value="under-8k">Under ₹8,000 / mo</option>
                <option value="8k-15k">₹8,000 - ₹15,000 / mo</option>
                <option value="15k-25k">₹15,000 - ₹25,000 / mo</option>
                <option value="25k-plus">₹25,000+ / mo</option>
              </select>
            </div>
          </div>

          <!-- Quick Micro-Market Chips & Action CTA -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <div class="flex flex-wrap items-center gap-1.5">
              <span class="text-xs text-outline font-medium mr-1">Near Jaipur:</span>
              <button class="chip-loc px-2.5 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container border border-border-subtle transition-all cursor-pointer" data-lat="26.8242" data-lng="75.8644" data-name="Jagatpura" type="button">Jagatpura</button>
              <button class="chip-loc px-2.5 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container border border-border-subtle transition-all cursor-pointer" data-lat="26.8539" data-lng="75.8052" data-name="Malviya Nagar" type="button">Malviya Nagar</button>
              <button class="chip-loc px-2.5 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container border border-border-subtle transition-all cursor-pointer" data-lat="26.8627" data-lng="75.7618" data-name="Mansarovar" type="button">Mansarovar</button>
              <button class="chip-loc px-2.5 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container border border-border-subtle transition-all cursor-pointer" data-lat="26.9069" data-lng="75.7423" data-name="Vaishali Nagar" type="button">Vaishali Nagar</button>
              <button class="chip-loc px-2.5 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container border border-border-subtle transition-all cursor-pointer" data-lat="26.7725" data-lng="75.8572" data-name="Sitapura" type="button">Sitapura IT</button>
              <button class="chip-loc px-2.5 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container border border-border-subtle transition-all cursor-pointer" data-lat="26.8015" data-lng="75.8165" data-name="Pratap Nagar" type="button">Pratap Nagar</button>
              <button class="chip-loc px-2.5 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container border border-border-subtle transition-all cursor-pointer" data-lat="26.8488" data-lng="75.5684" data-name="Ajmer Road (Manipal)" type="button">Ajmer Rd / Manipal</button>
              <button class="chip-loc px-2.5 py-1 rounded-lg bg-surface-container-low text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container border border-border-subtle transition-all cursor-pointer" data-lat="27.0543" data-lng="75.9085" data-name="Kukas (Arya & Amity)" type="button">Kukas</button>
            </div>
            
            <button id="btn-hero-search-execute" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-on-primary font-headline font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer" type="button">
              <span class="material-symbols-outlined text-[20px]">search</span> Find Verified Stays
            </button>
          </div>
        </div>

        <!-- 4 Minimal Trust Metric Pills -->
        <div class="max-w-4xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 fade-up fade-up-4">
          <div class="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest border border-border">
            <div class="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">price_check</span>
            </div>
            <div>
              <div class="text-xs font-bold text-on-surface">0% Brokerage</div>
              <div class="text-[11px] text-on-surface-variant">Zero fee guarantee</div>
            </div>
          </div>
          <div class="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest border border-border">
            <div class="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">verified</span>
            </div>
            <div>
              <div class="text-xs font-bold text-on-surface">100% KYC Verified</div>
              <div class="text-[11px] text-on-surface-variant">Deed & ID checked</div>
            </div>
          </div>
          <div class="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest border border-border">
            <div class="w-9 h-9 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">location_on</span>
            </div>
            <div>
              <div class="text-xs font-bold text-on-surface">Actual Coordinates</div>
              <div class="text-[11px] text-on-surface-variant">Haversine verified distance</div>
            </div>
          </div>
          <div class="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest border border-border">
            <div class="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">shield</span>
            </div>
            <div>
              <div class="text-xs font-bold text-on-surface">1-Mo Deposit Cap</div>
              <div class="text-[11px] text-on-surface-variant">Digital escrow safe</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Corridors & Micro-Markets in & Near Jaipur (Rajasthan) -->
    <section class="w-full py-16 bg-surface border-b border-border-subtle">
      <div class="max-w-[1360px] mx-auto px-6 md:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span class="text-xs uppercase tracking-wider text-primary font-bold">Jaipur Regional Footprint</span>
            <h2 class="font-headline font-bold text-2xl sm:text-3xl text-on-surface mt-1">Key Student & Tech Corridors in Rajasthan</h2>
            <p class="text-sm text-on-surface-variant mt-1">Direct verified listings across Jaipur's fastest growing education and business hubs.</p>
          </div>
          <a class="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline" data-path="search-rentals" href="#search-rentals">
            View all Jaipur Micro-Markets <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Jagatpura -->
          <a class="corridor-card group rounded-2xl overflow-hidden bg-surface-container-lowest border border-border hover:border-primary/40 transition-all flex flex-col cursor-pointer" data-path="search-rentals?loc=Jagatpura&lat=26.8242&lng=75.8644&rad=5" href="#search-rentals?loc=Jagatpura&lat=26.8242&lng=75.8644&rad=5">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" alt="Jagatpura Jaipur"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <span class="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur text-primary text-[11px] font-semibold">SKIT &bull; JECRC Hub</span>
              <div class="absolute bottom-3 left-3">
                <div class="font-headline font-bold text-lg text-white image-overlay-text">Jagatpura</div>
                <div class="text-[11px] text-gray-200 image-overlay-text">Education Corridor & Bombay Hospital</div>
              </div>
            </div>
            <div class="p-3 bg-surface-container-lowest flex items-center justify-between text-xs text-on-surface-variant">
              <span>From <strong class="text-on-surface font-semibold">₹7,500</strong>/mo</span>
              <span class="text-primary font-medium">850+ Stays</span>
            </div>
          </a>

          <!-- Malviya Nagar -->
          <a class="corridor-card group rounded-2xl overflow-hidden bg-surface-container-lowest border border-border hover:border-primary/40 transition-all flex flex-col cursor-pointer" data-path="search-rentals?loc=Malviya%20Nagar&lat=26.8539&lng=75.8052&rad=5" href="#search-rentals?loc=Malviya%20Nagar&lat=26.8539&lng=75.8052&rad=5">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" alt="Malviya Nagar Jaipur"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <span class="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur text-primary text-[11px] font-semibold">MNIT &bull; WTP Corridor</span>
              <div class="absolute bottom-3 left-3">
                <div class="font-headline font-bold text-lg text-white image-overlay-text">Malviya Nagar</div>
                <div class="text-[11px] text-gray-200 image-overlay-text">World Trade Park & Gaurav Tower</div>
              </div>
            </div>
            <div class="p-3 bg-surface-container-lowest flex items-center justify-between text-xs text-on-surface-variant">
              <span>From <strong class="text-on-surface font-semibold">₹8,500</strong>/mo</span>
              <span class="text-primary font-medium">620+ Stays</span>
            </div>
          </a>

          <!-- Mansarovar -->
          <a class="corridor-card group rounded-2xl overflow-hidden bg-surface-container-lowest border border-border hover:border-primary/40 transition-all flex flex-col cursor-pointer" data-path="search-rentals?loc=Mansarovar&lat=26.8627&lng=75.7618&rad=5" href="#search-rentals?loc=Mansarovar&lat=26.8627&lng=75.7618&rad=5">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" alt="Mansarovar Jaipur"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <span class="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur text-primary text-[11px] font-semibold">Metro Connected</span>
              <div class="absolute bottom-3 left-3">
                <div class="font-headline font-bold text-lg text-white image-overlay-text">Mansarovar</div>
                <div class="text-[11px] text-gray-200 image-overlay-text">VT Road &bull; IIS University</div>
              </div>
            </div>
            <div class="p-3 bg-surface-container-lowest flex items-center justify-between text-xs text-on-surface-variant">
              <span>From <strong class="text-on-surface font-semibold">₹9,000</strong>/mo</span>
              <span class="text-primary font-medium">740+ Stays</span>
            </div>
          </a>

          <!-- Vaishali Nagar -->
          <a class="corridor-card group rounded-2xl overflow-hidden bg-surface-container-lowest border border-border hover:border-primary/40 transition-all flex flex-col cursor-pointer" data-path="search-rentals?loc=Vaishali%20Nagar&lat=26.9069&lng=75.7423&rad=5" href="#search-rentals?loc=Vaishali%20Nagar&lat=26.9069&lng=75.7423&rad=5">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80" alt="Vaishali Nagar Jaipur"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <span class="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur text-primary text-[11px] font-semibold">Upmarket Hub</span>
              <div class="absolute bottom-3 left-3">
                <div class="font-headline font-bold text-lg text-white image-overlay-text">Vaishali Nagar</div>
                <div class="text-[11px] text-gray-200 image-overlay-text">Amrapali Circle & Queens Road</div>
              </div>
            </div>
            <div class="p-3 bg-surface-container-lowest flex items-center justify-between text-xs text-on-surface-variant">
              <span>From <strong class="text-on-surface font-semibold">₹12,000</strong>/mo</span>
              <span class="text-primary font-medium">490+ Stays</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Verified Stays Showcase (Jaipur Localities) -->
    <section class="w-full py-16 bg-surface-container-low/30 border-b border-border-subtle">
      <div class="max-w-[1360px] mx-auto px-6 md:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/15 text-secondary text-xs font-semibold mb-2">
              <span class="material-symbols-outlined text-[15px]">verified</span> 100% In-Person Physical Audit Completed
            </div>
            <h2 class="font-headline font-bold text-2xl sm:text-3xl text-on-surface">Verified Stays in Jaipur</h2>
            <p class="text-sm text-on-surface-variant mt-1">Field-inspected properties with verified distance, electricity meters, and refundable deposit terms.</p>
          </div>
          <a class="px-4 py-2 rounded-xl bg-surface-container-lowest border border-border text-on-surface text-xs font-semibold hover:border-primary transition-all flex items-center gap-1.5 self-start md:self-auto" data-path="search-rentals" href="#search-rentals">
            Browse All Stays on Map <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <!-- 4 Clean Listing Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <!-- Card 1: Jagatpura -->
          <div class="listing-card bg-surface-container-lowest border border-border rounded-2xl overflow-hidden hover:border-primary/40 flex flex-col group">
            <a class="relative h-52 w-full block overflow-hidden bg-surface-container" data-path="property-details" href="#property-details">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80" alt="Aura Elite Jagatpura"/>
              <div class="absolute top-3 left-3 flex flex-col gap-1">
                <span class="px-2 py-0.5 rounded bg-black/80 backdrop-blur text-primary text-[11px] font-bold">0% Brokerage</span>
              </div>
              <button class="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur text-white hover:text-red-400 transition-colors" title="Save to Shortlist" type="button">
                <span class="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </a>
            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-[11px] font-semibold text-secondary uppercase tracking-wider">Managed Co-Living / PG</span>
                  <div class="flex items-center gap-1 text-xs text-on-surface">
                    <span class="material-symbols-outlined text-[14px] text-primary fill-1">star</span>
                    <span class="font-bold">4.88</span>
                    <span class="text-outline text-[11px]">(46)</span>
                  </div>
                </div>
                <a class="font-headline font-bold text-base text-on-surface hover:text-primary transition-colors line-clamp-1" data-path="property-details" href="#property-details">
                  Aura Elite Luxury Coliving & PG
                </a>
                <p class="text-xs text-on-surface-variant flex items-center gap-1 mt-1 mb-3">
                  <span class="material-symbols-outlined text-[14px] text-primary">near_me</span> 0.4 km to SKIT &bull; Jagatpura, Jaipur
                </p>
                <div class="flex flex-wrap gap-1.5 mb-4">
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">3 Meals</span>
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">200 Mbps WiFi</span>
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">Biometric</span>
                </div>
              </div>
              <div class="pt-3 border-t border-border-subtle">
                <div class="flex items-baseline justify-between mb-3">
                  <div>
                    <span class="font-headline font-extrabold text-xl text-primary">₹8,500</span>
                    <span class="text-xs text-outline">/mo</span>
                  </div>
                  <span class="text-[11px] text-secondary font-medium bg-surface-container px-2 py-0.5 rounded">1-Mo Deposit</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <button class="py-2 px-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold transition-colors text-center cursor-pointer" type="button">
                    Schedule Visit
                  </button>
                  <button class="py-2 px-2 rounded-lg bg-primary hover:bg-yellow-400 text-on-primary text-xs font-bold transition-colors text-center shadow-sm cursor-pointer" type="button">
                    Token ₹999
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Malviya Nagar -->
          <div class="listing-card bg-surface-container-lowest border border-border rounded-2xl overflow-hidden hover:border-primary/40 flex flex-col group">
            <a class="relative h-52 w-full block overflow-hidden bg-surface-container" data-path="property-details" href="#property-details">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" alt="MNIT Scholars Malviya Nagar"/>
              <div class="absolute top-3 left-3 flex flex-col gap-1">
                <span class="px-2 py-0.5 rounded bg-black/80 backdrop-blur text-primary text-[11px] font-bold">0% Brokerage</span>
              </div>
              <button class="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur text-white hover:text-red-400 transition-colors" title="Save to Shortlist" type="button">
                <span class="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </a>
            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-[11px] font-semibold text-secondary uppercase tracking-wider">Premium Student PG</span>
                  <div class="flex items-center gap-1 text-xs text-on-surface">
                    <span class="material-symbols-outlined text-[14px] text-primary fill-1">star</span>
                    <span class="font-bold">4.92</span>
                    <span class="text-outline text-[11px]">(82)</span>
                  </div>
                </div>
                <a class="font-headline font-bold text-base text-on-surface hover:text-primary transition-colors line-clamp-1" data-path="property-details" href="#property-details">
                  MNIT Scholars Comfort Residency
                </a>
                <p class="text-xs text-on-surface-variant flex items-center gap-1 mt-1 mb-3">
                  <span class="material-symbols-outlined text-[14px] text-primary">near_me</span> 0.6 km to MNIT &bull; Malviya Nagar, Jaipur
                </p>
                <div class="flex flex-wrap gap-1.5 mb-4">
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">Study Pods</span>
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">North/South Meals</span>
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">Lift</span>
                </div>
              </div>
              <div class="pt-3 border-t border-border-subtle">
                <div class="flex items-baseline justify-between mb-3">
                  <div>
                    <span class="font-headline font-extrabold text-xl text-primary">₹11,000</span>
                    <span class="text-xs text-outline">/mo</span>
                  </div>
                  <span class="text-[11px] text-secondary font-medium bg-surface-container px-2 py-0.5 rounded">1-Mo Deposit</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <button class="py-2 px-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold transition-colors text-center cursor-pointer" type="button">
                    Schedule Visit
                  </button>
                  <button class="py-2 px-2 rounded-lg bg-primary hover:opacity-90 active:scale-95 text-on-primary text-xs font-bold transition-all text-center shadow-sm cursor-pointer" type="button">
                    Token ₹999
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Mansarovar -->
          <div class="listing-card bg-surface-container-lowest border border-border rounded-2xl overflow-hidden hover:border-primary/40 flex flex-col group">
            <a class="relative h-52 w-full block overflow-hidden bg-surface-container" data-path="property-details" href="#property-details">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" alt="Metro View Mansarovar"/>
              <div class="absolute top-3 left-3 flex flex-col gap-1">
                <span class="px-2 py-0.5 rounded bg-black/80 backdrop-blur text-primary text-[11px] font-bold">0% Brokerage</span>
              </div>
              <button class="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur text-white hover:text-red-400 transition-colors" title="Save to Shortlist" type="button">
                <span class="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </a>
            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-[11px] font-semibold text-secondary uppercase tracking-wider">Independent 2 BHK Flat</span>
                  <div class="flex items-center gap-1 text-xs text-on-surface">
                    <span class="material-symbols-outlined text-[14px] text-primary fill-1">star</span>
                    <span class="font-bold">4.79</span>
                    <span class="text-outline text-[11px]">(31)</span>
                  </div>
                </div>
                <a class="font-headline font-bold text-base text-on-surface hover:text-primary transition-colors line-clamp-1" data-path="property-details" href="#property-details">
                  Metro View Executive 2 BHK Flat
                </a>
                <p class="text-xs text-on-surface-variant flex items-center gap-1 mt-1 mb-3">
                  <span class="material-symbols-outlined text-[14px] text-primary">near_me</span> 0.5 km to Metro &bull; Mansarovar, Jaipur
                </p>
                <div class="flex flex-wrap gap-1.5 mb-4">
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">Modular Kitchen</span>
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">Car Parking</span>
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">Gated Security</span>
                </div>
              </div>
              <div class="pt-3 border-t border-border-subtle">
                <div class="flex items-baseline justify-between mb-3">
                  <div>
                    <span class="font-headline font-extrabold text-xl text-primary">₹17,500</span>
                    <span class="text-xs text-outline">/mo</span>
                  </div>
                  <span class="text-[11px] text-secondary font-medium bg-surface-container px-2 py-0.5 rounded">1-Mo Deposit</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <button class="py-2 px-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold transition-colors text-center cursor-pointer" type="button">
                    Schedule Visit
                  </button>
                  <button class="py-2 px-2 rounded-lg bg-primary hover:opacity-90 active:scale-95 text-on-primary text-xs font-bold transition-all text-center shadow-sm cursor-pointer" type="button">
                    Token ₹999
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Vaishali Nagar -->
          <div class="listing-card bg-surface-container-lowest border border-border rounded-2xl overflow-hidden hover:border-primary/40 flex flex-col group">
            <a class="relative h-52 w-full block overflow-hidden bg-surface-container" data-path="property-details" href="#property-details">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80" alt="The Queens Retreat Vaishali"/>
              <div class="absolute top-3 left-3 flex flex-col gap-1">
                <span class="px-2 py-0.5 rounded bg-black/80 backdrop-blur text-primary text-[11px] font-bold">0% Brokerage</span>
              </div>
              <button class="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur text-white hover:text-red-400 transition-colors" title="Save to Shortlist" type="button">
                <span class="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </a>
            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-[11px] font-semibold text-secondary uppercase tracking-wider">Private Studio / 1 RK</span>
                  <div class="flex items-center gap-1 text-xs text-on-surface">
                    <span class="material-symbols-outlined text-[14px] text-primary fill-1">star</span>
                    <span class="font-bold">4.95</span>
                    <span class="text-outline text-[11px]">(54)</span>
                  </div>
                </div>
                <a class="font-headline font-bold text-base text-on-surface hover:text-primary transition-colors line-clamp-1" data-path="property-details" href="#property-details">
                  The Queens Retreat Studio
                </a>
                <p class="text-xs text-on-surface-variant flex items-center gap-1 mt-1 mb-3">
                  <span class="material-symbols-outlined text-[14px] text-primary">near_me</span> 0.3 km to Amrapali Circle &bull; Vaishali Nagar
                </p>
                <div class="flex flex-wrap gap-1.5 mb-4">
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">Private Pantry</span>
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">Smart Lock</span>
                  <span class="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface-variant">Inverter</span>
                </div>
              </div>
              <div class="pt-3 border-t border-border-subtle">
                <div class="flex items-baseline justify-between mb-3">
                  <div>
                    <span class="font-headline font-extrabold text-xl text-primary">₹13,000</span>
                    <span class="text-xs text-outline">/mo</span>
                  </div>
                  <span class="text-[11px] text-secondary font-medium bg-surface-container px-2 py-0.5 rounded">1-Mo Deposit</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <button class="py-2 px-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold transition-colors text-center cursor-pointer" type="button">
                    Schedule Visit
                  </button>
                  <button class="py-2 px-2 rounded-lg bg-primary hover:opacity-90 active:scale-95 text-on-primary text-xs font-bold transition-all text-center shadow-sm cursor-pointer" type="button">
                    Token ₹999
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Global Footer -->
  <footer class="w-full bg-surface-container-lowest border-t border-border-subtle py-12">
    <div class="max-w-[1360px] mx-auto px-6 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
        <div class="lg:col-span-2 pr-4">
          <div class="flex items-center gap-2.5 mb-3">
            <div class="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline font-bold text-base shadow-sm">
              <span class="material-symbols-outlined text-[18px]">home_pin</span>
            </div>
            <div>
              <span class="font-headline font-bold text-lg text-on-surface block leading-none">Find My Home</span>
              <span class="text-[10px] font-semibold text-primary uppercase tracking-wider block mt-0.5">Rajasthan</span>
            </div>
          </div>
          <p class="text-xs text-on-surface-variant max-w-sm mb-4 leading-relaxed">
            Rajasthan's location-first rental & coliving platform. 100% zero brokerage stays, digital lease contracts, and physical property audits across Jaipur and surrounding corridors.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container border border-border-subtle text-primary text-xs font-semibold">
            <span class="material-symbols-outlined text-[16px]">verified</span> 100% KYC Verified Owners & Physical Inspections
          </div>
        </div>
        <div>
          <div class="text-xs font-bold text-on-surface uppercase tracking-wider mb-3">Jaipur Corridors</div>
          <ul class="space-y-2 text-xs text-on-surface-variant">
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals?loc=Jagatpura" href="#search-rentals?loc=Jagatpura">Jagatpura (SKIT & JECRC)</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals?loc=Malviya%20Nagar" href="#search-rentals?loc=Malviya%20Nagar">Malviya Nagar (MNIT & WTP)</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals?loc=Mansarovar" href="#search-rentals?loc=Mansarovar">Mansarovar (Metro Corridor)</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals?loc=Vaishali%20Nagar" href="#search-rentals?loc=Vaishali%20Nagar">Vaishali Nagar (Queens Rd)</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals?loc=Sitapura" href="#search-rentals?loc=Sitapura">Sitapura IT & Tonk Road</a></li>
          </ul>
        </div>
        <div>
          <div class="text-xs font-bold text-on-surface uppercase tracking-wider mb-3">Nearby Corridors</div>
          <ul class="space-y-2 text-xs text-on-surface-variant">
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals?loc=Pratap%20Nagar" href="#search-rentals?loc=Pratap%20Nagar">Pratap Nagar (Coaching Hub)</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals?loc=Ajmer%20Road" href="#search-rentals?loc=Ajmer%20Road">Ajmer Road (Manipal & SEZ)</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals?loc=Kukas" href="#search-rentals?loc=Kukas">Kukas / Delhi Rd (Arya & Amity)</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals?loc=Gopalpura" href="#search-rentals?loc=Gopalpura">Gopalpura Bypass Hub</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals?loc=Raja%20Park" href="#search-rentals?loc=Raja%20Park">Raja Park & C-Scheme</a></li>
          </ul>
        </div>
        <div>
          <div class="text-xs font-bold text-on-surface uppercase tracking-wider mb-3">Jaipur Operations</div>
          <p class="text-xs text-on-surface-variant mb-2">Dedicated field audit and tenant support center in Jaipur.</p>
          <div class="font-headline font-bold text-primary text-base mb-1">0141-492-7666</div>
          <div class="text-[11px] text-tertiary flex items-center gap-1 font-semibold">
            <span class="material-symbols-outlined text-[14px]">shield</span> Escrow Protection Assured
          </div>
        </div>
      </div>
      <div class="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-outline">
        <div>&copy; 2026 Find My Home Technologies (Rajasthan) Pvt. Ltd. All rights reserved.</div>
        <div class="flex items-center gap-4">
          <a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a class="hover:text-primary transition-colors" href="#">Rental Terms</a>
          <a class="hover:text-primary transition-colors" href="#">0% Brokerage Policy</a>
        </div>
      </div>
    </div>
  </footer>

<!-- Scroll-to-top FAB -->
<button id="scroll-top-fab" title="Back to top" aria-label="Scroll to top">
  <span class="material-symbols-outlined text-[22px]">arrow_upward</span>
</button>

<script>
  // Scroll-to-top FAB
  const fab = document.getElementById('scroll-top-fab');
  window.addEventListener('scroll', () => {
    fab.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  fab.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Initialize custom dropdowns if running in standalone mode
  if (typeof initCustomDropdowns === 'function') {
    initCustomDropdowns();
  } else {
    document.querySelectorAll('.custom-dropdown').forEach(dd => {
      const trigger = dd.querySelector('.custom-dropdown-trigger');
      const menu = dd.querySelector('.custom-dropdown-menu');
      const label = dd.querySelector('.dd-label');
      const items = dd.querySelectorAll('.custom-dropdown-item');
      if (!trigger || !menu) return;
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dd.classList.toggle('open');
      });
      items.forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          const text = item.querySelector('span:last-child') ? item.querySelector('span:last-child').textContent.trim() : item.textContent.trim();
          if (label) label.textContent = text;
          items.forEach(i => {
            i.classList.remove('selected', 'text-primary', 'font-bold');
            const dot = i.querySelector('.dd-item-dot');
            if (dot) dot.classList.add('opacity-0');
          });
          item.classList.add('selected', 'text-primary', 'font-bold');
          const dot = item.querySelector('.dd-item-dot');
          if (dot) dot.classList.remove('opacity-0');
          dd.classList.remove('open');
        });
      });
    });
    document.addEventListener('click', () => {
      document.querySelectorAll('.custom-dropdown.open').forEach(dd => dd.classList.remove('open'));
    });
  }
</script>
</body>
</html>`;
window.__pages__["search-rentals"] = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Find My Home - Rajasthan & Jaipur Location-First Map Search</title>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
  <link rel="stylesheet" href="../tokens.css"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @layer base {
      html, body {
        margin: 0;
        padding: 0;
        background-color: var(--color-background);
        color: var(--color-text-primary);
        font-family: 'Inter', sans-serif;
      }
      body { overscroll-behavior: none; }
    }
    ::-webkit-scrollbar { display: none; }
    ::selection { background: var(--color-primary); color: var(--color-on-primary); }
    header { border-bottom: 1px solid var(--color-border-subtle); }
    button:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
    #interactive-map { height: 100%; min-height: 480px; border-radius: 1rem; z-index: 10; }

    /* ── Form Controls & Native Select Contrast Shield ── */
    select, input, textarea { color-scheme: dark; }
    html:not(.dark) select, html:not(.dark) input, html:not(.dark) textarea,
    [data-theme="light"] select, [data-theme="light"] input, [data-theme="light"] textarea { color-scheme: light; }
    select option {
      background-color: #141722 !important;
      color: #F4F5F8 !important;
    }
    html:not(.dark) select option,
    [data-theme="light"] select option {
      background-color: #FFFFFF !important;
      color: #0F172A !important;
    }
    .leaflet-popup-content-wrapper { background: var(--color-surface-container-lowest); color: var(--color-text-primary); border-radius: 12px; border: 1px solid var(--color-border); }
    .leaflet-popup-tip { background: var(--color-surface-container-lowest); }
    .price-marker-pin {
      background: var(--color-primary);
      color: var(--color-on-primary);
      font-weight: 700;
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 12px;
      border: 2px solid #FFFFFF;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      cursor: pointer;
      white-space: nowrap;
      transition: transform .15s ease;
    }
    .price-marker-pin:hover { transform: scale(1.15); z-index: 999; }
    .active-card-highlight { border-color: var(--color-primary) !important; box-shadow: 0 0 0 2px var(--color-primary) !important; }

    /* ── Entrance animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.4s ease both; }
    .fade-up-1 { animation-delay: 0.05s; }
    .fade-up-2 { animation-delay: 0.12s; }

    /* ── Listing card hover lift ── */
    .result-card {
      transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.15s ease;
    }
    .result-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 32px rgba(0,0,0,0.16);
    }

    /* ── Skeleton loading shimmer ── */
    @keyframes shimmer {
      0%   { background-position: -400px 0; }
      100% { background-position: 400px 0; }
    }
    .skeleton {
      background: linear-gradient(90deg,
        var(--color-surface-container-low) 25%,
        var(--color-surface-container) 50%,
        var(--color-surface-container-low) 75%
      );
      background-size: 800px 100%;
      animation: shimmer 1.4s infinite;
      border-radius: 8px;
    }

    /* ── Filter sidebar active states ── */
    .budget-pill-btn.active {
      background: var(--color-primary) !important;
      color: var(--color-on-primary) !important;
      font-weight: 700;
    }
    .budget-pill-btn { transition: all 0.15s ease; }
    .budget-pill-btn:hover { transform: scale(1.04); }

    /* ── Mobile filter FAB ── */
    #mobile-filter-fab {
      position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
      z-index: 60;
      display: none;
      align-items: center; gap: 6px;
      padding: 10px 20px;
      border-radius: 999px;
      background: var(--color-surface-container-highest);
      border: 1px solid var(--color-border);
      color: var(--color-text-primary);
      font-size: 12px; font-weight: 700;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    #mobile-filter-fab:hover { transform: translateX(-50%) translateY(-2px); }
    @media (max-width: 1023px) {
      #mobile-filter-fab { display: flex; }
    }
  </style>
</head>
<body class="bg-surface font-body text-on-surface antialiased">
  <!-- Top Navigation Header -->
  <header class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-border-subtle">
    <div class="h-20 max-w-[1360px] mx-auto px-6 md:px-8 flex items-center justify-between gap-4">
      <div class="flex items-center gap-6">
        <a class="flex items-center gap-2.5" data-path="explore-rentals" href="#explore-rentals">
          <div class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline font-bold text-lg shadow-sm">
            <span class="material-symbols-outlined text-[22px]">home_pin</span>
          </div>
          <div>
            <span class="font-headline font-bold text-xl tracking-tight text-on-surface block leading-none">Find My Home</span>
            <span class="text-[10px] font-semibold text-primary uppercase tracking-wider block mt-0.5">Rajasthan</span>
          </div>
        </a>
        <!-- Header Custom Locality Dropdown (Zero OS Popup Contrast Bug) -->
        <div class="custom-dropdown relative hidden sm:block" id="search-locality-dropdown">
          <button type="button" class="custom-dropdown-trigger flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg border border-border-subtle hover:border-primary text-xs font-semibold text-on-surface transition-colors cursor-pointer" id="search-locality-btn" aria-haspopup="listbox" aria-expanded="false">
            <span class="material-symbols-outlined text-[18px] text-primary">location_on</span>
            <span class="dd-label" id="search-locality-label">Jaipur (All Regions)</span>
            <span class="material-symbols-outlined text-[16px] text-on-surface-variant dd-chevron transition-transform duration-200">expand_more</span>
          </button>
          <div class="custom-dropdown-menu absolute top-[calc(100%+6px)] left-0 min-w-[240px] bg-surface-elevated border border-border rounded-xl shadow-2xl py-1.5 z-[200] hidden" id="search-locality-menu" role="listbox">
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors selected text-primary font-bold" data-value="Jaipur" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot"></span>
              <span>Jaipur (All Regions)</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Jagatpura" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Jagatpura</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Malviya Nagar" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Malviya Nagar</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Mansarovar" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Mansarovar</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Vaishali Nagar" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Vaishali Nagar</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Sitapura Industrial Area" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Sitapura & Tonk Rd</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Pratap Nagar" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Pratap Nagar</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Ajmer Road (Mahindra SEZ & Manipal)" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Ajmer Road (Manipal)</span>
            </div>
            <div class="custom-dropdown-item flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-surface hover:bg-surface-container-low hover:text-primary cursor-pointer transition-colors" data-value="Kukas & Delhi Road" role="option">
              <span class="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 dd-item-dot opacity-0"></span>
              <span>Kukas (Arya & Amity)</span>
            </div>
          </div>
          <select id="search-city-nav-select" class="sr-only" aria-hidden="true" tabindex="-1">
            <option value="Jaipur">Jaipur (All Regions)</option>
            <option value="Jagatpura">Jagatpura</option>
            <option value="Malviya Nagar">Malviya Nagar</option>
            <option value="Mansarovar">Mansarovar</option>
            <option value="Vaishali Nagar">Vaishali Nagar</option>
            <option value="Sitapura Industrial Area">Sitapura & Tonk Rd</option>
            <option value="Pratap Nagar">Pratap Nagar</option>
            <option value="Ajmer Road (Mahindra SEZ & Manipal)">Ajmer Road (Manipal)</option>
            <option value="Kukas & Delhi Road">Kukas (Arya & Amity)</option>
          </select>
        </div>
      </div>
      <nav class="hidden lg:flex items-center gap-6 text-sm" data-active-classes="text-primary font-semibold">
        <a class="text-on-surface-variant hover:text-primary transition-colors" data-path="explore-rentals" href="#explore-rentals">Explore Stays</a>
        <a class="text-primary font-semibold transition-colors" data-path="search-rentals" href="#search-rentals">Map & Search</a>
        <a class="text-on-surface-variant hover:text-primary transition-colors" data-path="property-details" href="#property-details">Featured Stay</a>
        <a class="text-on-surface-variant hover:text-primary transition-colors" data-path="post-free-property" href="#post-free-property">Post Free Property</a>
      </nav>
      <div class="flex items-center gap-3">
        <div class="hidden md:flex items-center bg-surface-container-high p-1 rounded-full text-xs">
          <a class="px-3 py-1.5 rounded-full bg-primary text-on-primary font-semibold shadow-sm transition-all" data-path="explore-rentals" href="#explore-rentals">Tenant</a>
          <a class="px-3 py-1.5 rounded-full text-on-surface-variant hover:text-primary transition-colors" data-path="owner-overview" href="#owner-overview">Host Suite</a>
        </div>
        <a class="px-4 py-2 rounded-xl bg-primary text-on-primary font-semibold text-xs hover:bg-yellow-400 transition-all shadow-sm" data-path="post-free-property" href="#post-free-property">
          + List Room
        </a>
      </div>
    </div>
  </header>

  <main class="w-full pt-20 bg-surface">
    <div class="max-w-[1360px] mx-auto px-4 md:px-8 pt-4 pb-16">
      
      <!-- Top Geolocation & Search Control Bar -->
      <div class="bg-surface-container-lowest border border-border rounded-2xl p-4 shadow-sm mb-6 fade-up fade-up-1">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          
          <!-- Location Input with Live Autocomplete -->
          <div class="md:col-span-5 relative">
            <div class="flex items-center bg-surface-container-low border border-border rounded-xl px-3 py-2">
              <span class="material-symbols-outlined text-[18px] text-primary mr-2 shrink-0">search</span>
              <input id="search-input-field" autocomplete="off" class="w-full bg-transparent text-xs font-semibold text-on-surface placeholder:text-outline focus:outline-none" placeholder="Search locality, landmark or college in Jaipur..." type="text" value="Jagatpura, Jaipur"/>
              <button id="search-gps-btn" class="text-primary hover:text-primary-hover p-1 rounded cursor-pointer shrink-0 ml-1" title="Use My Current Location (requests browser permission on click)" type="button">
                <span class="material-symbols-outlined text-[18px]">my_location</span>
              </button>
            </div>
            <!-- Autocomplete list -->
            <div id="search-autocomplete-box" class="hidden absolute left-0 right-0 top-full mt-1.5 bg-surface-container-lowest border border-border rounded-xl shadow-2xl z-50 overflow-hidden max-h-60 overflow-y-auto"></div>
          </div>

          <!-- Radius Selector -->
          <div class="md:col-span-2">
            <div class="flex items-center bg-surface-container-low border border-border rounded-xl px-3 py-2">
              <span class="material-symbols-outlined text-[16px] text-secondary mr-1.5 shrink-0">radar</span>
              <select id="search-radius-field" class="w-full bg-transparent text-xs font-semibold text-on-surface focus:outline-none cursor-pointer">
                <option value="1">Radius: 1 km</option>
                <option value="3">Radius: 3 km</option>
                <option value="5">Radius: 5 km</option>
                <option value="10" selected>Radius: 10 km</option>
                <option value="20">Radius: 20 km</option>
              </select>
            </div>
          </div>

          <!-- Sort Dropdown -->
          <div class="md:col-span-3">
            <div class="flex items-center bg-surface-container-low border border-border rounded-xl px-3 py-2">
              <span class="material-symbols-outlined text-[16px] text-outline mr-1.5 shrink-0">swap_vert</span>
              <select id="sort-selector" class="w-full bg-transparent text-xs font-semibold text-on-surface focus:outline-none cursor-pointer">
                <option value="distance-asc">Distance: Nearest First</option>
                <option value="price-asc">Rent: Low to High</option>
                <option value="price-desc">Rent: High to Low</option>
                <option value="top-rated">Top Rated (4.8+)</option>
              </select>
            </div>
          </div>

          <!-- View Mode Toggle (Split / List / Map) -->
          <div class="md:col-span-2 flex items-center justify-end gap-1.5">
            <div class="inline-flex p-1 bg-surface-container-low rounded-xl border border-border-subtle w-full justify-center">
              <button id="view-split-btn" class="flex-1 py-1.5 px-2 rounded-lg text-xs font-bold bg-primary text-on-primary transition-all flex items-center justify-center gap-1 cursor-pointer" title="Split List & Map">
                <span class="material-symbols-outlined text-[15px]">view_column</span>
                <span class="hidden sm:inline">Split</span>
              </button>
              <button id="view-list-btn" class="flex-1 py-1.5 px-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-primary transition-all flex items-center justify-center gap-1 cursor-pointer" title="List View Only">
                <span class="material-symbols-outlined text-[15px]">view_list</span>
                <span class="hidden sm:inline">List</span>
              </button>
              <button id="view-map-btn" class="flex-1 py-1.5 px-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-primary transition-all flex items-center justify-center gap-1 cursor-pointer" title="Map View Only">
                <span class="material-symbols-outlined text-[15px]">map</span>
                <span class="hidden sm:inline">Map</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Active Context Strip & Geodesic Anchor -->
        <div class="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 border-t border-border-subtle text-xs">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-outline font-semibold uppercase text-[10px]">Anchor Point:</span>
            <span id="active-anchor-badge" class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-primary/10 text-primary font-bold text-xs">
              <span class="material-symbols-outlined text-[13px]">location_on</span> Jagatpura Center (26.8242, 75.8644)
            </span>
            <span id="active-radius-badge" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-secondary/10 text-secondary font-semibold text-xs">
              Radius: 10 km
            </span>
            <button id="btn-reset-location" class="text-xs text-outline hover:text-error hover:underline ml-1 cursor-pointer" type="button">Reset</button>
          </div>
          <div id="results-count-badge" class="text-xs text-on-surface-variant font-medium">
            Showing <strong class="text-on-surface">6</strong> verified stays in Rajasthan
          </div>
        </div>
      </div>

      <!-- Main Layout: Sidebar Filters + [List Cards & Interactive Map] -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- Filter Sidebar (3 cols on lg) -->
        <aside class="lg:col-span-3 bg-surface-container-lowest border border-border rounded-2xl p-5 shadow-sm space-y-5 lg:sticky lg:top-24 fade-up fade-up-2">
          <div class="flex items-center justify-between pb-3 border-b border-border-subtle">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-[20px]">tune</span>
              <span class="font-headline font-bold text-base text-on-surface">Filter Stays</span>
            </div>
            <button id="btn-sidebar-reset" class="text-xs text-error hover:underline cursor-pointer" type="button">Reset</button>
          </div>

          <!-- Quick Fast Toggles -->
          <div class="space-y-2.5 bg-surface-container-low p-3 rounded-xl border border-border-subtle">
            <label class="flex items-center justify-between cursor-pointer">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary text-[17px]">verified</span>
                <span class="text-xs font-medium text-on-surface">Verified Stays Only</span>
              </div>
              <input id="filter-verified-only" checked="" class="w-4 h-4 accent-primary cursor-pointer rounded" type="checkbox"/>
            </label>
            <div class="h-px bg-border-subtle"></div>
            <label class="flex items-center justify-between cursor-pointer">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[17px]">shield</span>
                <span class="text-xs font-medium text-on-surface">1-Mo Deposit Cap</span>
              </div>
              <input id="filter-deposit-cap" checked="" class="w-4 h-4 accent-primary cursor-pointer rounded" type="checkbox"/>
            </label>
            <div class="h-px bg-border-subtle"></div>
            <label class="flex items-center justify-between cursor-pointer">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-tertiary text-[17px]">restaurant</span>
                <span class="text-xs font-medium text-on-surface">Meals / Food Included</span>
              </div>
              <input id="filter-meals-included" class="w-4 h-4 accent-primary cursor-pointer rounded" type="checkbox"/>
            </label>
          </div>

          <!-- Persona Focus -->
          <div class="space-y-2">
            <span class="text-xs font-bold text-on-surface block">Audience Focus</span>
            <div class="grid grid-cols-2 gap-1.5">
              <button id="filter-aud-all" class="aud-btn active py-1.5 rounded-lg text-xs font-bold bg-primary text-on-primary transition-all cursor-pointer" data-val="all">All Stays</button>
              <button id="filter-aud-student" class="aud-btn py-1.5 rounded-lg text-xs font-medium bg-surface-container-low text-on-surface-variant hover:text-primary transition-all cursor-pointer" data-val="student">🎓 Student</button>
              <button id="filter-aud-pro" class="aud-btn py-1.5 rounded-lg text-xs font-medium bg-surface-container-low text-on-surface-variant hover:text-primary transition-all col-span-2 cursor-pointer" data-val="professional">💼 Professional / Corporate</button>
            </div>
          </div>

          <!-- Property Category Filter -->
          <div class="space-y-2 pt-2 border-t border-border-subtle">
            <span class="text-xs font-bold text-on-surface block">Property Type</span>
            <div class="space-y-1.5 text-xs">
              <label class="flex items-center justify-between cursor-pointer text-on-surface-variant hover:text-primary">
                <div class="flex items-center gap-2">
                  <input class="w-3.5 h-3.5 accent-primary rounded prop-type-checkbox" data-type="pg" checked="" type="checkbox"/>
                  <span>Co-Living / Managed PG</span>
                </div>
              </label>
              <label class="flex items-center justify-between cursor-pointer text-on-surface-variant hover:text-primary">
                <div class="flex items-center gap-2">
                  <input class="w-3.5 h-3.5 accent-primary rounded prop-type-checkbox" data-type="shared_room" checked="" type="checkbox"/>
                  <span>Shared Rooms (Twin/Triple)</span>
                </div>
              </label>
              <label class="flex items-center justify-between cursor-pointer text-on-surface-variant hover:text-primary">
                <div class="flex items-center gap-2">
                  <input class="w-3.5 h-3.5 accent-primary rounded prop-type-checkbox" data-type="private_room" checked="" type="checkbox"/>
                  <span>Private Studio / 1 RK</span>
                </div>
              </label>
              <label class="flex items-center justify-between cursor-pointer text-on-surface-variant hover:text-primary">
                <div class="flex items-center gap-2">
                  <input class="w-3.5 h-3.5 accent-primary rounded prop-type-checkbox" data-type="flat" checked="" type="checkbox"/>
                  <span>Flats (1, 2, 3 BHK)</span>
                </div>
              </label>
              <label class="flex items-center justify-between cursor-pointer text-on-surface-variant hover:text-primary">
                <div class="flex items-center gap-2">
                  <input class="w-3.5 h-3.5 accent-primary rounded prop-type-checkbox" data-type="independent_house" checked="" type="checkbox"/>
                  <span>Independent House / Villa</span>
                </div>
              </label>
            </div>
          </div>

          <!-- Monthly Rent Range -->
          <div class="space-y-2 pt-2 border-t border-border-subtle">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-on-surface">Monthly Rent</span>
              <span id="budget-range-label" class="text-primary font-bold">₹5k – ₹30k / mo</span>
            </div>
            <div class="grid grid-cols-2 gap-1.5 text-xs">
              <button class="budget-pill-btn px-2 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-medium cursor-pointer" data-min="0" data-max="8000">&lt; ₹8,000</button>
              <button class="budget-pill-btn px-2 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-medium cursor-pointer" data-min="8000" data-max="14000">₹8k – ₹14k</button>
              <button class="budget-pill-btn px-2 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-medium cursor-pointer" data-min="14000" data-max="22000">₹14k – ₹22k</button>
              <button class="budget-pill-btn px-2 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-medium cursor-pointer" data-min="22000" data-max="999999">₹22,000+</button>
            </div>
          </div>

          <!-- Furnishing Status -->
          <div class="space-y-2 pt-2 border-t border-border-subtle">
            <span class="text-xs font-bold text-on-surface block">Furnishing</span>
            <div class="grid grid-cols-3 gap-1 text-[11px]">
              <button class="furnish-btn active py-1.5 rounded-lg font-bold bg-primary text-on-primary cursor-pointer" data-furnish="all">All</button>
              <button class="furnish-btn py-1.5 rounded-lg font-medium bg-surface-container-low text-on-surface-variant hover:text-primary cursor-pointer" data-furnish="fully_furnished">Furnished</button>
              <button class="furnish-btn py-1.5 rounded-lg font-medium bg-surface-container-low text-on-surface-variant hover:text-primary cursor-pointer" data-furnish="semi_furnished">Semi</button>
            </div>
          </div>
        </aside>

        <!-- Right Content Area: Split View [Listings Column + Interactive Map Column] -->
        <div class="lg:col-span-9 grid grid-cols-1 lg:grid-cols-12 gap-6" id="discovery-content-area">
          
          <!-- Listings Column (Default 6 cols in split view) -->
          <section class="lg:col-span-6 space-y-4" id="listings-column">
            
            <!-- Cards Container -->
            <div id="listings-cards-container" class="space-y-4">
              <!-- Skeleton loaders (shown while data loads) -->
              <div class="skeleton-card space-y-0" id="skeleton-cards">
                <div class="skeleton h-36 w-full mb-2"></div>
                <div class="skeleton h-4 w-3/4 mb-2"></div>
                <div class="skeleton h-3 w-1/2"></div>
              </div>
            </div>

            <!-- Empty State Container (Hidden by default) -->
            <div id="empty-search-state" class="hidden p-10 rounded-2xl bg-surface-container-lowest border border-border text-center space-y-5">
              <div class="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <span class="material-symbols-outlined text-[42px]">radar</span>
              </div>
              <div>
                <h3 class="font-headline font-bold text-lg text-on-surface">No verified stays in this radius</h3>
                <p class="text-xs text-on-surface-variant max-w-sm mx-auto mt-2 leading-relaxed">
                  We only show genuine, geo-verified listings. Try expanding your radius or searching a different Jaipur corridor.
                </p>
              </div>
              <div class="flex items-center justify-center gap-3 flex-wrap">
                <button id="btn-expand-radius" class="px-5 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-bold hover:opacity-90 active:scale-95 transition-all cursor-pointer">Expand to 20 km</button>
                <button id="btn-reset-filters-empty" class="px-5 py-2.5 rounded-xl bg-surface-container-low border border-border text-xs font-medium text-on-surface hover:text-primary transition-colors cursor-pointer">Reset All Filters</button>
              </div>
            </div>
          </section>

          <!-- Interactive Leaflet Map Column (Default 6 cols in split view) -->
          <section class="lg:col-span-6 lg:sticky lg:top-24 h-[650px]" id="map-column">
            <div class="w-full h-full bg-surface-container-lowest border border-border rounded-2xl overflow-hidden p-2 shadow-sm flex flex-col">
              <!-- Map Toolbar -->
              <div class="flex items-center justify-between pb-2 px-2 text-xs border-b border-border-subtle">
                <div class="flex items-center gap-1.5 font-bold text-on-surface">
                  <span class="material-symbols-outlined text-[16px] text-primary">explore</span>
                  <span>Interactive Geospatial Radius Map</span>
                </div>
                <div class="flex items-center gap-2 text-[11px] text-on-surface-variant">
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-primary"></span> Stays
                  <span class="inline-block w-2.5 h-2.5 rounded-full bg-secondary"></span> Search Center
                </div>
              </div>
              <!-- Leaflet Map Container -->
              <div class="flex-1 w-full rounded-xl overflow-hidden relative mt-2" id="interactive-map"></div>
            </div>
          </section>
        </div>

      </div>
    </div>
  </main>

  <!-- Mobile Filter FAB (visible only on < lg screens) -->
  <button id="mobile-filter-fab" type="button">
    <span class="material-symbols-outlined text-[18px]">tune</span>
    Filters &amp; Sort
  </button>

  <script>
    // Initialize custom dropdowns if running in standalone mode
    if (typeof initCustomDropdowns === 'function') {
      initCustomDropdowns();
    } else {
      document.querySelectorAll('.custom-dropdown').forEach(dd => {
        const trigger = dd.querySelector('.custom-dropdown-trigger');
        const menu = dd.querySelector('.custom-dropdown-menu');
        const label = dd.querySelector('.dd-label');
        const items = dd.querySelectorAll('.custom-dropdown-item');
        if (!trigger || !menu) return;
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          dd.classList.toggle('open');
        });
        items.forEach(item => {
          item.addEventListener('click', (e) => {
            e.stopPropagation();
            const text = item.querySelector('span:last-child') ? item.querySelector('span:last-child').textContent.trim() : item.textContent.trim();
            if (label) label.textContent = text;
            items.forEach(i => {
              i.classList.remove('selected', 'text-primary', 'font-bold');
              const dot = i.querySelector('.dd-item-dot');
              if (dot) dot.classList.add('opacity-0');
            });
            item.classList.add('selected', 'text-primary', 'font-bold');
            const dot = item.querySelector('.dd-item-dot');
            if (dot) dot.classList.remove('opacity-0');
            dd.classList.remove('open');
          });
        });
      });
      document.addEventListener('click', () => {
        document.querySelectorAll('.custom-dropdown.open').forEach(dd => dd.classList.remove('open'));
      });
    }
  </script>
</body>
</html>`;
window.__pages__["property-details"] = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <meta content="web_standard" name="shell-type"/>
  <title>Aura Elite Coliving & PG – Jagatpura, Jaipur | Find My Home</title>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../tokens.css"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            background: "var(--color-background)",
            "background-alt": "var(--color-background-alt)",
            surface: "var(--color-surface)",
            "surface-elevated": "var(--color-surface-elevated)",
            "surface-container-lowest": "var(--color-surface-container-lowest)",
            "surface-container-low": "var(--color-surface-container-low)",
            "surface-container": "var(--color-surface-container)",
            "surface-container-high": "var(--color-surface-container-high)",
            "surface-container-highest": "var(--color-surface-container-highest)",
            "surface-variant": "var(--color-surface-container)",
            "on-surface": "var(--color-text-primary)",
            "on-surface-variant": "var(--color-text-secondary)",
            outline: "var(--color-text-muted)",
            "outline-variant": "var(--color-border)",
            border: "var(--color-border)",
            "border-subtle": "var(--color-border-subtle)",
            primary: "var(--color-primary)",
            "primary-hover": "var(--color-primary-hover)",
            "on-primary": "var(--color-on-primary)",
            "primary-container": "var(--color-primary)",
            secondary: "var(--color-secondary)",
            "secondary-container": "var(--color-secondary-surface)",
            "on-secondary": "var(--color-on-secondary)",
            tertiary: "var(--color-tertiary)",
            "tertiary-container": "var(--color-tertiary-surface)",
            "on-tertiary": "var(--color-on-tertiary)",
            error: "var(--color-error)",
            error_container: "var(--color-error-surface)"
          },
          fontFamily: {
            sans: ["Inter", "sans-serif"],
            display: ["Manrope", "sans-serif"]
          }
        }
      }
    };
  </script>
  <style>
    @layer base {
      html, body {
        margin: 0;
        padding: 0;
        background-color: var(--color-background);
        color: var(--color-text-primary);
        font-family: 'Inter', sans-serif;
      }
    }
    ::-webkit-scrollbar { display: none; }
    ::selection { background: var(--color-primary); color: var(--color-on-primary); }
    header { border-bottom: 1px solid var(--color-border-subtle); }
    option { background-color: var(--color-surface); color: var(--color-text-primary); }
    .card-dark {
      background: var(--color-surface);
      border: 1px solid var(--color-border-subtle);
    }
    .card-dark-subtle {
      background: var(--color-surface-container-low);
      border: 1px solid var(--color-border-subtle);
    }
    #room-selection-container label {
      border: 1px solid var(--color-border);
      transition: all 0.2s ease;
    }
    #room-selection-container label:hover {
      border-color: var(--color-border-strong);
      transform: translateY(-1px);
    }
    #room-selection-container label.active-card,
    #room-selection-container label:has(input:checked) {
      border-color: var(--color-primary);
      background-color: var(--color-surface-elevated);
      box-shadow: 0 0 24px rgba(255, 200, 0, 0.14);
    }
    button:focus-visible {
      outline: 2px solid var(--color-focus);
      outline-offset: 2px;
    }
    /* Entrance animations */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.4s ease both; }
    .fade-up-1 { animation-delay: 0.05s; }
    .fade-up-2 { animation-delay: 0.12s; }
    .fade-up-3 { animation-delay: 0.20s; }
    .fade-up-4 { animation-delay: 0.28s; }
    /* Gallery expand hint */
    .gallery-img-wrap:hover .gallery-expand-hint { opacity: 1; }
    .gallery-expand-hint { opacity: 0; transition: opacity 0.25s ease; }
    /* Mobile sticky CTA */
    .mobile-cta-bar {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0; right: 0;
      z-index: 60;
      background: var(--color-surface);
      border-top: 1px solid var(--color-border-subtle);
      padding: 12px 16px;
      gap: 10px;
    }
    @media (max-width: 1023px) {
      .mobile-cta-bar { display: flex; }
      main { padding-bottom: 80px !important; }
    }
    /* Amenity cards hover */
    .card-dark-subtle { transition: all 0.2s ease; }
    .card-dark-subtle:hover {
      border-color: var(--color-primary);
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    }
  </style>
</head>
<body class="bg-surface text-on-surface text-sm antialiased">

  <!-- Header -->
  <header class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl">
    <div class="h-16 max-w-6xl mx-auto px-4 flex items-center justify-between">
      <div class="flex items-center gap-6">
        <a class="flex items-center gap-2.5" data-path="explore-rentals" href="#">
          <div class="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
            <span class="material-symbols-outlined text-[18px]">home_pin</span>
          </div>
          <div>
            <span class="font-headline font-bold text-base text-on-surface block leading-none">Find My Home</span>
            <span class="text-[10px] font-semibold text-primary uppercase tracking-wider block mt-0.5">Rajasthan</span>
          </div>
        </a>
        <div class="hidden sm:flex items-center bg-surface-container-low px-3 py-1 rounded-lg text-xs text-on-surface-variant">
          <span class="material-symbols-outlined text-[16px] text-primary mr-1">location_on</span>
          <select class="bg-transparent font-medium text-on-surface focus:outline-none cursor-pointer">
            <option selected>Rajasthan</option>
            <option>Mumbai</option>
            <option>Delhi NCR</option>
            <option>Pune</option>
            <option>Hyderabad</option>
          </select>
        </div>
      </div>

      <nav class="hidden md:flex items-center gap-6 text-xs font-medium text-on-surface-variant">
        <a class="text-primary hover:text-primary transition-colors" data-path="explore-rentals" href="#">Explore</a>
        <a class="hover:text-on-surface transition-colors" data-path="co-living-and-pgs" href="#">Co-Living &amp; PGs</a>
        <a class="hover:text-on-surface transition-colors" data-path="flats-and-rooms" href="#">Flats</a>
        <a class="hover:text-on-surface transition-colors" data-path="post-free-property" href="#">Host Hub</a>
      </nav>

      <div class="flex items-center gap-3">
        <button class="p-2 rounded-full text-on-surface-variant hover:text-primary transition-colors" title="Notifications" type="button">
          <span class="material-symbols-outlined text-[20px]">notifications</span>
        </button>
        <div class="flex items-center gap-2 pl-2 border-l border-outline-variant/40">
          <img alt="Profile" class="w-7 h-7 rounded-full object-cover ring-1 ring-primary/40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhL4w78hpmTDTx3keYa3tdENb3Xqdb1UtT_CQx6fbckGgJzqsuzRIuI7GgsoC1rqjEPiDtf_KaSXcJVYx0yNFYUc2WtxV0yXPmNTo6yf511hXlExXk1zqavoQutGPa5Uj_nJUlvzmDh5MRq32DhCBrmoH_Te7ls_UVvH9sPWxqjZPNtESyjQYjnTiMEf3bJkGobsh1LzLD3xBM_Mi-QYCQZG0jdq2kxKO0z55eJOUtZYFknJFIzlDM_Q"/>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <main class="w-full pt-20 pb-16">
    <div class="max-w-6xl mx-auto px-4 space-y-6">

      <!-- Breadcrumbs & Actions -->
      <div class="flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant fade-up fade-up-1">
        <div class="flex items-center gap-1.5">
          <a class="hover:text-primary transition-colors flex items-center gap-1" data-path="explore-rentals" href="#">
            <span class="material-symbols-outlined text-[14px]">home</span> Home
          </a>
          <span class="text-outline">/</span>
          <a class="hover:text-primary transition-colors" data-path="search-rentals" href="#">Jaipur</a>
          <span class="text-outline">/</span>
          <a class="hover:text-primary transition-colors" href="#">Jagatpura</a>
          <span class="text-outline">/</span>
          <span class="text-on-surface font-semibold truncate max-w-[160px]">Aura Elite Coliving</span>
        </div>
        <div class="flex items-center gap-2">
          <button class="px-3 py-1.5 rounded-lg card-dark hover:border-primary/40 text-on-surface transition-all flex items-center gap-1.5 text-xs" title="Share Property" type="button">
            <span class="material-symbols-outlined text-[15px]">share</span>
            <span>Share</span>
          </button>
          <button class="px-3 py-1.5 rounded-lg card-dark hover:border-primary/40 text-error transition-all flex items-center gap-1.5 text-xs" title="Save to Shortlist" type="button">
            <span class="material-symbols-outlined text-[15px]" style="font-variation-settings: 'FILL' 1;">favorite</span>
            <span class="text-on-surface">Saved</span>
          </button>
        </div>
      </div>

      <!-- Title & Location Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 fade-up fade-up-2">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-secondary text-xs font-semibold">
              <span class="material-symbols-outlined text-[13px]">verified</span> 100% Verified
            </span>
            <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-fixed text-primary text-xs font-semibold">
              Zero Brokerage
            </span>
            <span class="text-xs text-on-surface-variant">ID: FMH-JPR-101</span>
          </div>
          <h1 class="font-display text-2xl md:text-3xl font-bold tracking-tight text-on-surface">
            Zolo Aura Executive Suites
          </h1>
          <p class="text-xs md:text-sm text-on-surface-variant flex items-center gap-1 mt-1">
            <span class="material-symbols-outlined text-[16px] text-primary">location_on</span>
            Plot 42, Near SKIT College Back Gate, Ramnagaria, Jagatpura, Jaipur, Rajasthan (302017)
          </p>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-lg">
            <span class="material-symbols-outlined text-[16px] text-primary" style="font-variation-settings: 'FILL' 1;">star</span>
            <span class="font-bold text-on-surface text-sm">4.9</span>
            <span class="text-xs text-on-surface-variant">(124 reviews)</span>
          </div>
        </div>
      </div>

      <!-- Minimal Modern Gallery (3 photos showcase) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-2xl overflow-hidden h-72 md:h-96 card-dark p-1.5 fade-up fade-up-2">
        <div class="md:col-span-2 relative h-full rounded-xl overflow-hidden group gallery-img-wrap cursor-pointer">
          <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv0Z4NgTh1-67P-1rH-77xU3RB530W4AtGEMLqQpUFo6mPpPxVdx5dmuhiy4wg4VM3CY_3vhrRqkFTBzGbdhn939Ehe1eOmnHMZJ1LXl0BMfE0ESyqoz327By9SSVS8R4paTrL4aY7K6lDEH2-jXIX1YEU27r5Z_e7fxV0eRGxqWyUHrD4GyWKfGAiZf1hdb15AwdXu8ae4oxEPSpMklUp41hF8Zh2zb4CflLrzgLIoFJxM7ojNj7jew" alt="Private Bedroom"/>
          <!-- Expand hint overlay -->
          <div class="gallery-expand-hint absolute inset-0 bg-black/30 flex items-center justify-center">
            <div class="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">open_in_full</span> Expand Gallery
            </div>
          </div>
          <div class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-white">
            🛏 Master Deluxe Suite
          </div>
          <!-- Photo count badge -->
          <div class="absolute top-3 right-3 bg-black/70 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
            <span class="material-symbols-outlined text-[13px]">photo_library</span> 28 Photos
          </div>
        </div>
        <div class="hidden md:grid grid-rows-2 gap-2 h-full">
          <div class="relative rounded-xl overflow-hidden group gallery-img-wrap cursor-pointer">
            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0SFsesPiC0Vsxk_-dYeWxw3EXw2ssXfr_GerlqmEXigw5sLVR4T00Iek6X1W6jciqXsvH07gdyke7lbfP91ZD6C16Ey9VzJn7xFcAidvvZHE4zUEgj9TOfb-lGqMp-zImfN5Vjf6-Sij2f8VvYAd7SmMjZsvTMOdou691rbrmx0ZBm6Nay82F5CWKEdfeWz_gq1eErJW4VPDb2Btqp3Y1nwHS0oCTbIe1rIKZO6t99Q7IYMc1zwyQ3A" alt="Ensuite Bath"/>
            <div class="gallery-expand-hint absolute inset-0 bg-black/25 flex items-end p-2">
              <div class="text-white text-[11px] font-semibold">🚿 Ensuite Bath</div>
            </div>
          </div>
          <div class="relative rounded-xl overflow-hidden group">
            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAErDCa64qvqF8dBeG7O6xkKarctrBy5czJRzcgNc3Qy80SFSLVUL3XtFdNWu1w_Go8FdSdRG9-FQhhcVlw40VaASeW2uZPzZgOy2GqAtBKzT-C3Hbk2ixz8-b8WP__iaRyVVku3-UE35d-_SiiF4ZnfJeUvKhi1hyrgzsKUecoh0SzkKdhHKpM8MAfw-zWCmxIMEdVeKqwUl34r-SsmWKxnm4lY72B8PgSNEs-X4AFgSiVtaQqMs3bFQ" alt="Work Lounge"/>
            <button class="absolute inset-0 bg-black/50 hover:bg-black/60 transition-colors flex flex-col items-center justify-center gap-1 text-xs font-semibold text-white" type="button">
              <span class="material-symbols-outlined text-[24px]">photo_library</span>
              <span>View All 28 Photos</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Scannable 4-Pill Highlights Bar — fade in -->
      <!-- Quick mobile scroll hint -->
      <div class="md:hidden text-[11px] text-outline text-center">← Scroll to see all details →</div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 fade-up fade-up-3">
        <div class="card-dark rounded-xl p-3">
          <span class="text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">Monthly Rent</span>
          <div class="font-display text-lg font-bold text-primary mt-0.5">₹8,500 <span class="text-xs text-on-surface-variant font-normal">/mo</span></div>
        </div>
        <div class="card-dark rounded-xl p-3">
          <span class="text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">Security Deposit</span>
          <div class="font-display text-lg font-bold text-on-surface mt-0.5">₹8,500 <span class="text-xs text-tertiary font-normal">(1 Mo Escrow)</span></div>
        </div>
        <div class="card-dark rounded-xl p-3">
          <span class="text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">Move-in Date</span>
          <div class="font-display text-lg font-bold text-secondary mt-0.5 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-secondary"></span> Immediate
          </div>
        </div>
        <div class="card-dark rounded-xl p-3">
          <span class="text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">Brokerage Fee</span>
          <div class="font-display text-lg font-bold text-tertiary mt-0.5">₹0 FREE</div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start fade-up fade-up-4">

        <!-- LEFT COLUMN (8 Cols) -->
        <div class="lg:col-span-8 space-y-6">

          <!-- 1. Room Selection Selector -->
          <section class="card-dark rounded-xl p-5 space-y-3">
            <div class="flex items-center justify-between">
              <h2 class="font-display text-base font-bold text-on-surface">Available Unit Configurations</h2>
              <span class="text-[11px] text-tertiary font-medium bg-tertiary-container/30 px-2 py-0.5 rounded-full">Real-time Vacancy</span>
            </div>
            
            <div class="space-y-2" id="room-selection-container">
              <!-- Option 1: Deluxe Private -->
              <label class="cursor-pointer block relative rounded-lg p-3.5 bg-surface-container-low transition-all">
                <input checked class="peer sr-only" name="room_selection" type="radio" value="single"/>
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                      <div class="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <div class="font-semibold text-on-surface text-sm flex items-center gap-2">
                        <span>Private Deluxe (Ensuite Bath)</span>
                        <span class="text-[10px] bg-secondary-container text-secondary px-1.5 py-0.5 rounded">2 Left</span>
                      </div>
                      <p class="text-xs text-on-surface-variant mt-0.5">160 sq.ft • Queen Bed • Ergonomic Desk • Private Balcony</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <span class="font-display font-bold text-base text-primary">₹8,500</span>
                    <span class="text-xs text-on-surface-variant font-normal">/mo</span>
                  </div>
                </div>
              </label>

              <!-- Option 2: Twin Sharing -->
              <label class="cursor-pointer block relative rounded-lg p-3.5 card-dark hover:bg-surface-container-low transition-all">
                <input class="peer sr-only" name="room_selection" type="radio" value="twin"/>
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-4 h-4 rounded-full border border-outline flex items-center justify-center">
                      <div class="w-2 h-2 rounded-full bg-transparent"></div>
                    </div>
                    <div>
                      <div class="font-semibold text-on-surface text-sm flex items-center gap-2">
                        <span>Twin Sharing Executive</span>
                        <span class="text-[10px] bg-surface-container text-on-surface-variant px-1.5 py-0.5 rounded">3 Beds</span>
                      </div>
                      <p class="text-xs text-on-surface-variant mt-0.5">210 sq.ft • 2 Single Beds • Lockers • Shared Bath</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <span class="font-display font-bold text-base text-on-surface">₹8,900</span>
                    <span class="text-xs text-on-surface-variant font-normal">/mo</span>
                  </div>
                </div>
              </label>

              <!-- Option 3: Executive Suite -->
              <label class="cursor-pointer block relative rounded-lg p-3.5 card-dark hover:bg-surface-container-low transition-all">
                <input class="peer sr-only" name="room_selection" type="radio" value="suite"/>
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <div class="w-4 h-4 rounded-full border border-outline flex items-center justify-center">
                      <div class="w-2 h-2 rounded-full bg-transparent"></div>
                    </div>
                    <div>
                      <div class="font-semibold text-on-surface text-sm flex items-center gap-2">
                        <span>Executive Penthouse</span>
                        <span class="text-[10px] bg-error-container text-error px-1.5 py-0.5 rounded font-semibold">1 Only</span>
                      </div>
                      <p class="text-xs text-on-surface-variant mt-0.5">240 sq.ft • King Bed • Private Terrace • Mini Fridge • 4K TV</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <span class="font-display font-bold text-base text-on-surface">₹18,000</span>
                    <span class="text-xs text-on-surface-variant font-normal">/mo</span>
                  </div>
                </div>
              </label>
            </div>
          </section>

          <!-- 2. Essential Amenities Grid (Clean 8 Icons) -->
          <section class="card-dark rounded-xl p-5 space-y-3">
            <h2 class="font-display text-base font-bold text-on-surface">Key Inclusions &amp; Amenities</h2>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div class="card-dark-subtle p-2.5 rounded-lg flex items-center gap-2 text-xs text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-primary">mode_fan</span>
                <span>Split AC Included</span>
              </div>
              <div class="card-dark-subtle p-2.5 rounded-lg flex items-center gap-2 text-xs text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-primary">wifi</span>
                <span>300 Mbps Fiber</span>
              </div>
              <div class="card-dark-subtle p-2.5 rounded-lg flex items-center gap-2 text-xs text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-primary">bolt</span>
                <span>100% DG Backup</span>
              </div>
              <div class="card-dark-subtle p-2.5 rounded-lg flex items-center gap-2 text-xs text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-primary">desk</span>
                <span>Workstation Setup</span>
              </div>
              <div class="card-dark-subtle p-2.5 rounded-lg flex items-center gap-2 text-xs text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-secondary">bathroom</span>
                <span>Ensuite Geyser Bath</span>
              </div>
              <div class="card-dark-subtle p-2.5 rounded-lg flex items-center gap-2 text-xs text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-secondary">cleaning_services</span>
                <span>Daily Housekeeping</span>
              </div>
              <div class="card-dark-subtle p-2.5 rounded-lg flex items-center gap-2 text-xs text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-tertiary">fingerprint</span>
                <span>Biometric Entry</span>
              </div>
              <div class="card-dark-subtle p-2.5 rounded-lg flex items-center gap-2 text-xs text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-tertiary">two_wheeler</span>
                <span>Parking Space</span>
              </div>
            </div>
          </section>

          <!-- 3. Minimal Overview & Host Snapshot -->
          <section class="card-dark rounded-xl p-5 space-y-4">
            <div>
              <h2 class="font-display text-base font-bold text-on-surface mb-1">About the Property</h2>
              <p class="text-xs leading-relaxed text-on-surface-variant">
                Premium student & corporate coliving residence located 400m from SKIT College back gate and 1.8km from JECRC University in Jagatpura, Jaipur. Features 3 homestyle vegetarian meals daily, study lounge pods, 200 Mbps fiber WiFi, 24x7 biometric security, and dedicated bus/auto connectivity to Sitapura IT Park.
              </p>
            </div>
            
            <div class="pt-3 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <img class="w-10 h-10 rounded-full object-cover ring-1 ring-primary/40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRVyyV9BycfwjH-dTwDqlcX3nUS8FwYMIEfU9rCLi3zJlIpbuavb0gU2_g8OhH2Ja-RY8LsAinBOmsUJGguQ3i5G_WgpA7Nk7uZuBzYJ2TJU-LCLPZptL5Npnq5PfhUbylYBKxvoGjI2Wc_XLxWl1_rkpQy7kAAgbm3GQ3bKFP_C7h9dfaqRUxYATtKAPi9lvXwwGVaH0EJvDSV_v00NQBmEU2laqWnsN1OE-vdaSx4sYmkfuKtv7fLg" alt="Rameshwar Choudhary"/>
                <div>
                  <div class="flex items-center gap-1.5 font-semibold text-xs text-on-surface">
                    <span>Rajesh K.</span>
                    <span class="text-[10px] bg-primary/20 text-primary px-1.5 py-0.2 rounded font-bold">Superhost</span>
                  </div>
                  <span class="text-[11px] text-tertiary font-medium">Police &amp; KYC Verified • Responds &lt; 5m</span>
                </div>
              </div>
              <div class="text-xs text-on-surface-variant flex items-center gap-3">
                <span>📍 400m to SKIT College</span>
                <span>•</span>
                <span>1.8km to JECRC</span>
                <span>•</span>
                <span>5.2km to Sitapura IT Park</span>
              </div>
            </div>
          </section>

        </div>

        <!-- RIGHT COLUMN: Sticky Minimal Conversion Card (4 Cols) -->
        <div class="lg:col-span-4 sticky top-20 space-y-3">
          <div class="card-dark rounded-xl p-5 space-y-4 shadow-xl">
            <!-- Price Summary -->
            <div class="flex items-baseline justify-between">
              <div>
                <span class="font-display font-extrabold text-2xl text-primary">₹8,500</span>
                <span class="text-xs text-on-surface-variant"> / month</span>
              </div>
              <span class="text-xs bg-tertiary-container/40 text-tertiary px-2 py-0.5 rounded-full font-semibold">
                Direct Owner Listing
              </span>
            </div>

            <!-- Configuration Selector -->
            <div class="space-y-1">
              <span class="text-xs font-semibold text-on-surface">Configuration</span>
              <div class="grid grid-cols-2 gap-1.5 p-1 bg-surface-container-low rounded-lg text-center text-xs font-medium">
                <button id="btn-cfg-single" class="py-1.5 rounded-md bg-surface-container-lowest text-primary font-bold shadow-sm" type="button">
                  Private Single
                </button>
                <button id="btn-cfg-twin" class="py-1.5 rounded-md text-on-surface-variant hover:text-on-surface" type="button">
                  Twin Sharing
                </button>
              </div>
            </div>

            <!-- Move-in Date -->
            <div class="space-y-1">
              <span class="text-xs font-semibold text-on-surface">Move-in Date</span>
              <select class="w-full h-9 px-3 card-dark-subtle rounded-lg text-xs text-on-surface focus:outline-none cursor-pointer">
                <option selected>Tomorrow (Immediate)</option>
                <option>Within 3 Days</option>
                <option>1st of Next Month</option>
              </select>
            </div>

            <!-- Visit Slot -->
            <div class="space-y-1">
              <span class="text-xs font-semibold text-on-surface">Preferred Visit Slot</span>
              <div class="grid grid-cols-3 gap-1.5 text-xs text-center" id="visit-slots-group">
                <button class="py-1.5 rounded-lg card-dark-subtle hover:border-primary/50 text-on-surface bg-primary text-on-primary font-bold transition-all" type="button">
                  11:00 AM
                </button>
                <button class="py-1.5 rounded-lg card-dark-subtle hover:border-primary/50 text-on-surface font-medium transition-all" type="button">
                  03:30 PM
                </button>
                <button class="py-1.5 rounded-lg card-dark-subtle hover:border-primary/50 text-on-surface font-medium transition-all" type="button">
                  06:30 PM
                </button>
              </div>
            </div>

            <!-- Cost Summary -->
            <div class="card-dark-subtle p-3 rounded-lg text-xs space-y-1.5" id="cost-summary-box">
              <div class="flex justify-between text-on-surface-variant">
                <span>1st Month Rent</span>
                <span id="summary-rent">₹8,500</span>
              </div>
              <div class="flex justify-between text-on-surface-variant">
                <span>Refundable Deposit</span>
                <span id="summary-deposit">₹8,500</span>
              </div>
              <div class="flex justify-between text-tertiary font-semibold">
                <span>Brokerage</span>
                <span>₹0 FREE</span>
              </div>
              <div class="flex justify-between text-on-surface font-bold pt-1.5 border-t border-outline-variant/30">
                <span>Total Move-in Outlay</span>
                <span class="text-primary text-sm" id="summary-total">₹17,000</span>
              </div>
            </div>

            <!-- CTAs -->
            <div class="space-y-2 pt-1">
              <button onclick="if(window.showVisitModal) window.showVisitModal('Zolo Aura Koramangala');" class="w-full h-10 rounded-lg bg-primary hover:bg-yellow-400 text-on-primary font-bold text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer" type="button">
                <span class="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Book Free In-Person Visit</span>
              </button>
              <button onclick="if(window.showTokenModal) window.showTokenModal('Zolo Aura Koramangala', document.getElementById('summary-rent') ? document.getElementById('summary-rent').textContent : '₹8,500');" class="w-full h-10 rounded-lg bg-secondary text-on-secondary hover:opacity-90 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer" type="button">
                <span class="material-symbols-outlined text-[18px]">lock_clock</span>
                <span>Reserve Now for ₹999</span>
              </button>
            </div>

            <!-- Guarantee -->
            <div class="flex items-center justify-center gap-1.5 text-[11px] text-tertiary text-center pt-1">
              <span class="material-symbols-outlined text-[14px]">verified</span>
              <span>100% Escrow Protection • 48hr Free Cancellation</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>

  <!-- Mobile Sticky CTA Bar (visible only on < lg screens) -->
  <div class="mobile-cta-bar items-center">
    <div class="flex-1">
      <div class="text-xs text-on-surface-variant">Monthly Rent</div>
      <div class="font-bold text-primary text-lg">₹8,500 <span class="text-xs text-outline font-normal">/mo</span></div>
    </div>
    <button class="flex-1 h-11 rounded-xl bg-primary text-on-primary font-bold text-xs flex items-center justify-center gap-1.5 shadow-md" type="button">
      <span class="material-symbols-outlined text-[18px]">calendar_today</span> Book Visit
    </button>
    <button class="flex-1 h-11 rounded-xl bg-secondary text-on-secondary font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm" type="button">
      <span class="material-symbols-outlined text-[18px]">lock_clock</span> Reserve ₹999
    </button>
  </div>

  <!-- Minimal Footer -->
  <footer class="w-full card-dark py-6 border-t border-outline-variant/30 text-xs text-on-surface-variant">
    <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="flex items-center gap-2.5">
        <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-on-primary">
          <span class="material-symbols-outlined text-[15px]">home_pin</span>
        </div>
        <span class="font-bold text-on-surface">Find My Home</span>
        <span class="text-outline">•</span>
        <span>Verified Zero Brokerage Stays, Rajasthan</span>
      </div>
      <div class="flex items-center gap-4 text-xs">
        <a class="hover:text-primary transition-colors" data-path="explore-rentals" href="#">Explore</a>
        <a class="hover:text-primary transition-colors" href="#">Escrow Guarantee</a>
        <a class="hover:text-primary transition-colors" href="#">Terms</a>
      </div>
    </div>
  </footer>

  <!-- Interactivity Script -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const roomCards = document.querySelectorAll('#room-selection-container label');
      roomCards.forEach(card => {
        card.addEventListener('click', () => {
          roomCards.forEach(c => {
            c.classList.remove('active-card', 'bg-surface-container-low');
            c.classList.add('card-dark');
            const dot = c.querySelector('.rounded-full > div');
            if (dot) dot.classList.replace('bg-primary', 'bg-transparent');
          });
          card.classList.add('active-card', 'bg-surface-container-low');
          card.classList.remove('card-dark');
          const activeDot = card.querySelector('.rounded-full > div');
          if (activeDot) activeDot.classList.replace('bg-transparent', 'bg-primary');
        });
      });
    });
  </script>
</body>
</html>`;
window.__pages__["post-free-property"] = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <meta content="web_standard" name="shell-type"/>
  <title>ROOMLY | List Your Property — 0% Brokerage Host Wizard</title>
  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../tokens.css"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            background: "var(--color-background)",
            "background-alt": "var(--color-background-alt)",
            surface: "var(--color-surface)",
            "surface-elevated": "var(--color-surface-elevated)",
            "surface-container-lowest": "var(--color-surface-container-lowest)",
            "surface-container-low": "var(--color-surface-container-low)",
            "surface-container": "var(--color-surface-container)",
            "surface-container-high": "var(--color-surface-container-high)",
            "surface-container-highest": "var(--color-surface-container-highest)",
            "surface-variant": "var(--color-surface-container)",
            "on-surface": "var(--color-text-primary)",
            "on-surface-variant": "var(--color-text-secondary)",
            outline: "var(--color-text-muted)",
            "outline-variant": "var(--color-border)",
            border: "var(--color-border)",
            "border-subtle": "var(--color-border-subtle)",
            primary: "var(--color-primary)",
            "primary-hover": "var(--color-primary-hover)",
            "on-primary": "var(--color-on-primary)",
            "primary-container": "var(--color-primary)",
            secondary: "var(--color-secondary)",
            "secondary-container": "var(--color-secondary-surface)",
            "on-secondary": "var(--color-on-secondary)",
            tertiary: "var(--color-tertiary)",
            "tertiary-container": "var(--color-tertiary-surface)",
            "on-tertiary": "var(--color-on-tertiary)",
            error: "var(--color-error)",
            "error-container": "var(--color-error-surface)"
          },
          fontFamily: {
            headline: ["Manrope", "sans-serif"],
            body: ["Inter", "sans-serif"]
          }
        }
      }
    };
  </script>
  <style>
    @layer base {
      html, body {
        margin: 0;
        padding: 0;
        background-color: var(--color-background);
        color: var(--color-text-primary);
        font-family: 'Inter', sans-serif;
      }
      body { overscroll-behavior: none; }
    }
    ::-webkit-scrollbar { display: none; }
    ::selection { background: var(--color-primary); color: var(--color-on-primary); }
    header { border-bottom: 1px solid var(--color-border-subtle); }
    button:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
  </style>
</head>
<body class="bg-surface font-body text-on-surface antialiased">
  <!-- Top Navigation Header -->
  <header class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-white/5">
    <div class="h-20 max-w-[1360px] mx-auto px-6 md:px-8 flex items-center justify-between gap-4">
      <div class="flex items-center gap-6">
        <a class="flex items-center gap-2.5" data-path="explore-rentals" href="#explore-rentals">
          <div class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline font-bold text-lg shadow-sm">R</div>
          <span class="font-headline font-bold text-xl tracking-tight text-on-surface">ROOMLY</span>
        </a>
        <div class="hidden sm:flex items-center bg-surface-container-low px-3 py-1.5 rounded-lg border border-white/5 text-on-surface-variant">
          <span class="material-symbols-outlined text-[18px] text-primary mr-1.5">location_on</span>
          <select class="bg-transparent text-xs font-semibold text-on-surface focus:outline-none cursor-pointer pr-1">
            <option>Bengaluru</option>
            <option>Mumbai</option>
            <option>Delhi NCR</option>
            <option>Pune</option>
            <option>Hyderabad</option>
          </select>
        </div>
      </div>
      <nav class="hidden lg:flex items-center gap-6 text-sm" data-active-classes="text-primary font-semibold">
        <a class="text-on-surface-variant hover:text-primary transition-colors" data-path="explore-rentals" href="#explore-rentals">Explore Stays</a>
        <a class="text-on-surface-variant hover:text-primary transition-colors" data-path="search-rentals" href="#search-rentals">Search & Filter</a>
        <a class="text-on-surface-variant hover:text-primary transition-colors" data-path="property-details" href="#property-details">Featured Stay</a>
        <a class="text-primary font-semibold transition-colors" data-path="post-free-property" href="#post-free-property">Post Free Property</a>
      </nav>
      <div class="flex items-center gap-3">
        <div class="hidden md:flex items-center bg-surface-container-high p-1 rounded-full text-xs">
          <a class="px-3 py-1.5 rounded-full text-on-surface-variant hover:text-primary transition-colors" data-path="explore-rentals" href="#explore-rentals">Tenant</a>
          <a class="px-3 py-1.5 rounded-full bg-primary text-on-primary font-bold shadow-sm" data-path="owner-overview" href="#owner-overview">Host Suite</a>
        </div>
        <a class="px-4 py-2 rounded-xl bg-primary text-on-primary font-semibold text-xs hover:bg-yellow-400 transition-all shadow-sm" data-path="owner-overview" href="#owner-overview">
          Host Dashboard
        </a>
      </div>
    </div>
  </header>

  <main class="w-full pt-20 bg-surface">
    <!-- Stepper Header Section -->
    <section class="w-full bg-surface-container-low/50 border-b border-white/5 py-8">
      <div class="max-w-[1360px] mx-auto px-6 md:px-8">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
              <span class="material-symbols-outlined text-[15px]">verified</span> Direct Host & Operator Onboarding
            </div>
            <h1 class="font-headline font-extrabold text-2xl sm:text-3xl text-white tracking-tight">List Your Property on ROOMLY</h1>
            <p class="text-xs sm:text-sm text-on-surface-variant mt-1">Zero brokerage, escrow protected deposits, and pre-screened corporate tenants.</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-outline">Setup Progress:</span>
            <span class="px-2.5 py-1 rounded-lg bg-surface-container-lowest border border-white/10 text-xs font-bold text-primary">Step 3 of 5</span>
          </div>
        </div>

        <!-- 5-Step Visual Stepper -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div class="flex flex-col gap-1.5">
            <div class="h-1.5 w-full rounded-full bg-tertiary"></div>
            <div class="flex items-center gap-1 text-tertiary text-xs font-semibold">
              <span class="material-symbols-outlined text-[16px]">check_circle</span>
              <span class="truncate">1. Basic Info</span>
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <div class="h-1.5 w-full rounded-full bg-tertiary"></div>
            <div class="flex items-center gap-1 text-tertiary text-xs font-semibold">
              <span class="material-symbols-outlined text-[16px]">check_circle</span>
              <span class="truncate">2. Location</span>
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <div class="h-1.5 w-full rounded-full bg-primary"></div>
            <div class="flex items-center gap-1 text-primary text-xs font-bold">
              <span class="material-symbols-outlined text-[16px]">radio_button_checked</span>
              <span class="truncate">3. Inventory & Rent</span>
            </div>
          </div>
          <div class="flex flex-col gap-1.5 opacity-40">
            <div class="h-1.5 w-full rounded-full bg-white/10"></div>
            <div class="flex items-center gap-1 text-on-surface-variant text-xs font-medium">
              <span class="material-symbols-outlined text-[16px]">counter_4</span>
              <span class="truncate">4. Amenities & Food</span>
            </div>
          </div>
          <div class="flex flex-col gap-1.5 opacity-40">
            <div class="h-1.5 w-full rounded-full bg-white/10"></div>
            <div class="flex items-center gap-1 text-on-surface-variant text-xs font-medium">
              <span class="material-symbols-outlined text-[16px]">counter_5</span>
              <span class="truncate">5. KYC & Publish</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Wizard Content: 8 cols Form + 4 cols Sticky Guidance -->
    <div class="max-w-[1360px] mx-auto px-6 md:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Form Area (8 cols) -->
        <div class="lg:col-span-8 space-y-6">
          <!-- 3.1: Property Category -->
          <section class="bg-surface-container-lowest border border-white/5 p-6 rounded-2xl shadow-sm">
            <div class="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
              <div>
                <span class="text-xs uppercase font-bold text-primary tracking-wider">Step 3.1</span>
                <h2 class="font-headline font-bold text-lg text-on-surface">Property Category Selection</h2>
              </div>
              <span class="px-2.5 py-0.5 rounded-md bg-secondary/15 text-secondary text-xs font-medium">Fast Track</span>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button class="p-3.5 rounded-xl text-left bg-surface-container-low border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between h-28" type="button">
                <span class="material-symbols-outlined text-outline text-[24px]">apartment</span>
                <div>
                  <div class="text-xs font-bold text-white">Entire Flat</div>
                  <div class="text-[11px] text-on-surface-variant">1BHK, 2BHK+</div>
                </div>
              </button>
              <button class="p-3.5 rounded-xl text-left bg-surface-container-low border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between h-28" type="button">
                <span class="material-symbols-outlined text-outline text-[24px]">villa</span>
                <div>
                  <div class="text-xs font-bold text-white">Independent House</div>
                  <div class="text-[11px] text-on-surface-variant">Standalone Villa</div>
                </div>
              </button>
              <button class="p-3.5 rounded-xl text-left bg-primary text-on-primary font-bold shadow-md flex flex-col justify-between h-28 relative overflow-hidden" type="button">
                <div class="flex items-center justify-between w-full">
                  <span class="material-symbols-outlined text-[24px]">domain</span>
                  <span class="material-symbols-outlined text-[18px]">check_circle</span>
                </div>
                <div>
                  <div class="text-xs font-bold leading-tight">Co-Living / PG</div>
                  <div class="text-[11px] text-on-primary/80 font-normal">Hostel & Executive PG</div>
                </div>
              </button>
              <button class="p-3.5 rounded-xl text-left bg-surface-container-low border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between h-28" type="button">
                <span class="material-symbols-outlined text-outline text-[24px]">meeting_room</span>
                <div>
                  <div class="text-xs font-bold text-white">Private Room</div>
                  <div class="text-[11px] text-on-surface-variant">Flatmate Room</div>
                </div>
              </button>
            </div>
          </section>

          <!-- 3.2: Room Inventory & Tariffs -->
          <section class="bg-surface-container-lowest border border-white/5 p-6 rounded-2xl shadow-sm">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-white/5">
              <div>
                <span class="text-xs uppercase font-bold text-primary tracking-wider">Step 3.2</span>
                <h2 class="font-headline font-bold text-lg text-on-surface">Room Inventory & Tariffs</h2>
                <p class="text-xs text-on-surface-variant mt-0.5">Specify occupancy, rents, and deposit commitments.</p>
              </div>
              <span class="px-2.5 py-1 rounded-md bg-surface-container text-xs text-primary font-semibold self-start sm:self-auto">
                1-Month Deposit Policy
              </span>
            </div>

            <div class="space-y-4">
              <!-- Room Type 1 -->
              <div class="p-4 rounded-xl bg-surface-container-low border border-white/5 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-primary text-on-primary font-bold text-xs flex items-center justify-center">1</div>
                    <span class="text-xs font-bold text-white">Private Single Occupancy Room</span>
                  </div>
                  <button class="text-outline hover:text-red-400 p-1" title="Remove" type="button">
                    <span class="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div>
                    <label class="block text-[11px] font-semibold text-outline mb-1">Total Rooms</label>
                    <input class="w-full h-10 px-3 bg-surface-container-lowest border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-primary" type="number" value="4"/>
                  </div>
                  <div>
                    <label class="block text-[11px] font-semibold text-outline mb-1">Monthly Rent / Room</label>
                    <div class="relative">
                      <span class="absolute left-3 top-2.5 text-xs text-outline">₹</span>
                      <input class="w-full h-10 pl-7 pr-3 bg-surface-container-lowest border border-white/10 rounded-lg text-xs font-bold text-white focus:outline-none focus:border-primary" type="text" value="14,000"/>
                    </div>
                  </div>
                  <div>
                    <label class="block text-[11px] font-semibold text-outline mb-1">Security Deposit</label>
                    <div class="relative">
                      <span class="absolute left-3 top-2.5 text-xs text-outline">₹</span>
                      <input class="w-full h-10 pl-7 pr-3 bg-surface-container-lowest border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-primary" type="text" value="14,000"/>
                    </div>
                  </div>
                  <div>
                    <label class="block text-[11px] font-semibold text-outline mb-1">Bathroom</label>
                    <select class="w-full h-10 px-3 bg-surface-container-lowest border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-primary">
                      <option class="bg-surface-container-low">Attached Ensuite</option>
                      <option class="bg-surface-container-low">Shared</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Room Type 2 -->
              <div class="p-4 rounded-xl bg-surface-container-low border border-white/5 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-lg bg-secondary text-white font-bold text-xs flex items-center justify-center">2</div>
                    <span class="text-xs font-bold text-white">Double / Twin Sharing Room</span>
                  </div>
                  <button class="text-outline hover:text-red-400 p-1" title="Remove" type="button">
                    <span class="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div>
                    <label class="block text-[11px] font-semibold text-outline mb-1">Total Capacity</label>
                    <input class="w-full h-10 px-3 bg-surface-container-lowest border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-primary" type="text" value="6 Beds (3 Rooms)"/>
                  </div>
                  <div>
                    <label class="block text-[11px] font-semibold text-outline mb-1">Monthly Rent / Bed</label>
                    <div class="relative">
                      <span class="absolute left-3 top-2.5 text-xs text-outline">₹</span>
                      <input class="w-full h-10 pl-7 pr-3 bg-surface-container-lowest border border-white/10 rounded-lg text-xs font-bold text-white focus:outline-none focus:border-primary" type="text" value="8,500"/>
                    </div>
                  </div>
                  <div>
                    <label class="block text-[11px] font-semibold text-outline mb-1">Deposit / Bed</label>
                    <div class="relative">
                      <span class="absolute left-3 top-2.5 text-xs text-outline">₹</span>
                      <input class="w-full h-10 pl-7 pr-3 bg-surface-container-lowest border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-primary" type="text" value="8,500"/>
                    </div>
                  </div>
                  <div>
                    <label class="block text-[11px] font-semibold text-outline mb-1">Bathroom</label>
                    <select class="w-full h-10 px-3 bg-surface-container-lowest border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-primary">
                      <option class="bg-surface-container-low">Attached Ensuite</option>
                      <option class="bg-surface-container-low">Floor Common</option>
                    </select>
                  </div>
                </div>
              </div>

              <button class="w-full py-3 px-4 rounded-xl bg-surface-container-low border border-dashed border-white/10 text-primary text-xs font-bold hover:bg-surface-container transition-all flex items-center justify-center gap-2" type="button">
                <span class="material-symbols-outlined text-[18px]">add_circle</span> Add Another Room Category
              </button>
            </div>
          </section>

          <!-- 3.3: Food, Meals & Kitchen -->
          <section class="bg-surface-container-lowest border border-white/5 p-6 rounded-2xl shadow-sm">
            <div class="pb-4 mb-5 border-b border-white/5">
              <span class="text-xs uppercase font-bold text-primary tracking-wider">Step 3.3</span>
              <h2 class="font-headline font-bold text-lg text-on-surface">Food & Dining Facilities</h2>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block text-xs font-semibold text-white mb-2">Meals Offered Daily</label>
                <div class="flex flex-wrap gap-2 text-xs">
                  <button class="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-bold shadow-sm" type="button">Breakfast</button>
                  <button class="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-gray-300" type="button">+ Lunch (Tiffin)</button>
                  <button class="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-bold shadow-sm" type="button">Dinner</button>
                  <button class="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-gray-300" type="button">+ Evening Snacks</button>
                  <button class="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-bold shadow-sm" type="button">Weekend Feast</button>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div class="p-3.5 rounded-xl bg-surface-container-low border border-white/5">
                  <label class="block text-xs font-semibold text-white mb-2">Dietary Policy</label>
                  <div class="flex items-center gap-4 text-xs text-gray-300">
                    <label class="flex items-center gap-1.5 cursor-pointer">
                      <input checked="" class="accent-primary" name="diet" type="radio"/>
                      <span>Veg & Non-Veg</span>
                    </label>
                    <label class="flex items-center gap-1.5 cursor-pointer">
                      <input class="accent-primary" name="diet" type="radio"/>
                      <span>Pure Veg Only</span>
                    </label>
                  </div>
                </div>

                <div class="p-3.5 rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-between">
                  <div>
                    <div class="text-xs font-semibold text-white">Self-Cooking Kitchen</div>
                    <div class="text-[11px] text-on-surface-variant">Stove & fridge access</div>
                  </div>
                  <input checked="" class="w-4 h-4 accent-primary rounded cursor-pointer" type="checkbox"/>
                </div>
              </div>
            </div>
          </section>

          <!-- 3.4: Amenities Checklist -->
          <section class="bg-surface-container-lowest border border-white/5 p-6 rounded-2xl shadow-sm">
            <div class="pb-4 mb-5 border-b border-white/5">
              <span class="text-xs uppercase font-bold text-primary tracking-wider">Step 3.4</span>
              <h2 class="font-headline font-bold text-lg text-on-surface">Amenities Checklist</h2>
            </div>

            <div class="space-y-4 text-xs">
              <div>
                <span class="text-[11px] font-bold text-outline uppercase tracking-wider block mb-2">Safety & Power</span>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <label class="p-2.5 rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-between cursor-pointer">
                    <span class="text-white">24/7 CCTV</span>
                    <input checked="" class="accent-primary" type="checkbox"/>
                  </label>
                  <label class="p-2.5 rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-between cursor-pointer">
                    <span class="text-white">Biometric Lock</span>
                    <input checked="" class="accent-primary" type="checkbox"/>
                  </label>
                  <label class="p-2.5 rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-between cursor-pointer">
                    <span class="text-white">100% DG Power</span>
                    <input checked="" class="accent-primary" type="checkbox"/>
                  </label>
                  <label class="p-2.5 rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-between cursor-pointer">
                    <span class="text-white">Fiber WiFi</span>
                    <input checked="" class="accent-primary" type="checkbox"/>
                  </label>
                </div>
              </div>

              <div>
                <span class="text-[11px] font-bold text-outline uppercase tracking-wider block mb-2">Comfort & Services</span>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <label class="p-2.5 rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-between cursor-pointer">
                    <span class="text-white">Daily Cleaning</span>
                    <input checked="" class="accent-primary" type="checkbox"/>
                  </label>
                  <label class="p-2.5 rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-between cursor-pointer">
                    <span class="text-white">Washing Machine</span>
                    <input checked="" class="accent-primary" type="checkbox"/>
                  </label>
                  <label class="p-2.5 rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-between cursor-pointer">
                    <span class="text-white">Covered Parking</span>
                    <input checked="" class="accent-primary" type="checkbox"/>
                  </label>
                  <label class="p-2.5 rounded-xl bg-surface-container-low border border-white/5 flex items-center justify-between cursor-pointer">
                    <span class="text-white">Rooftop Lounge</span>
                    <input checked="" class="accent-primary" type="checkbox"/>
                  </label>
                </div>
              </div>
            </div>
          </section>

          <!-- 3.5: House Rules -->
          <section class="bg-surface-container-lowest border border-white/5 p-6 rounded-2xl shadow-sm">
            <div class="pb-4 mb-5 border-b border-white/5">
              <span class="text-xs uppercase font-bold text-primary tracking-wider">Step 3.5</span>
              <h2 class="font-headline font-bold text-lg text-on-surface">House Rules & Policy</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label class="block font-semibold text-white mb-1.5">Resident Gender</label>
                <div class="grid grid-cols-3 gap-1.5">
                  <button class="py-2 rounded-lg bg-primary text-on-primary font-bold shadow-sm" type="button">Unisex</button>
                  <button class="py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-gray-300" type="button">Girls Only</button>
                  <button class="py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-gray-300" type="button">Boys Only</button>
                </div>
              </div>

              <div>
                <label class="block font-semibold text-white mb-1.5">Gate Curfew</label>
                <select class="w-full h-10 px-3 bg-surface-container-low border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-primary">
                  <option class="bg-surface-container-low">No Curfew (24x7 Digital Key)</option>
                  <option class="bg-surface-container-low">11:00 PM</option>
                  <option class="bg-surface-container-low">Midnight (12:00 AM)</option>
                </select>
              </div>
            </div>
          </section>

          <!-- Form Action Bar -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 pb-12">
            <a class="w-full sm:w-auto px-5 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors" data-path="owner-overview" href="#owner-overview">
              <span class="material-symbols-outlined text-[16px]">arrow_back</span> Back to Dashboard
            </a>
            <div class="flex items-center gap-3 w-full sm:w-auto">
              <button class="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-surface-container-lowest border border-white/10 text-white text-xs font-semibold hover:border-white/30 transition-all" type="button">
                Save Draft
              </button>
              <button class="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-primary text-on-primary font-headline font-bold text-xs hover:bg-yellow-400 transition-all shadow-md flex items-center justify-center gap-1.5" type="button">
                Continue to Photos & KYC <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Sticky Right Guidance Sidebar (4 cols) -->
        <div class="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
          <!-- Benefits Card -->
          <div class="bg-surface-container-lowest border border-white/5 p-5 rounded-2xl shadow-sm">
            <div class="flex items-center gap-2 text-primary font-bold text-sm mb-3">
              <span class="material-symbols-outlined text-[18px]">stars</span> Zero Brokerage Host Guarantee
            </div>
            <ul class="space-y-3 text-xs text-on-surface-variant">
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-secondary text-[18px] shrink-0">photo_camera</span>
                <div>
                  <strong class="text-white block">Free Pro Photoshoot</strong>
                  <span>Our city team takes HD photos and 3D walkthroughs within 48h.</span>
                </div>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-secondary text-[18px] shrink-0">verified_user</span>
                <div>
                  <strong class="text-white block">Aadhaar KYC Tenants</strong>
                  <span>Corporate email & police check pre-verified before visits.</span>
                </div>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="material-symbols-outlined text-secondary text-[18px] shrink-0">currency_rupee</span>
                <div>
                  <strong class="text-white block">0% Host Commission</strong>
                  <span>Keep 100% of collected rent with automated T+1 bank payouts.</span>
                </div>
              </li>
            </ul>
          </div>

          <!-- Demand Metre -->
          <div class="bg-surface-container-lowest border border-white/5 p-5 rounded-2xl shadow-sm">
            <div class="flex items-center justify-between text-xs mb-3">
              <span class="text-outline uppercase font-semibold">Demand Metre</span>
              <span class="text-primary font-bold">Koramangala, BLR</span>
            </div>
            <div class="space-y-3 text-xs">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-white">Single Rooms</span>
                  <span class="text-primary font-bold">94% Very High</span>
                </div>
                <div class="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
                  <div class="h-full bg-primary rounded-full" style="width: 94%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-white">Twin Sharing</span>
                  <span class="text-secondary font-bold">82% Optimal</span>
                </div>
                <div class="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
                  <div class="h-full bg-secondary rounded-full" style="width: 82%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Help Card -->
          <div class="bg-surface-container-low border border-white/5 p-5 rounded-2xl">
            <div class="flex items-center gap-2 text-white font-bold text-xs mb-2">
              <span class="material-symbols-outlined text-primary text-[18px]">support_agent</span> Need Assistance?
            </div>
            <p class="text-xs text-on-surface-variant mb-3">Our onboarding relationship manager can visit in person to help configure units.</p>
            <a class="block w-full py-2.5 rounded-xl bg-primary text-on-primary font-bold text-xs text-center hover:bg-yellow-400 transition-colors shadow-sm" href="tel:18002097666">
              Call Host Desk: 1800-209-7666
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Global Footer -->
  <footer class="w-full bg-surface-container-lowest border-t border-white/5 py-12">
    <div class="max-w-[1360px] mx-auto px-6 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
        <div class="lg:col-span-2 pr-4">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline font-bold text-sm">R</div>
            <span class="font-headline font-bold text-lg text-white">ROOMLY</span>
          </div>
          <p class="text-xs text-on-surface-variant max-w-sm mb-4 leading-relaxed">
            India's verified coliving & shared rental platform. Zero brokerage stays, digital lease contracts, and deposit escrow safety.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container border border-white/5 text-primary text-xs font-semibold">
            <span class="material-symbols-outlined text-[16px]">verified</span> 100% KYC Verified Owners
          </div>
        </div>
        <div>
          <div class="text-xs font-bold text-white uppercase tracking-wider mb-3">Top Cities</div>
          <ul class="space-y-2 text-xs text-on-surface-variant">
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals" href="#search-rentals">Bengaluru Stays</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals" href="#search-rentals">Mumbai Shared Rooms</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals" href="#search-rentals">Delhi NCR Coliving</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals" href="#search-rentals">Pune Tech Corridors</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals" href="#search-rentals">Hyderabad Hitec City</a></li>
          </ul>
        </div>
        <div>
          <div class="text-xs font-bold text-white uppercase tracking-wider mb-3">Quick Navigation</div>
          <ul class="space-y-2 text-xs text-on-surface-variant">
            <li><a class="hover:text-primary transition-colors" data-path="explore-rentals" href="#explore-rentals">Explore Stays</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="search-rentals" href="#search-rentals">Search & Filters</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="property-details" href="#property-details">Featured Details</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="owner-overview" href="#owner-overview">Host Suite</a></li>
            <li><a class="hover:text-primary transition-colors" data-path="post-free-property" href="#post-free-property">Post Free Listing</a></li>
          </ul>
        </div>
        <div>
          <div class="text-xs font-bold text-white uppercase tracking-wider mb-3">24/7 Support</div>
          <p class="text-xs text-on-surface-variant mb-2">Round the clock tenant & host dispute support hotline.</p>
          <div class="font-headline font-bold text-primary text-base mb-1">1800-209-7666</div>
          <div class="text-[11px] text-tertiary flex items-center gap-1 font-semibold">
            <span class="material-symbols-outlined text-[14px]">shield</span> Escrow Protection Assured
          </div>
        </div>
      </div>
      <div class="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-outline">
        <div>© 2025 ROOMLY Technologies India Pvt. Ltd. All rights reserved.</div>
        <div class="flex items-center gap-4">
          <a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a class="hover:text-primary transition-colors" href="#">Terms of Tenancy</a>
          <a class="hover:text-primary transition-colors" href="#">Zero Brokerage Policy</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`;
window.__pages__["owner-overview"] = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <meta content="web_dashboard" name="shell-type"/>
  <title>ROOMLY | Host & Owner Property Management Hub</title>
  <link href="https://fonts.googleapis.com" rel="preconnect"/>
  <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../tokens.css"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            background: "var(--color-background)",
            "background-alt": "var(--color-background-alt)",
            surface: "var(--color-surface)",
            "surface-elevated": "var(--color-surface-elevated)",
            "surface-container-lowest": "var(--color-surface-container-lowest)",
            "surface-container-low": "var(--color-surface-container-low)",
            "surface-container": "var(--color-surface-container)",
            "surface-container-high": "var(--color-surface-container-high)",
            "surface-container-highest": "var(--color-surface-container-highest)",
            "surface-variant": "var(--color-surface-container)",
            "on-surface": "var(--color-text-primary)",
            "on-surface-variant": "var(--color-text-secondary)",
            outline: "var(--color-text-muted)",
            "outline-variant": "var(--color-border)",
            border: "var(--color-border)",
            "border-subtle": "var(--color-border-subtle)",
            primary: "var(--color-primary)",
            "primary-hover": "var(--color-primary-hover)",
            "on-primary": "var(--color-on-primary)",
            "primary-container": "var(--color-primary)",
            secondary: "var(--color-secondary)",
            "secondary-container": "var(--color-secondary-surface)",
            "on-secondary": "var(--color-on-secondary)",
            tertiary: "var(--color-tertiary)",
            "tertiary-container": "var(--color-tertiary-surface)",
            "on-tertiary": "var(--color-on-tertiary)",
            error: "var(--color-error)",
            "error-container": "var(--color-error-surface)"
          },
          fontFamily: {
            headline: ["Manrope", "sans-serif"],
            body: ["Inter", "sans-serif"]
          }
        }
      }
    };
  </script>
  <style>
    @layer base {
      html, body {
        margin: 0;
        padding: 0;
        background-color: var(--color-background);
        color: var(--color-text-primary);
        font-family: 'Inter', sans-serif;
      }
      body { overscroll-behavior: none; }
    }
    ::-webkit-scrollbar { display: none; }
    ::selection { background: var(--color-primary); color: var(--color-on-primary); }
    header, aside { border-color: var(--color-border-subtle); }
    button:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
  </style>
</head>
<body class="bg-surface font-body text-on-surface antialiased flex min-h-screen">
  <!-- Desktop Host Sidebar -->
  <aside class="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-white/5 z-50 hidden md:flex flex-col justify-between py-6 px-4">
    <div class="flex flex-col gap-6">
      <!-- Brand Logo -->
      <a class="flex items-center gap-2.5 px-2" data-path="explore-rentals" href="#explore-rentals">
        <div class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline font-bold text-lg shadow-sm">R</div>
        <div class="flex flex-col">
          <span class="font-headline font-bold text-lg text-on-surface leading-none">ROOMLY</span>
          <span class="text-[10px] text-primary uppercase font-bold tracking-wider mt-1">Host & Owner Suite</span>
        </div>
      </a>

      <!-- Cluster Selector -->
      <div class="px-1">
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low border border-white/5">
          <div class="flex flex-col">
            <span class="text-[10px] text-outline uppercase font-semibold">Active Cluster</span>
            <span class="text-xs font-bold text-white mt-0.5">Bengaluru Central</span>
          </div>
          <span class="material-symbols-outlined text-primary text-[18px]">apartment</span>
        </div>
      </div>

      <!-- Nav Links -->
      <nav class="flex flex-col gap-1 text-xs font-semibold" data-active-classes="bg-primary text-on-primary font-bold shadow-sm">
        <a class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-primary text-on-primary font-bold shadow-sm transition-all" data-path="owner-overview" href="#owner-overview">
          <span class="material-symbols-outlined text-[18px]">grid_view</span>
          <span>Overview & Analytics</span>
        </a>
        <a class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all" data-path="search-rentals" href="#search-rentals">
          <span class="material-symbols-outlined text-[18px]">home_work</span>
          <span>Property Listings</span>
        </a>
        <a class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all" data-path="property-details" href="#property-details">
          <span class="material-symbols-outlined text-[18px]">how_to_reg</span>
          <span>Tenant KYC & Leases</span>
        </a>
        <a class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all" data-path="post-free-property" href="#post-free-property">
          <span class="material-symbols-outlined text-[18px]">add_circle</span>
          <span>Add New Listing</span>
        </a>
      </nav>
    </div>

    <!-- Bottom Tenant Mode Link -->
    <div class="flex flex-col gap-3 px-2 pt-4 border-t border-white/5">
      <a class="flex items-center gap-2 text-primary text-xs font-bold hover:underline" data-path="explore-rentals" href="#explore-rentals">
        <span class="material-symbols-outlined text-[16px]">arrow_back</span>
        <span>Switch to Tenant Mode</span>
      </a>
      <div class="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-low border border-white/5">
        <span class="material-symbols-outlined text-secondary text-[18px]">support_agent</span>
        <div class="flex flex-col text-[11px]">
          <span class="text-outline">Host Concierge</span>
          <span class="text-white font-bold">1800-209-7666</span>
        </div>
      </div>
    </div>
  </aside>

  <!-- Main Content Wrapper -->
  <div class="flex-1 md:pl-64 flex flex-col min-w-0">
    <!-- Top Bar Header -->
    <header class="fixed top-0 left-0 md:left-64 right-0 h-20 bg-surface/90 backdrop-blur-xl border-b border-white/5 z-40 flex items-center justify-between px-6 md:px-8">
      <div class="flex items-center gap-4">
        <div class="relative flex items-center">
          <span class="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span>
          <input class="w-64 sm:w-80 h-10 pl-9 pr-4 bg-surface-container-lowest border border-white/10 rounded-xl text-xs text-white placeholder:text-outline focus:outline-none focus:border-primary transition-all" placeholder="Search unit, tenant phone, or lease ID..." type="text"/>
        </div>
        <span class="hidden sm:inline-flex px-2.5 py-1 rounded-md bg-secondary/15 text-secondary text-xs font-semibold">
          GST Compliant
        </span>
      </div>

      <div class="flex items-center gap-3">
        <div class="flex items-center bg-surface-container-high p-1 rounded-full text-xs">
          <a class="px-3 py-1.5 rounded-full text-on-surface-variant hover:text-primary transition-colors" data-path="explore-rentals" href="#explore-rentals">Tenant Mode</a>
          <a class="px-3 py-1.5 rounded-full bg-primary text-on-primary font-bold shadow-sm" data-path="owner-overview" href="#owner-overview">Host Suite</a>
        </div>
        <a class="px-3.5 py-2 rounded-xl bg-primary text-on-primary text-xs font-bold hover:bg-yellow-400 transition-all shadow-sm" data-path="post-free-property" href="#post-free-property">
          + Add Unit
        </a>
      </div>
    </header>

    <main class="w-full pt-20 px-6 md:px-8 pb-16 bg-surface">
      <div class="max-w-[1360px] mx-auto pt-6">
        <!-- Top Greeting Bar -->
        <section class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-2 border-b border-white/5">
          <div>
            <div class="flex flex-wrap items-center gap-2.5 mb-1">
              <h1 class="font-headline font-extrabold text-2xl sm:text-3xl text-white tracking-tight">Owner Hub & Operations</h1>
              <span class="px-2.5 py-0.5 rounded-full bg-tertiary/15 text-tertiary text-xs font-semibold flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">verified</span> Verified Host
              </span>
            </div>
            <div class="flex flex-wrap items-center gap-3 text-xs text-on-surface-variant">
              <span>Welcome back, <strong class="text-white">Rajesh Sharma</strong></span>
              <span>•</span>
              <span class="text-primary font-mono font-semibold">#RM-OWN-8821</span>
              <span>•</span>
              <span class="text-gray-300">Bengaluru Urban Cluster (3 Properties Active)</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <div class="flex items-center bg-surface-container-lowest border border-white/10 px-3 py-2 rounded-xl text-xs text-white">
              <span class="material-symbols-outlined text-primary text-[16px] mr-2">calendar_today</span>
              <select class="bg-transparent focus:outline-none cursor-pointer">
                <option class="bg-surface-container-low">October 2024</option>
                <option class="bg-surface-container-low">September 2024</option>
                <option class="bg-surface-container-low">Q3 (Jul - Sep)</option>
              </select>
            </div>
            <a class="px-4 py-2 rounded-xl bg-primary text-on-primary font-bold text-xs hover:bg-yellow-400 transition-all shadow-sm flex items-center gap-1.5" data-path="post-free-property" href="#post-free-property">
              <span class="material-symbols-outlined text-[16px]">add_business</span> + Add New Unit
            </a>
          </div>
        </section>

        <!-- 4 Key Metric Cards -->
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <!-- Metric 1 -->
          <div class="p-5 rounded-2xl bg-surface-container-lowest border border-white/5 flex flex-col justify-between">
            <div class="flex items-start justify-between">
              <div>
                <span class="text-[11px] uppercase tracking-wider text-outline font-bold">Total Rent Collected</span>
                <div class="font-headline font-extrabold text-2xl sm:text-3xl text-white mt-1">₹2,84,500</div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <span class="material-symbols-outlined text-[20px]">payments</span>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span class="text-tertiary font-bold flex items-center gap-0.5">
                <span class="material-symbols-outlined text-[14px]">trending_up</span> +8.4% vs last mo
              </span>
              <span class="text-outline">96.2% Collected</span>
            </div>
          </div>

          <!-- Metric 2 -->
          <div class="p-5 rounded-2xl bg-surface-container-lowest border border-white/5 flex flex-col justify-between">
            <div class="flex items-start justify-between">
              <div>
                <span class="text-[11px] uppercase tracking-wider text-outline font-bold">Occupancy Rate</span>
                <div class="font-headline font-extrabold text-2xl sm:text-3xl text-white mt-1">94%</div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                <span class="material-symbols-outlined text-[20px]">bed</span>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span class="text-white font-medium">18 / 19 Beds Filled</span>
              <span class="text-red-400 font-semibold cursor-pointer hover:underline">1 Vacant Bed</span>
            </div>
          </div>

          <!-- Metric 3 -->
          <div class="p-5 rounded-2xl bg-surface-container-lowest border border-white/5 flex flex-col justify-between">
            <div class="flex items-start justify-between">
              <div>
                <span class="text-[11px] uppercase tracking-wider text-outline font-bold">Pending KYC Leases</span>
                <div class="font-headline font-extrabold text-2xl sm:text-3xl text-primary mt-1">4</div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <span class="material-symbols-outlined text-[20px]">verified_user</span>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span class="text-gray-300">2 Inbound Reviews</span>
              <span class="text-outline">Avg review &lt; 2h</span>
            </div>
          </div>

          <!-- Metric 4 -->
          <div class="p-5 rounded-2xl bg-surface-container-lowest border border-white/5 flex flex-col justify-between">
            <div class="flex items-start justify-between">
              <div>
                <span class="text-[11px] uppercase tracking-wider text-outline font-bold">Escrow Deposits Held</span>
                <div class="font-headline font-extrabold text-2xl sm:text-3xl text-white mt-1">₹2,75,000</div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                <span class="material-symbols-outlined text-[20px]">shield</span>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span class="text-tertiary font-semibold flex items-center gap-1">
                <span class="material-symbols-outlined text-[13px]">lock</span> ROOMLY Trust
              </span>
              <span class="text-outline">Zero Disputes</span>
            </div>
          </div>
        </section>

        <!-- Main 2-Column: Portfolio & Applications Queue -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-start">
          <!-- Property Portfolio (8 cols) -->
          <div class="lg:col-span-8 bg-surface-container-lowest border border-white/5 rounded-2xl p-6 shadow-sm">
            <div class="flex items-center justify-between mb-5">
              <div>
                <h2 class="font-headline font-bold text-lg text-on-surface">Managed Properties</h2>
                <p class="text-xs text-on-surface-variant">Real-time status across active co-living clusters and flats.</p>
              </div>
              <a class="text-xs text-primary font-semibold hover:underline" data-path="search-rentals" href="#search-rentals">View All Units →</a>
            </div>

            <!-- Property List -->
            <div class="space-y-3">
              <!-- Item 1 -->
              <div class="p-4 rounded-xl bg-surface-container-low border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/30 transition-all">
                <div class="flex items-center gap-4 min-w-0">
                  <img class="w-14 h-14 rounded-xl object-cover shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWLwOOnvAHqPHuC1l-5Obgnod7eofFdQaMu0wRZq8if3fJFkwBn9bhg83bNpwZuY7do9MaxMTrd07XKt7ZhORsITHRm-t43szcv_L14M7U93eGeV0yFm1FR_YSo5gAcNjEz8rVbT0D1lonWPIl9g3mfkNC3YVp2JNMYNZiKLptIfH4feDuRmL_YxWOKBfO7uXkPmqoEK4KGZsHWxGUeVkpjwLGXNnSkjAZ9X0DUanFILyLd-CcD2-Skw" alt="Zolo Aura"/>
                  <div class="min-w-0">
                    <div class="flex items-center gap-2">
                      <span class="font-headline font-bold text-sm text-white truncate">Zolo Aura Co-Living</span>
                      <span class="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary text-[10px] font-bold">Active</span>
                    </div>
                    <p class="text-xs text-on-surface-variant mt-0.5">5th Block, Koramangala • 10 Total Rooms</p>
                    <div class="flex items-center gap-2 mt-1 text-xs">
                      <span class="text-primary font-medium">9 Occupied / 1 Vacant</span>
                      <span class="text-outline">•</span>
                      <span class="text-white font-semibold">Yield: ₹1,42,000/mo</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <a class="px-3 py-1.5 rounded-lg bg-surface-container text-white text-xs font-semibold hover:bg-surface-container-high transition-colors" data-path="property-details" href="#property-details">
                    Manage Rooms
                  </a>
                  <button class="p-2 rounded-lg bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all" title="Edit Listing" type="button">
                    <span class="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="p-4 rounded-xl bg-surface-container-low border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/30 transition-all">
                <div class="flex items-center gap-4 min-w-0">
                  <img class="w-14 h-14 rounded-xl object-cover shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvyHmoe2DHA-8TZVAOZS-lEmnCMbMkmI_1JXZo_Hk7IUGKUpcbrnuSaJn97r5P18MgkbXzmZGeSKEsOXIg9zMk_bBR4VJb3FmDQKkW-S9iyLRIxe9bBx63leduf2cZfCVu9Zrzh4nn3AREwdtEOCGv16PxWaqZ97kTKaBNWQXtygZJlAC9vW4J-G0uchcft_a4a0huVbpg-_iOP042gkwTElPlVWv9TEFogVCD9_CNWCPehekH6Y8znw" alt="Greenwood"/>
                  <div class="min-w-0">
                    <div class="flex items-center gap-2">
                      <span class="font-headline font-bold text-sm text-white truncate">Greenwood Studio Suites</span>
                      <span class="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary text-[10px] font-bold">100% Full</span>
                    </div>
                    <p class="text-xs text-on-surface-variant mt-0.5">100 Feet Rd, Indiranagar • 4 Boutique Suites</p>
                    <div class="flex items-center gap-2 mt-1 text-xs">
                      <span class="text-tertiary font-medium">4/4 Occupied</span>
                      <span class="text-outline">•</span>
                      <span class="text-white font-semibold">Yield: ₹88,000/mo</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <a class="px-3 py-1.5 rounded-lg bg-surface-container text-white text-xs font-semibold hover:bg-surface-container-high transition-colors" data-path="property-details" href="#property-details">
                    Manage Rooms
                  </a>
                  <button class="p-2 rounded-lg bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all" title="Edit Listing" type="button">
                    <span class="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="p-4 rounded-xl bg-surface-container-low border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/30 transition-all">
                <div class="flex items-center gap-4 min-w-0">
                  <img class="w-14 h-14 rounded-xl object-cover shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaChjZ-puN9q9CzBbFDihCqhZ-ir-cAFBu7TwLL9Ab05iO1z7jIR6IZQmYtLkIjS2FsOo_OwdhW86rtvU-E1-qEQW_PnommtE2o66ODt7aqrO8iGyx5XlCvCRN6ICvVDdMyxLqs16_-AuaiDaIDEn2pUTVCel1AAdATpAH5bbSuHVOMIT7saGWjDb6qPtv14NWB2Ys7vjMpH2IOVGo0nDBMIvhJ1S2KJU9t3Hz-EYd4kgr8iUzpnqO3A" alt="Sunview Flat"/>
                  <div class="min-w-0">
                    <div class="flex items-center gap-2">
                      <span class="font-headline font-bold text-sm text-white truncate">Sunview 2BHK Apartment</span>
                      <span class="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary text-[10px] font-bold">Leased</span>
                    </div>
                    <p class="text-xs text-on-surface-variant mt-0.5">Sector 2, HSR Layout • 1 Independent Flat</p>
                    <div class="flex items-center gap-2 mt-1 text-xs">
                      <span class="text-gray-300 font-medium">Valid till Jul 2025</span>
                      <span class="text-outline">•</span>
                      <span class="text-white font-semibold">Yield: ₹32,000/mo</span>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <a class="px-3 py-1.5 rounded-lg bg-surface-container text-white text-xs font-semibold hover:bg-surface-container-high transition-colors" data-path="property-details" href="#property-details">
                    Manage Rooms
                  </a>
                  <button class="p-2 rounded-lg bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all" title="Edit Listing" type="button">
                    <span class="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Applications & KYC Queue (4 cols) -->
          <div class="lg:col-span-4 bg-surface-container-lowest border border-white/5 rounded-2xl p-6 shadow-sm">
            <div class="flex items-center justify-between mb-5">
              <div>
                <h2 class="font-headline font-bold text-lg text-on-surface">KYC Inbound Queue</h2>
                <p class="text-xs text-on-surface-variant">Prospective resident screening.</p>
              </div>
              <span class="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center">3</span>
            </div>

            <div class="space-y-3">
              <!-- Applicant 1 -->
              <div class="p-3.5 rounded-xl bg-surface-container-low border border-white/5 space-y-2">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full bg-secondary/20 text-secondary text-xs font-bold flex items-center justify-center">PS</div>
                    <div>
                      <div class="text-xs font-bold text-white">Priya Soni</div>
                      <div class="text-[11px] text-on-surface-variant">Product Designer • Flipkart</div>
                    </div>
                  </div>
                  <span class="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary text-[10px] font-bold">785 CIBIL</span>
                </div>
                <div class="text-[11px] text-gray-200 image-overlay-text">Unit: Single Deluxe #203 (Zolo Aura)</div>
                <div class="flex items-center gap-2 pt-1">
                  <button class="flex-1 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-bold hover:bg-yellow-400 transition-colors" type="button">Approve Lease</button>
                  <button class="px-3 py-1.5 rounded-lg bg-surface-container text-gray-300 hover:text-primary text-xs font-medium transition-colors" type="button">Inspect</button>
                </div>
              </div>

              <!-- Applicant 2 -->
              <div class="p-3.5 rounded-xl bg-surface-container-low border border-white/5 space-y-2">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">AN</div>
                    <div>
                      <div class="text-xs font-bold text-white">Arjun Nair</div>
                      <div class="text-[11px] text-on-surface-variant">Fullstack Engineer • Swiggy</div>
                    </div>
                  </div>
                  <span class="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary text-[10px] font-bold">760 CIBIL</span>
                </div>
                <div class="text-[11px] text-gray-200 image-overlay-text">Unit: Twin Sharing #102 (Zolo Aura)</div>
                <div class="flex items-center gap-2 pt-1">
                  <button class="flex-1 py-1.5 rounded-lg bg-surface-container text-primary font-bold text-xs hover:bg-surface-container-high transition-colors" type="button">Review Docs</button>
                </div>
              </div>

              <!-- Applicant 3 -->
              <div class="p-3.5 rounded-xl bg-surface-container-low border border-white/5 space-y-2">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-full bg-secondary/20 text-secondary text-xs font-bold flex items-center justify-center">RD</div>
                    <div>
                      <div class="text-xs font-bold text-white">Rohan Das</div>
                      <div class="text-[11px] text-on-surface-variant">Senior Consultant • Deloitte</div>
                    </div>
                  </div>
                  <span class="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary text-[10px] font-bold">810 CIBIL</span>
                </div>
                <div class="text-[11px] text-gray-200 image-overlay-text">Unit: Suite #4 (Greenwood)</div>
                <div class="flex items-center gap-2 pt-1">
                  <span class="text-[11px] text-primary flex items-center gap-1 font-semibold">
                    <span class="material-symbols-outlined text-[14px]">history_edu</span> e-Sign Sent to Mobile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Escrow Ledger Banner -->
        <section class="mt-8 p-6 rounded-2xl bg-surface-container-lowest border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[24px]">account_balance_wallet</span>
            </div>
            <div>
              <h3 class="font-headline font-bold text-base text-on-surface">Automated T+1 Rent Settlement</h3>
              <p class="text-xs text-on-surface-variant mt-0.5">Rent paid via UPI or Card is settled to your verified HDFC bank account within 24 hours.</p>
            </div>
          </div>
          <button class="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-white text-xs font-semibold transition-colors shrink-0" type="button">
            View Banking Ledger
          </button>
        </section>
      </div>
    </main>
  </div>
</body>
</html>`;
