import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CLe73t1D.mjs';
import 'kleur/colors';
import { g as getCollection, S as SITE_CONFIG, L as LAYOUT_CONFIG } from '../chunks/_astro_content_DMd3PAkV.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BwYlJaqB.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_CGkKQ2ta.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog", ({ data }) => !data.draft);
  const posts = allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  let featuredPost = null;
  let regularPosts = posts;
  if (posts.length > 0) {
    featuredPost = posts.find((p) => p.data.featured) || posts[0];
    regularPosts = posts.filter((p) => p.slug !== featuredPost?.slug);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": SITE_CONFIG.name, "description": SITE_CONFIG.description, "type": "website", "breadcrumbs": [] }, { "default": async ($$result2) => renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="space-y-8"> ${featuredPost && renderTemplate`<section class="featured-hero">${renderComponent($$result2, "PostCard", $$PostCard, { "post": featuredPost, "variant": "featured" })}</section>`} <section class="posts-grid"> <h2${addAttribute(`${LAYOUT_CONFIG.htmlStructure.headingClass} text-2xl font-bold text-slate-900 mb-6 font-heading`, "class")}>Latest Articles</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${regularPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "variant": "default" })}`)} </div> </section> </div>`}${LAYOUT_CONFIG.homeVariant === "grid"}<section class="mt-16 p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl"> <h2 class="text-2xl font-bold text-slate-900 mb-4 font-heading">Welcome to ${SITE_CONFIG.name}</h2> <p class="text-slate-600 leading-relaxed">${SITE_CONFIG.description}</p> </section> ` })}`;
}, "E:/_PROJEKTY/_ZAPLECZE/_cms/nova7/src/pages/index.astro", void 0);

const $$file = "E:/_PROJEKTY/_ZAPLECZE/_cms/nova7/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
