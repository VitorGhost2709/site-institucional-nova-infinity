import type { ReactNode } from 'react'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
}

export function SectionTitle({ eyebrow, title, description, align = 'left' }: SectionTitleProps) {
  const isCenter = align === 'center'
  return (
    <div className={['space-y-3', isCenter ? 'text-center' : 'text-left'].join(' ')}>
      {eyebrow ? (
        <div
          className={[
            'text-xs font-semibold uppercase tracking-[0.18em] text-brand-700',
            isCenter ? 'mx-auto w-fit' : '',
          ].join(' ')}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      {description ? (
        <div
          className={[
            'text-base leading-relaxed text-white/70',
            isCenter ? 'mx-auto max-w-2xl' : 'max-w-2xl',
          ].join(' ')}
        >
          {description}
        </div>
      ) : null}
    </div>
  )
}

