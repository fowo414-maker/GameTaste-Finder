// Cloudflare Pages Function: serves the English site to visitors outside
// Korea. Runs at the edge on every request using Cloudflare's own geo-IP
// data (request.cf.country), so there's no extra API call or client-side
// flash of the wrong language.
//
// Only the pages that have an /en/ translation are redirected; everything
// else (css/js/images, game detail pages, robots.txt, sitemap.xml) is left
// untouched. Visitors can still reach the Korean pages directly, and
// visiting /en/ manually always works regardless of country.
const TRANSLATED_PATHS = {
  "/": "/en/",
  "/index.html": "/en/index.html",
  "/about.html": "/en/about.html",
  "/contact.html": "/en/contact.html",
  "/privacy.html": "/en/privacy.html",
  "/copyright.html": "/en/copyright.html"
};

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const country = request.cf && request.cf.country;
  const target = TRANSLATED_PATHS[url.pathname];

  if (country && country !== "KR" && target) {
    url.pathname = target;
    return Response.redirect(url.toString(), 302);
  }

  return next();
}
