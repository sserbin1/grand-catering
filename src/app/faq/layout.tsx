import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Часті запитання — Grand Catering | SilentBox для ресторанів',
  description:
    'Відповіді на найпоширеніші запитання про акустичні кабіни SilentBox для ресторанів та готелів: звукоізоляція, монтаж, вентиляція, доставка по Україні.',
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
