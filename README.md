# salihtheguide.com

Website of Muhammed Salih Güç, tour guide in Istanbul.

## How to update
- The homepage is `index.html`; it shows previews of the tours, your favourite guide picks (`fav:true` in `RECS`) and About me. Tours, the Istanbul guide, About me and Booking have their own HTML pages. They share `site.css` and `site.js`.
- The WhatsApp number is at the top of `site.js`, under `CONFIG`.
- Recommendations are in the `RECS` list, tours in `TOURS`, FAQ in `FAQ`.

## Hosting
GitHub Pages, branch `main`, folder `/ (root)`. The `CNAME` file holds the custom domain.

## Extra files
- `404.html`: shown when someone opens a page that doesn't exist.
- `og-image.png`: the picture shown when the link is shared on WhatsApp, Instagram etc.
- `sitemap.xml` and `robots.txt`: help Google find the pages. Add new pages to `sitemap.xml`.
- `fonts/`: the two fonts, stored on the site itself so nothing is loaded from Google. Keep the OFL licence files with them.
