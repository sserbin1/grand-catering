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
    feature: 'Телефонна кабіна для open-space',
    description: 'Преміальна акустична кабіна з шумоізоляцією 35 дБ (ISO 23351-1). Ідеальна для приватних дзвінків та відеоконференцій. Збірка за 60 хвилин.',
    specs: ['35 дБ ізоляція', '250-300 м\u00b3/год вентиляція', 'Smart Electronics'],
  },
  {
    name: 'Duet',
    slug: 'duet',
    line: 'Premium',
    capacity: '2 особи',
    size: '210\u00d7110 см, h220 см',
    price: '',
    feature: 'Переговорна кабіна для зустрічей тет-а-тет',
    description: 'Два дивани та конференц-стіл. Панорамні скляні стіни. 35 дБ звукоізоляції для конфіденційних зустрічей з клієнтами.',
    specs: ['35 дБ ізоляція', '550-600 м\u00b3/год вентиляція', 'Панорамне скло'],
  },
  {
    name: 'Quartet',
    slug: 'quartet',
    line: 'Premium',
    capacity: '4 особи',
    size: '210\u00d7138 см, h220 см',
    price: '',
    feature: 'Міні-конференц-зал для командних нарад',
    description: 'Повноцінна альтернатива переговорної кімнати. Датчик CO2, датчик присутності, 2 дивани 120\u00d770 см. Для нарад та брейнстормів.',
    specs: ['35 дБ ізоляція', 'Датчик CO2', '2 дивани + стіл'],
  },
  {
    name: 'Solo Lite',
    slug: 'lite',
    line: 'Lite',
    capacity: '1 особа',
    size: '105\u00d7107 см, h223 см',
    price: '',
    feature: 'Доступна телефонна кабіна для open-space',
    description: 'Подвійна вентиляція 2\u00d7160 м\u00b3/год. 10 варіантів дизайну інтер\u2019єру. SMART сенсорне керування. Для дзвінків та відеозустрічей.',
    specs: ['15-20 дБ ізоляція', 'Подвійна вентиляція', '10 варіантів дизайну'],
  },
  {
    name: 'Duet Lite',
    slug: 'duet-lite',
    line: 'Lite',
    capacity: '2 особи',
    size: '213\u00d7105 см, h225 см',
    price: '',
    feature: 'Переговорна кабіна для 1-on-1 зустрічей',
    description: 'Два дивани 90\u00d770 см. Задня стінка: тканина або дзеркало. USB/Type-C зарядка. Ідеальна для інтерв\'ю та коучінгу.',
    specs: ['15-20 дБ ізоляція', '2 дивани', 'SMART керування'],
  },
  {
    name: 'Quartet Lite',
    slug: 'quartet-lite',
    line: 'Lite',
    capacity: '4 особи',
    size: '213\u00d7123 см, h225 см',
    price: '',
    feature: 'Доступна переговорна на 4 особи',
    description: 'Два дивани 120\u00d770 см. 10+ дизайнерських варіантів. SMART сенсорне керування. Для командних нарад та зустрічей.',
    specs: ['15-20 дБ ізоляція', '2 дивани + стіл', '10+ варіантів'],
  },
  {
    name: 'WorkPod',
    slug: 'workpod',
    line: 'Pro',
    capacity: '1-2 особи',
    size: '153\u00d7113 см, h225 см',
    price: '',
    feature: 'Окреме робоче місце для зосередженої роботи',
    description: 'Ергономічний стіл з регулюванням висоти. Подвійна вентиляція. Для розробників, дизайнерів та аналітиків. Незабаром у продажу.',
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
    title: 'Шум в open-space заважає працювати',
    text: 'Розмови колег, дзвінки телефонів та шум обладнання створюють фоновий шум до 65 дБ. Акустична кабіна для офісу знижує його до рівня тихої бібліотеки (30 дБ), забезпечуючи повну зосередженість.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    title: 'Брак переговорних кімнат',
    text: 'Працівники шукають вільну переговорну по всьому офісу. Звукоізоляційна кабіна створює додаткову переговорну зону прямо в open-space без перебудови та ремонту.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Стрес та вигорання працівників',
    text: 'Постійний шум open-space виснажує працівників, знижує концентрацію та продуктивність. Тиха кабіна дозволяє зосередитись, провести важливий дзвінок та відновити ресурс.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Втрата концентрації та продуктивності',
    text: 'Дослідження показують: після відволікання потрібно 23 хвилини, щоб повернутися до зосередженої роботи. Акустична кабіна усуває відволікання та підвищує ефективність команди.',
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
    text: 'Перетворює гучний open-space (~65 дБ) на тишу бібліотеки (~30 дБ). Сертифіковано за ISO 23351-1 -- ваші працівники отримують повну зосередженість.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Сендвіч-панелі та триплекс',
    text: 'Багатошарові стіни (композит + фанера + мінвата + перфорований MDF + фетр) та триплекс ударостійке скло. Естетичний дизайн для сучасних офісів.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Smart Electronics',
    text: 'Сенсорна панель керування, датчик присутності з автоввімкненням LED, датчик CO2. Працівники керують кабіною одним дотиком.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18A1.106 1.106 0 014.5 17.28V6.72a1.106 1.106 0 011.536-1.07l5.384 3.18m0 0L16.92 5.65a1.106 1.106 0 011.536 1.07v10.56a1.106 1.106 0 01-1.536 1.07l-5.5-3.18z" />
      </svg>
    ),
    title: 'Монтаж від 60 хвилин',
    text: 'Модульна конструкція з патентованим дизайном. Збірка без будівельних робіт, пилу та інструментів. Жодних незручностей для працівників офісу.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: 'Вентиляція до 600 м\u00b3/год',
    text: 'Повне оновлення повітря кожні 2-3 хвилини. Шум вентилятора менше 30 дБ. Комфортний мікроклімат навіть при тривалих зустрічах.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: '21 колір та патентований дизайн',
    text: '21 варіант кольорів зовнішніх панелей та 10+ дизайнерських варіантів інтер\'єру. Кабіна органічно впишеться у стиль будь-якого офісу чи коворкінгу.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Консультація',
    text: 'Безкоштовний аудит вашого офісу: оцінюємо рівень шуму, плануємо розміщення акустичної кабіни та підбираємо оптимальну модель.',
  },
  {
    num: '02',
    title: 'Тестування',
    text: 'Організуємо демонстрацію кабіни у вашому офісі. Або запрошуємо до шоу-руму для особистого тестування.',
  },
  {
    num: '03',
    title: 'Замовлення',
    text: 'Оформіть замовлення. Доставка 3-5 робочих днів по Україні та Європі (30+ країн). Кабіни застраховані на час транспортування.',
  },
  {
    num: '04',
    title: 'Встановлення',
    text: 'Збірка від 60 хвилин (Solo) до 4 годин (Quartet) без будівельних робіт. Гарантія до 10 років. Працівники навіть не помітять монтажу.',
  },
]

