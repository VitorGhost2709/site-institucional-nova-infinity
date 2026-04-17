import { Helmet } from 'react-helmet-async'
import { Container } from '../layout/Container'
import { buildTitle, COMPANY_NAME } from '../../lib/seo'
import { Logo } from '../brand/Logo'

type InternalPageHeroProps = {
  title: string
  description: string
  seoDescription?: string
}

export function InternalPageHero({ title, description, seoDescription }: InternalPageHeroProps) {
  return (
    <>
      <Helmet>
        <title>{buildTitle(title)}</title>
        <meta name="description" content={seoDescription ?? `${title} — ${COMPANY_NAME}.`} />
      </Helmet>

      <div className="relative overflow-hidden border-b border-white/10 bg-ink-950 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-32 top-[-12rem] h-[28rem] w-[28rem] rounded-full bg-brand-500/22 blur-3xl" />
          <div className="absolute -right-24 top-[-10rem] h-[24rem] w-[24rem] rounded-full bg-white/10 blur-3xl" />
        </div>
        <Container className="py-14 sm:py-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <Logo format="svg" tone="onDark" className="h-8 w-auto" />
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Institucional</div>
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>
          </div>
        </Container>
      </div>
    </>
  )
}

