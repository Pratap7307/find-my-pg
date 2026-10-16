---
name: PropTech Marketplace & Management Engine
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006a63'
  on-secondary: '#ffffff'
  secondary-container: '#99efe5'
  on-secondary-container: '#006f67'
  tertiary: '#465384'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e6b9e'
  on-tertiary-container: '#efefff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#9cf2e8'
  secondary-fixed-dim: '#80d5cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#00504a'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b7c4fd'
  on-tertiary-fixed: '#071747'
  on-tertiary-fixed-variant: '#374475'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-trust, functional prop-tech environment optimized for shared accommodations, coliving spaces, and long-term rental management. Balancing the velocity of a peer-to-peer consumer marketplace with the utility of an enterprise property owner dashboard requires absolute visual clarity, structured data density, and an unmistakable sense of institutional legitimacy.

### Design Movement: Corporate Modern with Utilitarian Rigor
- **Tone:** Methodical, dependable, transparent, and authoritative.
- **Visual Tenets:** Generous architectural whitespace paired with compact, data-dense informational clusters; deliberate reliance on clear hierarchy over decorative ornamentation; high contrast ratios that conform strictly to accessibility standards.
- **Emotional Response:** Tenants feel immediate security regarding verification and lease agreements, while property owners experience commanding control over unit availability, rent collection, and tenant screening.

## Colors

The palette is engineered to convey security, administrative clarity, and verified credibility. The interplay between deep indigo, vivid operational blue, and grounding emerald creates unambiguous visual cues across consumer discovery and back-office management.

### Roles & Semantic Distribution
- **Primary (`#2563EB`):** High-priority calls to action, active navigation tabs, interactive map pins, and primary links. Evokes standard operational momentum and technical reliability.
- **Secondary (`#0F766E`):** Trust seals, "Verified Owner" credentials, active occupancy badges, confirmed lease receipts, and deposit validations. Acts as the system’s primary confirmation and security accent.
- **Tertiary (`#172554`):** Global structural rails, top navigation bars, key enterprise headers, and dominant display typography. Anchors the visual frame to eliminate transient consumer aesthetic tropes.
- **Neutral Surface & Slate Stack:**
  - Canvas Root: `#F8FAFC` (Off-white, reducing harsh display glare across daylight browsing).
  - Surface Raised: `#FFFFFF` (Cards, modals, input containers).
  - Text Primary: `#111827` (Titles, tabular values, high-emphasis text).
  - Text Secondary: `#64748B` (Microcopy, metadata, unselected icons, table borders).
  - Border Subdued: `#E2E8F0` (Default perimeter line work).

## Typography

The typographic engine balances the structured geometry of **Manrope** for titles and numeric property outputs with the neutral, hyper-legible rendering of **Inter** across listing filters, agreements, and ledger tables.

### Rules of Application
- **Manrope:** Restricted to high-level page framing, rental pricing metrics (e.g., `₹18,500/mo`), key statistics on dashboards, and modal headings. Always rendered with tighter letter-spacing to reinforce architectural density.
- **Inter:** Drives all operational interfaces, tenant documentation, verification disclosures, status tags, and form fields. It ensures zero character ambiguity between digits, currency symbols, and identifiers.
- **Tabular Figures:** Numbers in dashboards, pricing columns, and unit lists must enforce monospace numeric alignment (`font-variant-numeric: tabular-nums`).

## Layout & Spacing

The layout is built on an adaptable 12-column grid system configured for simultaneous discovery workflows and analytical dashboards.

### Responsive Breakpoints & Fluid Adaptation
- **Desktop (1280px and above):** 12-column grid, `margin: 2rem`, `gutter: 1.5rem`. Maximum content container width capped at 1360px for listing grids; dashboard views expand to a fluid full-width structure with a persistent 260px vertical navigation rail.
- **Tablet (768px – 1279px):** 8-column grid, `margin: 1.5rem`, `gutter: 1rem`. Master-detail side panels collapse into contextual bottom sheets or full-width tabbed transitions.
- **Mobile (Below 768px):** 4-column fluid grid, `margin: 1rem`, `gutter: 1rem`. Property grids collapse to 1-column layouts; property management tables transition into stacked status cards.

### Spatial Discipline
Internal component spacing strictly follows 4px increments. Dense utility rows (e.g., rent collection tables, room amenity tags) leverage `space-xs` and `space-sm`, while property summary cards and analytical modules utilize `space-md` internally and `space-lg` separation gaps externally.

## Elevation & Depth

To preserve an authentic, accessible business environment, the system strictly limits the depth dimension to low-opacity, cool-tinted ambient shadows reinforced by explicit borders.