const reviews = [
  {
    name: 'Марина К.',
    position: 'HR Director',
    company: '',
    city: '',
    text: 'Встановили 3 кабіни Solo в open-space. Працівники нарешті можуть спокійно проводити дзвінки та відеоконференції. Кількість скарг на шум зменшилась на 90%.',
    stars: 5,
  },
  {
    name: 'Дмитро С.',
    position: 'Office Manager',
    company: '',
    city: '',
    text: 'SilentBox Duet замінив нам переговорну кімнату. Зібрали за 3 години, без пилу та шуму. Тепер маємо додаткову зону для зустрічей з клієнтами.',
    stars: 5,
  },
  {
    name: 'Олексій В.',
    position: 'IT Lead',
    company: '',
    city: '',
    text: 'Як тімлід, постійно проводжу 1-on-1 з командою. Кабіна Duet Lite -- ідеальне рішення. Розмови конфіденційні, не заважаємо колегам.',
    stars: 5,
  },
]

const faqItems = [
  {
    q: 'Який рівень звукоізоляції забезпечують кабіни SilentBox в офісі?',
    a: 'Кабіни Premium лінійки (Solo, Duet, Quartet) забезпечують звукоізоляцію до 35 дБ за стандартом ISO 23351-1. Це різниця між гучним open-space (~65 дБ) та тихою бібліотекою (~30 дБ). Кабіни Lite лінійки забезпечують 15-20 дБ зниження шуму.',
  },
  {
    q: 'Як створити переговорну зону в open-space за допомогою SilentBox?',
    a: 'Моделі Duet та Quartet ідеально підходять для створення переговорних зон. Панорамні скляні стіни зберігають візуальний зв\'язок з офісом, а звукоізоляція 35 дБ забезпечує повну конфіденційність для зустрічей.',
  },
  {
    q: 'Чи підійде акустична кабіна для невеликого офісу?',
    a: 'Так, найкомпактніша модель Solo займає лише 1.2 м\u00b2. Модульна конструкція дозволяє встановити кабіну навіть у невеликому офісі. Кабіну можна переміщувати за потреби без будівельних робіт.',
  },
  {
    q: 'Як працює вентиляція в акустичній кабіні?',
    a: 'Кабіни оснащені примусовою вентиляцією з фільтрацією повітря. Premium модель Solo має продуктивність 250-300 м\u00b3/год з повним оновленням повітря кожні 2-3 хвилини. Рівень шуму вентилятора менше 30 дБ.',
  },
  {
    q: 'Скільки часу займає монтаж кабіни в офісі?',
    a: 'SilentBox Solo збирається за 60 хвилин без жодних інструментів. Duet та Quartet збираються за 2-4 години. Не потрібні будівельні роботи, пил чи спеціальне обладнання -- ваш офіс працює у звичному режимі.',
  },
  {
    q: 'Яка гарантія на звукоізоляційні кабіни?',
    a: 'Гарантія на конструкцію кабіни -- до 10 років. Окрема гарантія на електроніку та вентиляцію. Сервісне обслуговування по всій Україні.',
  },
  {
    q: 'Чи можна орендувати акустичну кабіну для офісу?',
    a: 'Так, ми пропонуємо оренду акустичних кабін від 3 місяців. Це зручне рішення для компаній, які хочуть протестувати кабіну перед покупкою або мають тимчасовий офіс.',
  },
  {
    q: 'Чим відрізняються лінійки Premium та Lite?',
    a: 'Premium лінійка (Solo, Duet, Quartet) забезпечує максимальну звукоізоляцію 35 дБ завдяки сендвіч-панелям та триплекс скло. Lite лінійка забезпечує 15-20 дБ з м\'якими акустичними панелями та SMART керуванням -- оптимальне рішення для стартапів та невеликих офісів.',
  },
  {
    q: 'Яке рішення підходить для коворкінгу?',
    a: 'Для коворкінгів рекомендуємо комбінацію Solo (телефонні кабіни для дзвінків) та Duet Lite (переговорні зони). Lite лінійка з SMART керуванням та 10+ варіантами дизайну оптимально поєднує ціну та функціональність.',
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
    <div className="border-b" style={{ borderColor: 'var(--color-border)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="text-lg font-semibold pr-4" style={{ color: 'var(--color-primary)', fontFamily: "'Playfair Display', serif" }}>{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="#1a5632"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{answer}</p>
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
      <section className="relative overflow-hidden" style={{ background: '#1a1a1a' }}>
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c87941' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container relative z-10 py-20 md:py-28">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'rgba(200, 121, 65, 0.15)', color: '#c87941' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              Офіційний дилер в Україні
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight mb-6" style={{ color: '#fffcf8', fontFamily: "'Playfair Display', serif" }}>
            Тиша у вашому офісі
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-10" style={{ color: 'rgba(255, 252, 248, 0.7)', fontFamily: "'Inter', sans-serif" }}>
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
            <Link href="/zviazatysya/" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold border-2 transition-all no-underline" style={{ color: '#fffcf8', borderColor: 'rgba(255, 252, 248, 0.3)' }}>
              Безкоштовний аудит офісу
            </Link>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: '35 дБ', label: 'звукоізоляція (ISO 23351-1)' },
              { value: 'від 60 хв', label: 'монтаж без інструментів' },
              { value: '10 років', label: 'гарантія на конструкцію' },
            ].map((stat) => (
              <div key={stat.label} className="text-center rounded-xl py-6 px-4" style={{ background: 'rgba(26, 86, 50, 0.15)', backdropFilter: 'blur(10px)' }}>
                <div className="text-3xl font-extrabold mb-1" style={{ color: '#c87941', fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                <div className="text-sm uppercase tracking-wider" style={{ color: 'rgba(255, 252, 248, 0.6)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Photos gallery */}
          <div className="grid grid-cols-3 gap-4 mt-14 max-w-4xl mx-auto">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/cabins/office-solo.jpg" alt="Акустична кабіна SilentBox в офісі open-space" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/cabins/office-duet.jpg" alt="Переговорна кабіна SilentBox в сучасному офісі" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/cabins/office-quartet.jpg" alt="Міні-конференц-зал SilentBox в коворкінгу" fill className="object-cover" sizes="33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY OFFICES NEED SOUND INSULATION ===== */}
      <section id="problemy" className="section">
        <div className="container">
          <h2 className="section-title">Чому офісам потрібна звукоізоляція</h2>
          <p className="section-subtitle">
            Шум в open-space -- головна причина втрати продуктивності та вигорання працівників. Акустична кабіна вирішує обидві проблеми.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((p) => (
              <div key={p.title} className="flex gap-5 p-6 rounded-xl hover:shadow-lg transition-shadow" style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center" style={{ background: '#e8f5ee', color: '#1a5632' }}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-primary)', fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section id="perevagy" className="section-alt">
        <div className="container">
          <h2 className="section-title">Переваги SilentBox для офісу</h2>
          <p className="section-subtitle">
            Патентована технологія сендвіч-панелей, сертифікація ISO 23351-1 та Smart Electronics -- все для продуктивності вашої команди.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow" style={{ border: '1px solid var(--color-border)', background: '#fffcf8' }}>
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center" style={{ background: '#e8f5ee', color: '#1a5632' }}>
                  {adv.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-primary)', fontFamily: "'Playfair Display', serif" }}>{adv.title}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODELS ===== */}
      <section id="modeli" className="section">
        <div className="container">
          <h2 className="section-title">Оберіть акустичну кабіну для вашого офісу</h2>
          <p className="section-subtitle">
            7 моделей у трьох лінійках: Premium (35 дБ), Lite (15-20 дБ) та Pro. Від компактної телефонної кабіни до повноцінної переговорної.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model) => {
              const lineBadgeColors: Record<string, { bg: string; text: string }> = {
                Premium: { bg: '#e8f5ee', text: '#1a5632' },
                Lite: { bg: '#fdf6e3', text: '#9a7b2e' },
                Pro: { bg: '#fbeee5', text: '#8b4513' },
              }
              const badge = lineBadgeColors[model.line] || lineBadgeColors.Premium

              return (
                <div key={model.slug} className="rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col" style={{ background: '#fffcf8', border: '1px solid var(--color-border)' }}>
                  {/* Product render */}
                  {modelImages[model.slug] && (
                    <div className="relative w-full aspect-[4/3]" style={{ background: '#f7f3ee' }}>
                      <Image
                        src={modelImages[model.slug]}
                        alt={`Акустична кабіна SilentBox ${model.name} для офісу`}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  {/* Card header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold" style={{ color: 'var(--color-primary)', fontFamily: "'Playfair Display', serif" }}>SilentBox {model.name}</h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: badge.bg, color: badge.text }}>
                        {model.line}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm" style={{ color: 'var(--color-text-light)' }}>{model.capacity}</span>
                    </div>
                    <p className="text-sm mb-1" style={{ color: 'var(--color-text-light)' }}>{model.size}</p>
                    <p className="mt-3 leading-relaxed" style={{ color: 'var(--color-text)' }}>{model.description}</p>
                  </div>
                  {/* Specs */}
                  <div className="px-6 pb-4 mt-auto">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {model.specs.map((spec) => (
                        <span key={spec} className="text-xs font-medium px-3 py-1.5 rounded-full" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-text-light)' }}>
                          {spec}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link href="/zviazatysya/" className="btn-primary text-sm px-4 py-2.5 flex-1 justify-center">
                        Замовити
                      </Link>
                      <Link href={`/kataloh/${model.slug}/`} className="btn-outline text-sm px-4 py-2.5">
                        Детальніше
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="section-alt">
        <div className="container">
          <h2 className="section-title">Як замовити акустичну кабіну для офісу</h2>
          <p className="section-subtitle">
            Чотири простих кроки від консультації до готової акустичної кабіни у вашому офісі.
          </p>
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5" style={{ background: 'var(--color-border)' }} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="relative text-center">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10" style={{ background: '#1a5632' }}>
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-primary)', fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Що кажуть офіси та компанії</h2>
          <p className="section-subtitle">
            Реальні відгуки працівників та менеджерів, які обрали акустичні кабіни SilentBox для своїх офісів.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="p-8 rounded-xl hover:shadow-lg transition-shadow flex flex-col" style={{ border: '1px solid var(--color-border)', background: '#fffcf8' }}>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="#c87941" stroke="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                {/* Text */}
                <p className="leading-relaxed mb-6 flex-1" style={{ color: 'var(--color-text)' }}>&laquo;{review.text}&raquo;</p>
                {/* Author */}
                <div className="pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <div className="font-semibold" style={{ color: 'var(--color-primary)' }}>{review.name}</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-light)' }}>{review.position}</div>
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
            Відповіді на найпоширеніші питання про акустичні кабіни SilentBox для офісу та open-space.
          </p>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item) => (
              <FAQItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT GRAND CATERING ===== */}
      <section className="section" style={{ background: 'var(--color-warm)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-10">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)', fontFamily: "'Inter', sans-serif" }}
            >
              Про Grand Catering
            </span>
            <h2 className="section-title">Кейтеринг, який цінує тишу</h2>
          </div>
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text)' }}>
              <strong>Grand Catering</strong> — це кейтеринг-сервіс та офіційний дилер акустичних кабін SilentBox в Україні.
              Організовуючи заходи для бізнесу, ми знаємо з власного досвіду: успішні переговори потребують тиші, а продуктивна робота — комфортного середовища.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-light)' }}>
              Саме тому ми стали дилером SilentBox — ми бачимо, як наші клієнти з ресторанів, готелів та офісів страждають від шуму.
              Тепер ми допомагаємо їм вирішити цю проблему: від аудиту приміщення до монтажу акустичної кабіни.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-accent)', fontFamily: "'Playfair Display', serif" }}>Кейтеринг</div>
                <div className="text-sm" style={{ color: 'var(--color-text-light)' }}>Організація заходів для бізнесу</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-cta)', fontFamily: "'Playfair Display', serif" }}>Дилер SilentBox</div>
                <div className="text-sm" style={{ color: 'var(--color-text-light)' }}>Офіційний представник в Україні</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-accent)', fontFamily: "'Playfair Display', serif" }}>Під ключ</div>
                <div className="text-sm" style={{ color: 'var(--color-text-light)' }}>Аудит, доставка, монтаж, сервіс</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BLOCK ===== */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a5632 0%, #0d3a1f 100%)' }}>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container relative z-10 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Замовте безкоштовний аудит вашого офісу
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Наші спеціалісти оцінять рівень шуму, запропонують оптимальну модель акустичної кабіни для вашого офісу та організують безкоштовне тестування.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/zviazatysya/" className="btn-primary text-lg px-8 py-4">
              Безкоштовний аудит
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/kataloh/" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all no-underline">
              Переглянути каталог
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
