'use client'

interface LogoProps {
  variant?: 'light' | 'dark'
  showTagline?: boolean
  className?: string
}

export default function Logo({ variant = 'dark', showTagline = false, className = '' }: LogoProps) {
  const green = '#1a5632'
  const copper = '#c87941'
  const textColor = variant === 'dark' ? '#1a1a1a' : '#ffffff'
  const taglineColor = variant === 'dark' ? '#6b6560' : 'rgba(255,255,255,0.6)'

  return (
    <span className={`inline-flex flex-col ${className}`}>
      <span className="inline-flex items-center gap-2.5">
        {/* Stylized acoustic cabin icon with sound-blocking arcs */}
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
          aria-hidden="true"
        >
          {/* Cabin body — rounded rectangle */}
          <rect
            x="8"
            y="4"
            width="18"
            height="26"
            rx="3"
            fill={green}
            opacity="0.15"
          />
          {/* Glass door panel */}
          <rect
            x="12"
            y="7"
            width="10"
            height="18"
            rx="2"
            fill={green}
            opacity="0.25"
          />
          {/* Door handle */}
          <rect
            x="19"
            y="14"
            width="1.5"
            height="5"
            rx="0.75"
            fill={copper}
          />

          {/* Sound-blocking arcs — radiating outward from cabin */}
          <path
            d="M6.5 10a12 12 0 0 0 0 14"
            stroke={green}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.5;0.15;0.5"
              dur="2s"
              repeatCount="indefinite"
              begin="0s"
            />
          </path>
          <path
            d="M3.5 7.5a16 16 0 0 0 0 19"
            stroke={green}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.08;0.3"
              dur="2s"
              repeatCount="indefinite"
              begin="0.3s"
            />
          </path>
          <path
            d="M27.5 10a12 12 0 0 1 0 14"
            stroke={copper}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.5;0.15;0.5"
              dur="2s"
              repeatCount="indefinite"
              begin="0.15s"
            />
          </path>
          <path
            d="M30.5 7.5a16 16 0 0 1 0 19"
            stroke={copper}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.08;0.3"
              dur="2s"
              repeatCount="indefinite"
              begin="0.45s"
            />
          </path>

          {/* Person silhouette inside cabin */}
          <circle cx="17" cy="13" r="2" fill={green} opacity="0.4" />
          <path
            d="M14.5 19c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v3h-5v-3z"
            fill={green}
            opacity="0.3"
          />
        </svg>

        {/* Text — different structure from kiteforum */}
        <span className="inline-flex flex-col" style={{ lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: '1.125rem',
              letterSpacing: '-0.02em',
              color: textColor,
            }}
          >
            GRAND
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.6875rem',
              letterSpacing: '0.15em',
              color: copper,
              marginTop: '1px',
            }}
          >
            CATERING
          </span>
        </span>
      </span>

      {/* Tagline */}
      {showTagline && (
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: '0.5625rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: taglineColor,
            marginTop: '4px',
            paddingLeft: '44px',
          }}
        >
          Акустичні кабіни для офісу
        </span>
      )}
    </span>
  )
}
