'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const modelImages: Record<string, string> = {
  solo: '/images/cabins/solo.png',
  duet: '/images/cabins/duet.png',
  quartet: '/images/cabins/quartet.png',
  lite: '/images/cabins/solo-lite.png',
  'duet-lite': '/images/cabins/duet-lite.png',
  'quartet-lite': '/images/cabins/quartet-lite.png',
  workpod: '/images/cabins/workpod.png',
}

const models = [
  {
    name: 'Solo',
    slug: 'solo',
    line: 'Premium',
    capacity: '1 особа',
    size: '105\u00d7110 см, h220 см',
    price: '',
    feature: 'Приватна кабіна для VIP-гостей та персоналу',
    description: 'Преміальна акустична кабіна з шумоізоляцією 35 дБ (ISO 23351-1). Ідеальна для приватних дзвінків менеджерів та бронювань. Збірка за 60 хвилин.',
    specs: ['35 дБ ізоляція', '250-300 м\u00b3/год вентиляція', 'Smart Electronics'],
  },
  {
    name: 'Duet',
    slug: 'duet',
    line: 'Premium',
    capacity: '2 особи',
    size: '210\u00d7110 см, h220 см',
    price: '',
    feature: 'VIP-зона для приватних зустрічей гостей',
    description: 'Два дивани та конференц-стіл. Панорамні скляні стіни. 35 дБ звукоізоляції для конфіденційних бізнес-зустрічей у ресторані.',
    specs: ['35 дБ ізоляція', '550-600 м\u00b3/год вентиляція', 'Панорамне скло'],
  },
  {
    name: 'Quartet',
    slug: 'quartet',
    line: 'Premium',
    capacity: '4 особи',
    size: '210\u00d7138 см, h220 см',
    price: '',
    feature: 'Приватна переговорна для бізнес-заходів',
    description: 'Повноцінна альтернатива VIP-кімнати. Датчик CO2, датчик присутності, 2 дивани 120\u00d770 см. Для ділових обідів та переговорів.',
    specs: ['35 дБ ізоляція', 'Датчик CO2', '2 дивани + стіл'],
  },
  {
    name: 'Solo Lite',
    slug: 'lite',
    line: 'Lite',
    capacity: '1 особа',
    size: '105\u00d7107 см, h223 см',
    price: '',
    feature: 'Телефонна кабіна для персоналу ресторану',
    description: 'Подвійна вентиляція 2\u00d7160 м\u00b3/год. 10 варіантів дизайну інтер\u2019єру. SMART сенсорне керування. Для дзвінків та бронювань.',
    specs: ['15-20 дБ ізоляція', 'Подвійна вентиляція', '10 варіантів дизайну'],
  },
  {
    name: 'Duet Lite',
    slug: 'duet-lite',
    line: 'Lite',
    capacity: '2 особи',
    size: '213\u00d7105 см, h225 см',
    price: '',
    feature: 'Приватна зона для двох гостей',
    description: 'Два дивани 90\u00d770 см. Задня стінка: тканина або дзеркало. USB/Type-C зарядка. Ідеальна для ресторанних VIP-зон.',
    specs: ['15-20 дБ ізоляція', '2 дивани', 'SMART керування'],
  },
  {
    name: 'Quartet Lite',
    slug: 'quartet-lite',
    line: 'Lite',
    capacity: '4 особи',
    size: '213\u00d7123 см, h225 см',
    price: '',
    feature: 'Доступна VIP-кімната на 4 гостей',
    description: 'Два дивани 120\u00d770 см. 10+ дизайнерських варіантів. SMART сенсорне керування. Для ділових обідів у ресторані.',
    specs: ['15-20 дБ ізоляція', '2 дивани + стіл', '10+ варіантів'],
  },
  {
    name: 'WorkPod',
    slug: 'workpod',
    line: 'Pro',
    capacity: '1-2 особи',
    size: '153\u00d7113 см, h225 см',
    price: '',
    feature: 'Робоче місце для адміністратора або менеджера',
    description: 'Ергономічний стіл з регулюванням висоти. Подвійна вентиляція. Для адміністраторів готелів та ресторанів. Незабаром у продажу.',
    specs: ['~25 дБ ізоляція', 'Регульований стіл', 'Скоро у продажу'],
  },
]

