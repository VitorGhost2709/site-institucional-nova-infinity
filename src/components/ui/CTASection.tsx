import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'

type CTASectionProps = {
  title: string
  description: string
  primary: { label: string; to: string }
  secondary?: { label: string; to: string }
}

export function CTASection({ title, description, primary, secondary }: CTASectionProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm shadow-black/30 sm:p-10">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -left-28 -bottom-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <Container className="px-0">
        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <div className="flex flex-wrap gap-3">
              <Link
                to={primary.to}
                className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                {primary.label}
              </Link>
              {secondary ? (
                <Link
                  to={secondary.to}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

