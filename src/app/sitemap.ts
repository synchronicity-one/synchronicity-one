import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const lastModified = new Date('2026-08-01');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://synchronicity.one/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://synchronicity.one/what-we-do',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://synchronicity.one/contact',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
