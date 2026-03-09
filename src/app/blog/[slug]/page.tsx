import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug, getPostBySlugWithHtml } from '@/lib/blog'
import { generatePageMetadata, generateArticleJsonLd } from '@/lib/seo'
import PostContent from '@/components/blog/PostContent'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  return generatePageMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}/`,
    keywords: post.keywords,
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlugWithHtml(slug)
  const jsonLd = generateArticleJsonLd(post)

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <header className="mb-8">
          {post.category && (
            <span className="text-sm text-gray-500 uppercase tracking-wide">
              {post.category}
            </span>
          )}
          <h1 className="text-4xl font-bold mt-2">{post.title}</h1>
          <time className="text-gray-500 mt-2 block" dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>
        {post.htmlContent && <PostContent htmlContent={post.htmlContent} />}
      </article>
    </main>
  )
}
