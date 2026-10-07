# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: JayaKrishna Arts | Original Paintings, Andhra Pradesh, India
purpose: Homepage for painter JayaKrishna Bandari — collection, selected works, portrait commissions, the artist, honours and enquiries.
sections:
- `#top` — hero, "Painted by hand. Kept for generations."
- marquee — films featuring his paintings
- `#collections` "Forty-five originals, three disciplines." — collection index
- `#selected` "From the studio wall." — selected works rail
- `#commissions` "Your photograph, painted in oil." — commission steps
- `#artist` "A life spent at the easel." — biography and facts
- honours — "In India & the USA."
- `#contact` "Let's find your painting." — enquiry links, contact details, FAQ

## 404.html → /404
title: Page not found | JayaKrishna Arts
purpose: Platform not-found page (noindex) linking back to the homepage.

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `assets/site.js` — header state, mobile menu, scroll reveal, selected-works rail, shell anchors on non-home pages
- `src/input.css` — @theme tokens and the component stylesheet (compiled to assets/styles.css at deploy)
- `assets/img/` — paintings and photos (WebP); `assets/logo/` — seal logo and mark (PNG)
- `llms.txt` [content] — business summary for AI crawlers
- `robots.txt`, `sitemap.xml`, `_redirects`, `site.webmanifest`

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
