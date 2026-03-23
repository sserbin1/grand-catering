import { generatePageMetadata } from '@/lib/seo'
import KatalohContent from './KatalohContent'

export const metadata = generatePageMetadata({
  title: 'Каталог акустичних кабін SilentBox для офісу | 7 моделей',
  description:
    'Акустичні кабіни SilentBox для офісу та open-space: Premium (Solo, Duet, Quartet), Lite (Solo Lite, Duet Lite, Quartet Lite), Pro (WorkPod). Звукоізоляція до 35 дБ. Переговорні кабіни для офісного простору. Доставка по Україні.',
  path: '/kataloh/',
  keywords: [
    'акустична кабіна для офісу',
    'переговорна кабіна офіс',
    'звукоізоляція open-space',
    'телефонна кабіна офіс',
    'шумоізоляція офісу',
    'акустичне рішення коворкінг',
    'silentbox україна',
  ],
})

export default function KatalohPage() {
  return <KatalohContent />
}
