import Link from 'next/link'
import { siteConfig } from '../../site.config'

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">{siteConfig.name}</h1>
      <p className="text-lg text-gray-600 mt-4">{siteConfig.description}</p>
      <div className="mt-8">
        <Link
          href="/blog/"
          className="text-blue-600 hover:underline font-medium"
        >
          Read our blog
        </Link>
      </div>
    </main>
  )
}
