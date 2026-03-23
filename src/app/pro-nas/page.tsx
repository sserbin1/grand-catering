import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '../../../site.config'

export const metadata: Metadata = {
  title: 'Про компанію — SilentBox для ресторанів та готелів | Офіційний дистриб\'ютор',
  description:
    'Офіційний дистриб\'ютор SilentBox для ресторанного та готельного бізнесу в Україні. Гарантія до 10 років, доставка 3-5 днів у 30+ країн, сертифікація ISO 23351-1.',
}

const stats = [
  { value: '35 дБ', label: 'Звукоізоляція (ISO 23351-1)' },
  { value: '10 років', label: 'Гарантія на конструкцію' },
  { value: '30+', label: 'Країн доставки' },
  { value: '3-5 днів', label: 'Термін доставки' },
]

const services = [
  {
    title: 'Аудит ресторанного простору',
    description:
      'Проводимо безкоштовний аудит вашого ресторану чи готелю та підбираємо оптимальне рішення з урахуванням планування, потоку гостей та акустичних потреб. Допомагаємо обрати між лінійками Premium (35 дБ) та Lite (15-20 дБ).',
  },
  {
    title: 'Доставка по Україні та Європі',
    description:
      'Організовуємо доставку у 30+ країн за 3-5 робочих днів. Кабіни надійно упаковані та застраховані на час транспортування. Працюємо по всій Україні та Європі.',
  },
  {
    title: 'Монтаж та сервіс',
    description:
      'Професійний монтаж від 60 хвилин (Solo) до 4 годин (Quartet) без будівельних робіт. Гарантія до 10 років на конструкцію, окрема гарантія на електроніку. Сервісне обслуговування по всій Україні.',
  },
]

const certifications = [
  {
    title: 'ISO 23351-1',
    description: 'Міжнародний стандарт вимірювання звукоізоляції офісних кабін. Всі моделі Premium лінійки сертифіковані та забезпечують 35 дБ звукоізоляції.',
  },
  {
    title: 'Патентований дизайн',
    description: 'Унікальна конструкція сендвіч-панелей (композит + фанера + мінвата + перфорований MDF + фетр) та модульна система збірки без інструментів.',
  },
  {
    title: 'Триплекс скло',
    description: 'Ударостійке триплекс скло забезпечує безпеку та додаткову звукоізоляцію. Панорамні скляні стіни у моделях Duet та Quartet.',
  },
]

export default function ProNasPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Про компанію
          </h1>
          <div className="max-w-3xl" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            <p style={{ color: 'var(--color-text)', marginBottom: '1.25rem' }}>
              Ми — команда {siteConfig.domain}, офіційний представник бренду SilentBox для ресторанного
              та готельного бізнесу в Україні. Наша місія — допомагати ресторанам, готелям та кейтеринговим
              компаніям створювати комфортне середовище для гостей та персоналу за допомогою інноваційних акустичних рішень.
            </p>
            <p style={{ color: 'var(--color-text)', marginBottom: '1.25rem' }}>
              Ми пропонуємо 7 моделей кабін у трьох лінійках: Premium (максимальна звукоізоляція 35 дБ),
              Lite (доступні рішення для будь-якого закладу) та Pro (окремі робочі місця). Доставка у 30+ країн
              за 3-5 робочих днів.
            </p>
            <p style={{ color: 'var(--color-text-light)' }}>
              Сертифікація за ISO 23351-1 гарантує найвищу якість звукоізоляції. Гарантія до 10 років
              на конструкцію кабіни забезпечує впевненість у довговічності вашої інвестиції.
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
                  style={{ color: 'var(--color-accent)' }}
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

      {/* Certifications */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Сертифікація та якість</h2>
          <p className="section-subtitle">
            Кожна кабіна SilentBox відповідає міжнародним стандартам якості та безпеки
          </p>
          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-xl p-8"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {cert.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Наші послуги</h2>
          <p className="section-subtitle">
            Повний цикл — від безкоштовної консультації до монтажу та сервісного обслуговування
          </p>
          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl p-8"
                style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)' }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                  {service.description}
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
            style={{ color: 'var(--color-primary)' }}
          >
            Готові покращити ваш ресторан?
          </h2>
          <p className="mb-8" style={{ color: 'var(--color-text-light)', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Зв&#39;яжіться з нами для безкоштовної консультації та розрахунку вартості.
            Доставка 3-5 робочих днів. Оренда від 3 місяців.
          </p>
          <Link href="/kontakty/" className="btn-primary">
            Зв&#39;язатися з нами
          </Link>
        </div>
      </section>
    </main>
  )
}
