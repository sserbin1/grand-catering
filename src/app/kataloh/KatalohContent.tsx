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
    tagBg: '#c89b5a',
    tagColor: '#0e0e0d',
    description: 'Максимальна звукоізоляція 35 дБ (ISO 23351-1). Сендвіч-панелі, триплекс скло, Smart Electronics.',
  },
  lite: {
    label: 'Lite',
    tagBg: 'rgba(200, 155, 90, 0.6)',
    tagColor: '#0e0e0d',
    description: 'Шумоізоляція 15-20 дБ. SMART сенсорне керування, 10+ дизайнерських варіантів оздоблення.',
  },
  pro: {
    label: 'Pro',
    tagBg: 'rgba(200, 155, 90, 0.4)',
    tagColor: '#f5f3ee',
    description: 'Окремі робочі місця з ергономічними столами для зосередженої роботи.',
  },
} as const

function ModelCard({ model }: { model: CabinModel }) {
  const config = lineConfig[model.line]

  return (
    <Link
      href={`/kataloh/${model.slug}/`}
      className="group relative flex flex-col rounded-xl overflow-hidden cursor-pointer card"
    >
      {modelImages[model.slug] && (
        <div className="relative w-full aspect-[4/3]" style={{ background: '#111110' }}>
          <Image
            src={modelImages[model.slug]}
            alt={model.fullName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <span
            className="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full"
            style={{ background: config.tagBg, color: config.tagColor }}
          >
            {config.label}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-1" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>
            {model.fullName}
          </h3>
          <p className="text-sm" style={{ color: 'rgba(245,243,238,0.5)' }}>{model.feature}</p>
        </div>

        {model.price && (
          <div className="mb-4">
            <span className="text-2xl font-bold" style={{ color: '#c89b5a', fontFamily: "'Cormorant Garamond', serif" }}>&euro;{model.price}</span>
            {model.priceNote && <span className="text-xs ml-2" style={{ color: 'rgba(245,243,238,0.4)' }}>{model.priceNote}</span>}
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="rounded-lg p-3" style={{ background: '#111110' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: 'rgba(245,243,238,0.5)' }}>Місткість</div>
            <div className="text-sm font-bold" style={{ color: '#f5f3ee' }}>{model.capacity}</div>
          </div>
          <div className="rounded-lg p-3" style={{ background: '#111110' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: 'rgba(245,243,238,0.5)' }}>Звукоізоляція</div>
            <div className="text-sm font-bold" style={{ color: '#c89b5a' }}>{model.soundInsulation}</div>
          </div>
          <div className="rounded-lg p-3" style={{ background: '#111110' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: 'rgba(245,243,238,0.5)' }}>Розміри</div>
            <div className="text-sm font-bold" style={{ color: '#f5f3ee' }}>{model.dimensions}</div>
          </div>
          <div className="rounded-lg p-3" style={{ background: '#111110' }}>
            <div className="text-xs font-medium mb-0.5" style={{ color: 'rgba(245,243,238,0.5)' }}>Вага</div>
            <div className="text-sm font-bold" style={{ color: '#f5f3ee' }}>{model.weight}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {model.features.slice(0, 3).map((feat) => (
            <span key={feat} className="text-xs font-medium px-2.5 py-1 rounded-lg" style={{ background: 'rgba(200, 155, 90, 0.08)', color: 'rgba(245,243,238,0.65)', border: '1px solid rgba(245,243,238,0.06)' }}>
              {feat}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          <span className="btn-primary flex-1 text-center text-sm justify-center">Детальніше</span>
          <span
            className="btn-outline-gold flex-1 text-center text-sm"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = '/zviazatysya/' }}
          >
            Замовити
          </span>
        </div>
      </div>
    </Link>
  )
}

function LineSection({ line, models }: { line: ModelLine; models: CabinModel[] }) {
  const config = lineConfig[line]
  if (models.length === 0) return null

  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(200, 155, 90, 0.12)', color: '#c89b5a' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>{config.label}</h2>
          <p className="text-sm mt-0.5" style={{ color: 'rgba(245,243,238,0.5)' }}>{config.description}</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => <ModelCard key={model.slug} model={model} />)}
      </div>
    </section>
  )
}

export default function KatalohContent() {
  const premiumModels = getModelsByLine('premium')
  const liteModels = getModelsByLine('lite')
  const proModels = getModelsByLine('pro')

  return (
    <main style={{ background: '#0e0e0d' }}>
      <section className="pt-28 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(200, 155, 90, 0.12)', color: '#c89b5a', border: '1px solid rgba(200, 155, 90, 0.2)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
            <span className="text-sm font-semibold">7 моделей у 3 лінійках</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.15 }}>
            Каталог акустичних кабін <span style={{ color: '#c89b5a' }}>SilentBox</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(245,243,238,0.5)', lineHeight: 1.7 }}>
            Від компактної телефонної кабіни до повноцінної переговорної кімнати. Доставка по Україні та Європі за 3-5 робочих днів. Гарантія до 10 років.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { value: '35 дБ', label: 'Звукоізоляція' },
              { value: '60 хв', label: 'Збірка Solo' },
              { value: '30+', label: 'Країн доставки' },
              { value: '10 років', label: 'Гарантія' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#c89b5a', fontFamily: "'Cormorant Garamond', serif" }}>{stat.value}</div>
                <div className="text-xs font-medium mt-0.5" style={{ color: 'rgba(245,243,238,0.5)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <LineSection line="premium" models={premiumModels} />
        <LineSection line="lite" models={liteModels} />
        <LineSection line="pro" models={proModels} />

        <section className="text-center rounded-xl p-10 md:p-16" style={{ background: '#1c1c1a', border: '1px solid rgba(200, 155, 90, 0.2)' }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#f5f3ee' }}>
            Не знаєте, яка модель підійде?
          </h2>
          <p className="text-base max-w-xl mx-auto mb-8" style={{ color: 'rgba(245,243,238,0.5)' }}>
            Залиште заявку -- наші спеціалісти проаналізують ваш офіс та запропонують оптимальне рішення. Безкоштовна консультація.
          </p>
          <Link href="/zviazatysya/" className="btn-primary text-lg px-8 py-4">
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
