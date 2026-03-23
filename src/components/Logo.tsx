'use client'

interface LogoProps {
  variant?: 'light' | 'dark'
  showTagline?: boolean
  className?: string
}

export default function Logo({ variant = 'light', showTagline = false, className = '' }: LogoProps) {
  const gold = '#c89b5a'
  const textColor = variant === 'light' ? '#f5f3ee' : '#0e0e0d'
  const taglineColor = variant === 'light' ? 'rgba(245,243,238,0.5)' : 'rgba(14,14,13,0.5)'

  return (
    <span className={`inline-flex flex-col ${className}`}>
      <span className="inline-flex items-center gap-3">
        {/* Minimal geometric mark — two overlapping rectangles (cabin abstraction) */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="14" height="20" rx="1.5" stroke={gold} strokeWidth="1.5" fill="none" opacity="0.4" />
          <rect x="11" y="3" width="14" height="20" rx="1.5" stroke={gold} strokeWidth="1.5" fill="none" />
          <line x1="18" y1="10" x2="18" y2="16" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        <span className="inline-flex flex-col" style={{ lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: '1.375rem',
              letterSpacing: '0.08em',
              color: textColor,
              textTransform: 'uppercase',
            }}
          >
            Grand
          </span>
          {showTagline && (
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: '0.5625rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: taglineColor,
                marginTop: '3px',
              }}
            >
              Офіційний дилер SilentBox
            </span>
          )}
        </span>
      </span>
    </span>
  )
}
