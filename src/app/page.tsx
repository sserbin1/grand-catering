'use client'

import Link from 'next/link'
import { useState } from 'react'
import { models, getModelsByLine, type ModelLine, type CabinModel } from '@/lib/models'

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

const painPoints = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    stat: '~65 \u0434\u0411',
    title: '\u0428\u0443\u043c \u0432 open-space',
    desc: '\u0420\u0456\u0432\u0435\u043d\u044c \u0448\u0443\u043c\u0443 \u0443 \u0432\u0456\u0434\u043a\u0440\u0438\u0442\u043e\u043c\u0443 \u043e\u0444\u0456\u0441\u0456 \u043f\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u0454 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0456\u0457 \u0412\u041e\u041e\u0417 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0457 \u0440\u043e\u0431\u043e\u0442\u0438.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    stat: '23 \u0445\u0432',
    title: '\u0412\u0442\u0440\u0430\u0447\u0435\u043d\u0438\u0439 \u0444\u043e\u043a\u0443\u0441',
    desc: '\u0421\u0430\u043c\u0435 \u0441\u0442\u0456\u043b\u044c\u043a\u0438 \u0447\u0430\u0441\u0443 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e, \u0449\u043e\u0431 \u043f\u043e\u0432\u043d\u0456\u0441\u0442\u044e \u0437\u043e\u0441\u0435\u0440\u0435\u0434\u0438\u0442\u0438\u0441\u044f \u043f\u0456\u0441\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0432\u0456\u0434\u0432\u043e\u043b\u0456\u043a\u0430\u043d\u043d\u044f.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    stat: '0',
    title: '\u041d\u0435\u043c\u0430\u0454 \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u043d\u0438\u0445',
    desc: '\u0412 \u0431\u0456\u043b\u044c\u0448\u043e\u0441\u0442\u0456 \u043e\u0444\u0456\u0441\u0456\u0432 \u043d\u0435\u043c\u0430\u0454 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u0443 \u0434\u043b\u044f \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0435\u0439 \u0442\u0430 \u0434\u0437\u0432\u0456\u043d\u043a\u0456\u0432.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    stat: '\u2191 40%',
    title: '\u0421\u0442\u0440\u0435\u0441 \u0456 \u0432\u0438\u0433\u043e\u0440\u0430\u043d\u043d\u044f',
    desc: '\u041f\u043e\u0441\u0442\u0456\u0439\u043d\u0438\u0439 \u0448\u0443\u043c \u043f\u0456\u0434\u0432\u0438\u0449\u0443\u0454 \u0440\u0456\u0432\u0435\u043d\u044c \u043a\u043e\u0440\u0442\u0438\u0437\u043e\u043b\u0443 \u0442\u0430 \u043f\u0440\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u0434\u043e \u0432\u0438\u0433\u043e\u0440\u0430\u043d\u043d\u044f.',
  },
]

