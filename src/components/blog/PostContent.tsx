interface PostContentProps {
  htmlContent: string
}

export default function PostContent({ htmlContent }: PostContentProps) {
  return (
    <div
      className="prose prose-lg prose-invert max-w-none"
      style={{
        '--tw-prose-body': 'rgba(245,243,238,0.75)',
        '--tw-prose-headings': '#f5f3ee',
        '--tw-prose-links': '#c89b5a',
        '--tw-prose-bold': '#f5f3ee',
        '--tw-prose-counters': 'rgba(245,243,238,0.5)',
        '--tw-prose-bullets': 'rgba(200,155,90,0.5)',
        '--tw-prose-hr': 'rgba(245,243,238,0.08)',
        '--tw-prose-quotes': '#f5f3ee',
        '--tw-prose-quote-borders': '#c89b5a',
        '--tw-prose-captions': 'rgba(245,243,238,0.4)',
        '--tw-prose-code': '#c89b5a',
        '--tw-prose-pre-code': 'rgba(245,243,238,0.75)',
        '--tw-prose-pre-bg': '#1c1c1a',
        '--tw-prose-th-borders': 'rgba(245,243,238,0.12)',
        '--tw-prose-td-borders': 'rgba(245,243,238,0.08)',
      } as React.CSSProperties}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
