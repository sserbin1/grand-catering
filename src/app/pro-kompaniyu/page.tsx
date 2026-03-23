import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Про компанію -- Grand, офіційний дилер акустичних кабін SilentBox в Україні',
  description:
    'Grand -- офіційний дилер акустичних кабін SilentBox в Україні. Аудит офісу, доставка, монтаж та сервіс. Гарантія до 10 років, сертифікація ISO 23351-1.',
}

const stats = [
  { value: '35 дБ', label: 'Звукоізоляція (ISO 23351-1)' },
  { value: '10 років', label: 'Гарантія на конструкцію' },
  { value: '30+', label: 'Країн доставки' },
  { value: '3-5 днів', label: 'Термін доставки' },
]

const services = [
  {
    title: 'Аудит офісного простору',
    description:
      'Проводимо безкоштовний аудит вашого офісу та підбираємо оптимальне акустичне рішення з урахуванням планування, кількості працівників та рівня шуму. Допомагаємо обрати між лінійками Premium (35 дБ) та Lite (15-20 дБ).',
  },
  {
    title: 'Доставка по Україні та Європі',
    description:
      'Організовуємо доставку акустичних кабін для офісів у 30+ країн за 3-5 робочих днів. Кабіни застраховані на час транспортування.',
  },
  {
    title: 'Монтаж',
    description:
      'Професійний монтаж від 60 хвилин (Solo) до 4 годин (Quartet) без будівельних робіт. Ваш офіс працює у звичному режимі під час встановлення.',
  },
  {
    title: 'Сервіс та підтримка',
    description:
      'Гарантія до 10 років на конструкцію кабіни, окрема гарантія на електроніку та Smart Electronics. Сервісне обслуговування по всій Україні. Оренда акустичних кабін від 3 місяців.',
  },
]

export default function ProKompaniyuPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-alt">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Grand -- офіційний дилер SilentBox в Україні
          </h1>
          <div className="max-w-3xl" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            <p style={{ color: '#f5f3ee', marginBottom: '1.25rem' }}>
              Ми -- команда Grand, офіційний дилер бренду SilentBox
              в Україні. Допомагаємо компаніям створювати продуктивне робоче середовище
              за допомогою інноваційних акустичних кабін для офісів, коворкінгів та бізнес-центрів.
            </p>
            <p style={{ color: 'rgba(245,243,238,0.8)', marginBottom: '1.25rem' }}>
              Організовуючи заходи для бізнесу, ми побачили, як наші клієнти страждають від шуму в офісах. Тепер ми вирішуємо цю проблему -- від аудиту приміщення до монтажу акустичної кабіни.
            </p>
            <p style={{ color: 'rgba(245,243,238,0.8)', marginBottom: '1.25rem' }}>
              Ми пропонуємо 7 моделей звукоізоляційних кабін у трьох лінійках: Premium (максимальна звукоізоляція 35 дБ для переговорних),
              Lite (доступні рішення для телефонних кабін в open-space) та Pro (окремі робочі місця для зосередженої роботи). Доставка у 30+ країн
              за 3-5 робочих днів.
            </p>
            <p style={{ color: 'rgba(245,243,238,0.5)' }}>
              Сертифікація за CE, ISO 9001, ISO 11957 та ISO 23351-1 гарантує найвищу якість звукоізоляції офісу. Гарантія до 10 років
              на конструкцію кабіни забезпечує впевненість у довговічності вашої інвестиції в акустичний комфорт.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: '#0e0e0d' }}>
        <div className="container">
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center rounded-xl p-8 card">
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

      {/* Services */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Наші послуги</h2>
          <p className="section-subtitle">
            Повний цикл -- від безкоштовного аудиту офісу до монтажу акустичної кабіни та сервісного обслуговування
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(200, 155, 90, 0.12)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#c89b5a" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,243,238,0.65)' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#0e0e0d' }}>
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>
            Готові покращити акустику вашого офісу?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(245,243,238,0.5)', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Зв&#39;яжіться з нами для безкоштовного аудиту офісного простору та підбору оптимальної акустичної кабіни.
            Доставка 3-5 робочих днів. Оренда від 3 місяців.
          </p>
          <Link href="/zviazatysya/" className="btn-primary">
            Замовити безкоштовний аудит
          </Link>
        </div>
      </section>
    </main>
  )
}
