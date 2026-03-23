'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const modelImages: Record<string, string> = {
  solo: '/images/cabins/solo.png',
  duet: '/images/cabins/duet.png',
  quartet: '/images/cabins/quartet.png',
  workpod: '/images/cabins/workpod.png',
}

const featuredModels = [
  {
    name: 'Solo',
    slug: 'solo',
    line: 'Premium',
    capacity: '1 особа',
    price: '5 690',
    feature: 'Телефонна кабіна для open-space',
    specs: ['35 дБ ізоляція', '250-300 м\u00b3/год вентиляція', 'Smart Electronics'],
  },
  {
    name: 'Duet',
    slug: 'duet',
    line: 'Premium',
    capacity: '2 особи',
    price: '10 190',
    feature: 'Переговорна кабіна для зустрічей тет-а-тет',
    specs: ['35 дБ ізоляція', '550-600 м\u00b3/год вентиляція', 'Панорамне скло'],
  },
  {
    name: 'Quartet',
    slug: 'quartet',
    line: 'Premium',
    capacity: '4 особи',
    price: '11 290',
    feature: 'Міні-конференц-зал для командних нарад',
    specs: ['35 дБ ізоляція', 'Датчик CO2', '2 дивани + стіл'],
  },
  {
    name: 'WorkPod',
    slug: 'workpod',
    line: 'Pro',
    capacity: '1-2 особи',
    price: '5 990',
    feature: 'Окреме робоче місце для зосередженої роботи',
    specs: ['~25 дБ ізоляція', 'Регульований стіл', 'Подвійна вентиляція'],
  },
]

const painCards = [
  {
    title: 'Шум ~65 дБ знищує фокус',
    text: 'Розмови колег, дзвінки, обладнання створюють фоновий шум до 65 дБ. Акустична кабіна знижує його до ~30 дБ -- рівня тихої бібліотеки.',
    stat: '65 дБ \u2192 30 дБ',
  },
  {
    title: 'Немає переговорних',
    text: 'Працівники шукають вільну переговорну по всьому офісу. Кабіна = нова переговорна без ремонту, пилу та простою.',
    stat: '0 \u2192 +1 переговорна',
  },
  {
    title: 'Стрес і вигорання',
    text: 'Постійний шум open-space виснажує працівників, знижує концентрацію та підвищує рівень кортизолу. Тиха зона для відновлення -- необхідність.',
    stat: '-90% скарг на шум',
  },
  {
    title: '23 хв на повернення',
    text: 'Дослідження показують: після кожного відволікання потрібно 23 хвилини, щоб повернутися до глибокої роботи. Кабіна усуває саму причину.',
    stat: '23 хв \u2192 0',
  },
]

const advantages = [
  {
    title: 'Звукоізоляція до 35 дБ',
    text: 'Перетворює гучний open-space (~65 дБ) на тишу бібліотеки (~30 дБ). Сертифіковано за ISO 23351-1.',
  },
  {
    title: 'Сендвіч-панелі та триплекс',
    text: 'Багатошарові стіни (композит + фанера + мінвата + MDF + фетр) та триплекс ударостійке скло.',
  },
  {
    title: 'Smart Electronics',
    text: 'Сенсорна панель керування, датчик присутності з автоввімкненням LED, датчик CO2.',
  },
  {
    title: 'Монтаж від 60 хвилин',
    text: 'Модульна конструкція з патентованим дизайном. Збірка без будівельних робіт та інструментів.',
  },
  {
    title: 'Вентиляція до 600 м\u00b3/год',
    text: 'Повне оновлення повітря кожні 2-3 хвилини. Шум вентилятора менше 30 дБ.',
  },
  {
    title: '21 колір та патентований дизайн',
    text: '21 варіант кольорів зовнішніх панелей та 10+ дизайнерських варіантів інтер\'єру.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Консультація',
    text: 'Безкоштовний аудит вашого офісу: оцінюємо рівень шуму та підбираємо оптимальну модель.',
  },
  {
    num: '02',
    title: 'Тестування',
    text: 'Організуємо демонстрацію кабіни у вашому офісі або запрошуємо до шоу-руму.',
  },
  {
    num: '03',
    title: 'Замовлення',
    text: 'Доставка 3-5 робочих днів по Україні та Європі. Кабіни застраховані на час транспортування.',
  },
  {
    num: '04',
    title: 'Встановлення',
    text: 'Збірка від 60 хвилин (Solo) до 4 годин (Quartet) без будівельних робіт. Гарантія до 10 років.',
  },
]

