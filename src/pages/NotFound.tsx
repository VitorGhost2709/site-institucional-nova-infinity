import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'
import { buildTitle } from '../lib/seo'

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>{buildTitle('Página não encontrada')}</title>
      </Helmet>

      <InternalPageHero
        title="Página não encontrada"
        description="O endereço acessado não existe ou foi movido. (404)"
      />

      <Section>
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm shadow-black/30">
            <div className="text-sm font-semibold text-white">Voltar</div>
            <p className="mt-2 text-sm text-white/70">
              Ir para a <Link to="/" className="font-semibold text-brand-300 underline">Home</Link>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}

