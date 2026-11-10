const origins = new Set([
  "https://salihtheguide.com",
  "https://www.salihtheguide.com",
  "http://salihtheguide.com",
  "http://www.salihtheguide.com",
]);

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    const headers = {"Vary": "Origin"};
    if (origins.has(origin)) headers["Access-Control-Allow-Origin"] = origin;
    const {pathname} = new URL(request.url);

    if (request.method === "GET" && pathname === "/counts") {
      const {results} = await env.CLICKS.prepare("SELECT slug, clicks FROM post_clicks").all();
      return Response.json(Object.fromEntries(results.map(({slug, clicks}) => [slug, clicks])), {
        headers: {...headers, "Cache-Control": "public, max-age=60"},
      });
    }

    const match = pathname.match(/^\/click\/([a-z0-9]+(?:-[a-z0-9]+)*)$/);
    if (!match || match[1].length > 120) return new Response(null, {status: 404, headers});
    if (!origins.has(origin)) return new Response(null, {status: 403, headers});
    if (request.method !== "POST") return new Response(null, {status: 405, headers: {...headers, Allow: "POST"}});

    await env.CLICKS.prepare(
      "INSERT INTO post_clicks (slug, clicks) VALUES (?, 1) ON CONFLICT(slug) DO UPDATE SET clicks = clicks + 1"
    ).bind(match[1]).run();
    return new Response(null, {status: 204, headers});
  },
};