const reviews = [
  {
    name: 'Марина К.',
    position: 'HR Director',
    text: 'Встановили 3 кабіни Solo в open-space. Працівники нарешті можуть спокійно проводити дзвінки та відеоконференції. Кількість скарг на шум зменшилась на 90%.',
    stars: 5,
  },
  {
    name: 'Дмитро С.',
    position: 'Office Manager',
    text: 'SilentBox Duet замінив нам переговорну кімнату. Зібрали за 3 години, без пилу та шуму. Тепер маємо додаткову зону для зустрічей з клієнтами.',
    stars: 5,
  },
  {
    name: 'Олексій П.',
    position: 'IT Lead',
    text: 'Як тімлід, постійно проводжу 1-on-1 з командою. Кабіна Duet Lite -- ідеальне рішення. Розмови конфіденційні, не заважаємо колегам.',
    stars: 5,
  },
]

const packages = [
  {
    name: 'Hybrid Set',
    description: 'Solo + Duet',
    oldPrice: '15 880',
    newPrice: '14 290',
    savings: '1 590',
    note: 'Знижка 10% до 31 травня 2026',
  },
  {
    name: 'Team Hub',
    description: 'Duet + WorkPod',
    oldPrice: '~16 180',
    newPrice: '~14 560',
    savings: '~1 620',
    note: 'Знижка 10% до 31 травня 2026',
  },
]

