# superhwy.net Design System — Vice Obsidian

This document is the canonical visual and UI reference for **superhwy.net** (*"An open-source database of Superintelligence"*). All new pages, modals, charts, and components must follow these tokens and rules so the app stays cohesive across contributors and agents.

---

## 1. Aesthetic Philosophy

**Vice Obsidian** blends two deliberate influences:

1. **Perplexity / Swiss Architectural Restraint** — Pure jet-black obsidian canvas (`#060608`), crisp hairline borders, flat monochrome brand mark, high-contrast tabular financial typography, and calm negative space.
2. **Subtle Vice Dusk Warmth** — Surgical hits of dusk coral (`#ff5a5f`), warm amber (`#f59e0b`), and lagoon mint (`#14f1b2`) reserved strictly for primary CTAs, live data series, and financial semantics.

**Core rule:** Zero purple-tinted "generic dark-mode SaaS" surfaces, borders, or muted text. Neutrals are pure obsidian/cool-graphite, never violet or lavender.

---

## 2. Color Tokens

Defined in `app/src/app/globals.css` (`:root`):

| Role | CSS Variable | Hex / Value | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas** | `--bg-canvas` | `#060608` | Page background, sticky header (`bg-[#060608]/92`), footer, nested stat wells |
| **Surface** | `--bg-surface` | `#0c0d11` | Cards, dropdowns, modals, search bar, select inputs |
| **Elevated Surface** | `--bg-surface-elevated` | `#12141a` | Hover states, active pills, promo card mid-stop |
| **Subtle Border** | `--border-subtle` | `rgba(255, 255, 255, 0.085)` | Card edges, dividers, input borders (`border-white/[0.085]`) |
| **Modal / Popover Border** | — | `rgba(255, 255, 255, 0.12)` | Dropdown menus & dialogs (`border-white/[0.12]`) |
| **Accent Border** | `--border-accent` | `rgba(255, 110, 96, 0.34)` | Highlighted cards, active selection borders |
| **Primary Text** | `--foreground` | `#f4f4f2` | Warm off-white headings, primary labels, active tabs, logo stroke |
| **Secondary Text** | — | `#c8ccd4` / `#b3b8c2` | Table values, inactive menu labels, secondary controls |
| **Muted Text** | `--muted` | `#8b909a` | Descriptions, subtitles, modal body copy |
| **Micro / Meta Text** | — | `#717682` | Axis ticks, timestamps, unit labels, keyboard hints, table headers |
| **Vice Coral** | `--vice-coral` | `#ff5a5f` | Primary CTA start, Sell/Ask side, rotating-out / slash alerts (`#ff7a7e` for small text on dark) |
| **Vice Amber** | `--vice-amber` | `#f59e0b` | Primary CTA end, retail spot reference, GPU compute floor, Maker rewards, Batch badges |
| **Vice Lagoon** | `--vice-lagoon` | `#14f1b2` | Buy/Bid side, savings/discounts, owned capacity, live status pulse, Canary SLA pass |

### Ambient Canvas Glow

The `body` uses three subtle fixed radial washes over `#060608` (`globals.css`):
- Top-right coral wash (`rgba(255, 90, 95, 0.085)`)
- Top-left amber wash (`rgba(245, 158, 11, 0.055)`)
- Bottom-center lagoon wash (`rgba(20, 241, 178, 0.035)`)

Keep individual page containers transparent so this ambient depth shows through naturally.

---

## 3. Semantic Financial & Data Colors

Always keep market semantics consistent across cards, tables, orderbooks, and charts:

| Meaning | Accent Color | Soft Fill / Border Recipe |
| :--- | :--- | :--- |
| **Buy / Bid / Savings / Owned / Live** | `#14f1b2` | `bg-[#14f1b2]/[0.11] hover:bg-[#14f1b2]/[0.2] border-[#14f1b2]/20` |
| **Sell / Ask / Rotating Out / Slash** | `#ff5a5f` (label `#ff7a7e`) | `bg-[#ff5a5f]/[0.11] hover:bg-[#ff5a5f]/[0.2] border-[#ff5a5f]/20` |
| **Compute Floor / Retail Spot / Rewards / Batch** | `#f59e0b` (label `#fbbf24` / `#fcd34d`) | `bg-[#f59e0b]/12 border-[#f59e0b]/30` |
| **Multi-Series Live Chart (`FeaturedStage`)** | 1. `#14f1b2` · 2. `#ff5a5f` · 3. `#f59e0b` | Subtle vertical area fade under series 0 only (`0.16 → 0`) |
| **Neutral / Stable / Private (ZDR)** | `#c8ccd4` / `#8b909a` | `bg-white/[0.05] border-white/[0.1]` |

---

## 4. Typography

Loaded in `app/src/app/layout.tsx` via `next/font/google` and mapped in `app/src/app/globals.css`:

| Role | Font Family | CSS Variable | Loaded Weights | Tailwind Class |
| :--- | :--- | :--- | :--- | :--- |
| **Display / Headings / Wordmark** | **Space Grotesk** | `--font-display` | `500`, `600`, `700` | `font-display` (auto-applied to `h1`, `h2`, `h3`) |
| **UI Body / Controls** | **Inter** | `--font-inter` | `400`, `500`, `600`, `700` | `font-sans` (default on `body`) |
| **Financial Data / Code / IDs** | **IBM Plex Mono** | `--font-plex-mono` | `400`, `500`, `600` | `font-mono` |

### Typography Rules

- **Never use `font-extrabold` (`800`) or `font-black` (`900`).** `Space Grotesk` and `Inter` load up to `700`; using `800` triggers ugly browser faux-bold synthesis. Always use `font-display font-bold` (`700`) with tight tracking (`tracking-tight` or `-0.025em`).
- **Always pair numbers with `font-mono tabular-nums`** — prices (`$/1M`), percentages, volumes, token counts, countdowns, and orderbook columns must never jitter when live values update.
- **SVG chart labels** must use `fontFamily="var(--font-plex-mono), monospace"` (never `--font-jetbrains`).

