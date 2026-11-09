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

## Blog
- Posts are Markdown files in `_posts`. See **HOW-TO-WRITE-A-POST.md**.
- The blog page is `blog/index.html`; the post design is `_layouts/post.html`.
- The site is built by GitHub Pages (Jekyll). Settings are in `_config.yml`. The shared header and footer for the blog are in `_includes`. If you change the menu, change it in the `.html` pages **and** in `_includes/header.html`.