const faqItems = [
  {
    q: 'Який рівень звукоізоляції забезпечують кабіни SilentBox в офісі?',
    a: 'Кабіни Premium лінійки (Solo, Duet, Quartet) забезпечують звукоізоляцію до 35 дБ за стандартом ISO 23351-1. Це різниця між гучним open-space (~65 дБ) та тихою бібліотекою (~30 дБ). Кабіни Lite лінійки забезпечують 15-20 дБ зниження шуму.',
  },
  {
    q: 'Скільки часу займає монтаж кабіни в офісі?',
    a: 'SilentBox Solo збирається за 60 хвилин без жодних інструментів. Duet та Quartet збираються за 2-4 години. Не потрібні будівельні роботи, пил чи спеціальне обладнання -- ваш офіс працює у звичному режимі.',
  },
  {
    q: 'Чи підійде акустична кабіна для невеликого офісу?',
    a: 'Так, найкомпактніша модель Solo займає лише 1.2 м\u00b2. Модульна конструкція дозволяє встановити кабіну навіть у невеликому офісі. Кабіну можна переміщувати за потреби.',
  },
  {
    q: 'Як працює вентиляція в акустичній кабіні?',
    a: 'Кабіни оснащені примусовою вентиляцією з фільтрацією повітря. Premium модель Solo має продуктивність 250-300 м\u00b3/год з повним оновленням повітря кожні 2-3 хвилини. Рівень шуму вентилятора менше 30 дБ.',
  },
  {
    q: 'Яка гарантія на звукоізоляційні кабіни?',
    a: 'Гарантія на конструкцію кабіни -- до 10 років. Окрема гарантія на електроніку та вентиляцію. Сервісне обслуговування по всій Україні.',
  },
  {
    q: 'Чи можна орендувати акустичну кабіну для офісу?',
    a: 'Так, ми пропонуємо оренду акустичних кабін від 3 місяців. Це зручне рішення для компаній, які хочуть протестувати кабіну перед покупкою.',
  },
  {
    q: 'Чим відрізняються лінійки Premium та Lite?',
    a: 'Premium лінійка (Solo, Duet, Quartet) забезпечує максимальну звукоізоляцію 35 дБ завдяки сендвіч-панелям та триплекс скло. Lite лінійка забезпечує 15-20 дБ з м\'якими акустичними панелями та SMART керуванням -- оптимальне рішення для стартапів.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(245,243,238,0.08)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="text-lg font-semibold pr-4" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#c89b5a"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="leading-relaxed" style={{ color: 'rgba(245,243,238,0.65)' }}>{answer}</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <main>
      {/* Schema.org FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ background: '#0e0e0d' }}>
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c89b5a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container relative z-10 py-24 md:py-32">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'rgba(200, 155, 90, 0.12)', color: '#c89b5a', border: '1px solid rgba(200, 155, 90, 0.25)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              Grand -- офіційний дилер SilentBox в Україні
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight mb-6" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>
            Тиша у вашому офісі
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-10" style={{ color: 'rgba(245, 243, 238, 0.6)', fontFamily: "'DM Sans', sans-serif" }}>
            Акустичні кабіни SilentBox для продуктивної роботи. Переговорні зони, телефонні кабіни та простори для зосередженої роботи в open-space. Звукоізоляція до 35 дБ, монтаж від 60 хвилин.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/kataloh/" className="btn-primary text-lg px-8 py-4">
              Обрати модель
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/zviazatysya/" className="btn-outline-gold text-lg px-8 py-4">
              Безкоштовний аудит
            </Link>
          </div>

          {/* Stat Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: '35 дБ', label: 'звукоізоляція (ISO 23351-1)' },
              { value: 'від 60 хв', label: 'монтаж без інструментів' },
              { value: '10 років', label: 'гарантія на конструкцію' },
            ].map((stat) => (
              <div key={stat.label} className="text-center rounded-xl py-6 px-4" style={{ background: 'rgba(200, 155, 90, 0.08)', border: '1px solid rgba(200, 155, 90, 0.15)' }}>
                <div className="text-3xl font-extrabold mb-1" style={{ color: '#c89b5a', fontFamily: "'Cormorant Garamond', serif" }}>{stat.value}</div>
                <div className="text-sm uppercase tracking-wider" style={{ color: 'rgba(245, 243, 238, 0.5)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Photos gallery */}
          <div className="grid grid-cols-3 gap-4 mt-14 max-w-4xl mx-auto">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden" style={{ border: '1px solid rgba(245,243,238,0.08)' }}>
              <Image src="/images/cabins/office-solo.jpg" alt="Акустична кабіна SilentBox в офісі open-space" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden" style={{ border: '1px solid rgba(245,243,238,0.08)' }}>
              <Image src="/images/cabins/office-duet.jpg" alt="Переговорна кабіна SilentBox в сучасному офісі" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden" style={{ border: '1px solid rgba(245,243,238,0.08)' }}>
              <Image src="/images/cabins/office-quartet.jpg" alt="Міні-конференц-зал SilentBox в коворкінгу" fill className="object-cover" sizes="33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAIN CARDS ===== */}
      <section className="section" style={{ background: '#0e0e0d' }}>
        <div className="container">
          <h2 className="section-title">Чому open-space вбиває продуктивність</h2>
          <p className="section-subtitle">
            Шум в open-space -- головна причина втрати продуктивності та вигорання працівників. Акустична кабіна вирішує обидві проблеми.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painCards.map((p) => (
              <div key={p.title} className="card p-8 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>{p.title}</h3>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(200, 155, 90, 0.12)', color: '#c89b5a' }}>{p.stat}</span>
                </div>
                <p className="leading-relaxed" style={{ color: 'rgba(245,243,238,0.65)' }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Переваги SilentBox для офісу</h2>
          <p className="section-subtitle">
            Патентована технологія сендвіч-панелей, сертифікація ISO 23351-1 та Smart Electronics -- все для продуктивності вашої команди.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="card text-center p-8 rounded-xl">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center" style={{ background: 'rgba(200, 155, 90, 0.12)', color: '#c89b5a' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>{adv.title}</h3>
                <p className="leading-relaxed" style={{ color: 'rgba(245,243,238,0.65)' }}>{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODELS ===== */}
      <section className="section" style={{ background: '#0e0e0d' }}>
        <div className="container">
          <h2 className="section-title">Оберіть акустичну кабіну для вашого офісу</h2>
          <p className="section-subtitle">
            7 моделей у трьох лінійках: Premium (35 дБ), Lite (15-20 дБ) та Pro. Від компактної телефонної кабіни до повноцінної переговорної.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredModels.map((model) => (
              <div key={model.slug} className="card rounded-xl overflow-hidden flex flex-col">
                {/* Product render */}
                {modelImages[model.slug] && (
                  <div className="relative w-full aspect-[4/3]" style={{ background: '#111110' }}>
                    <Image
                      src={modelImages[model.slug]}
                      alt={`Акустична кабіна SilentBox ${model.name} для офісу`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span
                      className="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full"
                      style={{ background: 'rgba(200, 155, 90, 0.9)', color: '#0e0e0d' }}
                    >
                      {model.line}
                    </span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>
                    SilentBox {model.name}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: 'rgba(245,243,238,0.5)' }}>{model.capacity} | {model.feature}</p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold" style={{ color: '#c89b5a', fontFamily: "'Cormorant Garamond', serif" }}>&euro;{model.price}</span>
                    <span className="text-xs ml-2" style={{ color: 'rgba(245,243,238,0.4)' }}>без ПДВ та доставки</span>
                  </div>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {model.specs.map((spec) => (
                      <span key={spec} className="text-xs font-medium px-2.5 py-1 rounded-lg" style={{ background: 'rgba(200, 155, 90, 0.08)', color: 'rgba(245,243,238,0.65)', border: '1px solid rgba(245,243,238,0.06)' }}>
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Link href={`/kataloh/${model.slug}/`} className="btn-primary text-sm px-4 py-2.5 flex-1 justify-center">
                      Детальніше
                    </Link>
                    <Link href="/zviazatysya/" className="btn-outline-gold text-sm px-4 py-2.5">
                      Замовити
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/kataloh/" className="btn-outline-gold px-8 py-3">
              Переглянути всі 7 моделей
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Як це працює</h2>
          <p className="section-subtitle">
            Чотири простих кроки від консультації до готової акустичної кабіни у вашому офісі.
          </p>
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5" style={{ background: 'rgba(200, 155, 90, 0.2)' }} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="relative text-center">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center text-lg font-bold relative z-10" style={{ background: '#c89b5a', color: '#0e0e0d' }}>
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,243,238,0.65)' }}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="section" style={{ background: '#0e0e0d' }}>
        <div className="container">
          <h2 className="section-title">Що кажуть офіси та компанії</h2>
          <p className="section-subtitle">
            Реальні відгуки працівників та менеджерів, які обрали акустичні кабіни SilentBox для своїх офісів.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="card p-8 rounded-xl flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="#c89b5a" stroke="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                {/* Text */}
                <p className="leading-relaxed mb-6 flex-1" style={{ color: 'rgba(245,243,238,0.8)' }}>&laquo;{review.text}&raquo;</p>
                {/* Author */}
                <div className="pt-4" style={{ borderTop: '1px solid rgba(245,243,238,0.08)' }}>
                  <div className="font-semibold" style={{ color: '#f5f3ee' }}>{review.name}</div>
                  <div className="text-sm" style={{ color: '#c89b5a' }}>{review.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PACKAGE DEALS ===== */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Пакетні пропозиції</h2>
          <p className="section-subtitle">
            Знижка 10% при замовленні комплекту. Акція діє до 31 травня 2026 року.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className="card rounded-xl p-8 relative overflow-hidden">
                {/* Discount badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: '#c89b5a', color: '#0e0e0d' }}>
                    -10%
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>{pkg.name}</h3>
                <p className="text-sm mb-6" style={{ color: 'rgba(245,243,238,0.5)' }}>{pkg.description}</p>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-3xl font-bold" style={{ color: '#c89b5a', fontFamily: "'Cormorant Garamond', serif" }}>&euro;{pkg.newPrice}</span>
                  <span className="text-lg line-through" style={{ color: 'rgba(245,243,238,0.35)' }}>&euro;{pkg.oldPrice}</span>
                </div>
                <p className="text-sm mb-6" style={{ color: 'rgba(245,243,238,0.5)' }}>
                  Економія: &euro;{pkg.savings} | {pkg.note}
                </p>
                <Link href="/zviazatysya/" className="btn-primary w-full justify-center">
                  Замовити пакет
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" style={{ background: '#0e0e0d' }}>
        <div className="container">
          <h2 className="section-title">Часті запитання</h2>
          <p className="section-subtitle">
            Відповіді на найпоширеніші питання про акустичні кабіни SilentBox для офісу та open-space.
          </p>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item) => (
              <FAQItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BLOCK ===== */}
      <section className="relative overflow-hidden" style={{ background: '#1c1c1a' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c89b5a' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container relative z-10 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>
            Замовте безкоштовний аудит вашого офісу
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(245,243,238,0.5)' }}>
            Наші спеціалісти оцінять рівень шуму, запропонують оптимальну модель акустичної кабіни для вашого офісу та організують безкоштовне тестування.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/zviazatysya/" className="btn-primary text-lg px-8 py-4">
              Безкоштовний аудит
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/kataloh/" className="btn-outline-gold text-lg px-8 py-4">
              Переглянути каталог
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
