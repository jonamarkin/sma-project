export interface NavLink {
  href: string;
  label: string;
}

export const navigationLinks: NavLink[] = [
  { href: '/sheet-music', label: 'Sheet Music' },
  { href: '/events', label: 'Events' },
  { href: '/blog', label: 'Blog' },
  { href: '/recommendations', label: 'AI Tools' },
  { href: '/favorites', label: 'Favorites' },
];
