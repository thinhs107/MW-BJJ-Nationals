import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://mwbjjn.com/sitemap.xml',
    host: 'https://mwbjjn.com',
  }
}
