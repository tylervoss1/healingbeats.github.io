/** Build an internal link that respects the site's base path. */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export const ROUTES = {
  home: '/',
  hospitals: '/hospitals/',
  volunteer: '/volunteer/',
  donate: '/donate/',
  chapter: '/start-a-chapter/',
  about: '/about/',
} as const;

/** The same labels are used in the header, menu and footer. */
export const NAV = [
  { href: ROUTES.hospitals, label: 'For Hospitals' },
  { href: ROUTES.volunteer, label: 'Volunteer' },
  { href: ROUTES.chapter, label: 'Start a Chapter' },
  { href: ROUTES.about, label: 'About' },
] as const;
