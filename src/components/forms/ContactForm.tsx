'use client'

import { useState, type FormEvent } from 'react'
import { siteConfig } from '../../../site.config'

const modelOptions = [
  { value: '', label: 'Оберіть модель' },
  { value: 'Solo', label: 'SilentBox Solo (Premium, 1 особа)' },
  { value: 'Duet', label: 'SilentBox Duet (Premium, 2 особи)' },
  { value: 'Quartet', label: 'SilentBox Quartet (Premium, 4 особи)' },
  { value: 'Solo Lite', label: 'SilentBox Solo Lite (Lite, 1 особа)' },
  { value: 'Duet Lite', label: 'SilentBox Duet Lite (Lite, 2 особи)' },
  { value: 'Quartet Lite', label: 'SilentBox Quartet Lite (Lite, 4 особи)' },
  { value: 'WorkPod', label: 'SilentBox WorkPod (Pro, 1-2 особи)' },
  { value: 'consultation', label: 'Потрібна консультація' },
]

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
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <p className="text-green-700 font-semibold text-lg">
          Дякуємо! Ми зв&#39;яжемось з вами найближчим часом.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-primary)' }}>
          Ім&#39;я <span style={{ color: 'var(--color-accent)' }}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Ваше ім'я"
          className="w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none focus:ring-2"
          style={{
            borderColor: 'var(--color-border)',
            background: 'var(--color-bg)',
          }}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-primary)' }}>
          Телефон <span style={{ color: 'var(--color-accent)' }}>*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="+380 (__) ___-__-__"
          className="w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none focus:ring-2"
          style={{
            borderColor: 'var(--color-border)',
            background: 'var(--color-bg)',
          }}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-primary)' }}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@example.com"
          className="w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none focus:ring-2"
          style={{
            borderColor: 'var(--color-border)',
            background: 'var(--color-bg)',
          }}
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-primary)' }}>
          Компанія
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Назва компанії"
          className="w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none focus:ring-2"
          style={{
            borderColor: 'var(--color-border)',
            background: 'var(--color-bg)',
          }}
        />
      </div>

      <div>
        <label htmlFor="model" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-primary)' }}>
          Модель
        </label>
        <select
          id="model"
          name="model"
          className="w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none focus:ring-2 appearance-none bg-no-repeat bg-right"
          style={{
            borderColor: 'var(--color-border)',
            background: 'var(--color-bg)',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23718096' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 1rem center',
          }}
        >
          {modelOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1.5" style={{ color: 'var(--color-primary)' }}>
          Повідомлення
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Розкажіть про ваші потреби..."
          className="w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none focus:ring-2 resize-y"
          style={{
            borderColor: 'var(--color-border)',
            background: 'var(--color-bg)',
          }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Відправляємо...' : 'Відправити заявку'}
      </button>

      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">
          Щось пішло не так. Будь ласка, спробуйте ще раз.
        </p>
      )}
    </form>
  )
}
