'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

const blogImages: Record<string, string> = {
  'shum-v-ofisi-yak-vplyvaie': '/images/blog/akustyka-v-restorani.jpg',
  'open-space-chy-kabinety': '/images/blog/vip-zony-v-restoranakh.jpg',
  'oglyad-modelej-silentbox': '/images/blog/oglyad-kabin-silentbox-restorany.jpg',
  'yak-obraty-akustychnu-kabinu': '/images/blog/shum-u-restorani-problemy.jpg',
  'zvukoizolyatsiya-ofisu-7-sposobiv': '/images/blog/zvukoizolyatsiya-restoran-5-sposobiv.jpg',
}

interface PostCardProps {
  post: BlogPost
}

export default function PostCard({ post }: PostCardProps) {
  const imgSrc = blogImages[post.slug]

  return (
    <article className="card rounded-xl overflow-hidden">
      {imgSrc && (
        <Link href={`/statti/${post.slug}/`} className="block relative w-full aspect-[16/9]">
          <Image src={imgSrc} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </Link>
      )}
      <div className="p-6">
        {post.category && (
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#c89b5a' }}>{post.category}</span>
        )}
        <h2 className="text-xl font-semibold mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          <Link
            href={`/statti/${post.slug}/`}
            className="transition-colors"
            style={{ color: '#f5f3ee' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#c89b5a' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#f5f3ee' }}
          >
            {post.title}
          </Link>
        </h2>
        <p className="mt-2 text-sm line-clamp-2" style={{ color: 'rgba(245,243,238,0.5)' }}>{post.excerpt}</p>
        <time className="text-xs mt-3 block" dateTime={post.publishedAt} style={{ color: 'rgba(245,243,238,0.4)' }}>
          {new Date(post.publishedAt).toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      </div>
    </article>
  )
}
