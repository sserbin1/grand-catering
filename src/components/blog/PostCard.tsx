'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

const blogImages: Record<string, string> = {
  'akustyka-v-restorani': '/images/blog/akustyka-v-restorani.jpg',
  'vip-zony-v-restoranakh': '/images/blog/vip-zony-v-restoranakh.jpg',
  'oglyad-kabin-silentbox-restorany': '/images/blog/oglyad-kabin-silentbox-restorany.jpg',
  'shum-u-restorani-problemy': '/images/blog/shum-u-restorani-problemy.jpg',
  'zvukoizolyatsiya-restoran-5-sposobiv': '/images/blog/zvukoizolyatsiya-restoran-5-sposobiv.jpg',
}

interface PostCardProps {
  post: BlogPost
}

export default function PostCard({ post }: PostCardProps) {
  const imgSrc = blogImages[post.slug]

  return (
    <article
      className="rounded-lg overflow-hidden transition-shadow"
      style={{
        border: '1px solid var(--color-border, #e8e2db)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(26, 86, 50, 0.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {imgSrc && (
        <Link href={`/blog/${post.slug}/`} className="block relative w-full aspect-[16/9]">
          <Image
            src={imgSrc}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Link>
      )}
      <div className="p-6">
        {post.category && (
          <span
            className="text-xs font-semibold uppercase tracking-wide"
            style={{ color: 'var(--color-accent, #1a5632)', fontFamily: "'Inter', sans-serif" }}
          >
            {post.category}
          </span>
        )}
        <h2 className="text-xl font-semibold mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          <Link
            href={`/blog/${post.slug}/`}
            className="transition-colors"
            style={{ color: 'var(--color-text, #1a1a1a)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent, #1a5632)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text, #1a1a1a)' }}
          >
            {post.title}
          </Link>
        </h2>
        <p className="mt-2 text-sm line-clamp-2" style={{ color: 'var(--color-text-light, #6b6560)', fontFamily: "'Inter', sans-serif" }}>
          {post.excerpt}
        </p>
        <time
          className="text-xs mt-3 block"
          dateTime={post.publishedAt}
          style={{ color: 'var(--color-text-light, #6b6560)', fontFamily: "'Inter', sans-serif" }}
        >
          {new Date(post.publishedAt).toLocaleDateString('uk-UA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>
    </article>
  )
}
