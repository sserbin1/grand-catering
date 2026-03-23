'use client'

import Link from 'next/link'
import { siteConfig } from '../../../site.config'
import Logo from '../Logo'

const modelLinks = [
  { label: 'Solo', href: '/kataloh/solo/' },
  { label: 'Duet', href: '/kataloh/duet/' },
  { label: 'Quartet', href: '/kataloh/quartet/' },
  { label: 'Lite', href: '/kataloh/lite/' },
  { label: 'WorkPod', href: '/kataloh/workpod/' },
]

const companyLinks = [
  { label: 'Про компанію', href: '/pro-kompaniyu/' },
  { label: "Зв'язатися", href: '/zviazatysya/' },
  { label: 'FAQ', href: '/zapytannya/' },
  { label: 'Статті', href: '/statti/' },
]

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: '#0e0e0d',
        borderTop: '1px solid rgba(200,155,90,0.2)',
      }}
    >
      <div className="container mx-auto max-w-[1200px] px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Logo + description */}
          <div>
            <Link href="/" className="inline-flex transition-opacity hover:opacity-80">
              <Logo variant="light" showTagline />
            </Link>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{
                color: 'rgba(245,243,238,0.5)',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Grand — офіційний дилер акустичних кабін SilentBox в Україні.
            </p>
          </div>

          {/* Col 2: Models */}
          <div>
            <h3
              className="mb-4"
              style={{
                color: '#f5f3ee',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              Моделі
            </h3>
            <ul className="flex flex-col gap-2.5">
              {modelLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{
                      color: 'rgba(245,243,238,0.5)',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#c89b5a' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,243,238,0.5)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3
              className="mb-4"
              style={{
                color: '#f5f3ee',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              Компанія
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{
                      color: 'rgba(245,243,238,0.5)',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#c89b5a' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,243,238,0.5)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div>
            <h3
              className="mb-4"
              style={{
                color: '#f5f3ee',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              Контакти
            </h3>
            <ul
              className="flex flex-col gap-3 text-sm"
              style={{
                color: 'rgba(245,243,238,0.5)',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <li className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.828a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {siteConfig.workingHours}
              </li>
            </ul>
            {/* Gold CTA link */}
            <Link
              href="/zviazatysya/"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold transition-colors duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#c89b5a',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#d4a96a' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#c89b5a' }}
            >
              Зв&apos;язатися з нами
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(245,243,238,0.08)' }}>
        <div
          className="container mx-auto max-w-[1200px] px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            color: 'rgba(245,243,238,0.3)',
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span>&copy; 2024&ndash;2026 {siteConfig.domain}</span>
          <div className="flex items-center gap-4">
            <Link
              href="/polityka-konfidencijnosti/"
              className="transition-colors duration-200"
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c89b5a' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,243,238,0.3)' }}
            >
              Політика конфіденційності
            </Link>
            <span style={{ color: 'rgba(245,243,238,0.15)' }}>|</span>
            <Link
              href="/umovy-vykorystannya/"
              className="transition-colors duration-200"
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c89b5a' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,243,238,0.3)' }}
            >
              Умови використання
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
