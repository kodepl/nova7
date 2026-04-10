export const SITE_CONFIG = {
  name: 'Nova7 Insights',
  description: 'Discover cutting-edge insights on technology, science, lifestyle, and personal growth. Your daily source of knowledge and inspiration.',
  url: 'https://nova7.top',
  language: 'en-US',
  defaultAuthor: 'Nova7 Editorial Team',
  organization: {
    name: 'Nova7 Insights',
    email: 'hello@nova7.top',
    logo: '/logo.png',
    sameAs: [],
  },
} as const;

export type LayoutVariant = 'grid' | 'list' | 'magazine' | 'minimal';
export type SidebarPosition = 'left' | 'right' | 'none';
export type HeaderStyle = 'standard' | 'centered' | 'minimal';
export type FooterStyle = 'standard' | 'compact' | 'none';

const getPrefixedClass = (className: string): string => {
  return `${LAYOUT_CONFIG.htmlStructure.prefix}-${className}`;
};

export const LAYOUT_CONFIG = {
  homeVariant: 'magazine' as LayoutVariant,
  sidebarPosition: 'right' as SidebarPosition,
  headerStyle: 'standard' as HeaderStyle,
  footerStyle: 'compact' as FooterStyle,
  showSidebar: true,
  showTags: true,
  showAuthor: true,
  showDates: true,
  showReadingTime: true,
  showRelatedPosts: true,
  showBreadcrumbs: true,
  showSearch: false,
  postsPerPage: 10,
  postsPerRow: 3,
  relatedPostsCount: 3,
  maxTagsInCloud: 25,
  htmlStructure: {
    mainId: 'main-content',
    wrapperClass: 'site-wrapper',
    articleClass: 'content-card',
    headingClass: 'section-heading',
    prefix: 'nova',
  },
  colors: {
    headerBg: 'bg-gradient-to-r from-primary-600 to-secondary-600',
    headerBorder: 'border-b border-primary-200',
    sidebarBg: 'bg-surface-alt',
    footerBg: 'bg-slate-800',
    footerText: 'text-slate-300',
    cardBg: 'bg-white',
    cardBorder: 'border border-slate-100 shadow-sm',
    linkColor: 'text-primary-600',
    linkHover: 'hover:text-primary-700',
  },
  getPrefixedClass,
} as const;

export const SEO_CONFIG = {
  defaultTitle: '%s | Nova7 Insights',
  titleTemplate: '%s',
  defaultOgImage: '/og-default.jpg',
  twitterHandle: '@nova7insights',
  twitterCardType: 'summary_large_image',
  googleSiteVerification: '',
  bingSiteVerification: '',
  yandexVerification: '',
  robotsDefault: 'index, follow',
  trailingSlash: true,
} as const;

export function getFullUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const baseUrl = SITE_CONFIG.url.endsWith('/') ? SITE_CONFIG.url.slice(0, -1) : SITE_CONFIG.url;
  return `${baseUrl}${cleanPath}`;
}

export function getPaginationPath(page: number): string {
  if (page === 1) return '/';
  return `/page/${page}/`;
}
