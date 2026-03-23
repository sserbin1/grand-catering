import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '../../site.config'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '\u0410\u043a\u0443\u0441\u0442\u0438\u0447\u043d\u0456 \u043a\u0430\u0431\u0456\u043d\u0438 SilentBox \u0434\u043b\u044f \u043e\u0444\u0456\u0441\u0443 | Grand Catering \u2014 \u0434\u0438\u043b\u0435\u0440 \u0432 \u0423\u043a\u0440\u0430\u0457\u043d\u0456',
    template: `%s | Grand Catering`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: 'https://grand-catering.com.ua',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {siteConfig.umamiWebsiteId && (
          <Script
            src={`${siteConfig.umamiUrl}/script.js`}
            data-website-id={siteConfig.umamiWebsiteId}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
