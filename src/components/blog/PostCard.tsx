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
    <article className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
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
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#823494' }}>
            {post.category}
          </span>
        )}
        <h2 className="text-xl font-semibold mt-1">
          <Link href={`/blog/${post.slug}/`} className="hover:underline" style={{ color: '#2c2f38' }}>
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">{post.excerpt}</p>
        <time className="text-xs text-gray-400 mt-3 block" dateTime={post.publishedAt}>
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
