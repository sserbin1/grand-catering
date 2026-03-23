'use client'

import Image from 'next/image'
import Link from 'next/link'
import { getModelsByLine } from '@/lib/models'
import type { CabinModel, ModelLine } from '@/lib/models'

const modelImages: Record<string, string> = {
  solo: '/images/cabins/solo.png',
  duet: '/images/cabins/duet.png',
  quartet: '/images/cabins/quartet.png',
  lite: '/images/cabins/solo-lite.png',
  'duet-lite': '/images/cabins/duet-lite.png',
  'quartet-lite': '/images/cabins/quartet-lite.png',
  workpod: '/images/cabins/workpod.png',
}

const lineConfig = {
  premium: {
    label: 'Premium',
    tagBg: 'linear-gradient(135deg, #1a5632, #134425)',
    tagColor: '#ffffff',
    accent: '#1a5632',
    description: 'Максимальна звукоізоляція 35 дБ (ISO 23351-1). Сендвіч-панелі, триплекс скло, Smart Electronics.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  lite: {
    label: 'Lite',
    tagBg: 'linear-gradient(135deg, #b8860b, #8b6914)',
    tagColor: '#ffffff',
    accent: '#b8860b',
    description: 'Шумоізоляція 15-20 дБ. SMART сенсорне керування, 10+ дизайнерських варіантів оздоблення.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  pro: {
    label: 'Pro',
    tagBg: 'linear-gradient(135deg, #8b4513, #6b3410)',
    tagColor: '#ffffff',
    accent: '#8b4513',
    description: 'Окремі робочі місця з ергономічними столами для зосередженої роботи.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
} as const

function ModelCard({ model }: { model: CabinModel }) {
  const config = lineConfig[model.line]

  return (
    <Link
      href={`/kataloh/${model.slug}/`}
      className="group relative flex flex-col rounded-lg overflow-hidden cursor-pointer"
      style={{
        background: 'var(--color-bg, #fffcf8)',
        border: '1px solid var(--color-border, #e8e2db)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 20px 40px rgba(26, 86, 50, 0.12), 0 8px 16px rgba(0,0,0,0.06)'
        el.style.borderColor = config.accent
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
        el.style.borderColor = 'var(--color-border, #e8e2db)'
      }}
    >
      {/* Product image */}
      {modelImages[model.slug] && (
        <div className="relative w-full aspect-[4/3]" style={{ background: 'var(--color-bg-alt, #f7f3ee)' }}>
          <Image
            src={modelImages[model.slug]}
            alt={model.fullName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <span
            className="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full"
            style={{
              background: config.tagBg,
              color: config.tagColor,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {config.label}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3
              className="text-xl font-bold mb-1"
              style={{ color: 'var(--color-text, #1a1a1a)', fontFamily: "'Playfair Display', serif" }}
            >
              {model.fullName}
            </h3>
            <p className="text-sm" style={{ color: 'var(--color-text-light, #6b6560)', fontFamily: "'Inter', sans-serif" }}>
              {model.feature}
            </p>
          </div>
        </div>

        {/* Key specs grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="rounded-lg p-3" style={{ background: 'var(--color-bg-alt, #f7f3ee)' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-light, #6b6560)', fontFamily: "'Inter', sans-serif" }}>Місткість</div>
            <div className="text-sm font-bold" style={{ color: 'var(--color-text, #1a1a1a)', fontFamily: "'Inter', sans-serif" }}>{model.capacity}</div>
          </div>
          <div className="rounded-lg p-3" style={{ background: 'var(--color-bg-alt, #f7f3ee)' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-light, #6b6560)', fontFamily: "'Inter', sans-serif" }}>Звукоізоляція</div>
            <div className="text-sm font-bold" style={{ color: config.accent, fontFamily: "'Inter', sans-serif" }}>{model.soundInsulation}</div>
          </div>
          <div className="rounded-lg p-3" style={{ background: 'var(--color-bg-alt, #f7f3ee)' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-light, #6b6560)', fontFamily: "'Inter', sans-serif" }}>Розміри</div>
            <div className="text-sm font-bold" style={{ color: 'var(--color-text, #1a1a1a)', fontFamily: "'Inter', sans-serif" }}>{model.dimensions}</div>
          </div>
          <div className="rounded-lg p-3" style={{ background: 'var(--color-bg-alt, #f7f3ee)' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-text-light, #6b6560)', fontFamily: "'Inter', sans-serif" }}>Вага</div>
            <div className="text-sm font-bold" style={{ color: 'var(--color-text, #1a1a1a)', fontFamily: "'Inter', sans-serif" }}>{model.weight}</div>
          </div>
        </div>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {model.features.slice(0, 3).map((feat) => (
            <span
              key={feat}
              className="text-xs font-medium px-2.5 py-1 rounded-lg"
              style={{ background: '#e8f5ee', color: '#1a5632', fontFamily: "'Inter', sans-serif" }}
            >
              {feat}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto flex gap-3">
          <span
            className="flex-1 text-center py-2.5 rounded-lg text-sm font-bold text-white"
            style={{
              background: '#c87941',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Детальніше
          </span>
          <span
            className="flex-1 text-center py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-colors"
            style={{
              background: 'transparent',
              color: '#1a5632',
              border: '2px solid #1a5632',
              fontFamily: "'Inter', sans-serif",
            }}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.location.href = '/zviazatysya/'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1a5632'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#1a5632'
            }}
          >
            Замовити
          </span>
        </div>
      </div>
    </Link>
  )
}

function LineSection({
  line,
  models,
}: {
  line: ModelLine
  models: CabinModel[]
}) {
  const config = lineConfig[line]
  if (models.length === 0) return null

  return (
    <section className="mb-20">
      {/* Line header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ background: config.tagBg, color: '#ffffff' }}
        >
          {config.icon}
        </div>
        <div>
          <h2
            className="text-2xl font-bold"
            style={{ color: 'var(--color-text, #1a1a1a)', fontFamily: "'Playfair Display', serif" }}
          >
            {config.label}
          </h2>
          <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-light, #6b6560)', fontFamily: "'Inter', sans-serif" }}>
            {config.description}
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <ModelCard key={model.slug} model={model} />
        ))}
      </div>
    </section>
  )
}

export default function KatalohContent() {
  const premiumModels = getModelsByLine('premium')
  const liteModels = getModelsByLine('lite')
  const proModels = getModelsByLine('pro')

  return (
    <main style={{ background: 'var(--color-bg-alt, #f7f3ee)' }}>
      {/* Hero */}
      <section className="pt-28 pb-16 text-center" style={{ background: 'linear-gradient(180deg, var(--color-bg, #fffcf8) 0%, var(--color-bg-alt, #f7f3ee) 100%)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: '#e8f5ee', color: '#1a5632' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
            <span className="text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>7 моделей у 3 лінійках</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ color: 'var(--color-text, #1a1a1a)', fontFamily: "'Playfair Display', serif", lineHeight: 1.15 }}
          >
            Каталог акустичних кабін{' '}
            <span style={{ color: '#1a5632' }}>SilentBox</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-text-light, #6b6560)', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
            Від компактної телефонної кабіни до повноцінної переговорної кімнати.
            Доставка по Україні та Європі за 3-5 робочих днів. Гарантія до 10 років.
          </p>

          {/* Quick stats */}
          <div className="inline-flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { value: '35 дБ', label: 'Звукоізоляція' },
              { value: '60 хв', label: 'Збірка Solo' },
              { value: '30+', label: 'Країн доставки' },
              { value: '10 років', label: 'Гарантія' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#1a5632', fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs font-medium mt-0.5" style={{ color: 'var(--color-text-light, #6b6560)', fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <LineSection line="premium" models={premiumModels} />
        <LineSection line="lite" models={liteModels} />
        <LineSection line="pro" models={proModels} />

        {/* Bottom CTA */}
        <section className="text-center rounded-lg p-10 md:p-16" style={{ background: 'linear-gradient(135deg, #1a5632, #0d3b1f)', color: '#ffffff' }}>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Не знаєте, яка модель підійде?
          </h2>
          <p className="text-base max-w-xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: "'Inter', sans-serif" }}>
            Залиште заявку — наші спеціалісти проаналізують ваш офіс та запропонують оптимальне рішення. Безкоштовна консультація.
          </p>
          <Link
            href="/zviazatysya/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-bold text-white transition-all cursor-pointer"
            style={{
              background: '#c87941',
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(200, 121, 65, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Безкоштовна консультація
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </section>
      </div>
    </main>
  )
}
