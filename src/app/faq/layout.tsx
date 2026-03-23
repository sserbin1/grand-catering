import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Часті запитання — Grand Catering | Акустичні кабіни SilentBox для ресторанів та готелів',
  description:
    'Відповіді на найпоширеніші запитання про акустичні кабіни SilentBox для ресторанів, готелів та кейтерингу: звукоізоляція, VIP кабіни, приватні зони, монтаж, вентиляція, доставка по Україні.',
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
