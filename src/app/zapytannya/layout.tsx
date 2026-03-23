import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Часті запитання -- Grand | Акустичні кабіни SilentBox для офісу',
  description:
    'Відповіді на найпоширеніші запитання про акустичні кабіни SilentBox для офісу та open-space: звукоізоляція, ціни, монтаж, вентиляція, доставка по Україні.',
}

export default function ZapytannyaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
