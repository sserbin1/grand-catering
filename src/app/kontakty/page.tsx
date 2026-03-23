import type { Metadata } from 'next'
import ContactForm from '../../components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Контакти — Grand Catering | SilentBox для ресторанів',
  description:
    "Зв'яжіться з Grand Catering. Безкоштовна консультація, тестування акустичних кабін SilentBox для ресторанів та готелів.",
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
                style={{ color: 'var(--color-primary)' }}
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
                  background: 'var(--color-accent-light)',
                  border: '1px solid rgba(130, 52, 148, 0.2)',
                }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Безкоштовне тестування
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
                  Запрошуємо вас відвідати наш шоу-рум, щоб особисто оцінити якість
                  звукоізоляції кабін SilentBox. Також ми можемо організувати тестовий період
                  безпосередньо у вашому ресторані чи готелі. Залиште заявку — ми все
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
