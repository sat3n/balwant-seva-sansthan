import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'hi'];
  const routes = ['', '/about', '/library', '/programs', '/gallery', '/get-involved', '/blog'];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${SITE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }
  }

  return entries;
}
