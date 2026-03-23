'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../Logo'

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      {/* Main nav */}
      <nav className="container mx-auto max-w-[1200px] px-4 flex items-center justify-between h-16">
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
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{
                  color: scrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.9)',
                  fontFamily: "'Montserrat', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = scrolled ? '#823494' : '#ffffff'
                  e.currentTarget.style.background = scrolled ? '#f3e8f7' : 'rgba(255,255,255,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? 'var(--color-text)' : 'rgba(255,255,255,0.9)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA - yellow button */}
        <Link
          href="/kontakty/"
          className="hidden lg:inline-flex btn-primary text-sm"
        >
          Замовити
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
              background: scrolled ? 'var(--color-primary)' : '#ffffff',
              transform: mobileOpen ? 'translateY(4px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 rounded transition-all duration-300"
            style={{
              background: scrolled ? 'var(--color-primary)' : '#ffffff',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 rounded transition-all duration-300"
            style={{
              background: scrolled ? 'var(--color-primary)' : '#ffffff',
              transform: mobileOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
        <div
          className={`relative bg-white shadow-xl mx-4 mt-2 rounded-xl p-6 transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          {/* Decorative purple accent line at top of mobile menu */}
          <div
            className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #823494, #ffdc52)' }}
          />
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                  style={{
                    color: 'var(--color-text)',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f3e8f7'
                    e.currentTarget.style.color = '#823494'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--color-text)'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
            <Link
              href="/kontakty/"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Замовити
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
