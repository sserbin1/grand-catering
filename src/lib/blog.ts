import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { renderMarkdown } from './markdown'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  htmlContent?: string
  metaTitle?: string
  metaDescription?: string
  keywords: string[]
  publishedAt: string
  category?: string
  language?: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'statti')

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    return getPostBySlug(slug)
  })

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    content,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    keywords: data.keywords || [],
    publishedAt: data.publishedAt || '',
    category: data.category,
    language: data.language,
  }
}

export async function getPostBySlugWithHtml(slug: string): Promise<BlogPost> {
  const post = getPostBySlug(slug)
  const htmlContent = await renderMarkdown(post.content)
  return { ...post, htmlContent }
}
