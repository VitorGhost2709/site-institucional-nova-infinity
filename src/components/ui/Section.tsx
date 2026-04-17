import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  className?: string
  variant?: 'default' | 'subtle' | 'dark'
}

export function Section({ children, className, variant = 'default' }: SectionProps) {
  const base = 'py-14 sm:py-20'
  const variants: Record<NonNullable<SectionProps['variant']>, string> = {
    default: 'bg-ink-950 text-white',
    subtle: 'bg-ink-900 text-white',
    dark: 'bg-black text-white',
  }

  return <section className={[base, variants[variant], className].filter(Boolean).join(' ')}>{children}</section>
}

