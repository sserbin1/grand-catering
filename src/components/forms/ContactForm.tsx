'use client'

import { useState, type FormEvent } from 'react'
import { siteConfig } from '../../../site.config'

const modelOptions = [
  { value: '', label: 'Оберіть модель' },
  { value: 'Solo', label: 'SilentBox Solo (Premium, 1 особа) -- \u20ac5 690' },
  { value: 'Duet', label: 'SilentBox Duet (Premium, 2 особи) -- \u20ac10 190' },
  { value: 'Quartet', label: 'SilentBox Quartet (Premium, 4 особи) -- \u20ac11 290' },
  { value: 'Solo Lite', label: 'SilentBox Solo Lite (Lite, 1 особа) -- ~\u20ac4 200' },
  { value: 'Duet Lite', label: 'SilentBox Duet Lite (Lite, 2 особи) -- \u20ac7 190' },
  { value: 'Quartet Lite', label: 'SilentBox Quartet Lite (Lite, 4 особи) -- \u20ac8 590' },
  { value: 'WorkPod', label: 'SilentBox WorkPod (Pro, 1-2 особи) -- \u20ac5 990' },
  { value: 'Hybrid Set', label: 'Hybrid Set (Solo + Duet) -- \u20ac14 290' },
  { value: 'Team Hub', label: 'Team Hub (Duet + WorkPod) -- ~\u20ac14 560' },
  { value: 'consultation', label: 'Потрібна консультація' },
]

const inputStyle = {
  borderColor: 'rgba(245,243,238,0.12)',
  background: '#111110',
  color: '#f5f3ee',
  fontFamily: "'DM Sans', sans-serif",
}

const focusRingClass = 'w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none focus:ring-2 focus:ring-[#c89b5a] focus:border-[#c89b5a]'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)
    const lead = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email') || undefined,
      company: formData.get('company') || undefined,
      model: formData.get('model') || undefined,
      message: formData.get('message') || undefined,
    }

    try {
      await fetch(siteConfig.crmWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: siteConfig.domain,
          lead,
          source: {
            page: window.location.pathname,
          },
        }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border p-8 text-center" style={{ background: 'rgba(200, 155, 90, 0.08)', borderColor: 'rgba(200, 155, 90, 0.3)' }}>
        <div className="text-4xl mb-4" style={{ color: '#c89b5a' }}>&#10003;</div>
        <p className="font-semibold text-lg" style={{ color: '#c89b5a' }}>
          Дякуємо! Ми зв&#39;яжемось з вами найближчим часом.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-1.5" style={{ color: '#f5f3ee' }}>
          Ім&#39;я <span style={{ color: '#c89b5a' }}>*</span>
        </label>
        <input type="text" id="name" name="name" required placeholder="Ваше ім'я" className={focusRingClass} style={inputStyle} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-1.5" style={{ color: '#f5f3ee' }}>
          Телефон <span style={{ color: '#c89b5a' }}>*</span>
        </label>
        <input type="tel" id="phone" name="phone" required placeholder="+380 (__) ___-__-__" className={focusRingClass} style={inputStyle} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1.5" style={{ color: '#f5f3ee' }}>Email</label>
        <input type="email" id="email" name="email" placeholder="email@example.com" className={focusRingClass} style={inputStyle} />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-1.5" style={{ color: '#f5f3ee' }}>Компанія</label>
        <input type="text" id="company" name="company" placeholder="Назва компанії" className={focusRingClass} style={inputStyle} />
      </div>

      <div>
        <label htmlFor="model" className="block text-sm font-semibold mb-1.5" style={{ color: '#f5f3ee' }}>Модель</label>
        <select
          id="model"
          name="model"
          className={`${focusRingClass} appearance-none bg-no-repeat bg-right`}
          style={{
            ...inputStyle,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c89b5a' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 1rem center',
          }}
        >
          {modelOptions.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ background: '#1c1c1a', color: '#f5f3ee' }}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1.5" style={{ color: '#f5f3ee' }}>Повідомлення</label>
        <textarea id="message" name="message" rows={4} placeholder="Розкажіть про ваші потреби..." className={`${focusRingClass} resize-y`} style={inputStyle} />
      </div>

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full justify-center px-6 py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed">
        {status === 'submitting' ? 'Відправляємо...' : 'Відправити заявку'}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">Щось пішло не так. Будь ласка, спробуйте ще раз.</p>
      )}
    </form>
  )
}
