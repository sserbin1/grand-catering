import { getAllPosts } from '@/lib/blog'
import { generatePageMetadata } from '@/lib/seo'
import PostCard from '@/components/blog/PostCard'

export const metadata = generatePageMetadata({
  title: 'Блог — статті про акустику в ресторанах та готелях | grand-catering.com.ua',
  description: 'Корисні статті про звукоізоляцію ресторану, акустичні кабіни SilentBox для HoReCa, VIP-зони для гостей та комфорт персоналу. Поради від експертів з акустичних рішень для кейтерингу.',
  path: '/blog/',
  keywords: [
    'звукоізоляція ресторану',
    'акустична кабіна для ресторану',
    'VIP кабіна ресторан',
    'шумоізоляція в ресторані',
    'акустичне рішення кейтеринг',
    'приватна зона ресторан',
  ],
})

export default function BlogListPage() {
  const posts = getAllPosts()

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-primary)' }}>Блог</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}