const problems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    title: 'Шум кухні та залу',
    text: 'Звуки кухонного обладнання, брязкіт посуду, голосні розмови гостей та фонова музика створюють шум до 75 дБ. SilentBox знижує його до рівня тихої бібліотеки (30 дБ).',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    title: 'Брак приватності для VIP-гостей',
    text: 'VIP-гості потребують приватного простору для ділових розмов та конфіденційних зустрічей. Звукоізоляційна кабіна створює ексклюзивну зону прямо у залі ресторану.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Стрес персоналу',
    text: 'Постійний шум ресторану виснажує персонал: адміністраторів, менеджерів з бронювань, координаторів заходів. Тиха кабіна дозволяє зосередитись та відпочити від шуму.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: 'Погана якість телефонних дзвінків',
    text: 'Бронювання столиків, координація постачальників, зв\'язок із кейтеринг-клієнтами — все це потребує чистого звуку. У шумному ресторані якість дзвінків неприйнятна.',
  },
]

const advantages = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    title: 'Звукоізоляція до 35 дБ',
    text: 'Різниця між гучним рестораном (~75 дБ) та тихою бібліотекою (~30 дБ). Сертифіковано за стандартом ISO 23351-1.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Сендвіч-панелі та триплекс',
    text: 'Багатошарові стіни: композит + фанера + мінвата + перфорований MDF + фетр. Двері з триплекс ударостійкого скла.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Smart Electronics',
    text: 'Сенсорна панель керування, датчик присутності з автоввімкненням LED 450 lx (3500-4500K), датчик CO2.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18A1.106 1.106 0 014.5 17.28V6.72a1.106 1.106 0 011.536-1.07l5.384 3.18m0 0L16.92 5.65a1.106 1.106 0 011.536 1.07v10.56a1.106 1.106 0 01-1.536 1.07l-5.5-3.18z" />
      </svg>
    ),
    title: 'Збірка від 60 хвилин',
    text: 'Модульна конструкція з патентованим дизайном. Solo збирається за 60 хвилин без інструментів. Без будівельних робіт.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: 'Вентиляція до 600 м\u00b3/год',
    text: 'Повне оновлення повітря кожні 2-3 хвилини. Рівень шуму вентилятора <30 дБ. Фільтрація повітря.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: '21 колір та патентований дизайн',
    text: '21 варіант кольорів зовнішніх панелей. 10+ дизайнерських варіантів інтер\u2019єру. Органічно вписується у будь-який інтер\u2019єр ресторану.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Консультація',
    text: 'Зв\u2019яжіться з нами для безкоштовної консультації. Підберемо оптимальну модель для вашого ресторану чи готелю.',
  },
  {
    num: '02',
    title: 'Тестування',
    text: 'Безкоштовно протестуйте кабіну у шоу-румі або замовте демонстрацію безпосередньо у вашому закладі.',
  },
  {
    num: '03',
    title: 'Замовлення',
    text: 'Оформіть замовлення. Доставка 3-5 робочих днів по Україні та Європі (30+ країн).',
  },
  {
    num: '04',
    title: 'Встановлення',
    text: 'Збірка від 60 хвилин (Solo) до 4 годин (Quartet) без будівельних робіт. Гарантія до 10 років.',
  },
]

const reviews = [
  {
    name: 'Ігор П.',
    position: 'Шеф-кухар',
    company: '',
    city: '',
    text: 'Нарешті можу спокійно приймати дзвінки від постачальників, не виходячи з ресторану. Кабіна повністю ізолює від шуму кухні.',
    stars: 5,
  },
  {
    name: 'Наталія В.',
    position: 'Управляюча рестораном',
    company: '',
    city: '',
    text: 'VIP-гості в захваті від приватної зони. Тепер бізнес-обіди проходять у повній конфіденційності, а бронювання приймаються без перешкод.',
    stars: 5,
  },
  {
    name: 'Олексій Д.',
    position: 'Менеджер готелю',
    company: '',
    city: '',
    text: 'Встановили дві кабіни у лобі готелю. Гості використовують їх для дзвінків та онлайн-зустрічей. Це підвищило рейтинг нашого сервісу.',
    stars: 5,
  },
]

