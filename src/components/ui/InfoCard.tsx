import type { ReactNode } from 'react'

type InfoCardProps = {
  title: string
  description: ReactNode
  icon?: ReactNode
  className?: string
}

export function InfoCard({ title, description, icon, className }: InfoCardProps) {
  return (
    <div
      className={[
        'group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/25 transition',
        'hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/7 hover:shadow-md hover:shadow-black/35',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {icon ? (
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200 ring-1 ring-brand-500/25">
          {icon}
        </div>
      ) : null}
      <div className="text-base font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{description}</div>
    </div>
  )
}

