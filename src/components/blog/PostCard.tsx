import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

interface PostCardProps {
  post: BlogPost
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      {post.category && (
        <span className="text-sm text-gray-500 uppercase tracking-wide">
          {post.category}
        </span>
      )}
      <h2 className="text-xl font-semibold mt-2">
        <Link href={`/blog/${post.slug}/`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mt-2">{post.excerpt}</p>
      <time className="text-sm text-gray-400 mt-4 block" dateTime={post.publishedAt}>
        {new Date(post.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
    </article>
  )
}
