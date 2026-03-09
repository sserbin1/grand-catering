import type { Metadata } from 'next'
import { siteConfig } from '../../site.config'
import type { BlogPost } from './blog'

interface PageMetadataInput {
  title: string
  description: string
  path?: string
  keywords?: string[]
}

export function generatePageMetadata(page: PageMetadataInput): Metadata {
  const url = page.path ? `${siteConfig.url}${page.path}` : siteConfig.url

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
  }
}

export function generateArticleJsonLd(post: BlogPost): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}/`,
    },
    keywords: post.keywords?.join(', '),
  }
}
