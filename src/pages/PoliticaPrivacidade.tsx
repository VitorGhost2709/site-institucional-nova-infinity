import { Container } from '../components/layout/Container'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'

export function PoliticaPrivacidade() {
  return (
    <>
      <InternalPageHero
        title="Política de Privacidade"
        description="Diretrizes de privacidade e proteção de dados para o site institucional da Nova Infinity. (conteúdo provisório)"
        seoDescription="Política de Privacidade — Nova Infinity."
      />

      <Section>
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm shadow-black/30">
            <h2 className="text-lg font-semibold text-white">Resumo</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Este é um texto provisório. Aqui entra a política real, incluindo coleta, uso de dados, cookies, retenção e
              contato do responsável.
            </p>

            <div className="mt-6 grid gap-4">
              {[
                { t: 'Coleta de dados', d: 'Quando e quais dados são coletados (formulários, analytics, etc.).' },
                { t: 'Uso', d: 'Para quais finalidades os dados são utilizados.' },
                { t: 'Compartilhamento', d: 'Com quem pode haver compartilhamento e por quê.' },
                { t: 'Direitos do titular', d: 'Como solicitar acesso, correção, exclusão e portabilidade.' },
              ].map((i) => (
                <div key={i.t} className="rounded-2xl border border-white/10 bg-ink-900/60 p-5">
                  <div className="text-sm font-semibold text-white">{i.t}</div>
                  <div className="mt-2 text-sm text-white/70">{i.d}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

