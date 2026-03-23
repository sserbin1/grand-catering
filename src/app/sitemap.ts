import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { getAllModels } from '@/lib/models'
import { siteConfig } from '../../site.config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const models = getAllModels()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}/`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const modelEntries: MetadataRoute.Sitemap = models.map((model) => ({
    url: `${siteConfig.url}/modeli/${model.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/modeli/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...modelEntries,
    {
      url: `${siteConfig.url}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries,
  ]
}
