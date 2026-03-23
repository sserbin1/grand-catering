'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Який рівень звукоізоляції забезпечують акустичні кабіни SilentBox в офісі?',
    answer:
      'Кабіни Premium лінійки (Solo, Duet, Quartet) забезпечують звукоізоляцію до 35 дБ за стандартом ISO 23351-1. Це різниця між гучним open-space (~65 дБ) та тихою бібліотекою (~30 дБ). Кабіни Lite лінійки (Solo Lite, Duet Lite, Quartet Lite) забезпечують 15-20 дБ зниження шуму -- достатньо для комфортних дзвінків та зосередженої роботи.',
  },
  {
    question: 'Як створити переговорну зону в open-space за допомогою SilentBox?',
    answer:
      'Моделі Duet та Quartet ідеально підходять для створення переговорних зон в open-space офісі. Панорамні скляні стіни зберігають візуальний зв\'язок з офісним простором, а звукоізоляція 35 дБ забезпечує повну конфіденційність для зустрічей з клієнтами та командних нарад. Кабіна встановлюється без перебудови приміщення.',
  },
  {
    question: 'Чи підійде акустична кабіна для невеликого офісу?',
    answer:
      'Так, найкомпактніша модель Solo займає лише 1.2 м\u00b2. Модульна конструкція дозволяє встановити акустичну кабіну навіть у невеликому офісі або коворкінгу. Кабіну можна переміщувати за потреби без будівельних робіт.',
  },
  {
    question: 'Скільки часу займає монтаж звукоізоляційної кабіни в офісі?',
    answer:
      'SilentBox Solo збирається за 60 хвилин без жодних інструментів завдяки модульній конструкції з патентованим дизайном. Duet збирається за 2-4 години, Quartet -- за 4 години. Не потрібні будівельні роботи, пил чи спеціальне обладнання. Ваш офіс працює у звичному режимі під час монтажу.',
  },
  {
    question: 'Як працює вентиляція в акустичній кабіні?',
    answer:
      'Кабіни оснащені примусовою вентиляцією з фільтрацією повітря. Premium модель Solo має продуктивність 250-300 м\u00b3/год з повним оновленням повітря кожні 2-3 хвилини. Duet та Quartet -- 550-600 м\u00b3/год. Lite моделі мають подвійну вентиляцію 2\u00d7160 м\u00b3/год. Рівень шуму вентилятора не перевищує 30 дБ.',
  },
  {
    question: 'Яка гарантія на звукоізоляційні кабіни SilentBox?',
    answer:
      'Гарантія на конструкцію кабіни -- до 10 років. Окрема гарантія надається на електроніку (Smart Electronics, датчики) та систему вентиляції. Сервісне обслуговування доступне по всій Україні.',
  },
  {
    question: 'Чи можна орендувати акустичну кабіну для офісу?',
    answer:
      'Так, ми пропонуємо оренду акустичних кабін від 3 місяців. Це зручне рішення для компаній, які хочуть протестувати кабіну перед покупкою, мають тимчасовий проект або офіс на час ремонту основного приміщення.',
  },
  {
    question: 'Чим відрізняються лінійки Premium та Lite?',
    answer:
      'Premium лінійка (Solo, Duet, Quartet) забезпечує максимальну звукоізоляцію 35 дБ завдяки сендвіч-панелям та триплекс скло. Lite лінійка забезпечує 15-20 дБ з м\'якими акустичними панелями та SMART керуванням -- оптимальне рішення для стартапів та невеликих офісів.',
  },
  {
    question: 'Яке рішення підходить для коворкінгу?',
    answer:
      'Для коворкінгів рекомендуємо комбінацію Solo (телефонні кабіни для дзвінків) та Duet Lite (переговорні зони для зустрічей). Lite лінійка (15-20 дБ) з SMART керуванням та 10+ варіантами дизайну оптимально поєднує ціну та функціональність для простору спільного користування.',
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
        <span className="text-base font-semibold" style={{ color: 'var(--color-primary)', fontFamily: "'Playfair Display', serif" }}>
          {question}
        </span>
        <span
          className="text-xl font-light shrink-0 transition-transform"
          style={{
            color: '#1a5632',
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

export default function ZapytannyaPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <main>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>
            Часті запитання
          </h1>
          <p className="section-subtitle">
            Відповіді на найпоширеніші запитання про акустичні кабіни SilentBox для офісу та open-space
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