const techFeatures = [
  {
    title: '\u0417\u0432\u0443\u043a\u043e\u0456\u0437\u043e\u043b\u044f\u0446\u0456\u044f \u0434\u043e 35 \u0434\u0411',
    desc: '\u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u043e\u0432\u0430\u043d\u043e \u0437\u0430 ISO 23351-1. \u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0454 \u0433\u0443\u0447\u043d\u0438\u0439 open-space \u043d\u0430 \u0442\u0438\u0448\u0443 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438.',
  },
  {
    title: '\u0421\u0435\u043d\u0434\u0432\u0456\u0447-\u043f\u0430\u043d\u0435\u043b\u0456',
    desc: '\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0442 + \u0444\u0430\u043d\u0435\u0440\u0430 + \u043c\u0456\u043d\u0432\u0430\u0442\u0430 + \u043f\u0435\u0440\u0444\u043e\u0440\u043e\u0432\u0430\u043d\u0438\u0439 MDF + \u0444\u0435\u0442\u0440 \u2014 \u043a\u043e\u0436\u0435\u043d \u0448\u0430\u0440 \u043f\u0440\u0430\u0446\u044e\u0454 \u043d\u0430 \u0437\u0432\u0443\u043a\u043e\u043f\u043e\u0433\u043b\u0438\u043d\u0430\u043d\u043d\u044f.',
  },
  {
    title: 'Smart Electronics',
    desc: '\u0421\u0435\u043d\u0441\u043e\u0440\u043d\u0430 \u043f\u0430\u043d\u0435\u043b\u044c \u043a\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f, \u0434\u0430\u0442\u0447\u0438\u043a\u0438 \u043f\u0440\u0438\u0441\u0443\u0442\u043d\u043e\u0441\u0442\u0456, CO\u2082 \u0442\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u0435 \u043a\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f.',
  },
  {
    title: '\u041c\u043e\u0434\u0443\u043b\u044c\u043d\u0430 \u0437\u0431\u0456\u0440\u043a\u0430',
    desc: '\u0412\u0456\u0434 60 \u0445\u0432\u0438\u043b\u0438\u043d, \u0431\u0435\u0437 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432. \u041f\u0430\u0442\u0435\u043d\u0442\u043e\u0432\u0430\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043a\u0440\u0456\u043f\u043b\u0435\u043d\u043d\u044f.',
  },
  {
    title: '\u0412\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0456\u044f',
    desc: '\u0414\u043e 600 \u043c\u00b3/\u0433\u043e\u0434, \u0440\u0456\u0432\u0435\u043d\u044c \u0448\u0443\u043c\u0443 <30 \u0434\u0411. \u041f\u043e\u0432\u043d\u0435 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u043e\u0432\u0456\u0442\u0440\u044f \u043a\u043e\u0436\u043d\u0456 2-3 \u0445\u0432.',
  },
  {
    title: '21 \u043a\u043e\u043b\u0456\u0440 + \u0434\u0438\u0437\u0430\u0439\u043d',
    desc: '\u041f\u0430\u0442\u0435\u043d\u0442\u043e\u0432\u0430\u043d\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043d \u0437 21 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u043e\u043c \u043a\u043e\u043b\u044c\u043e\u0440\u0443 \u0434\u043b\u044f \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u0456\u043d\u0442\u0435\u0440\u2019\u0454\u0440\u0443.',
  },
]

const howItWorks = [
  { step: 1, title: '\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0456\u044f', desc: '\u0411\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u0438\u0439 \u0430\u0443\u0434\u0438\u0442 \u0432\u0430\u0448\u043e\u0433\u043e \u043e\u0444\u0456\u0441\u0443 \u0442\u0430 \u043f\u0456\u0434\u0431\u0456\u0440 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0457 \u043c\u043e\u0434\u0435\u043b\u0456.' },
  { step: 2, title: '\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f', desc: '\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u0432 \u0448\u043e\u0443-\u0440\u0443\u043c\u0456 \u0430\u0431\u043e \u0443 \u0432\u0430\u0441 \u0432 \u043e\u0444\u0456\u0441\u0456.' },
  { step: 3, title: '\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f', desc: '\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 3\u20145 \u0440\u043e\u0431\u043e\u0447\u0438\u0445 \u0434\u043d\u0456\u0432 \u043f\u043e \u0423\u043a\u0440\u0430\u0457\u043d\u0456.' },
  { step: 4, title: '\u041c\u043e\u043d\u0442\u0430\u0436', desc: '\u0417\u0431\u0456\u0440\u043a\u0430 \u0432\u0456\u0434 60 \u0445\u0432\u0438\u043b\u0438\u043d \u0431\u0435\u0437 \u043f\u0438\u043b\u0443 \u0442\u0430 \u0431\u0440\u0443\u0434\u0443.' },
]

const testimonials = [
  {
    name: '\u041c\u0430\u0440\u0438\u043d\u0430 \u041a.',
    role: 'HR Director',
    text: '\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 3 \u043a\u0430\u0431\u0456\u043d\u0438 Solo \u0432 open-space. \u0421\u043a\u0430\u0440\u0433\u0438 \u043d\u0430 \u0448\u0443\u043c \u0437\u043c\u0435\u043d\u0448\u0438\u043b\u0438\u0441\u044c \u043d\u0430 90%.',
  },
  {
    name: '\u0414\u043c\u0438\u0442\u0440\u043e \u0421.',
    role: 'Office Manager',
    text: 'SilentBox Duet \u0437\u0430\u043c\u0456\u043d\u0438\u0432 \u043d\u0430\u043c \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u043d\u0443. \u0417\u0456\u0431\u0440\u0430\u043b\u0438 \u0437\u0430 3 \u0433\u043e\u0434\u0438\u043d\u0438, \u0431\u0435\u0437 \u043f\u0438\u043b\u0443.',
  },
  {
    name: '\u041e\u043b\u0435\u043a\u0441\u0456\u0439 \u041f.',
    role: 'IT Lead',
    text: '\u041a\u0430\u0431\u0456\u043d\u0430 Duet Lite \u2014 \u0456\u0434\u0435\u0430\u043b\u044c\u043d\u0435 \u0440\u0456\u0448\u0435\u043d\u043d\u044f \u0434\u043b\u044f 1-on-1. \u0420\u043e\u0437\u043c\u043e\u0432\u0438 \u043a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u0456.',
  },
]

