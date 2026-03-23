import type { Metadata } from 'next'
import Image from 'next/image'
import { getAllPosts, getPostBySlug, getPostBySlugWithHtml } from '@/lib/blog'
import { generatePageMetadata, generateArticleJsonLd } from '@/lib/seo'
import PostContent from '@/components/blog/PostContent'

const blogImages: Record<string, { src: string; alt: string }> = {
  'akustyka-v-restorani': { src: '/images/blog/akustyka-v-restorani.jpg', alt: 'Акустика в офісі -- як створити комфорт для працівників' },
  'vip-zony-v-restoranakh': { src: '/images/blog/vip-zony-v-restoranakh.jpg', alt: 'Переговорні зони в офісах -- приватність для зустрічей' },
  'oglyad-kabin-silentbox-restorany': { src: '/images/blog/oglyad-kabin-silentbox-restorany.jpg', alt: 'Огляд акустичних кабін SilentBox для офісу: Solo, Duet, Quartet' },
  'shum-u-restorani-problemy': { src: '/images/blog/shum-u-restorani-problemy.jpg', alt: 'Шум в open-space -- проблеми та рішення звукоізоляції' },
  'zvukoizolyatsiya-restoran-5-sposobiv': { src: '/images/blog/zvukoizolyatsiya-restoran-5-sposobiv.jpg', alt: 'Звукоізоляція офісу: 5 способів знизити шум' },
}

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
    path: `/statti/${post.slug}/`,
    keywords: post.keywords,
  })
}

export default async function StattiPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlugWithHtml(slug)
  const jsonLd = generateArticleJsonLd(post)

  return (
    <main className="max-w-3xl mx-auto px-4 py-16" style={{ background: '#0e0e0d' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <header className="mb-8">
          {post.category && (
            <span className="text-sm uppercase tracking-wide" style={{ color: '#c89b5a' }}>
              {post.category}
            </span>
          )}
          <h1 className="text-4xl font-bold mt-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#f5f3ee' }}>{post.title}</h1>
          <time className="mt-2 block" style={{ color: 'rgba(245,243,238,0.5)' }} dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('uk-UA', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>
        {blogImages[post.slug] && (
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10" style={{ border: '1px solid rgba(245,243,238,0.08)' }}>
            <Image
              src={blogImages[post.slug].src}
              alt={blogImages[post.slug].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}
        {post.htmlContent && <PostContent htmlContent={post.htmlContent} />}
      </article>
    </main>
  )
}
