// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-js": () => import("/Users/gracescheibe/git/dangers-of-spear-phishing/src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---src-templates-home-page-js": () => import("/Users/gracescheibe/git/dangers-of-spear-phishing/src/templates/home-page.js" /* webpackChunkName: "component---src-templates-home-page-js" */),
  "component---src-templates-pricing-page-js": () => import("/Users/gracescheibe/git/dangers-of-spear-phishing/src/templates/pricing-page.js" /* webpackChunkName: "component---src-templates-pricing-page-js" */),
  "component---src-templates-contact-page-js": () => import("/Users/gracescheibe/git/dangers-of-spear-phishing/src/templates/contact-page.js" /* webpackChunkName: "component---src-templates-contact-page-js" */),
  "component---src-templates-about-page-js": () => import("/Users/gracescheibe/git/dangers-of-spear-phishing/src/templates/about-page.js" /* webpackChunkName: "component---src-templates-about-page-js" */),
  "component---src-templates-article-page-js": () => import("/Users/gracescheibe/git/dangers-of-spear-phishing/src/templates/article-page.js" /* webpackChunkName: "component---src-templates-article-page-js" */),
  "component---src-templates-tags-js": () => import("/Users/gracescheibe/git/dangers-of-spear-phishing/src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/gracescheibe/git/dangers-of-spear-phishing/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/gracescheibe/git/dangers-of-spear-phishing/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-tags-index-js": () => import("/Users/gracescheibe/git/dangers-of-spear-phishing/src/pages/tags/index.js" /* webpackChunkName: "component---src-pages-tags-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/gracescheibe/git/dangers-of-spear-phishing/.cache/data.json")