const faqItems = [
  {
    q: 'Який рівень звукоізоляції забезпечують кабіни SilentBox?',
    a: 'Кабіни Premium лінійки (Solo, Duet, Quartet) забезпечують звукоізоляцію до 35 дБ за стандартом ISO 23351-1. Це різниця між гучним рестораном (~75 дБ) та тихою бібліотекою (~30 дБ). Кабіни Lite лінійки забезпечують 15-20 дБ зниження шуму.',
  },
  {
    q: 'Чи підійде кабіна для ресторану з обмеженим простором?',
    a: 'Так, найкомпактніша модель Solo займає лише 1.2 м\u00b2. Модульна конструкція дозволяє встановити кабіну навіть у невеликому ресторані. Кабіну можна переміщувати за потреби без будівельних робіт.',
  },
  {
    q: 'Як працює вентиляція в кабіні?',
    a: 'Кабіни оснащені примусовою вентиляцією з фільтрацією повітря. Premium модель Solo має продуктивність 250-300 м\u00b3/год з повним оновленням повітря кожні 2-3 хвилини. Рівень шуму вентилятора <30 дБ. Керування через сенсорну панель Smart Electronics.',
  },
  {
    q: 'Скільки часу займає збірка кабіни?',
    a: 'SilentBox Solo збирається за 60 хвилин без жодних інструментів завдяки модульній конструкції з патентованим дизайном. Duet та Quartet збираються за 2-4 години. Не потрібні будівельні роботи, пил чи спеціальне обладнання.',
  },
  {
    q: 'Яка гарантія на кабіни?',
    a: 'Гарантія на конструкцію кабіни — до 10 років. Окрема гарантія на електроніку та вентиляцію. Сервісне обслуговування по всій Україні.',
  },
  {
    q: 'Чи можна використовувати кабіну як VIP-зону для гостей?',
    a: 'Так, моделі Duet та Quartet ідеально підходять для створення приватних VIP-зон у ресторані. Панорамні скляні стіни зберігають візуальний зв\'язок із залом, а звукоізоляція 35 дБ забезпечує повну конфіденційність.',
  },
  {
    q: 'Куди здійснюється доставка?',
    a: 'Доставка по всій Україні та Європі (30+ країн) за 3-5 робочих днів. Кабіни надійно упаковані та застраховані на час транспортування.',
  },
  {
    q: 'Чи можна орендувати кабіну?',
    a: 'Так, ми пропонуємо оренду акустичних кабін від 3 місяців. Це зручне рішення для ресторанів, які хочуть протестувати кабіну перед покупкою або мають сезонну потребу.',
  },
  {
    q: 'Чим відрізняються лінійки Premium та Lite?',
    a: 'Premium лінійка (Solo, Duet, Quartet) забезпечує максимальну звукоізоляцію 35 дБ завдяки сендвіч-панелям та триплекс скло. Lite лінійка (Solo Lite, Duet Lite, Quartet Lite) забезпечує 15-20 дБ з м\'якими акустичними панелями, SMART керуванням та 10+ варіантами дизайну.',
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
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="text-lg font-semibold text-[var(--color-primary)] pr-4">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 flex-shrink-0 text-[var(--color-accent)] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-[var(--color-text-light)] leading-relaxed">{answer}</p>
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
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, #4a1a5e 100%)' }}>
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container relative z-10 py-20 md:py-28">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'rgba(255, 220, 82, 0.15)', color: '#ffdc52' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              Офіційний дистриб&apos;ютор в Україні
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-tight mb-6">
            Акустичні кабіни для<br />ресторанів та готелів
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Приватні VIP-зони, тихі кабіни для персоналу, конфіденційні переговорні. 7 моделей SilentBox, доставка 3-5 днів, гарантія до 10 років.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/modeli/" className="btn-primary text-lg px-8 py-4">
              Обрати модель
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/kontakty/" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all no-underline">
              Безкоштовна консультація
            </Link>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: '35 дБ', label: 'звукоізоляція (ISO 23351-1)' },
              { value: 'від 60 хв', label: 'монтаж без інструментів' },
              { value: '10 років', label: 'гарантія на конструкцію' },
            ].map((stat) => (
              <div key={stat.label} className="text-center rounded-xl py-6 px-4" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.6)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Photos gallery */}
          <div className="grid grid-cols-3 gap-4 mt-14 max-w-4xl mx-auto">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/cabins/office-solo.jpg" alt="Кабіна SilentBox у ресторані" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/cabins/office-duet.jpg" alt="Акустична кабіна SilentBox у готелі" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/cabins/office-quartet.jpg" alt="SilentBox кабіна встановлена у ресторанному залі" fill className="object-cover" sizes="33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMS ===== */}
      <section id="problemy" className="section">
        <div className="container">
          <h2 className="section-title">Чому ресторану потрібна акустична кабіна</h2>
          <p className="section-subtitle">
            Шум ресторану заважає персоналу працювати, а VIP-гостям — насолоджуватись приватністю.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((p) => (
              <div key={p.title} className="flex gap-5 p-6 rounded-xl border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center" style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)' }}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{p.title}</h3>
                  <p className="text-[var(--color-text-light)] leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section id="perevagy" className="section-alt">
        <div className="container">
          <h2 className="section-title">Чому обирають SilentBox</h2>
          <p className="section-subtitle">
            Патентована технологія сендвіч-панелей, сертифікація ISO 23351-1 та Smart Electronics у кожній кабіні.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="text-center p-8 rounded-xl border border-[var(--color-border)] hover:shadow-lg transition-shadow bg-white">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center" style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)' }}>
                  {adv.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">{adv.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODELS ===== */}
      <section id="modeli" className="section">
        <div className="container">
          <h2 className="section-title">Оберіть кабіну SilentBox для вашого закладу</h2>
          <p className="section-subtitle">
            7 моделей у трьох лінійках: Premium (35 дБ), Lite (15-20 дБ) та Pro.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model) => (
              <div key={model.slug} className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                {/* Product render */}
                {modelImages[model.slug] && (
                  <div className="relative w-full aspect-[4/3] bg-gray-50">
                    <Image
                      src={modelImages[model.slug]}
                      alt={`SilentBox ${model.name}`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                {/* Card header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">SilentBox {model.name}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)' }}>
                      {model.line}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm text-[var(--color-text-light)]">{model.capacity}</span>
                  </div>
                  <p className="text-sm text-[var(--color-text-light)] mb-1">{model.size}</p>
                  <p className="text-[var(--color-text)] mt-3 leading-relaxed">{model.description}</p>
                </div>
                {/* Specs */}
                <div className="px-6 pb-4 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {model.specs.map((spec) => (
                      <span key={spec} className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--color-bg-alt)] text-[var(--color-text-light)]">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href="/kontakty/" className="btn-primary text-sm px-4 py-2.5 flex-1 justify-center">
                      Замовити
                    </Link>
                    <Link href={`/modeli/${model.slug}/`} className="btn-outline text-sm px-4 py-2.5">
                      Детальніше
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="section-alt">
        <div className="container">
          <h2 className="section-title">Як замовити акустичну кабіну SilentBox</h2>
          <p className="section-subtitle">
            Чотири простих кроки від першого контакту до готової кабіни у вашому ресторані.
          </p>
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5" style={{ background: 'var(--color-border)' }} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="relative text-center">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10" style={{ background: 'var(--color-accent)' }}>
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Що кажуть наші клієнти</h2>
          <p className="section-subtitle">
            Реальні відгуки ресторанів та готелів, які вже обрали SilentBox.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="p-8 rounded-xl border border-[var(--color-border)] bg-white hover:shadow-lg transition-shadow flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                {/* Text */}
                <p className="text-[var(--color-text)] leading-relaxed mb-6 flex-1">&laquo;{review.text}&raquo;</p>
                {/* Author */}
                <div className="border-t border-[var(--color-border)] pt-4">
                  <div className="font-semibold text-[var(--color-primary)]">{review.name}</div>
                  <div className="text-sm text-[var(--color-text-light)]">{review.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="section-alt">
        <div className="container">
          <h2 className="section-title">Часті запитання</h2>
          <p className="section-subtitle">
            Відповіді на найпоширеніші питання про акустичні кабіни SilentBox для ресторанів та готелів.
          </p>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item) => (
              <FAQItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BLOCK ===== */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #4a1a5e 100%)' }}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container relative z-10 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Замовте безкоштовну консультацію сьогодні
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Наші спеціалісти допоможуть обрати оптимальну модель для вашого ресторану чи готелю та організують безкоштовне тестування. Доставка 3-5 робочих днів.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakty/" className="btn-primary text-lg px-8 py-4">
              Безкоштовна консультація
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/modeli/" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all no-underline">
              Переглянути моделі
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
