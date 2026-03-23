'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../Logo'

const navItems = [
  { label: 'Головна', href: '/' },
  { label: 'Каталог', href: '/kataloh/' },
  { label: 'Переваги', href: '/perevahy/' },
  { label: 'Про компанію', href: '/pro-kompaniyu/' },
  { label: 'FAQ', href: '/zapytannya/' },
  { label: 'Статті', href: '/statti/' },
  { label: "Зв'язатися", href: '/zviazatysya/' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
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
      {/* Main nav */}
      <nav
        className="transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(14,14,13,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(245,243,238,0.06)' : '1px solid transparent',
        }}
      >
        <div className="container mx-auto max-w-[1200px] px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Logo variant="light" />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: '#f5f3ee',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#c89b5a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#f5f3ee'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA - gold button */}
          <Link
            href="/zviazatysya/"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: '#c89b5a',
              color: '#0e0e0d',
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#d4a96a'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#c89b5a'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Замовити аудит
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
                background: '#c89b5a',
                transform: mobileOpen ? 'translateY(4px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-6 h-0.5 rounded transition-all duration-300"
              style={{
                background: '#c89b5a',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 rounded transition-all duration-300"
              style={{
                background: '#c89b5a',
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
        <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
        <div
          className={`relative shadow-xl mx-4 mt-2 rounded-xl p-6 transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          style={{
            background: '#1c1c1a',
            border: '1px solid rgba(245,243,238,0.08)',
          }}
        >
          {/* Decorative accent line at top — gold */}
          <div
            className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #c89b5a, rgba(200,155,90,0.2))' }}
          />
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                  style={{
                    color: '#f5f3ee',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(200,155,90,0.1)'
                    e.currentTarget.style.color = '#c89b5a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#f5f3ee'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(245,243,238,0.08)' }}>
            <Link
              href="/zviazatysya/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full px-5 py-3 rounded-lg text-base font-semibold transition-all"
              style={{
                background: '#c89b5a',
                color: '#0e0e0d',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Замовити аудит
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
