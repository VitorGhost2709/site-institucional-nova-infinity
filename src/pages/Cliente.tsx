import { Container } from '../components/layout/Container'
import { CTASection } from '../components/ui/CTASection'
import { InfoCard } from '../components/ui/InfoCard'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'
import { SectionTitle } from '../components/ui/SectionTitle'
import { copy } from '../content/copy'

export function Cliente() {
  return (
    <>
      <InternalPageHero
        title="Seja Cliente"
        description={copy.pages.cliente.hero}
        seoDescription="Seja cliente da Nova Infinity: benefícios, processo e suporte."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="Parceria"
                title="Benefícios para clientes"
                description="Conteúdo provisório com foco corporativo: clareza comercial, suporte e operação consistente."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard title="Atendimento próximo" description="Canal claro e acompanhamento do pedido à entrega." />
                <InfoCard title="Portfólio" description="Mix organizado para giro e demanda do seu segmento." />
                <InfoCard title="Logística" description="Rotina operacional para previsibilidade e prazos." />
                <InfoCard title="Parceria comercial" description="Alinhamento de metas e recorrência. (provisório)" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="subtle">
        <Container>
          <SectionTitle
            eyebrow="Cadastro"
            title="Pronto para integrar o formulário"
            description="Deixamos o bloco visual preparado para um formulário de cadastro/contato comercial no próximo passo."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-sm shadow-black/30">
                <div className="text-sm font-semibold text-white">Formulário (futuro)</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {['Nome', 'Empresa', 'Telefone', 'E-mail'].map((l) => (
                    <div key={l} className="space-y-2">
                      <div className="text-xs font-semibold text-white/70">{l}</div>
                      <div className="h-11 rounded-xl border border-white/12 bg-white/5" />
                    </div>
                  ))}
                  <div className="space-y-2 sm:col-span-2">
                    <div className="text-xs font-semibold text-white/70">Mensagem</div>
                    <div className="h-28 rounded-xl border border-white/12 bg-white/5" />
                  </div>
                </div>
                <div className="mt-5 h-11 w-44 rounded-xl bg-brand-600" />
              </div>
            </div>

            <div className="lg:col-span-5">
              <CTASection
                title="Quer iniciar agora?"
                description="Fale com nossa equipe e receba a melhor orientação para sua necessidade."
                primary={{ label: 'Falar com a equipe', to: '/contato' }}
                secondary={{ label: 'Catálogo', to: '/catalogo' }}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

