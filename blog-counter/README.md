# Blog popularity counter

GitHub Pages serves the blog. This optional Cloudflare Worker stores aggregate post-card clicks in D1. Counts start at zero. Opening a post directly does not increment it. Equal counts preserve the blog's original ordering. No cookie, visitor ID, IP address or referrer is stored in the database. Cloudflare may process request metadata.

## Enable before merging the website update

From this directory, use a Cloudflare account you control and a current Wrangler CLI:

1. Run `npx wrangler login` and `npx wrangler d1 create salihtheguide-blog-clicks`.
2. Put the returned database ID in the local `wrangler.toml`.
3. Run `npx wrangler d1 execute salihtheguide-blog-clicks --remote --file=schema.sql`.
4. Run `npx wrangler deploy` and open `/counts` on the returned HTTPS origin. A new database returns `{}`.
5. Set `blog_click_counter` in the website's `_config.yml` to that Worker origin, with no path. No credentials are needed in the website.
6. From the live site, click a blog card and confirm that the post's slug appears in `/counts` after the cache period of up to one minute.

An empty setting or unavailable counter preserves the original ordering. Requests can be blocked by browsers or ad blockers. The counts are for navigation, not an audited metric.
