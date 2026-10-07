# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: JayaKrishna Arts – Painted by hand. Kept for generations.
purpose: Home page for JayaKrishna Arts, presenting the brand and a contact form for custom hand-painted work.
sections:
- `#hero` — Hero introduction
- `#contact` "Tell us what you have in mind." — Enquiry form

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `llms.txt` — 58 bytes — too small to hold content
- `robots.txt` — 45 bytes — too small to hold content
- `sitemap.xml` — 160 bytes — too small to hold content

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
