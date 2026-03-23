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
    tagBg: 'linear-gradient(135deg, #823494, #6b2a7a)',
    tagColor: '#ffffff',
    accent: '#823494',
    description: 'Максимальна звукоізоляція 35 дБ (ISO 23351-1). Сендвіч-панелі, триплекс скло, Smart Electronics.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  lite: {
    label: 'Lite',
    tagBg: 'linear-gradient(135deg, #2e7d32, #1b5e20)',
    tagColor: '#ffffff',
    accent: '#2e7d32',
    description: 'Шумоізоляція 15-20 дБ. SMART сенсорне керування, 10+ дизайнерських варіантів оздоблення.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  pro: {
    label: 'Pro',
    tagBg: 'linear-gradient(135deg, #e65100, #bf360c)',
    tagColor: '#ffffff',
    accent: '#e65100',
    description: 'Окремі робочі місця з ергономічними столами для повноцінної роботи.',
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
      href={`/modeli/${model.slug}/`}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 20px 40px rgba(130, 52, 148, 0.12), 0 8px 16px rgba(0,0,0,0.06)'
        el.style.borderColor = config.accent
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
        el.style.borderColor = '#e5e7eb'
      }}
    >
      {/* Product image */}
      {modelImages[model.slug] && (
        <div className="relative w-full aspect-[4/3] bg-gray-100">
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
              fontFamily: "'Montserrat', sans-serif",
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
              style={{ color: '#2c2f38', fontFamily: "'Montserrat', sans-serif" }}
            >
              {model.fullName}
            </h3>
            <p className="text-sm" style={{ color: '#6b7280' }}>
              {model.feature}
            </p>
          </div>
        </div>

        {/* Key specs grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="rounded-xl p-3" style={{ background: '#f9fafb' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: '#9ca3af' }}>Місткість</div>
            <div className="text-sm font-bold" style={{ color: '#2c2f38' }}>{model.capacity}</div>
          </div>
          <div className="rounded-xl p-3" style={{ background: '#f9fafb' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: '#9ca3af' }}>Звукоізоляція</div>
            <div className="text-sm font-bold" style={{ color: config.accent }}>{model.soundInsulation}</div>
          </div>
          <div className="rounded-xl p-3" style={{ background: '#f9fafb' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: '#9ca3af' }}>Розміри</div>
            <div className="text-sm font-bold" style={{ color: '#2c2f38' }}>{model.dimensions}</div>
          </div>
          <div className="rounded-xl p-3" style={{ background: '#f9fafb' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: '#9ca3af' }}>Вага</div>
            <div className="text-sm font-bold" style={{ color: '#2c2f38' }}>{model.weight}</div>
          </div>
        </div>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {model.features.slice(0, 3).map((feat) => (
            <span
              key={feat}
              className="text-xs font-medium px-2.5 py-1 rounded-lg"
              style={{ background: '#f3e8f7', color: '#823494' }}
            >
              {feat}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto flex gap-3">
          <span
            className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold"
            style={{
              background: '#ffdc52',
              color: '#2c2f38',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Детальніше
          </span>
          <span
            className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-colors"
            style={{
              background: 'transparent',
              color: '#823494',
              border: '2px solid #823494',
              fontFamily: "'Montserrat', sans-serif",
            }}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.location.href = '/kontakty/'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#823494'
              e.currentTarget.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#823494'
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
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: config.tagBg, color: '#ffffff' }}
        >
          {config.icon}
        </div>
        <div>
          <h2
            className="text-2xl font-extrabold"
            style={{ color: '#2c2f38', fontFamily: "'Montserrat', sans-serif" }}
          >
            {config.label}
          </h2>
          <p className="text-sm mt-0.5" style={{ color: '#6b7280' }}>
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

export default function ModeliContent() {
  const premiumModels = getModelsByLine('premium')
  const liteModels = getModelsByLine('lite')
  const proModels = getModelsByLine('pro')

  return (
    <main style={{ background: '#fafafa' }}>
      {/* Hero */}
      <section className="pt-28 pb-16 text-center" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: '#f3e8f7', color: '#823494' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
            <span className="text-sm font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>7 моделей у 3 лінійках</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-5"
            style={{ color: '#2c2f38', fontFamily: "'Montserrat', sans-serif", lineHeight: 1.15 }}
          >
            Каталог акустичних кабін{' '}
            <span style={{ color: '#823494' }}>SilentBox</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#6b7280', lineHeight: 1.7 }}>
            Від компактної телефонної кабіни до повноцінної VIP-кімнати.
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
                <div className="text-2xl font-extrabold" style={{ color: '#823494', fontFamily: "'Montserrat', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs font-medium mt-0.5" style={{ color: '#9ca3af' }}>
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
        <section className="text-center rounded-2xl p-10 md:p-16" style={{ background: 'linear-gradient(135deg, #823494, #5a2f99)', color: '#ffffff' }}>
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Не знаєте, яка модель підійде?
          </h2>
          <p className="text-base max-w-xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Залиште заявку — наші спеціалісти проаналізують ваш заклад та запропонують оптимальне рішення. Безкоштовна консультація.
          </p>
          <Link
            href="/kontakty/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold transition-all cursor-pointer"
            style={{
              background: '#ffdc52',
              color: '#2c2f38',
              fontFamily: "'Montserrat', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 220, 82, 0.4)'
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
