import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Часті запитання про акустичні кабіни SilentBox для офісу',
  description:
    'Відповіді на найпоширеніші запитання про акустичні кабіни SilentBox для офісу та open-space: звукоізоляція, переговорні кабіни, монтаж, вентиляція, доставка по Україні.',
}

export default function ZapytannyaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
