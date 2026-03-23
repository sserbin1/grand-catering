import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '../../site.config'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
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
