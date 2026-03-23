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

  const assemblyTime = model.slug === 'solo' || model.slug === 'lite' ? '60 хв' :
    model.slug === 'duet' || model.slug === 'duet-lite' ? '2-3 год' : '3-4 год'

  return (
    <main style={{ background: 'var(--color-bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Product Hero Banner */}
      <section
        className="pt-24 pb-12"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <nav className="mb-6 text-sm">
            <Link href="/kataloh/" className="hover:underline" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Каталог кабін
            </Link>
            <span className="mx-2" style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{model.fullName}</span>
          </nav>

          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#ffffff' }}>
              {model.fullName}
            </h1>
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full"
              style={{
                background: model.line === 'premium' ? 'linear-gradient(135deg, #1a5632, #134425)' :
                  model.line === 'lite' ? 'linear-gradient(135deg, #b8860b, #8b6914)' :
                  'linear-gradient(135deg, #8b4513, #6b3410)',
                color: '#ffffff',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {model.lineLabel}
            </span>
          </div>

          <p className="text-lg mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>{model.feature}</p>

          {/* Key stats row */}
          <div className="flex flex-wrap gap-6 md:gap-10 mb-8">
            {[
              { label: 'Звукоізоляція', value: model.soundInsulation },
              { label: 'Розміри', value: model.dimensions },
              { label: 'Збірка', value: assemblyTime },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xs font-medium mb-1" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </div>
                <div className="text-lg font-bold" style={{ color: '#c87941', fontFamily: "'Inter', sans-serif" }}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/zviazatysya/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-all"
              style={{ background: '#c87941', fontFamily: "'Inter', sans-serif" }}
            >
              Дізнатися ціну
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/zviazatysya/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all"
              style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)', color: '#ffffff', fontFamily: "'Inter', sans-serif" }}
            >
              Замовити {model.name}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">

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

      {/* Color Variants */}
      <section className="mb-12 p-6 rounded-xl" style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)' }}>
        <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-primary)' }}>
          Доступні кольори
        </h3>
        <div className="flex flex-wrap gap-3 mb-4">
          {['Білий', 'Антрацит', 'Сірий', 'Дуб', 'Горіх'].map((color) => (
            <span
              key={color}
              className="text-sm font-medium px-4 py-2 rounded-lg"
              style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', color: 'var(--color-text)', fontFamily: "'Inter', sans-serif" }}
            >
              {color}
            </span>
          ))}
        </div>
        <p className="text-sm" style={{ color: 'var(--color-text-light)', fontFamily: "'Inter', sans-serif" }}>
          21 варіант зовнішніх панелей та 10+ дизайнерських варіантів внутрішнього оздоблення. Зв&#39;яжіться з нами для підбору ідеального кольору під ваш офіс.
        </p>
      </section>

      <div className="flex gap-4 mb-16">
        <Link
          href="/zviazatysya/"
          className="btn-primary text-lg"
        >
          Замовити {model.fullName}
        </Link>
        <Link
          href="/zviazatysya/"
          className="btn-green text-lg"
        >
          Безкоштовний аудит офісу
        </Link>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-primary)' }}>Дивіться також</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherModels.map((other) => (
            <Link
              key={other.slug}
              href={`/kataloh/${other.slug}/`}
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
      </div>
    </main>
  )
}
