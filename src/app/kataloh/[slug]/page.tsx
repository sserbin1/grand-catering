import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllModels, getModelBySlug } from '@/lib/models'
import { generatePageMetadata } from '@/lib/seo'

const modelImages: Record<string, { src: string; alt: string }> = {
  solo: { src: '/images/cabins/solo.png', alt: 'Акустична кабіна SilentBox Solo для офісу на 1 особу' },
  duet: { src: '/images/cabins/duet.png', alt: 'Переговорна кабіна SilentBox Duet для офісу на 2 особи' },
  quartet: { src: '/images/cabins/quartet.png', alt: 'Міні-конференц-зал SilentBox Quartet для офісу на 4 особи' },
  lite: { src: '/images/cabins/solo-lite.png', alt: 'Телефонна кабіна SilentBox Solo Lite для open-space' },
  'duet-lite': { src: '/images/cabins/duet-lite.png', alt: 'Переговорна кабіна SilentBox Duet Lite для офісу' },
  'quartet-lite': { src: '/images/cabins/quartet-lite.png', alt: 'Переговорна кімната SilentBox Quartet Lite для офісу' },
  workpod: { src: '/images/cabins/workpod.png', alt: 'Робоче місце SilentBox WorkPod для зосередженої роботи' },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  const models = getAllModels()
  return models.map((model) => ({ slug: model.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const model = getModelBySlug(slug)

  if (!model) {
    return { title: 'Модель не знайдена' }
  }

  return generatePageMetadata({
    title: model.metaTitle,
    description: model.metaDescription,
    path: `/kataloh/${model.slug}/`,
  })
}

export default async function ModelPage({ params }: PageProps) {
  const { slug } = await params
  const model = getModelBySlug(slug)

  if (!model) {
    notFound()
  }

  const allModels = getAllModels()
  const otherModels = allModels.filter((m) => m.slug !== model.slug)

  const specs: { label: string; value: string }[] = [
    { label: 'Лінійка', value: model.lineLabel },
    { label: 'Місткість', value: model.capacity },
    { label: 'Розміри (Ш\u00d7Г)', value: model.dimensions },
    { label: 'Висота', value: model.height },
    { label: 'Вага', value: model.weight },
    { label: 'Звукоізоляція', value: model.soundInsulation },
    { label: 'Вентиляція', value: model.ventilation },
    { label: 'Освітлення', value: model.lighting },
  ]

  const lineBadgeStyles = {
    premium: { background: 'rgba(200, 155, 90, 0.15)', color: '#c89b5a' },
    lite: { background: 'rgba(200, 155, 90, 0.1)', color: 'rgba(200, 155, 90, 0.8)' },
    pro: { background: 'rgba(200, 155, 90, 0.08)', color: 'rgba(200, 155, 90, 0.7)' },
  }

  // Parse price for Schema.org (remove ~ and spaces)
  const numericPrice = model.price.replace(/[~\s]/g, '')

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: model.fullName,
    description: model.metaDescription,
    brand: {
      '@type': 'Brand',
      name: 'SilentBox',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: numericPrice,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Grand Catering',
      },
    },
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16" style={{ background: '#0e0e0d' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <nav className="mb-8 text-sm" style={{ color: 'rgba(245,243,238,0.5)' }}>
        <Link href="/kataloh/" className="hover:underline" style={{ color: 'rgba(245,243,238,0.5)' }}>
          Каталог кабін
        </Link>
        <span className="mx-2">/</span>
        <span style={{ color: '#c89b5a' }}>{model.fullName}</span>
      </nav>

      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#f5f3ee' }}>{model.fullName}</h1>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={lineBadgeStyles[model.line]}
        >
          {model.lineLabel}
        </span>
      </div>

      <p className="text-lg mb-4" style={{ color: 'rgba(245,243,238,0.65)' }}>{model.feature}</p>

      {/* Price */}
      {model.price && (
        <div className="mb-8">
          <span className="text-3xl font-bold" style={{ color: '#c89b5a', fontFamily: "'Cormorant Garamond', serif" }}>&euro;{model.price}</span>
          {model.priceNote && <span className="text-sm ml-3" style={{ color: 'rgba(245,243,238,0.4)' }}>{model.priceNote}</span>}
        </div>
      )}

      {/* Product photo */}
      {modelImages[model.slug] && (
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-10" style={{ border: '1px solid rgba(245,243,238,0.08)' }}>
          <Image
            src={modelImages[model.slug].src}
            alt={modelImages[model.slug].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      )}

      <div className="prose max-w-none mb-10">
        <p className="leading-relaxed" style={{ color: 'rgba(245,243,238,0.8)' }}>{model.description}</p>
      </div>

      {/* Features list */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#f5f3ee' }}>Ключові особливості</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {model.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#c89b5a" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span style={{ color: 'rgba(245,243,238,0.8)' }}>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#f5f3ee' }}>Технічні характеристики</h2>
        <table className="w-full border-collapse">
          <tbody>
            {specs.map((spec) => (
              <tr key={spec.label} style={{ borderBottom: '1px solid rgba(245,243,238,0.08)' }}>
                <td className="py-3 pr-4 font-medium w-1/3" style={{ color: 'rgba(245,243,238,0.5)' }}>
                  {spec.label}
                </td>
                <td className="py-3" style={{ color: '#f5f3ee' }}>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Shared specs */}
      <section className="mb-12 p-6 rounded-xl" style={{ background: '#1c1c1a', border: '1px solid rgba(245,243,238,0.08)' }}>
        <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#f5f3ee' }}>Спільне для всіх моделей</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm" style={{ color: 'rgba(245,243,238,0.65)' }}>
          <li>Доставка: 3-5 робочих днів (Україна та Європа)</li>
          <li>Гарантія: до 10 років на конструкцію</li>
          <li>Патентований дизайн</li>
          <li>21 варіант кольорів</li>
          <li>Електрика: 220V + USB + USB-C</li>
          <li>30+ країн доставки</li>
        </ul>
      </section>

      <div className="flex gap-4 mb-16">
        <Link href="/zviazatysya/" className="btn-primary text-lg">
          Замовити {model.fullName}
        </Link>
        <Link href="/zviazatysya/" className="btn-outline-gold text-lg">
          Безкоштовний аудит офісу
        </Link>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#f5f3ee' }}>Дивіться також</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherModels.map((other) => (
            <Link
              key={other.slug}
              href={`/kataloh/${other.slug}/`}
              className="block rounded-lg p-4 transition-colors no-underline card"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold" style={{ color: '#f5f3ee' }}>{other.fullName}</h3>
                <span className="text-xs font-medium" style={{ color: '#c89b5a' }}>{other.lineLabel}</span>
              </div>
              <p className="text-sm" style={{ color: 'rgba(245,243,238,0.5)' }}>{other.capacity}</p>
              {other.price && (
                <p className="text-sm font-semibold mt-1" style={{ color: '#c89b5a' }}>&euro;{other.price}</p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
