import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Про компанію Grand — Офіційний дилер SilentBox в Україні',
  description:
    'Grand — офіційний дилер SilentBox в Україні. Аудит офісу, доставка за 3-5 днів у 30+ країн, монтаж від 60 хвилин, сервіс та гарантія 10 років. Акустичні кабіни для офісів та коворкінгів.',
}

const stats = [
  { value: '35 дБ', label: 'Звукоізоляція (ISO 23351-1)' },
  { value: '10 років', label: 'Гарантія на конструкцію' },
  { value: '30+', label: 'Країн доставки' },
  { value: '3-5 днів', label: 'Термін доставки' },
]

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'Аудит офісного простору',
    subtitle: 'Безкоштовно',
    description:
      'Проводимо безкоштовний аудит вашого офісу та підбираємо оптимальне акустичне рішення з урахуванням планування, кількості працівників та рівня шуму. Допомагаємо обрати між лінійками Premium (35 дБ) та Lite (15-20 дБ).',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Доставка',
    subtitle: '3-5 днів, 30+ країн',
    description:
      'Організовуємо доставку акустичних кабін у 30+ країн за 3-5 робочих днів. Професійна логістика з повним супроводом -- від замовлення до розвантаження на вашому поверсі.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18A1.106 1.106 0 014.5 17.28V6.72a1.106 1.106 0 011.536-1.07l5.384 3.18m0 0L16.92 5.65a1.106 1.106 0 011.536 1.07v10.56a1.106 1.106 0 01-1.536 1.07l-5.5-3.18z" />
      </svg>
    ),
    title: 'Монтаж',
    subtitle: 'від 60 хвилин',
    description:
      'Професійний монтаж від 60 хвилин (Solo) до 4 годин (Quartet) без будівельних робіт, пилу та інструментів. Ваш офіс працює у звичному режимі під час встановлення.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Сервіс',
    subtitle: 'Гарантія 10 років',
    description:
      'Гарантія до 10 років на конструкцію кабіни, окрема гарантія на електроніку та Smart Electronics. Сервісне обслуговування по всій Україні. Оренда акустичних кабін від 3 місяців.',
  },
]

export default function ProKompaniyuPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="section"
        style={{ background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-alt) 100%)' }}
      >
        <div className="container">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: '#e8f5ee', color: '#1a5632' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <span className="text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Офіційний дилер</span>
          </div>
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Grand -- офіційний дилер SilentBox в Україні
          </h1>
          <div className="max-w-3xl" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            <p style={{ color: 'var(--color-text)', marginBottom: '1.25rem' }}>
              Ми -- команда Grand, і ми знаємо, як шум впливає на продуктивність. Організовуючи заходи для бізнесу,
              ми побачили проблему шуму в офісах наших клієнтів -- відкриті простори, де неможливо зосередитися чи провести
              конфіденційну розмову. Так ми стали офіційним дилером SilentBox в Україні.
            </p>
            <p style={{ color: 'var(--color-text)', marginBottom: '1.25rem' }}>
              Сьогодні ми пропонуємо 7 моделей акустичних кабін у трьох лінійках: Premium (максимальна звукоізоляція 35 дБ),
              Lite (доступні рішення для open-space) та Pro (окремі робочі місця). Повний цикл послуг -- від безкоштовного
              аудиту офісу до монтажу та сервісного обслуговування.
            </p>
            <p style={{ color: 'var(--color-text-light)' }}>
              Сертифікація за ISO 23351-1 гарантує найвищу якість звукоізоляції. Гарантія до 10 років
              на конструкцію кабіни. Доставка у 30+ країн за 3-5 робочих днів.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
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

      {/* Services */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Наші послуги</h2>
          <p className="section-subtitle">
            Повний цикл -- від безкоштовного аудиту офісу до монтажу акустичної кабіни та сервісного обслуговування
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl p-8 hover:shadow-lg transition-shadow"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: '#e8f5ee', color: '#1a5632' }}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: 'var(--color-primary)', fontFamily: "'Playfair Display', serif" }}
                      >
                        {service.title}
                      </h3>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: '#e8f5ee', color: '#1a5632', fontFamily: "'Inter', sans-serif" }}
                      >
                        {service.subtitle}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Grand */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Чому Grand</h2>
          <p className="section-subtitle">
            Ми не просто продаємо кабіни -- ми вирішуємо проблему шуму у вашому офісі
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Досвід у бізнес-заходах',
                text: 'Роками організовуючи заходи для бізнесу, ми бачили, як шум в офісах заважає продуктивності. Ми знаємо потреби сучасного офісу зсередини.',
              },
              {
                title: 'Офіційний статус',
                text: 'Як офіційний дилер SilentBox в Україні, ми гарантуємо оригінальну продукцію, офіційну гарантію та сертифіковане обслуговування.',
              },
              {
                title: 'Повний супровід',
                text: 'Від першого дзвінка до останнього болта -- ми супроводжуємо клієнта на кожному етапі: аудит, підбір, доставка, монтаж, сервіс.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-8"
                style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)' }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: '#1a5632', fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                  {item.text}
                </p>
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
            Зв&#39;яжіться з нами для безкоштовного аудиту офісного простору та підбору оптимальної акустичної кабіни.
            Доставка 3-5 робочих днів. Оренда від 3 місяців.
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