---

## 5. Brand Mark & Iconography

### Primary Mark (`SuperhwyMark`)

- **Component:** `app/src/components/SuperhwyLogo.tsx` (`<SuperhwyMark size={32} />`)
- **Favicon:** `app/src/app/icon.svg`
- **Design:** A crisp monochrome **Split-S Expressway** mark — two interlocking angular speed lanes in warm off-white (`#F4F4F2`) and cool silver (`#A1A7B3`) on a `32×32` viewBox.
- **Lockup rules:**
  - Always import `<SuperhwyMark />` — never inline custom SVG logos in headers or modals.
  - Render directly on the `#060608` surface with **no box container, no gradient stroke, no neon drop shadow, and no 3D gloss**.
  - Wordmark is **always lowercase `superhwy.net`**, paired inline with the muted tagline `"An open-source database of Superintelligence"` separated by `/`:
    ```tsx
    <SuperhwyMark size={22} />
    <span className="font-display text-[17px] font-semibold tracking-[-0.035em] leading-none text-[#f4f4f2]">
      superhwy.net
    </span>
    ```

### Provider, Model & Asset Icons (`BrandIcon.tsx`)

Use `app/src/components/BrandIcon.tsx` for all market emblems:
- `<PairEmblem modelSlug={...} providerSlug={...} size="sm" | "md" | "lg" />` — model icon with overlaid provider badge
- `<ModelIcon modelSlug={...} size={16} />` — loads from `app/public/icons/models/`
- `<ProviderIcon providerSlug={...} size={14} />` — loads from `app/public/icons/providers/`
- `<AssetIcon asset="usdc" | "base" size={16} />` — loads from `app/public/icons/`

UI icons use `lucide-react` at crisp stroke sizes (`w-3.5 h-3.5` or `w-4 h-4`).

---

## 6. Surface & Component Recipes

### Core CSS Utilities (`app/src/app/globals.css`)

- **`.vice-card`** — Primary dark-obsidian gradient card (`rgba(16, 17, 23, 0.94)` → `rgba(10, 11, 15, 0.98)`), `1px solid rgba(255,255,255,0.085)`, subtle top inner highlight, deep shadow, `backdrop-filter: blur(12px)`.
- **`.vice-card-hover`** — Subtle lift (`-1px`) and warm coral micro-ring (`rgba(255, 90, 95, 0.14)`) on hover for clickable market cards.
- **`.vice-primary-btn`** — Default high-contrast monochrome primary CTA (`#f4f4f2` fill, `#060608` bold text, `hover:bg-white`). Use for navigation and product CTAs (`Sign up`, `Get started`, `Send`, `Mint & List`) so chrome stays crisp and Perplexity-clean.
- **Trade Submit Buttons** — Flat semantic fills only: `bg-[#14f1b2] text-[#060608]` for Buy and `bg-[#ff5a5f] text-[#060608]` for Sell (avoid loud orange gradients on buttons).
- **`.vice-gradient-text`** — Warm coral-to-amber-to-gold text gradient (`#ff6b6b → #f79d42 → #fde68a`) for occasional hero emphasis.
- **`.chart-live-pulse`** — Smooth breathing halo animation for live SVG chart tip nodes.

### Standard Component Surfaces

- **Sticky Header:** `sticky top-0 z-40 border-b border-white/[0.07] bg-[#060608]/92 backdrop-blur-xl`
- **Dropdowns & Modals:** `rounded-2xl bg-[#0c0d11] border border-white/[0.12] shadow-2xl`
- **Nested Stat Wells / Inputs / Selects:** `rounded-xl bg-[#0c0d11]` (or `bg-[#060608]` inside a `#0c0d11` popover) with `border border-white/[0.085]` and `focus:border-white/[0.22]`
- **Category Tabs:** Plain text bar with `border-b border-white/[0.07]`, active underline `h-[2px] rounded-full bg-white`, no boxed pill borders.
- **Market Card Action Row:** Side-by-side `Buy` (`#14f1b2` tint) and `Sell` (`#ff5a5f` tint) rounded-xl buttons with price in `font-mono font-bold text-[#f4f4f2] tabular-nums`.

---

## 7. Guardrails (Do / Don't)

### Do
- Use `#060608`, `#0c0d11`, and `#12141a` for dark backgrounds and neutral borders (`border-white/[0.07..0.12]`).
- Use `#f4f4f2` for primary text, `#8b909a` for muted copy, and `#717682` for micro labels.
- Use `<SuperhwyMark />` for the brand logo everywhere.
- Refer to the domain as **Superintelligence (SI)** (while preserving accurate technical names like `OpenAI-compatible` and `Vercel AI SDK`).

### Don't
- **No legacy purple/pink hexes:** Do not reintroduce `#090811`, `#100d1c`, `#120e1c`, `#12101e`, `#131120`, `#141122`, `#181329`, `#8f87a6`, `#9891ab`, `#7c7494`, `#6c6484`, `#766e8f`, `#ff5c7c`, `#ff6b8b`, `#ffb36b`, `#2ee6c5`, `#5ef2d7`, or generic UI-accent purple (`#a78bfa` / `#d8b4fe`) on surfaces, icons, or metrics.
- **No `font-extrabold`** — use `font-display font-bold` (`700`) instead.
- **No `var(--font-jetbrains)`** — use `var(--font-plex-mono), monospace`.
- **No inline road clipart or boxed gradient logos** — always import `SuperhwyMark` from `@/components/SuperhwyLogo`.
