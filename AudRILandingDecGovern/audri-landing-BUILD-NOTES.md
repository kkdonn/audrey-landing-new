# AudRI Landing Page — Build Notes for Cursor

## PRODUCTION SOURCE (live on Vercel) — 2026-09-02

This folder is the **current production website** for getaudri.com.

- **Live file Vercel deploys:** `index.html` (complete document)
- **Original mockup (kept for reference):** `audri-landing-decgov.html`
- **Vercel config:** repo-root `vercel.json` copies `index.html` into `.vercel-static/` and deploys that. It does **not** build the older Vite/React app.
- **Do not revert** `vercel.json` to `pnpm build` / `dist/public` unless we are intentionally rolling back this Decision Governance page.

---

**File:** `audri-landing-decgov.html` (this folder, `AudRILandingDecGovern/`)
**What it is:** The approved **Decision-Governance-led** landing page for getaudri.com — a single, self-contained HTML mockup (all CSS + JS inline, fonts from Google Fonts, no build step, no dependencies). The "decgov" in the filename = this is the version that leads with **"Decision Governance for Claims,"** not an earlier audit-led version.
**Goal of this handoff:** get this into the Cursor repo → GitHub → Vercel, either as a static page or ported into the existing framework. **Shipped as a static drop-in on 2026-09-02.**

---

## Two ways to use it

1. **Static drop-in** — ship the HTML as-is. It works with zero dependencies.
2. **Port into the framework (preferred if getaudri.com is Next/React)** — lift the pieces below into components. The copy is final; the structure and tokens are the reusable parts.

---

## Design tokens (top of the file, under `:root`)

Keep these — they ARE the AudRI design system. Map them to your theme file.

- **Fonts:** `--font-sans: "DM Sans"` (UI) and `--font-mono: "JetBrains Mono"` (numbers, claim IDs, labels). Keep this pairing — mono-for-numbers is a deliberate brand signature.
- **Palette:** warm "paper" (`--paper-*`, light grounds), warm "ink" (`--ink-*`, text + dark grounds), orange accent (`--accent-500 #f78f5c`, `--accent-600 #f58550`, brand `--brand #E25303`), plus a red for the Liability motif (`--danger`).
- **Dark-first semantic tokens** (`--bg`, `--bg-2`, `--ink`, `--ink-soft`, `--hair`…) and **light-section tokens** (`--l-bg`, `--l-surface`, `--l-ink`…). Sections flip between them via a single `.light` class.
- Radius (`--r-*`), motion easing (`--ease`), max width (`--maxw: 1160px`).

---

## Section map (order + light/dark)

The page deliberately **alternates light/dark**. Preserve this rhythm.

| # | Section | id | Theme |
|---|---------|-----|-------|
| — | Nav (sticky) | — | dark |
| 1 | Hero — "Decision Governance for Claims" + two points | — | dark |
| 2 | Credibility strip (neutral one-liner) | — | dark |
| 3 | The Problem (Money Gap + Liability Gap) | `#problem` | **light** |
| 4 | What AudRI Does + governed-decision record | `#what` | dark |
| 5 | How It Works (Extract / Execute / Explain) | `#how` | **light** |
| 6 | Reconstruction + Independence | `#proof` | dark |
| 7 | Business Value (stat tiles) | `#dollars` | **light** |
| 8 | Capabilities | `#capabilities` | dark |
| 9 | Contact CTA | `#contact` | **light** |
| — | Footer | — | dark |

Mechanism: a section is dark by default; adding `class="light"` flips its background + text tokens. The `.light .sec-head h2/p` rules and `.final.light` rules handle text color on the flipped backgrounds. Dark cards (`.gap`, `.stat`, `.record`) intentionally sit on light sections for contrast.

---

## Responsive

Breakpoints already in place: `900px` (what-grid), `820px` (gaps / 3E / stats / wants / nav links hide), `600px` (record rows stack + a **mobile-polish block**: tighter padding, smaller hero floor, lighter section spacing, full-width hero buttons), `520px` (wants → 1 col). `body` has `overflow-x: hidden`. No hamburger menu — mobile nav is logo + Contact button only (fine for a one-pager; add a menu if you want one).

---

## Copy guardrails (do NOT undo these)

- **Never reintroduce "audit," "QC," "compliance," or "GRC"** in customer-facing copy. The category is **decision governance**. (The word "audit" lives inside the AudRI name but must not appear in copy.)
- Brand is **AudRI** (capital R, capital I) — never "Audrey." Domain is **getaudri.com**. Contact is **contact@getaudri.com**.
- No adversarial / absolute language ("no one," "can't," "not AI guessing," "no QA team can…"). State positively what AudRI does; position it as **augmenting** existing QA teams, never replacing them.
- **Stats are labeled illustrative** ("industry benchmarks ~5–10%," "$6–14M illustrative recoverable exposure on a $200M book"). Before any hard citation goes live, verify the McKinsey/EY leakage figures. The Liability Gap cites the **Simpson Thacher client alert (Aug 28, 2026)** on AI-based bad-faith claims — keep the attribution.

---

## What to preserve vs. adapt

- **Preserve:** the CSS-variable palette, the DM Sans / JetBrains Mono pairing, the light/dark alternation, the governed-decision record card (rule → authority → evidence → override), and all final copy.
- **Adapt freely:** turn each `<section>` into a component, move the `:root` tokens into your theme system, wire "Contact us" to your real form/inbox, and swap the placeholder claim example (WC-2026-04821, "M. Alvarez") for a real anonymized one if you prefer.
- **Logo:** the nav mark is an inline SVG (daisy). If you have the production logo asset, swap it in.
