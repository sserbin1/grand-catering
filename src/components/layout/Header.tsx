'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import { siteConfig } from '../../../site.config'

const navItems = [
  { label: 'Головна', href: '/' },
  { label: 'Моделі', href: '/modeli/' },
  { label: 'Переваги', href: '/#perevagy' },
  { label: 'Про нас', href: '/pro-nas/' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Блог', href: '/blog/' },
  { label: 'Контакти', href: '/kontakty/' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isHomePage, setIsHomePage] = useState(false)

  useEffect(() => {
    const home = window.location.pathname === '/'
    setIsHomePage(home)
    const onScroll = () => {
      if (home) {
        setScrolled(window.scrollY > 20)
      } else {
        setScrolled(true)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Thin top bar with phone and working hours */}
      <div
        className="hidden lg:block transition-all duration-300"
        style={{
          background: scrolled ? '#1a1a1a' : 'rgba(0,0,0,0.3)',
        }}
      >
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center justify-between h-8">
          <div className="flex items-center gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Inter', sans-serif" }}>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="#c87941">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.828a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {siteConfig.workingHours}
            </span>
          </div>
          <a
            href={`tel:${siteConfig.phone?.replace(/[^+\d]/g, '') || ''}`}
            className="flex items-center gap-1.5 text-xs font-medium transition-colors"
            style={{ color: '#c87941', fontFamily: "'Inter', sans-serif" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {siteConfig.phone || '+380 (XX) XXX-XX-XX'}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'shadow-md'
            : ''
        }`}
        style={{
          background: scrolled ? 'var(--color-bg, #fffcf8)' : 'transparent',
        }}
      >
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Logo variant={scrolled ? 'dark' : 'light'} />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: scrolled ? 'var(--color-text, #1a1a1a)' : 'rgba(255,255,255,0.9)',
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = scrolled ? '#1a5632' : '#ffffff'
                    e.currentTarget.style.background = scrolled ? '#e8f5ee' : 'rgba(255,255,255,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = scrolled ? 'var(--color-text, #1a1a1a)' : 'rgba(255,255,255,0.9)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA - copper button */}
          <Link
            href="/kontakty/"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all"
            style={{
              background: 'var(--color-cta, #c87941)',
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-cta-hover, #b5693a)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-cta, #c87941)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Замовити консультацію
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Меню"
          >
            <span
              className="block w-6 h-0.5 rounded transition-all duration-300"
              style={{
                background: scrolled ? 'var(--color-accent, #1a5632)' : '#ffffff',
                transform: mobileOpen ? 'translateY(4px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-6 h-0.5 rounded transition-all duration-300"
              style={{
                background: scrolled ? 'var(--color-accent, #1a5632)' : '#ffffff',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 rounded transition-all duration-300"
              style={{
                background: scrolled ? 'var(--color-accent, #1a5632)' : '#ffffff',
                transform: mobileOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
        <div
          className={`relative shadow-xl mx-4 mt-2 rounded-xl p-6 transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          style={{ background: 'var(--color-bg, #fffcf8)' }}
        >
          {/* Decorative accent line at top — green to copper gradient */}
          <div
            className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #1a5632, #c87941)' }}
          />
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                  style={{
                    color: 'var(--color-text, #1a1a1a)',
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#e8f5ee'
                    e.currentTarget.style.color = '#1a5632'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--color-text, #1a1a1a)'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border, #e8e2db)' }}>
            <Link
              href="/kontakty/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full px-5 py-3 rounded-lg text-base font-semibold text-white transition-all"
              style={{
                background: 'var(--color-cta, #c87941)',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Замовити консультацію
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
