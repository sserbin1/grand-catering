import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllModels, getModelBySlug } from '@/lib/models'
import { generatePageMetadata } from '@/lib/seo'

const modelImages: Record<string, { src: string; alt: string }> = {
  solo: { src: '/images/cabins/solo.png', alt: 'Акустична кабіна SilentBox Solo на 1 особу' },
  duet: { src: '/images/cabins/duet.png', alt: 'Акустична кабіна SilentBox Duet на 2 особи' },
  quartet: { src: '/images/cabins/quartet.png', alt: 'Акустична кабіна SilentBox Quartet на 4 особи' },
  lite: { src: '/images/cabins/solo-lite.png', alt: 'Акустична кабіна SilentBox Solo Lite' },
  'duet-lite': { src: '/images/cabins/duet-lite.png', alt: 'Акустична кабіна SilentBox Duet Lite' },
  'quartet-lite': { src: '/images/cabins/quartet-lite.png', alt: 'Акустична кабіна SilentBox Quartet Lite на 4 особи' },
  workpod: { src: '/images/cabins/workpod.png', alt: 'Робоче місце SilentBox WorkPod' },
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
    path: `/modeli/${model.slug}/`,
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
    premium: { background: 'var(--color-accent-light)', color: 'var(--color-accent)' },
    lite: { background: '#e8f5e9', color: '#2e7d32' },
    pro: { background: '#fff3e0', color: '#e65100' },
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: model.fullName,
    description: model.metaDescription,
    brand: {
      '@type': 'Brand',
      name: 'SilentBox',
    },
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/modeli/" className="hover:text-gray-900">
          Каталог моделей
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{model.fullName}</span>
      </nav>

      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold">{model.fullName}</h1>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={lineBadgeStyles[model.line]}
        >
          {model.lineLabel}
        </span>
      </div>


      <p className="text-lg text-gray-600 mb-8">{model.feature}</p>

      {/* Product photo */}
      {modelImages[model.slug] && (
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-10">
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
        <p className="text-gray-700 leading-relaxed">{model.description}</p>
      </div>

      {/* Features list */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Ключові особливості</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {model.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="var(--color-accent)"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Технічні характеристики</h2>
        <table className="w-full border-collapse">
          <tbody>
            {specs.map((spec) => (
              <tr key={spec.label} className="border-b border-gray-200">
                <td className="py-3 pr-4 text-gray-500 font-medium w-1/3">
                  {spec.label}
                </td>
                <td className="py-3 text-gray-900">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Shared specs */}
      <section className="mb-12 p-6 rounded-xl" style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)' }}>
        <h3 className="text-lg font-semibold mb-3">Спільне для всіх моделей</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
          <li>Доставка: 3-5 робочих днів (Україна та Європа)</li>
          <li>Гарантія: до 10 років на конструкцію</li>
          <li>Патентований дизайн</li>
          <li>21 варіант кольорів</li>
          <li>Електрика: 220V + USB + USB-C</li>
          <li>30+ країн доставки</li>
        </ul>
      </section>

      <div className="flex gap-4 mb-16">
        <Link
          href="/kontakty/"
          className="inline-block px-8 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors text-lg"
        >
          Замовити {model.fullName}
        </Link>
        <Link
          href="/kontakty/"
          className="inline-block px-8 py-3 border border-gray-900 text-gray-900 rounded hover:bg-gray-50 transition-colors text-lg"
        >
          Безкоштовна консультація
        </Link>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Дивіться також</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherModels.map((other) => (
            <Link
              key={other.slug}
              href={`/modeli/${other.slug}/`}
              className="block border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold">{other.fullName}</h3>
                <span className="text-xs font-medium text-gray-500">{other.lineLabel}</span>
              </div>
              <p className="text-sm text-gray-500">{other.capacity}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
