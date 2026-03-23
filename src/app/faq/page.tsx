'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Який рівень звукоізоляції забезпечують кабіни SilentBox?',
    answer:
      'Кабіни Premium лінійки (Solo, Duet, Quartet) забезпечують звукоізоляцію до 35 дБ за стандартом ISO 23351-1. Це різниця між гучним рестораном (~75 дБ) та тихою бібліотекою (~30 дБ). Кабіни Lite лінійки (Solo Lite, Duet Lite, Quartet Lite) забезпечують 15-20 дБ зниження шуму — достатньо для комфортних дзвінків та зосередженої роботи персоналу.',
  },
  {
    question: 'Чи підійде кабіна для ресторану з обмеженим простором?',
    answer:
      'Так, найкомпактніша модель Solo займає лише 1.2 м\u00b2. Модульна конструкція дозволяє встановити кабіну навіть у невеликому ресторані або лобі готелю. Кабіну можна переміщувати за потреби без будівельних робіт.',
  },
  {
    question: 'Скільки часу займає збірка кабіни?',
    answer:
      'SilentBox Solo збирається за 60 хвилин без жодних інструментів завдяки модульній конструкції з патентованим дизайном. Duet збирається за 2-4 години, Quartet — за 4 години. Не потрібні будівельні роботи, пил чи спеціальне обладнання. Кабіну можна переміщувати за потреби.',
  },
  {
    question: 'Як працює вентиляція в кабіні?',
    answer:
      'Кабіни оснащені примусовою вентиляцією з фільтрацією повітря. Premium модель Solo має продуктивність 250-300 м\u00b3/год з повним оновленням повітря кожні 2-3 хвилини. Duet та Quartet — 550-600 м\u00b3/год. Lite моделі мають подвійну вентиляцію 2\u00d7160 м\u00b3/год. Рівень шуму вентилятора не перевищує 30 дБ. Керування через сенсорну панель Smart Electronics.',
  },
  {
    question: 'Яка гарантія на кабіни SilentBox?',
    answer:
      'Гарантія на конструкцію кабіни — до 10 років. Окрема гарантія надається на електроніку (Smart Electronics, датчики) та систему вентиляції. Сервісне обслуговування доступне по всій Україні.',
  },
  {
    question: 'Чи можна використовувати кабіну як VIP-зону для гостей?',
    answer:
      'Так, моделі Duet та Quartet ідеально підходять для створення приватних VIP-зон у ресторані. Панорамні скляні стіни зберігають візуальний зв\'язок із залом, а звукоізоляція 35 дБ забезпечує повну конфіденційність для ділових зустрічей та приватних розмов.',
  },
  {
    question: 'Куди здійснюється доставка та які терміни?',
    answer:
      'Доставка по всій Україні та Європі у 30+ країн за 3-5 робочих днів. Кабіни надійно упаковані та застраховані на час транспортування.',
  },
  {
    question: 'Чи можна орендувати кабіну замість покупки?',
    answer:
      'Так, ми пропонуємо оренду акустичних кабін від 3 місяців. Це зручне рішення для ресторанів, які хочуть протестувати кабіну перед покупкою, мають тимчасовий проєкт або сезонну потребу в додаткових приватних просторах. Зв\'яжіться з нами через форму для деталей.',
  },
  {
    question: 'Чим відрізняються лінійки Premium та Lite?',
    answer:
      'Premium лінійка (Solo, Duet, Quartet) забезпечує максимальну звукоізоляцію 35 дБ завдяки сендвіч-панелям (композит + фанера + мінвата + перфорований MDF + фетр) та триплекс скло. Lite лінійка (Solo Lite, Duet Lite, Quartet Lite) забезпечує 15-20 дБ з м\'якими акустичними панелями, SMART керуванням та 10+ варіантами дизайну.',
  },
]

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all"
      style={{
        border: '1px solid var(--color-border)',
        background: isOpen ? 'var(--color-bg-alt)' : 'var(--color-bg)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
        style={{ background: 'transparent', border: 'none', font: 'inherit' }}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold" style={{ color: 'var(--color-primary)' }}>
          {question}
        </span>
        <span
          className="text-xl font-light shrink-0 transition-transform"
          style={{
            color: 'var(--color-accent)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>
            Часті запитання
          </h1>
          <p className="section-subtitle">
            Відповіді на найпоширеніші запитання про акустичні кабіни SilentBox для ресторанів та готелів
          </p>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
