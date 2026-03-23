import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Переваги акустичних кабін SilentBox для офісу | Чому обирають SilentBox',
  description:
    'Чому компанії обирають акустичні кабіни SilentBox для офісу: звукоізоляція 35 дБ, збірка за 60 хвилин, 10 років гарантії. Порівняння SilentBox vs ремонт переговорної кімнати.',
}

const advantages = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    title: 'Звукоізоляція до 35 дБ',
    text: 'Перетворює гучний open-space (~65 дБ) на тишу бібліотеки (~30 дБ). Сертифіковано за ISO 23351-1 -- ваші працівники отримують повну зосередженість та конфіденційність для важливих дзвінків.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: 'Потужна вентиляція',
    text: 'До 600 м\u00b3/год з повним оновленням повітря кожні 2-3 хвилини. Шум вентилятора менше 30 дБ. Комфортний мікроклімат навіть при тривалих зустрічах. Датчик CO2 автоматично регулює потужність.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18A1.106 1.106 0 014.5 17.28V6.72a1.106 1.106 0 011.536-1.07l5.384 3.18m0 0L16.92 5.65a1.106 1.106 0 011.536 1.07v10.56a1.106 1.106 0 01-1.536 1.07l-5.5-3.18z" />
      </svg>
    ),
    title: 'Збірка від 60 хвилин',
    text: 'Модульна конструкція з патентованим дизайном. Збірка без будівельних робіт, пилу та інструментів. Жодних незручностей для працівників офісу -- кабіна готова до використання за годину.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Преміальні матеріали',
    text: 'Багатошарові сендвіч-панелі (композит + фанера + мінвата + перфорований MDF + фетр) та триплекс ударостійке скло. Естетичний дизайн для сучасних офісів. 21 варіант кольорів.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Стильний дизайн',
    text: '21 варіант кольорів зовнішніх панелей та 10+ дизайнерських варіантів інтер\'єру. Панорамні скляні стіни. Кабіна органічно впишеться у стиль будь-якого сучасного офісу чи коворкінгу.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Smart Electronics',
    text: 'Сенсорна панель керування, датчик присутності з автоввімкненням LED, датчик CO2. Працівники керують кабіною одним дотиком. Розетки 220V, USB та USB-C для зарядки пристроїв.',
  },
]

const comparisonRows = [
  { criteria: 'Вартість', silentbox: 'Фіксована ціна кабіни', renovation: 'Непередбачувана (будматеріали, робота, простій)' },
  { criteria: 'Час встановлення', silentbox: '60 хв -- 4 години', renovation: '2-6 тижнів' },
  { criteria: 'Вплив на офіс', silentbox: 'Нульовий -- без пилу та шуму', renovation: 'Шум, пил, обмеження доступу' },
  { criteria: 'Мобільність', silentbox: 'Можна переміщувати при переїзді', renovation: 'Залишається у приміщенні' },
  { criteria: 'Вентиляція', silentbox: 'Вбудована, до 600 м\u00b3/год', renovation: 'Потрібно окреме проектування' },
  { criteria: 'Сертифікація', silentbox: 'ISO 23351-1', renovation: 'Залежить від підрядника' },
  { criteria: 'Масштабування', silentbox: 'Додати кабіну за 1 день', renovation: 'Новий ремонт за тижні' },
]

const stats = [
  { value: '35 дБ', label: 'Звукоізоляція (ISO 23351-1)' },
  { value: '60 хв', label: 'Збірка Solo без інструментів' },
  { value: '10 років', label: 'Гарантія на конструкцію' },
  { value: '30+', label: 'Країн доставки' },
]

export default function PerevahyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Чому компанії обирають SilentBox
          </h1>
          <p className="max-w-3xl" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
            Акустичні кабіни SilentBox -- це найшвидший та найефективніший спосіб створити переговорні зони, телефонні кабіни
            та простори для зосередженої роботи в open-space офісі. Без ремонту, без пилу, без простою.
          </p>
        </div>
      </section>

      {/* 6 Advantages */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">6 ключових переваг</h2>
          <p className="section-subtitle">
            Патентована технологія, сертифікація ISO 23351-1 та Smart Electronics -- все для продуктивності вашої команди.
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

      {/* Comparison Table */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">SilentBox vs ремонт переговорної</h2>
          <p className="section-subtitle">
            Порівняння акустичної кабіни SilentBox з традиційним ремонтом переговорної кімнати в офісі.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-sm font-semibold" style={{ color: 'var(--color-text-light)', fontFamily: "'Inter', sans-serif", borderBottom: '2px solid var(--color-border)' }}>
                    Критерій
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold" style={{ color: '#1a5632', fontFamily: "'Inter', sans-serif", borderBottom: '2px solid #1a5632' }}>
                    SilentBox
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold" style={{ color: 'var(--color-text-light)', fontFamily: "'Inter', sans-serif", borderBottom: '2px solid var(--color-border)' }}>
                    Ремонт переговорної
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.criteria}>
                    <td className="py-3 px-4 text-sm font-medium" style={{ color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)' }}>
                      {row.criteria}
                    </td>
                    <td className="py-3 px-4 text-sm" style={{ color: '#1a5632', fontWeight: 500, borderBottom: '1px solid var(--color-border)' }}>
                      {row.silentbox}
                    </td>
                    <td className="py-3 px-4 text-sm" style={{ color: 'var(--color-text-light)', borderBottom: '1px solid var(--color-border)' }}>
                      {row.renovation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Цифри, які переконують</h2>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-xl p-8"
                style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)' }}
              >
                <div
                  className="text-3xl font-extrabold mb-2"
                  style={{ color: '#1a5632', fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--color-text-light)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt">
        <div className="container text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: 'var(--color-primary)', fontFamily: "'Playfair Display', serif" }}
          >
            Готові покращити акустику вашого офісу?
          </h2>
          <p className="mb-8" style={{ color: 'var(--color-text-light)', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Зв&#39;яжіться з нами для безкоштовного аудиту офісу та підбору оптимальної акустичної кабіни.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/zviazatysya/" className="btn-primary">
              Замовити безкоштовний аудит
            </Link>
            <Link href="/kataloh/" className="btn-outline">
              Переглянути каталог
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
