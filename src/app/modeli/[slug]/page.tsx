import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllModels, getModelBySlug } from '@/lib/models'
import { generatePageMetadata } from '@/lib/seo'

const modelImages: Record<string, { src: string; alt: string }> = {
  solo: { src: '/images/cabins/solo.png', alt: 'Акустична кабіна SilentBox Solo для ресторану на 1 особу' },
  duet: { src: '/images/cabins/duet.png', alt: 'VIP кабіна SilentBox Duet для ресторану на 2 особи' },
  quartet: { src: '/images/cabins/quartet.png', alt: 'Переговорна кабіна SilentBox Quartet для готелю на 4 особи' },
  lite: { src: '/images/cabins/solo-lite.png', alt: 'Акустична кабіна SilentBox Solo Lite для персоналу ресторану' },
  'duet-lite': { src: '/images/cabins/duet-lite.png', alt: 'Приватна зона SilentBox Duet Lite для готелю' },
  'quartet-lite': { src: '/images/cabins/quartet-lite.png', alt: 'Звукоізоляційна кабіна SilentBox Quartet Lite для кейтерингу' },
  workpod: { src: '/images/cabins/workpod.png', alt: 'Робоче місце SilentBox WorkPod для адміністрації ресторану' },
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
    premium: { background: '#e8f5ee', color: '#1a5632' },
    lite: { background: '#fdf6e3', color: '#9a7b2e' },
    pro: { background: '#fbeee5', color: '#8b4513' },
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
    <main className="max-w-4xl mx-auto px-4 py-16" style={{ background: 'var(--color-bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <nav className="mb-8 text-sm" style={{ color: 'var(--color-text-light)' }}>
        <Link href="/modeli/" className="hover:underline" style={{ color: 'var(--color-text-light)' }}>
          Каталог моделей
        </Link>
        <span className="mx-2">/</span>
        <span style={{ color: 'var(--color-primary)' }}>{model.fullName}</span>
      </nav>

      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-primary)' }}>{model.fullName}</h1>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={lineBadgeStyles[model.line]}
        >
          {model.lineLabel}
        </span>
      </div>

      <p className="text-lg mb-8" style={{ color: 'var(--color-text-light)' }}>{model.feature}</p>

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
        <p className="leading-relaxed" style={{ color: 'var(--color-text)' }}>{model.description}</p>
      </div>

      {/* Features list */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-primary)' }}>Ключові особливості</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {model.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#1a5632"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span style={{ color: 'var(--color-text)' }}>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-primary)' }}>Технічні характеристики</h2>
        <table className="w-full border-collapse">
          <tbody>
            {specs.map((spec) => (
              <tr key={spec.label} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td className="py-3 pr-4 font-medium w-1/3" style={{ color: 'var(--color-text-light)' }}>
                  {spec.label}
                </td>
                <td className="py-3" style={{ color: 'var(--color-primary)' }}>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Shared specs */}
      <section className="mb-12 p-6 rounded-xl" style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)' }}>
        <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-primary)' }}>Спільне для всіх моделей</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm" style={{ color: 'var(--color-text)' }}>
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
          className="btn-primary text-lg"
        >
          Замовити {model.fullName}
        </Link>
        <Link
          href="/kontakty/"
          className="btn-green text-lg"
        >
          Безкоштовний аудит
        </Link>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-primary)' }}>Дивіться також</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherModels.map((other) => (
            <Link
              key={other.slug}
              href={`/modeli/${other.slug}/`}
              className="block rounded-lg p-4 transition-colors no-underline"
              style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg)' }}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold" style={{ color: 'var(--color-primary)' }}>{other.fullName}</h3>
                <span className="text-xs font-medium" style={{ color: 'var(--color-text-light)' }}>{other.lineLabel}</span>
              </div>
              <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>{other.capacity}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
