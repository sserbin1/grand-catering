import { generatePageMetadata } from '@/lib/seo'
import ModeliContent from './ModeliContent'

export const metadata = generatePageMetadata({
  title: 'Каталог акустичних кабін SilentBox для ресторанів та готелів | 7 моделей',
  description:
    'Акустичні кабіни SilentBox для ресторанів, готелів та кейтерингу: Premium (Solo, Duet, Quartet), Lite (Solo Lite, Duet Lite, Quartet Lite), Pro (WorkPod). Звукоізоляція до 35 дБ. VIP кабіни для ресторанного бізнесу. Доставка по Україні.',
  path: '/modeli/',
  keywords: [
    'акустична кабіна для ресторану',
    'VIP кабіна ресторан',
    'звукоізоляційна кабіна для готелю',
    'приватна зона ресторан',
    'звукоізоляція ресторану',
    'акустичне рішення кейтеринг',
    'silentbox україна',
  ],
})

export default function ModeliPage() {
  return <ModeliContent />
}
