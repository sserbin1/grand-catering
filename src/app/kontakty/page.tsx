import type { Metadata } from 'next'
import ContactForm from '../../components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Контакти — Grand Catering | Акустичні кабіни SilentBox для ресторанів та готелів',
  description:
    "Зв'яжіться з Grand Catering для безкоштовного аудиту ресторану. Акустичні кабіни SilentBox для ресторанів, готелів та кейтерингу. Звукоізоляція, VIP кабіни, приватні зони.",
}

export default function KontaktyPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>
            Контакти
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
                  та тестовий період безпосередньо у вашому ресторані чи готелі. Залиште заявку -- ми все
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
