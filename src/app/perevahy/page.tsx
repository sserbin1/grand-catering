import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Переваги акустичних кабін SilentBox для офісу | Чому обирають SilentBox',
  description:
    'Чому компанії обирають акустичні кабіни SilentBox для офісу: звукоізоляція 35 дБ, збірка за 60 хвилин, 10 років гарантії. Сертифікація CE, ISO 9001, ISO 11957, ISO 23351-1.',
}

const advantages = [
  {
    title: 'Звукоізоляція до 35 дБ',
    text: 'Перетворює гучний open-space (~65 дБ) на тишу бібліотеки (~30 дБ). Сертифіковано за ISO 23351-1 -- ваші працівники отримують повну зосередженість та конфіденційність для важливих дзвінків.',
  },
  {
    title: 'Потужна вентиляція',
    text: 'До 600 м\u00b3/год з повним оновленням повітря кожні 2-3 хвилини. Шум вентилятора менше 30 дБ. Комфортний мікроклімат навіть при тривалих зустрічах. Датчик CO2 автоматично регулює потужність.',
  },
  {
    title: 'Збірка від 60 хвилин',
    text: 'Модульна конструкція з патентованим дизайном. Збірка без будівельних робіт, пилу та інструментів. Жодних незручностей для працівників офісу -- кабіна готова до використання за годину.',
  },
  {
    title: 'Преміальні матеріали',
    text: 'Багатошарові сендвіч-панелі (композит + фанера + мінвата + перфорований MDF + фетр) та триплекс ударостійке скло. Естетичний дизайн для сучасних офісів. 21 варіант кольорів.',
  },
  {
    title: 'Стильний дизайн',
    text: '21 варіант кольорів зовнішніх панелей та 10+ дизайнерських варіантів інтер\'єру. Панорамні скляні стіни. Кабіна органічно впишеться у стиль будь-якого сучасного офісу чи коворкінгу.',
  },
  {
    title: 'Smart Electronics',
    text: 'Сенсорна панель керування, датчик присутності з автоввімкненням LED, датчик CO2. Працівники керують кабіною одним дотиком. Розетки 220V, USB та USB-C для зарядки пристроїв.',
  },
]

const certifications = [
  { name: 'CE', description: 'Європейська сертифікація відповідності стандартам безпеки та якості для ринку ЄС' },
  { name: 'ISO 9001', description: 'Міжнародний стандарт системи управління якістю виробництва' },
  { name: 'ISO 11957', description: 'Стандарт акустичних характеристик кабін та ізоляторів' },
  { name: 'ISO 23351-1', description: 'Міжнародний стандарт вимірювання звукоізоляції акустичних кабін. Всі моделі Premium сертифіковані -- 35 дБ' },
  { name: 'Патенти EU', description: 'Зареєстровані промислові зразки: RCD 015018000-0001, RCD 015018000-0002, RCD 015018000-0003' },
  { name: 'Патент UA', description: 'Патент на корисну модель зареєстрований в Україні' },
]

const clients = [
  'Monobank', 'MHP', 'L\'Oreal', 'Siemens', 'PwC', 'MARS', 'Нова Пошта', 'UN',
]

const comparisonRows = [
  { criteria: 'Вартість', silentbox: 'Фіксована ціна кабіни', renovation: 'Непередбачувана (будматеріали, робота, простій)' },
  { criteria: 'Час встановлення', silentbox: '60 хв -- 4 години', renovation: '2-6 тижнів' },
  { criteria: 'Вплив на офіс', silentbox: 'Нульовий -- без пилу та шуму', renovation: 'Шум, пил, обмеження доступу' },
  { criteria: 'Мобільність', silentbox: 'Можна переміщувати при переїзді', renovation: 'Залишається у приміщенні' },
  { criteria: 'Вентиляція', silentbox: 'Вбудована, до 600 м\u00b3/год', renovation: 'Потрібно окреме проектування' },
  { criteria: 'Сертифікація', silentbox: 'CE, ISO 9001, ISO 23351-1', renovation: 'Залежить від підрядника' },
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
      <section className="section-alt">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Чому компанії обирають SilentBox
          </h1>
          <p className="max-w-3xl" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(245,243,238,0.65)' }}>
            Акустичні кабіни SilentBox -- це найшвидший та найефективніший спосіб створити переговорні зони, телефонні кабіни
            та простори для зосередженої роботи в open-space офісі. Без ремонту, без пилу, без простою.
          </p>
        </div>
      </section>

      {/* 6 Advantages */}
      <section className="section" style={{ background: '#0e0e0d' }}>
        <div className="container">
          <h2 className="section-title">6 ключових переваг</h2>
          <p className="section-subtitle">
            Патентована технологія, сертифікація ISO 23351-1 та Smart Electronics -- все для продуктивності вашої команди.
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

      {/* Certifications */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Сертифікація та якість</h2>
          <p className="section-subtitle">
            Кожна акустична кабіна SilentBox відповідає міжнародним стандартам якості, безпеки та акустики
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(200, 155, 90, 0.12)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#c89b5a" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#c89b5a', fontFamily: "'Cormorant Garamond', serif" }}>
                    {cert.name}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,243,238,0.65)' }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section" style={{ background: '#0e0e0d' }}>
        <div className="container">
          <h2 className="section-title">Нам довіряють</h2>
          <p className="section-subtitle">
            Провідні компанії України та світу обирають SilentBox для своїх офісів
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
            {clients.map((client) => (
              <div
                key={client}
                className="px-8 py-4 rounded-xl text-center"
                style={{ background: '#1c1c1a', border: '1px solid rgba(245,243,238,0.08)', minWidth: '140px' }}
              >
                <span className="text-lg font-semibold" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>{client}</span>
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
                  <th className="text-left py-4 px-4 text-sm font-semibold" style={{ color: 'rgba(245,243,238,0.5)', borderBottom: '2px solid rgba(245,243,238,0.08)' }}>
                    Критерій
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold" style={{ color: '#c89b5a', borderBottom: '2px solid rgba(200, 155, 90, 0.4)' }}>
                    SilentBox
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold" style={{ color: 'rgba(245,243,238,0.5)', borderBottom: '2px solid rgba(245,243,238,0.08)' }}>
                    Ремонт переговорної
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.criteria}>
                    <td className="py-3 px-4 text-sm font-medium" style={{ color: '#f5f3ee', borderBottom: '1px solid rgba(245,243,238,0.08)' }}>
                      {row.criteria}
                    </td>
                    <td className="py-3 px-4 text-sm" style={{ color: '#c89b5a', fontWeight: 500, borderBottom: '1px solid rgba(245,243,238,0.08)' }}>
                      {row.silentbox}
                    </td>
                    <td className="py-3 px-4 text-sm" style={{ color: 'rgba(245,243,238,0.5)', borderBottom: '1px solid rgba(245,243,238,0.08)' }}>
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
      <section className="section" style={{ background: '#0e0e0d' }}>
        <div className="container">
          <h2 className="section-title">Цифри, які переконують</h2>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-xl p-8 card"
              >
                <div className="text-3xl font-extrabold mb-2" style={{ color: '#c89b5a', fontFamily: "'Cormorant Garamond', serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium" style={{ color: 'rgba(245,243,238,0.5)' }}>
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
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>
            Готові покращити акустику вашого офісу?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(245,243,238,0.5)', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Зв&#39;яжіться з нами для безкоштовного аудиту офісу та підбору оптимальної акустичної кабіни.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/zviazatysya/" className="btn-primary">
              Замовити безкоштовний аудит
            </Link>
            <Link href="/kataloh/" className="btn-outline-gold">
              Переглянути каталог
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
