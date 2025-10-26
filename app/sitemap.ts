export default function sitemap() {
  return [
    {
      url: 'https://probioseec.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://probioseec.com/politica-privacidad',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}