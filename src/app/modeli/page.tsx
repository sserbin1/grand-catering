import { generatePageMetadata } from '@/lib/seo'
import ModeliContent from './ModeliContent'

export const metadata = generatePageMetadata({
  title: 'Каталог акустичних кабін SilentBox | 7 моделей для ресторанів',
  description:
    'Акустичні кабіни SilentBox для ресторанів та готелів: Premium (Solo, Duet, Quartet), Lite (Solo Lite, Duet Lite, Quartet Lite), Pro (WorkPod). Звукоізоляція до 35 дБ. Доставка по Україні.',
  path: '/modeli/',
  keywords: [
    'акустична кабіна для ресторану',
    'звукоізоляційна кабіна купити',
    'VIP зона ресторан',
    'silentbox україна',
    'приватна кабіна для готелю',
    'кабіна для ресторану',
  ],
})

export default function ModeliPage() {
  return <ModeliContent />
}
