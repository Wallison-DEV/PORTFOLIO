import { MetadataRoute } from 'next'

const SITE_URL = 'https://wallison-costa.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { 'pt-BR': SITE_URL, en: `${SITE_URL}/en` } },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages: { 'pt-BR': SITE_URL, en: `${SITE_URL}/en` } },
    },
  ]
}
