import { Container } from '../components/layout/Container'
import { InfoCard } from '../components/ui/InfoCard'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'
import { SectionTitle } from '../components/ui/SectionTitle'
import { copy } from '../content/copy'

export function Servicos() {
  return (
    <>
      <InternalPageHero
        title="Serviços"
        description={copy.pages.servicos.hero}
        seoDescription="Serviços da Nova Infinity: distribuição, relacionamento comercial e suporte."
      />

      <Section>
        <Container>
          <div className="grid gap-10">
            <SectionTitle
              eyebrow="O que fazemos"
              title="Serviços voltados para performance do canal"
              description="Organizamos a operação para reduzir ruídos e melhorar a experiência — do pedido à entrega."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: 'Distribuição estruturada', d: 'Processos claros e acompanhamento de ponta a ponta. (provisório)' },
                { t: 'Relacionamento comercial', d: 'Alinhamento e suporte para fortalecer parceria e recorrência.' },
                { t: 'Logística e expedição', d: 'Rotina operacional para cumprir prazos e manter padrão.' },
                { t: 'Suporte e pós-venda', d: 'Canais de atendimento e resolução com agilidade. (provisório)' },
                { t: 'Cobertura regional', d: 'Atuação com foco em expansão consistente. (provisório)' },
                { t: 'Parcerias', d: 'Integração com representantes e agregados para ampliar capacidade.' },
              ].map((i) => (
                <InfoCard key={i.t} title={i.t} description={i.d} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="subtle">
        <Container>
          <SectionTitle
            eyebrow="Como trabalhamos"
            title="Um modelo simples, bem executado"
            description="Placeholder: etapas do atendimento, cadastro, pedido, expedição e entrega."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {[
              { t: 'Alinhamento', d: 'Entendemos a demanda e o perfil do cliente.' },
              { t: 'Condições', d: 'Ajustamos mix, prazos e operação conforme necessidade.' },
              { t: 'Execução', d: 'Separação, expedição e acompanhamento.' },
              { t: 'Suporte', d: 'Pós-venda com canal claro e retorno rápido.' },
            ].map((i) => (
              <div key={i.t} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/25">
                <div className="text-sm font-semibold text-white">{i.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">{i.d}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