const faqItems = [
  {
    q: '\u042f\u043a\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c \u0437\u0432\u0443\u043a\u043e\u0456\u0437\u043e\u043b\u044f\u0446\u0456\u0457?',
    a: '\u041b\u0456\u043d\u0456\u044f Premium \u0437\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0443\u0454 35 \u0434\u0411 \u0437\u0432\u0443\u043a\u043e\u0456\u0437\u043e\u043b\u044f\u0446\u0456\u0457 (\u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u043e\u0432\u0430\u043d\u043e ISO 23351-1), \u043b\u0456\u043d\u0456\u044f Lite \u2014 15\u201320 \u0434\u0411. \u0426\u0435 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0454 \u0433\u0443\u0447\u043d\u0438\u0439 open-space (~65 \u0434\u0411) \u043d\u0430 \u0442\u0438\u0445\u0443 \u0437\u043e\u043d\u0443 (~30 \u0434\u0411).',
  },
  {
    q: '\u042f\u043a \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u043d\u0443 \u0432 open-space?',
    a: '\u041c\u043e\u0434\u0435\u043b\u0456 Duet (\u043d\u0430 2 \u043e\u0441\u043e\u0431\u0438) \u0442\u0430 Quartet (\u043d\u0430 4 \u043e\u0441\u043e\u0431\u0438) \u0437\u0430\u043c\u0456\u043d\u044e\u044e\u0442\u044c \u043f\u043e\u0432\u043d\u043e\u0446\u0456\u043d\u043d\u0443 \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u043d\u0443 \u043a\u0456\u043c\u043d\u0430\u0442\u0443 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u043f\u043b\u0430\u043d\u0443\u0432\u0430\u043d\u043d\u044f. \u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u044e\u044e\u0442\u044c\u0441\u044f \u0437\u0430 \u043a\u0456\u043b\u044c\u043a\u0430 \u0433\u043e\u0434\u0438\u043d.',
  },
  {
    q: '\u0427\u0438 \u043f\u0456\u0434\u0456\u0439\u0434\u0435 \u0434\u043b\u044f \u043c\u0430\u043b\u043e\u0433\u043e \u043e\u0444\u0456\u0441\u0443?',
    a: 'SilentBox Solo \u0437\u0430\u0439\u043c\u0430\u0454 \u043b\u0438\u0448\u0435 1.2 \u043c\u00b2 \u2014 \u043c\u0435\u043d\u0448\u0435 \u0437\u0430 \u043e\u0434\u043d\u0435 \u0440\u043e\u0431\u043e\u0447\u0435 \u043c\u0456\u0441\u0446\u0435. \u0406\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043d\u0430\u0432\u0456\u0442\u044c \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u0438\u0445 \u043e\u0444\u0456\u0441\u0456\u0432.',
  },
  {
    q: '\u042f\u043a \u043f\u0440\u0430\u0446\u044e\u0454 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0456\u044f?',
    a: '\u041f\u0440\u0438\u043c\u0443\u0441\u043e\u0432\u0430 \u0432\u0435\u043d\u0442\u0438\u043b\u044f\u0446\u0456\u044f 250\u2013600 \u043c\u00b3/\u0433\u043e\u0434 (\u0437\u0430\u043b\u0435\u0436\u043d\u043e \u0432\u0456\u0434 \u043c\u043e\u0434\u0435\u043b\u0456), \u0440\u0456\u0432\u0435\u043d\u044c \u0448\u0443\u043c\u0443 <30 \u0434\u0411. \u041f\u043e\u0432\u043d\u0435 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u043e\u0432\u0456\u0442\u0440\u044f \u043a\u043e\u0436\u043d\u0456 2\u20133 \u0445\u0432\u0438\u043b\u0438\u043d\u0438.',
  },
  {
    q: '\u0421\u043a\u0456\u043b\u044c\u043a\u0438 \u0447\u0430\u0441\u0443 \u0437\u0430\u0439\u043c\u0430\u0454 \u043c\u043e\u043d\u0442\u0430\u0436?',
    a: 'Solo \u2014 60 \u0445\u0432\u0438\u043b\u0438\u043d, Duet \u2014 2\u20134 \u0433\u043e\u0434\u0438\u043d\u0438, Quartet \u2014 \u0434\u043e 4 \u0433\u043e\u0434\u0438\u043d. \u0411\u0435\u0437 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432, \u0431\u0435\u0437 \u043f\u0438\u043b\u0443 \u0442\u0430 \u0431\u0440\u0443\u0434\u0443.',
  },
  {
    q: '\u042f\u043a\u0430 \u0433\u0430\u0440\u0430\u043d\u0442\u0456\u044f?',
    a: '\u0414\u043e 10 \u0440\u043e\u043a\u0456\u0432 \u0433\u0430\u0440\u0430\u043d\u0442\u0456\u0457 \u043d\u0430 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044e. \u0421\u0435\u0440\u0432\u0456\u0441\u043d\u0435 \u043e\u0431\u0441\u043b\u0443\u0433\u043e\u0432\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u043e \u0432\u0441\u0456\u0439 \u0423\u043a\u0440\u0430\u0457\u043d\u0456.',
  },
  {
    q: '\u0427\u0438\u043c \u0432\u0456\u0434\u0440\u0456\u0437\u043d\u044f\u044e\u0442\u044c\u0441\u044f Premium \u0442\u0430 Lite?',
    a: 'Premium \u2014 35 \u0434\u0411 \u0456\u0437\u043e\u043b\u044f\u0446\u0456\u0457, \u0441\u0435\u043d\u0434\u0432\u0456\u0447-\u043f\u0430\u043d\u0435\u043b\u0456, Smart Electronics. Lite \u2014 15\u201320 \u0434\u0411, \u0430\u043a\u0443\u0441\u0442\u0438\u0447\u043d\u0456 \u043f\u0430\u043d\u0435\u043b\u0456, SMART \u0435\u043a\u0440\u0430\u043d. Lite \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0456\u0448\u0430 \u0437\u0430 \u0446\u0456\u043d\u043e\u044e \u043f\u0440\u0438 \u0433\u0430\u0440\u043d\u0456\u0439 \u044f\u043a\u043e\u0441\u0442\u0456.',
  },
]

