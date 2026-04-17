import { Container } from '../components/layout/Container'
import { InfoCard } from '../components/ui/InfoCard'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'
import { SectionTitle } from '../components/ui/SectionTitle'
import { copy } from '../content/copy'

export function QuemSomos() {
  return (
    <>
      <InternalPageHero
        title="Quem Somos"
        description={copy.pages.quemSomos.hero}
        seoDescription="Conheça a Nova Infinity: história, visão e valores."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="Institucional"
                title="História e direção"
                description="Texto provisório: resumo da origem da empresa, evolução e visão de futuro, com foco em distribuição e presença no mercado."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-sm shadow-black/30">
                <div className="text-sm font-semibold text-white">Presença e mercado</div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  A Nova Infinity busca consolidar uma operação confiável, com processos bem definidos e atendimento consistente.
                  Atuamos com foco em previsibilidade e relacionamento, conectando parceiros e clientes com eficiência. (provisório)
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="subtle">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard title="Missão" description="Entregar distribuição com padrão e relacionamento próximo. (provisório)" />
            <InfoCard title="Visão" description="Ser referência regional em parceria comercial e logística. (provisório)" />
            <InfoCard title="Valores" description="Confiança, consistência, transparência e excelência. (provisório)" />
            <InfoCard title="Compromisso" description="Crescer mantendo qualidade e governança. (provisório)" />
          </div>
        </Container>
      </Section>
    </>
  )
}

