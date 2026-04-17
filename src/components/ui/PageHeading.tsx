import type { ReactNode } from 'react'

type PageHeadingProps = {
  title: string
  subtitle?: ReactNode
}

export function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <header className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
      {subtitle ? <div className="max-w-2xl text-base leading-relaxed text-slate-600">{subtitle}</div> : null}
    </header>
  )
}

