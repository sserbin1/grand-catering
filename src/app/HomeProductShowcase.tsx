'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getModelsByLine, type ModelLine, type CabinModel } from '@/lib/models'

const lineColors: Record<ModelLine, string> = {
  premium: '#1a5632',
  lite: '#c87941',
  pro: '#4a6fa5',
}

const lineTabs: { key: ModelLine; label: string }[] = [
  { key: 'premium', label: 'Premium \u00b7 35 \u0434\u0411' },
  { key: 'lite', label: 'Lite \u00b7 15-20 \u0434\u0411' },
  { key: 'pro', label: 'Pro' },
]

export default function HomeProductShowcase() {
  const [activeLine, setActiveLine] = useState<ModelLine>('premium')
  const [activeModelIndex, setActiveModelIndex] = useState(0)

  const lineModels = getModelsByLine(activeLine)
  const activeModel: CabinModel | undefined = lineModels[activeModelIndex]

  function handleLineChange(line: ModelLine) {
    setActiveLine(line)
    setActiveModelIndex(0)
  }

  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <h2 className="section-title">{'\u041c\u043e\u0434\u0435\u043b\u0456 SilentBox'}</h2>
        <p className="section-subtitle">{'\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043b\u0456\u043d\u0456\u0439\u043a\u0443 \u0442\u0430 \u043c\u043e\u0434\u0435\u043b\u044c, \u044f\u043a\u0430 \u043f\u0456\u0434\u0445\u043e\u0434\u0438\u0442\u044c \u0434\u043b\u044f \u0432\u0430\u0448\u043e\u0433\u043e \u043e\u0444\u0456\u0441\u0443'}</p>

        {/* Line tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {lineTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleLineChange(tab.key)}
              style={{
                padding: '0.625rem 1.5rem',
                borderRadius: '999px',
                border: activeLine === tab.key ? 'none' : '1.5px solid var(--color-border)',
                background: activeLine === tab.key ? lineColors[tab.key] : 'transparent',
                color: activeLine === tab.key ? '#fff' : 'var(--color-text)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Model sub-tabs (if more than 1 model in line) */}
        {lineModels.length > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            {lineModels.map((m, i) => (
              <button
                key={m.slug}
                onClick={() => setActiveModelIndex(i)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '0.375rem',
                  border: activeModelIndex === i ? `2px solid ${lineColors[activeLine]}` : '1px solid var(--color-border)',
                  background: activeModelIndex === i ? 'var(--color-accent-light)' : 'transparent',
                  color: activeModelIndex === i ? lineColors[activeLine] : 'var(--color-text-light)',
                  fontWeight: 500,
                  fontSize: '0.8125rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {m.name}
              </button>
            ))}
          </div>
        )}

        {/* Active model card */}
        {activeModel && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
            background: '#fff',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            border: '1px solid var(--color-border)',
          }}>
            {/* Left -- specs */}
            <div style={{ padding: '2.5rem' }}>
              <span style={{
                display: 'inline-block',
                background: lineColors[activeModel.line],
                color: '#fff',
                padding: '0.25rem 0.75rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                marginBottom: '1rem',
              }}>
                {activeModel.lineLabel}
              </span>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.75rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                color: 'var(--color-text)',
              }}>
                {activeModel.fullName}
              </h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.9375rem', marginBottom: '1.5rem' }}>
                {activeModel.feature}
              </p>

              {/* Specs grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { label: '\u0417\u0432\u0443\u043a\u043e\u0456\u0437\u043e\u043b\u044f\u0446\u0456\u044f', value: activeModel.soundInsulation },
                  { label: '\u041c\u0456\u0441\u0442\u043a\u0456\u0441\u0442\u044c', value: activeModel.capacity },
                  { label: '\u0420\u043e\u0437\u043c\u0456\u0440\u0438', value: activeModel.dimensions },
                  { label: '\u0412\u0430\u0433\u0430', value: activeModel.weight },
                ].map((spec) => (
                  <div key={spec.label}>
                    <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--color-text-light)', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                      {spec.label}
                    </div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-text)' }}>
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href={`/kataloh/${activeModel.slug}/`} className="btn-primary" style={{ display: 'inline-flex' }}>
                  {'\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435'}
                </Link>
                <Link href="/zviazatysya/" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: lineColors[activeModel.line],
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  borderRadius: '0.375rem',
                  border: `1.5px solid ${lineColors[activeModel.line]}`,
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                }}>
                  {'\u0414\u0456\u0437\u043d\u0430\u0442\u0438\u0441\u044f \u0446\u0456\u043d\u0443'}
                </Link>
              </div>
            </div>

            {/* Right -- decorative placeholder */}
            <div style={{
              background: `linear-gradient(135deg, ${lineColors[activeModel.line]}22 0%, ${lineColors[activeModel.line]}08 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{
                fontSize: '3rem',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: `${lineColors[activeModel.line]}25`,
                textAlign: 'center',
                lineHeight: 1.2,
              }}>
                {activeModel.name}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
