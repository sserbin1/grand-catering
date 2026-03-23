import type { Metadata } from 'next'
import ContactForm from '../../components/forms/ContactForm'

export const metadata: Metadata = {
  title: "Зв'язатися -- Grand | Акустичні кабіни SilentBox для офісу",
  description:
    "Зв'яжіться з Grand для безкоштовного аудиту офісу. Акустичні кабіни SilentBox для open-space, переговорні кімнати, телефонні кабіни. Звукоізоляція офісу до 35 дБ.",
}

export default function ZviazatysyaPage() {
  return (
    <main>
      <section className="section" style={{ background: '#0e0e0d' }}>
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
              <h2 className="text-xl font-bold mb-6" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>
                Залишити заявку
              </h2>
              <ContactForm />
            </div>

            {/* Right: Info */}
            <div>
              {/* Contact info */}
              <div className="card rounded-xl p-8 mb-6">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#f5f3ee', fontFamily: "'Cormorant Garamond', serif" }}>
                  Контактна інформація
                </h3>
                <ul className="space-y-3 text-sm" style={{ color: 'rgba(245,243,238,0.65)' }}>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="#c89b5a">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    м. Київ
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="#c89b5a">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.828a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Пн-Пт 9:00-18:00
                  </li>
                </ul>
              </div>

              {/* Testing block */}
              <div className="card rounded-xl p-8" style={{ borderColor: 'rgba(200, 155, 90, 0.3)' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#c89b5a', fontFamily: "'Cormorant Garamond', serif" }}>
                  Безкоштовний аудит та тестування
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,243,238,0.65)' }}>
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
