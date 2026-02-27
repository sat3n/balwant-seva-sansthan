export const SITE_URL = 'https://balwantfoundation.org';
export const FOUNDATION_NAME = 'Balwant Seva Sansthan';

export const NAV_ITEMS = [
  { href: '/', translationKey: 'home' },
  { href: '/about', translationKey: 'about' },
  { href: '/library', translationKey: 'library' },
  { href: '/programs', translationKey: 'programs' },
  { href: '/gallery', translationKey: 'gallery' },
  { href: '/get-involved', translationKey: 'getInvolved' },
  { href: '/blog', translationKey: 'blog' },
] as const;

export const IMPACT_STATS = [
  { value: '40+', translationKey: 'children' },
  { value: '5', translationKey: 'villages' },
  { value: '50+', translationKey: 'books' },
  { value: '1', translationKey: 'camps' },
] as const;

export const PROGRAM_KEYS = [
  'medical',
  'education',
  'agriculture',
  'government',
] as const;

export const GALLERY_CATEGORIES = [
  'all',
  'education',
  'library',
  'healthcare',
  'events',
] as const;

export const GALLERY_ITEMS = [
  { id: 1, category: 'healthcare', color: '#E07A2F' },
  { id: 2, category: 'education', color: '#2E7D32' },
  { id: 3, category: 'library', color: '#D4A843' },
  { id: 4, category: 'events', color: '#1B5E20' },
  { id: 5, category: 'education', color: '#C06A20' },
  { id: 6, category: 'healthcare', color: '#4CAF50' },
  { id: 7, category: 'library', color: '#B8902A' },
  { id: 8, category: 'events', color: '#E07A2F' },
] as const;
