import Link from 'next/link'
import { siteConfig } from '../../../site.config'
import Logo from '../Logo'

const modelLinks = [
  { label: 'Solo', href: '/modeli/solo/' },
  { label: 'Duet', href: '/modeli/duet/' },
  { label: 'Quartet', href: '/modeli/quartet/' },
  { label: 'Lite', href: '/modeli/lite/' },
  { label: 'WorkPod', href: '/modeli/workpod/' },
]

const companyLinks = [
  { label: 'Про нас', href: '/pro-nas/' },
  { label: 'Контакти', href: '/kontakty/' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Відгуки', href: '/#vidguky' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(90,47,153,1) 0%, rgba(130,52,148,1) 50%, rgba(90,47,153,1) 100%)' }}>
      {/* Decorative geometric elements */}
      <div
        className="absolute top-10 right-10 w-24 h-24 rounded-sm opacity-10"
        style={{ background: '#ffffff', transform: 'rotate(45deg)' }}
      />
      <div
        className="absolute bottom-20 left-[-20px] w-16 h-16 rounded-full opacity-10"
        style={{ background: '#ffdc52' }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-8 h-8 rounded-sm opacity-5"
        style={{ background: '#ffffff', transform: 'rotate(45deg)' }}
      />
      <div
        className="absolute bottom-10 right-1/3 w-12 h-12 rounded-full opacity-5"
        style={{ background: '#ffffff' }}
      />

      <div className="relative container mx-auto max-w-[1200px] px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Logo + description */}
          <div>
            <Link href="/" className="inline-flex transition-opacity hover:opacity-80">
              <Logo variant="light" showTagline />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Офіційний дистриб&apos;ютор акустичних кабін Silentbox для ресторанів, готелів та кейтерингу в Україні.
            </p>
          </div>

          {/* Col 2: Models */}
          <div>
            <h3
              className="text-white font-semibold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Моделі
            </h3>
            <ul className="flex flex-col gap-2.5">
              {modelLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
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
              className="text-white font-semibold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Компанія
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
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
              className="text-white font-semibold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Контакти
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
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
            {/* Yellow CTA link */}
            <Link
              href="/kontakty/"
              className="footer-cta-link inline-flex items-center gap-2 mt-5 text-sm font-semibold transition-colors duration-200"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
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
      <div className="relative border-t border-white/10">
        <div className="container mx-auto max-w-[1200px] px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>&copy; 2024&ndash;2026 {siteConfig.domain}</span>
          <div className="flex items-center gap-4">
            <Link href="/polityka-konfidencijnosti/" className="hover:text-white/70 transition-colors duration-200">
              Політика конфіденційності
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/umovy-vykorystannya/" className="hover:text-white/70 transition-colors duration-200">
              Умови використання
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
