<!-- Design decision for JayaKrishna Arts. Source: Claude Code concept B "Atelier Ivory",
     rebuilt as static HTML for Kora (homepage + 404). Business: JayaKrishna Arts -->

# DESIGN.md — JayaKrishna Arts

archetype: editorial-atelier
rationale: An art-magazine layout — warm paper, high-contrast Bodoni and one vermilion accent — lets a painter with four decades of portraits, watercolours and abstracts present the work like a printed monograph, with the artist's seal as the mark.
interaction_level: L2

personality: [crafted, assured, warm, unhurried]

typography:
  display: "Bodoni Moda"
  body: "Instrument Sans"
  notes: |
    - Display: Bodoni Moda 400, italics in vermilion for emphasis words. Hero h1 clamp(56px, 8.4vw, 142px); section h2 clamp(44px, 5.6vw, 92px).
    - Body: Instrument Sans 400 at 17px, line-height 1.65.
    - Kickers: Instrument Sans 600, 12px uppercase, .2em tracking, numbered ("01 The collection") with a trailing hairline.

palette:
  primary: "#b8402a"
  secondary: "#f4efe6"
  accent: "#1c1a17"
  ground: "#f4efe6"
  surface: "#fbf8f2"
  ink: "#1c1a17"
  muted: "#5b554b"
  border: "#d9d0bf"
  application: |
    - Ground: warm paper; band #ebe4d6 behind the film marquee and selected-works rail.
    - Vermilion is the single accent: italics, kickers, the commissions band, the seal.
    - Ink carries text, pill buttons, the top bar and the enquiries/FAQ close.

composition:
  whitespace: generous
  photography: the artist's own paintings and honour/exhibition photos, all local WebP in assets/img
  card_usage: paper-matted cards for honours; borderless images elsewhere
  mobile: |
    - Below 980px the nav becomes a full-screen serif menu behind a toggle; the Enquire pill moves into it.
    - Collection index shows thumbnails instead of hover previews; all grids fall to one column; no horizontal scroll at 390px.

sections:
  - top bar + header (shell) — seal logo, nav, Enquire pill.
  - id: top (hero) — "Painted by hand. Kept for generations." with an oil portrait, an inset watercolour and the seal.
  - marquee — the six films his paintings appeared in (2003–2012).
  - id: collections — typographic index: Oil & Portraits, Watercolors, Abstracts, with hover previews.
  - id: selected — horizontal snap rail of eight works with prev/next buttons.
  - id: commissions — vermilion band: four steps, two commissioned portraits.
  - id: artist — drop-cap biography, honour photo, 40+ / 6,000+ / 1,500+ / 6 facts.
  - honours & exhibitions — Open Studio Hartford, Balamuralikrishna, gallery exhibitions.
  - id: contact — ink close: WhatsApp / email CTAs, phone/email/studio, FAQ.
  - footer (shell) — reversed seal logo and anchors.

avoid:
  - Invented prices, testimonials, quotes in the artist's voice or certificates.
  - Locations other than Andhra Pradesh, India.
  - Links to the old jayakrishnaarts.com pages.
  - Inline layout styles (grids/widths) — layout lives in src/input.css.
  - Logo formats other than PNG, and site images other than WebP.
