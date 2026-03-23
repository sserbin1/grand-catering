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
      <span className="inline-flex items-center gap-2">
        {/* Stylized shield/leaf shape with sound waves */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
          aria-hidden="true"
        >
          {/* Shield/leaf outer shape */}
          <path
            d="M16 2C10 2 5 6 5 12c0 8 11 18 11 18s11-10 11-18c0-6-5-10-11-10z"
            fill={green}
            opacity="0.12"
          />
          {/* Inner leaf vein */}
          <path
            d="M16 6c-3.5 0-7 2.5-7 7 0 5.5 7 13 7 13s7-7.5 7-13c0-4.5-3.5-7-7-7z"
            fill={green}
            opacity="0.08"
          />

          {/* Sound wave bars inside shield */}
          <rect x="10" y="11" width="2.2" height="10" rx="1.1" fill={green}>
            <animate
              attributeName="height"
              values="10;6;10"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="y"
              values="11;13;11"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0s"
            />
          </rect>
          <rect x="13.5" y="8" width="2.2" height="16" rx="1.1" fill={copper}>
            <animate
              attributeName="height"
              values="16;10;16"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.15s"
            />
            <animate
              attributeName="y"
              values="8;11;8"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.15s"
            />
          </rect>
          <rect x="17" y="9" width="2.2" height="14" rx="1.1" fill={green}>
            <animate
              attributeName="height"
              values="14;8;14"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.3s"
            />
            <animate
              attributeName="y"
              values="9;12;9"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.3s"
            />
          </rect>
          <rect x="20.5" y="10.5" width="2.2" height="11" rx="1.1" fill={copper}>
            <animate
              attributeName="height"
              values="11;6;11"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.45s"
            />
            <animate
              attributeName="y"
              values="10.5;13;10.5"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.45s"
            />
          </rect>
        </svg>

        {/* Text */}
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: '1.25rem',
            letterSpacing: '-0.01em',
            lineHeight: 1,
            color: textColor,
          }}
        >
          Grand<span style={{ color: green }}>Catering</span>
        </span>
      </span>

      {/* Tagline */}
      {showTagline && (
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: '0.625rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: taglineColor,
            marginTop: '2px',
            paddingLeft: '42px',
          }}
        >
          Акустичні рішення для HoReCa
        </span>
      )}
    </span>
  )
}