const logoCloud = ['Monobank', 'MHP', "L'Or\u00e9al", 'Siemens', 'PwC', 'MARS', '\u041d\u043e\u0432\u0430 \u041f\u043e\u0448\u0442\u0430', 'UN']

export default function HomePage() {
  const [activeLine, setActiveLine] = useState<ModelLine>('premium')
  const [activeModelIndex, setActiveModelIndex] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const lineModels = getModelsByLine(activeLine)
  const activeModel: CabinModel | undefined = lineModels[activeModelIndex]

  function handleLineChange(line: ModelLine) {
    setActiveLine(line)
    setActiveModelIndex(0)
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Grand Catering \u2014 \u041e\u0444\u0456\u0446\u0456\u0439\u043d\u0438\u0439 \u0434\u0438\u043b\u0435\u0440 SilentBox",
        "url": "https://grand-catering.com.ua",
        "description": "\u041e\u0444\u0456\u0446\u0456\u0439\u043d\u0438\u0439 \u0434\u0438\u043b\u0435\u0440 \u0430\u043a\u0443\u0441\u0442\u0438\u0447\u043d\u0438\u0445 \u043a\u0430\u0431\u0456\u043d SilentBox \u0432 \u0423\u043a\u0440\u0430\u0457\u043d\u0456. \u0417\u0432\u0443\u043a\u043e\u0456\u0437\u043e\u043b\u044f\u0446\u0456\u044f \u043e\u0444\u0456\u0441\u0456\u0432 \u0442\u0430 open-space.",
        "address": { "@type": "PostalAddress", "addressLocality": "\u041a\u0438\u0457\u0432", "addressCountry": "UA" },
        "telephone": "+380443219876",
        "sameAs": []
      }) }} />

      {/* ===== 1. HERO ===== */}
      <section style={{ background: '#1a1a1a', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', minHeight: '85vh', paddingTop: '4rem', paddingBottom: '4rem' }}>
          {/* Left */}
          <div>
            <span style={{
              display: 'inline-block',
              background: 'var(--color-accent)',
              color: '#fff',
              padding: '0.375rem 1rem',
              borderRadius: '999px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              letterSpacing: '0.02em',
            }}>
              \u041e\u0444\u0456\u0446\u0456\u0439\u043d\u0438\u0439 \u0434\u0438\u043b\u0435\u0440 SilentBox \u0432 \u0423\u043a\u0440\u0430\u0457\u043d\u0456
            </span>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}>
              \u0422\u0438\u0448\u0430 \u0443 \u0432\u0430\u0448\u043e\u043c\u0443 \u043e\u0444\u0456\u0441\u0456
            </h1>

            <p style={{
              fontSize: '1.125rem',
              color: '#b0ada8',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              maxWidth: '500px',
            }}>
              \u0410\u043a\u0443\u0441\u0442\u0438\u0447\u043d\u0456 \u043a\u0430\u0431\u0456\u043d\u0438 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0457 \u0440\u043e\u0431\u043e\u0442\u0438. \u0417\u0432\u0443\u043a\u043e\u0456\u0437\u043e\u043b\u044f\u0446\u0456\u044f \u0434\u043e 35 \u0434\u0411, \u043c\u043e\u043d\u0442\u0430\u0436 \u0432\u0456\u0434 60 \u0445\u0432\u0438\u043b\u0438\u043d.
            </p>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {[
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8fbc8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, text: 'ISO 23351-1' },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8fbc8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, text: '10 \u0440\u043e\u043a\u0456\u0432 \u0433\u0430\u0440\u0430\u043d\u0442\u0456\u044f' },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8fbc8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, text: '30+ \u043a\u0440\u0430\u0457\u043d' },
              ].map((badge) => (
                <span key={badge.text} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: '#8fbc8f', fontWeight: 500, background: 'rgba(143,188,143,0.1)', padding: '0.375rem 0.75rem', borderRadius: '999px', border: '1px solid rgba(143,188,143,0.2)' }}>
                  {badge.icon} {badge.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/kataloh/" className="btn-primary">
                \u041e\u0431\u0440\u0430\u0442\u0438 \u043c\u043e\u0434\u0435\u043b\u044c
              </Link>
              <Link
                href="/zviazatysya/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 2rem',
                  background: 'transparent',
                  color: '#fff',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  borderRadius: '0.375rem',
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none',
                  fontSize: '0.9375rem',
                }}
              >
                \u0411\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u0438\u0439 \u0430\u0443\u0434\u0438\u0442
              </Link>
            </div>
          </div>

          {/* Right — animated gradient pattern */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(26,86,50,0.3) 0%, rgba(200,121,65,0.15) 50%, rgba(26,86,50,0.2) 100%)',
            borderRadius: '1.5rem',
            minHeight: '450px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Animated pulse ring */}
            <div style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              border: '2px solid rgba(143,188,143,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'pulse 3s ease-in-out infinite',
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '2px solid rgba(143,188,143,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(26,86,50,0.6), rgba(200,121,65,0.4))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Sound wave lines */}
            <div style={{ position: 'absolute', top: '20%', left: '10%', width: '60px', height: '80px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              {[30, 50, 70, 40, 60].map((h, i) => (
                <div key={i} style={{ width: '4px', height: `${h}%`, background: 'rgba(143,188,143,0.2)', borderRadius: '2px' }} />
              ))}
            </div>
            <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '60px', height: '80px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              {[40, 60, 80, 50, 30].map((h, i) => (
                <div key={i} style={{ width: '4px', height: `${h}%`, background: 'rgba(200,121,65,0.2)', borderRadius: '2px' }} />
              ))}
            </div>
            {/* Decorative circles */}
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(26,86,50,0.12)' }} />
            <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(200,121,65,0.08)' }} />
            {/* Grid pattern */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          </div>
        </div>

        {/* Stats row */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', padding: '2rem 1rem' }}>
            {[
              { value: '35 \u0434\u0411', label: '\u0417\u0432\u0443\u043a\u043e\u0456\u0437\u043e\u043b\u044f\u0446\u0456\u044f' },
              { value: '\u0432\u0456\u0434 60 \u0445\u0432', label: '\u041c\u043e\u043d\u0442\u0430\u0436' },
              { value: '10 \u0440\u043e\u043a\u0456\u0432', label: '\u0413\u0430\u0440\u0430\u043d\u0442\u0456\u044f' },
              { value: '30+', label: '\u041a\u0440\u0430\u0457\u043d \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>{s.value}</div>
                <div style={{ fontSize: '0.8125rem', color: '#8a8680', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. PRODUCT SHOWCASE (Tab Switcher) ===== */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <h2 className="section-title">\u041c\u043e\u0434\u0435\u043b\u0456 SilentBox</h2>
          <p className="section-subtitle">\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043b\u0456\u043d\u0456\u0439\u043a\u0443 \u0442\u0430 \u043c\u043e\u0434\u0435\u043b\u044c, \u044f\u043a\u0430 \u043f\u0456\u0434\u0445\u043e\u0434\u0438\u0442\u044c \u0434\u043b\u044f \u0432\u0430\u0448\u043e\u0433\u043e \u043e\u0444\u0456\u0441\u0443</p>

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
              {/* Left — specs */}
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
                    Детальніше
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
                    Дізнатися ціну
                  </Link>
                </div>
              </div>

              {/* Right — decorative placeholder */}
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

      {/* ===== 3. PAIN POINTS ===== */}
      <section style={{ background: '#1a1a1a', color: '#fff', padding: '6rem 1rem' }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.25rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '1rem',
            color: '#fff',
          }}>
            \u0427\u043e\u043c\u0443 open-space \u0432\u0431\u0438\u0432\u0430\u0454 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u0456\u0441\u0442\u044c
          </h2>
          <p style={{ textAlign: 'center', color: '#8a8680', marginBottom: '3.5rem', maxWidth: '500px', margin: '0 auto 3.5rem' }}>
            \u0414\u043e\u0441\u043b\u0456\u0434\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u043a\u0430\u0437\u0443\u044e\u0442\u044c: \u0448\u0443\u043c \u0443 \u043e\u0444\u0456\u0441\u0456 \u043a\u043e\u0448\u0442\u0443\u0454 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u044f\u043c \u0442\u0438\u0441\u044f\u0447\u0456 \u0433\u043e\u0434\u0438\u043d \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {painPoints.map((p) => (
              <div key={p.title} style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '0.75rem',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(143,188,143,0.4)' }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{p.icon}</div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-cta)', marginBottom: '0.5rem', fontFamily: "'Playfair Display', serif" }}>
                  {p.stat}
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', fontFamily: "'Inter', sans-serif", color: '#fff' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#8a8680', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. TECHNOLOGY FEATURES ===== */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <h2 className="section-title">\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u044f SilentBox</h2>
          <p className="section-subtitle">\u041a\u043e\u0436\u043d\u0430 \u043a\u0430\u0431\u0456\u043d\u0430 \u2014 \u0446\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0456\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u0438\u0445 \u0440\u0456\u0448\u0435\u043d\u044c \u0442\u0430 \u043f\u0430\u0442\u0435\u043d\u0442\u043e\u0432\u0430\u043d\u0438\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0439</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {techFeatures.map((f, idx) => (
              <div key={f.title} style={{
                background: '#fff',
                borderRadius: '0.75rem',
                padding: '2rem',
                border: '1px solid var(--color-border)',
                position: 'relative',
              }}>
                {/* Number indicator */}
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'rgba(26,86,50,0.08)',
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1,
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.5rem',
                  background: '#1a1a1a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8fbc8f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, marginBottom: '0.5rem', fontFamily: "'Inter', sans-serif", color: 'var(--color-text)' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. STATS SECTION ===== */}
      <section style={{ background: 'var(--color-accent)', color: '#fff', padding: '5rem 1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: '35 \u0434\u0411', label: '\u0417\u0432\u0443\u043a\u043e\u0456\u0437\u043e\u043b\u044f\u0446\u0456\u044f' },
              { value: '60 \u0445\u0432', label: '\u0417\u0431\u0456\u0440\u043a\u0430 Solo' },
              { value: '10 \u0440\u043e\u043a\u0456\u0432', label: '\u0413\u0430\u0440\u0430\u043d\u0442\u0456\u044f' },
              { value: '30+', label: '\u041a\u0440\u0430\u0457\u043d \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 800,
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.875rem', opacity: 0.75, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. LOGO CLOUD ===== */}
      <section style={{ borderTop: '2px solid var(--color-border)', borderBottom: '2px solid var(--color-border)', padding: '3rem 1rem', background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-text-light)', marginBottom: '1.25rem', fontWeight: 600 }}>
            \u041d\u0430\u043c \u0434\u043e\u0432\u0456\u0440\u044f\u044e\u0442\u044c
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {logoCloud.map((name) => (
              <span key={name} style={{ fontSize: '0.9375rem', color: '#999', fontWeight: 600, letterSpacing: '0.02em' }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. HOW IT WORKS ===== */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <h2 className="section-title">\u042f\u043a \u0446\u0435 \u043f\u0440\u0430\u0446\u044e\u0454</h2>
          <p className="section-subtitle">\u0412\u0456\u0434 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0456\u0457 \u0434\u043e \u0433\u043e\u0442\u043e\u0432\u043e\u0457 \u043a\u0430\u0431\u0456\u043d\u0438 \u2014 4 \u043f\u0440\u043e\u0441\u0442\u0438\u0445 \u043a\u0440\u043e\u043a\u0438</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {howItWorks.map((item) => (
              <div key={item.step} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--color-cta)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  margin: '0 auto 1.25rem',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, marginBottom: '0.5rem', fontFamily: "'Inter', sans-serif", color: 'var(--color-text)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. TESTIMONIALS ===== */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <h2 className="section-title">\u0412\u0456\u0434\u0433\u0443\u043a\u0438 \u043a\u043b\u0456\u0454\u043d\u0442\u0456\u0432</h2>
          <p className="section-subtitle">\u0429\u043e \u043a\u0430\u0436\u0443\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457, \u044f\u043a\u0456 \u0432\u0436\u0435 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 SilentBox</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{
                background: '#fff',
                borderRadius: '0.75rem',
                padding: '2rem',
                border: '1px solid var(--color-border)',
                position: 'relative',
              }}>
                {/* Decorative quote */}
                <div style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.5rem',
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: 'var(--color-accent-light)',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}>
                  &ldquo;
                </div>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-text)', marginBottom: '1.25rem', paddingRight: '2rem' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-light)' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== 10. FAQ ===== */}
      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">\u0427\u0430\u0441\u0442\u0456 \u043f\u0438\u0442\u0430\u043d\u043d\u044f</h2>
          <p className="section-subtitle">\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043d\u0430 \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456 \u043f\u0438\u0442\u0430\u043d\u043d\u044f \u043f\u0440\u043e \u0430\u043a\u0443\u0441\u0442\u0438\u0447\u043d\u0456 \u043a\u0430\u0431\u0456\u043d\u0438</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    textAlign: 'left',
                  }}
                >
                  <span>{item.q}</span>
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: 300,
                    transition: 'transform 0.2s ease',
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    color: 'var(--color-text-light)',
                    flexShrink: 0,
                    marginLeft: '1rem',
                  }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{
                    padding: '0 0 1.25rem',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-light)',
                    lineHeight: 1.7,
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 11. FINAL CTA ===== */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #1a5632 100%)',
        color: '#fff',
        padding: '6rem 1rem',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#fff',
          }}>
            \u0417\u0430\u043c\u043e\u0432\u0442\u0435 \u0431\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u0438\u0439 \u0430\u0443\u0434\u0438\u0442 \u0432\u0430\u0448\u043e\u0433\u043e \u043e\u0444\u0456\u0441\u0443
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#b0ada8', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            \u041d\u0430\u0448 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0441\u0442 \u043e\u0446\u0456\u043d\u0438\u0442\u044c \u0430\u043a\u0443\u0441\u0442\u0438\u043a\u0443, \u043f\u0456\u0434\u0431\u0435\u0440\u0435 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0435 \u0440\u0456\u0448\u0435\u043d\u043d\u044f \u0442\u0430 \u0440\u043e\u0437\u0440\u0430\u0445\u0443\u0454 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/zviazatysya/" className="btn-primary">
              \u0411\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u0438\u0439 \u0430\u0443\u0434\u0438\u0442
            </Link>
            <Link
              href="/kataloh/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                background: 'transparent',
                color: '#fff',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                borderRadius: '0.375rem',
                border: '1.5px solid rgba(255,255,255,0.3)',
                transition: 'all 0.25s ease',
                textDecoration: 'none',
                fontSize: '0.9375rem',
              }}
            >
              \u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043c\u043e\u0434\u0435\u043b\u0435\u0439
            </Link>
          </div>
        </div>
      </section>

      {/* Responsive overrides */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.85; }
        }
        @media (max-width: 768px) {
          section > div[class="container"] > div[style*="gridTemplateColumns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  )
}
