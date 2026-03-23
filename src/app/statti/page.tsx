import { getAllPosts } from '@/lib/blog'
import { generatePageMetadata } from '@/lib/seo'
import PostCard from '@/components/blog/PostCard'

export const metadata = generatePageMetadata({
  title: 'Статті — акустика в офісі, звукоізоляція open-space | grand-catering.com.ua',
  description: 'Корисні статті про звукоізоляцію офісу, акустичні кабіни SilentBox для open-space, переговорні кімнати та продуктивність працівників. Поради від експертів з акустичних рішень.',
  path: '/statti/',
  keywords: [
    'звукоізоляція офісу',
    'акустична кабіна для офісу',
    'переговорна кабіна офіс',
    'шумоізоляція open-space',
    'акустичне рішення коворкінг',
    'продуктивність в офісі',
  ],
})

export default function StattiListPage() {
  const posts = getAllPosts()

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-primary)' }}>Статті</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}
