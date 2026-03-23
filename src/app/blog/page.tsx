import { getAllPosts } from '@/lib/blog'
import { generatePageMetadata } from '@/lib/seo'
import PostCard from '@/components/blog/PostCard'

export const metadata = generatePageMetadata({
  title: 'Блог — статті про акустику в ресторанах | grand-catering.com.ua',
  description: 'Корисні статті про звукоізоляцію в ресторанах та готелях, акустичні кабіни SilentBox та комфорт гостей. Поради від експертів.',
  path: '/blog/',
})

export default function BlogListPage() {
  const posts = getAllPosts()

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Блог</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}