### Depth Hierarchy
- **Level 0 (Flat Base):** Background canvas (`#F8FAFC`). No elevation or borders.
- **Level 1 (Subtle Lift - Cards & Data Rows):** Primary listing cards and dashboard table modules sit on pure white (`#FFFFFF`) with a 1px solid border of `#E2E8F0` and an ultra-subtle shadow: `0 1px 3px 0 rgba(17, 24, 39, 0.05)`.
- **Level 2 (Interactive Floating - Hover & Filter Bars):** Activated property cards on hover, fixed search filters, and sticky summary footers use: `0 4px 6px -1px rgba(17, 24, 39, 0.07), 0 2px 4px -2px rgba(17, 24, 39, 0.05)` accompanied by a border transition to `#CBD5E1`.
- **Level 3 (Overlays & Disclosures - Modals, Popovers, Drawers):** Verification popups, tenant KYC review modals, and map location flyouts utilize: `0 20px 25px -5px rgba(23, 37, 84, 0.1), 0 8px 10px -6px rgba(23, 37, 84, 0.06)` atop an off-canvas backdrop tint of `#111827` at 40% opacity.

## Shapes

The design system implements a deliberate `roundedness: 2` (0.5rem / 8px standard) logic, projecting structural integrity without appearing clinical or overly rigid.

### Implementation Strategy
- **Standard Corners (8px / `0.5rem`):** Buttons, text inputs, dropdown panels, listing thumbnail wrappers, and dashboard metric cards.
- **Large Containers (16px / `1rem`):** Outer property listing cards, parent dashboard panels, and modal containers.
- **Micro Radii (4px / `0.25rem`):** Inline status badges, verified check indicators, and table cell tags.
- **Full Radii (Pill):** Floating map markers, live status dots, and consumer-facing category filter pills.

## Components

### Buttons
- **Primary Button:** Filled `#2563EB` background with `#FFFFFF` text. Height of 40px (desktop) or 44px (touch/mobile), 8px border-radius, font weight 600. Hover state darkens background to `#1D4ED8`. Focus state yields a distinct 2px offset ring of `#93C5FD`.
- **Secondary Button:** Outlined `#E2E8F0` with `#172554` text. On hover, background shifts to `#F1F5F9`.
- **Destructive/Eviction Button:** Crisp light red base (`#FEE2E2`) with `#991B1B` text for administrative dismissals and cancellations.

### Trust Badges & Verified Owner Tags
- **Verified Owner Badge:** Contained pill layout featuring an emerald checkmark icon. Background `#F0FDF4`, border `#BBF7D0`, and text `#0F766E` at font size 12px with 600 weight.
- **Security Deposit Safe Tag:** Subtle indigo badge (`#EFF6FF` background, `#1D4ED8` text) signaling automated refund-escrow status.

### Cards (Property Listings & Dashboard Metrics)
- **Listing Card:** Surface `#FFFFFF`, border 1px solid `#E2E8F0`, rounded 16px. Top section hosts a 16:9 property photo carousel with an absolute positioned "Verified Owner" tag (top-left) and rent tag (bottom-left). Bottom section contains bedroom configuration (e.g., "Single Occupancy PG"), micro-location metadata in `#64748B`, and a divider-separated owner response rating.
- **Metric Card:** Surface `#FFFFFF`, border 1px solid `#E2E8F0`, rounded 12px, padding `1.25rem`. Displays Manrope-bold KPI counters (e.g., "94% Occupancy") accompanied by directional trend indicators (green/red micro-typography).

### Input Fields & Search Bars
- **Text Inputs:** Height 42px, background `#FFFFFF`, border 1px solid `#CBD5E1`, rounded 8px. Placeholder color `#94A3B8`. Focus state applies a border color of `#2563EB` and a box-shadow halo of `0 0 0 3px rgba(37, 99, 235, 0.15)`.
- **Split Multi-Select PG Filter:** Specialized pill clusters indicating gender categorization ("Male", "Female", "Unisex") and meal provisions, shifting from neutral border `#E2E8F0` to solid `#172554` background with inverted white text upon selection.

### Checkboxes, Radio Buttons, and Toggles
- **Checkboxes & Radios:** Explicit 18px bounding box with 1.5px border `#94A3B8`. Active state fills with `#2563EB` housing a sharp white glyph.
- **Amenity Toggle Switch:** Compact track (36px width, 20px height) utilizing `#E2E8F0` when inactive and `#0F766E` when active (e.g., "WiFi Included", "AC Available").

### Tables (Owner Ledger & Tenant Lists)
- **Table Construction:** Surface `#FFFFFF`, border-collapse style, 1px horizontal dividers using `#F1F5F9`. Table header sets background `#F8FAFC`, text `#64748B`, 11px uppercase Inter typography with `letter-spacing: 0.05em`. Cells maintain vertical paddings of 12px for maximum scan rate and scannable payment status chips.