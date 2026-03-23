'use client'

interface LogoProps {
  variant?: 'light' | 'dark'
  showTagline?: boolean
  className?: string
}

export default function Logo({ variant = 'dark', showTagline = false, className = '' }: LogoProps) {
  const purple = '#823494'
  const yellow = '#ffdc52'
  const textColor = variant === 'dark' ? '#2c2f38' : '#ffffff'
  const taglineColor = variant === 'dark' ? '#6b7280' : 'rgba(255,255,255,0.6)'

  return (
    <span className={`inline-flex flex-col ${className}`}>
      <span className="inline-flex items-center gap-2">
        {/* Animated soundwave icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
          aria-hidden="true"
        >
          {/* Outer booth shape — rounded rectangle */}
          <rect
            x="4"
            y="2"
            width="24"
            height="28"
            rx="4"
            fill={purple}
            opacity="0.12"
          />
          {/* Glass door slit */}
          <rect
            x="13"
            y="4"
            width="6"
            height="24"
            rx="3"
            fill={purple}
            opacity="0.18"
          />

          {/* Soundwave bars — animated */}
          <rect x="8" y="11" width="2.5" height="10" rx="1.25" fill={purple}>
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
          <rect x="12.5" y="8" width="2.5" height="16" rx="1.25" fill={yellow}>
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
          <rect x="17" y="6" width="2.5" height="20" rx="1.25" fill={purple}>
            <animate
              attributeName="height"
              values="20;12;20"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.3s"
            />
            <animate
              attributeName="y"
              values="6;10;6"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.3s"
            />
          </rect>
          <rect x="21.5" y="9" width="2.5" height="14" rx="1.25" fill={yellow}>
            <animate
              attributeName="height"
              values="14;8;14"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.45s"
            />
            <animate
              attributeName="y"
              values="9;12;9"
              dur="1.2s"
              repeatCount="indefinite"
              begin="0.45s"
            />
          </rect>
        </svg>

        {/* Text */}
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            color: textColor,
          }}
        >
          grand<span style={{ color: purple }}>catering</span>
        </span>
      </span>

      {/* Tagline */}
      {showTagline && (
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: '0.625rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: taglineColor,
            marginTop: '2px',
            paddingLeft: '42px',
          }}
        >
          Акустика для ресторанного бізнесу
        </span>
      )}
    </span>
  )
}
