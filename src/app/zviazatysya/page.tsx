import type { Metadata } from 'next'
import ContactForm from '../../components/forms/ContactForm'

export const metadata: Metadata = {
  title: "Зв'язатися — Grand Catering | Акустичні кабіни SilentBox для офісу",
  description:
    "Зв'яжіться з Grand Catering для безкоштовного аудиту офісу. Акустичні кабіни SilentBox для open-space, переговорні кімнати, телефонні кабіни. Звукоізоляція офісу до 35 дБ.",
}

export default function ZviazatysyaPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>
            Зв&apos;язатися з нами
          </h1>

          <div
            className="grid gap-12"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}
          >
            {/* Left: Contact Form */}
            <div>
              <h2
                className="text-xl font-bold mb-6"
                style={{ color: 'var(--color-primary)', fontFamily: "'Playfair Display', serif" }}
              >
                Залишити заявку
              </h2>
              <ContactForm />
            </div>

            {/* Right: Info */}
            <div>
              {/* Testing block */}
              <div
                className="rounded-xl p-8"
                style={{
                  background: '#e8f5ee',
                  border: '1px solid rgba(26, 86, 50, 0.2)',
                }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: '#1a5632', fontFamily: "'Playfair Display', serif" }}
                >
                  Безкоштовний аудит та тестування
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
                  Запрошуємо вас відвідати наш шоу-рум, щоб особисто оцінити якість
                  звукоізоляції акустичних кабін SilentBox. Також ми можемо організувати аудит рівня шуму
                  та тестовий період безпосередньо у вашому офісі. Залиште заявку -- ми все
                  організуємо.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
