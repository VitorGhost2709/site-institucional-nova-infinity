import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { Logo } from '../brand/Logo'

type HeroBannerProps = {
  title: string
  subtitle: string
  description: string
  primary: { label: string; to: string }
  secondary: { label: string; to: string }
}

export function HeroBanner({ title, subtitle, description, primary, secondary }: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-brand-500/25 blur-3xl" />
        <div className="absolute -right-32 top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
      </div>

      <Container className="py-16 sm:py-22">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 shadow-sm shadow-black/30">
              <span className="h-2 w-2 rounded-full bg-brand-400" />
              {subtitle}
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={primary.to}
                className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                {primary.label}
              </Link>
              <Link
                to={secondary.to}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                {secondary.label}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/35">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/15 shadow-sm shadow-black/35">
                  <Logo format="svg" tone="onDark" className="h-8 w-8 object-contain" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Operação estruturada</div>
                  <div className="text-sm text-white/60">Distribuição e relacionamento comercial</div>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  { k: 'Cobertura', v: 'Atendimento regional com padrão de entrega (provisório).' },
                  { k: 'Portfólio', v: 'Seleção de produtos com foco em giro e consistência.' },
                  { k: 'Parcerias', v: 'Trabalho próximo a clientes, representantes e agregados.' },
                ].map((row) => (
                  <div key={row.k} className="rounded-2xl border border-white/10 bg-ink-900/60 p-4">
                    <div className="text-sm font-semibold text-white">{row.k}</div>
                    <div className="mt-1 text-sm leading-relaxed text-white/70">{row.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

