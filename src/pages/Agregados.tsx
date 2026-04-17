import { Container } from '../components/layout/Container'
import { CTASection } from '../components/ui/CTASection'
import { InfoCard } from '../components/ui/InfoCard'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'
import { SectionTitle } from '../components/ui/SectionTitle'
import { copy } from '../content/copy'

export function Agregados() {
  return (
    <>
      <InternalPageHero
        title="Agregados"
        description={copy.pages.agregados.hero}
        seoDescription="Agregados Nova Infinity: parceria logística e benefícios."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="Logística"
                title="Parceria com clareza e padrão"
                description="Conteúdo provisório: como funciona a operação com agregados e quais são os critérios."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard title="Organização" description="Rotas, alinhamentos e critérios operacionais. (provisório)" />
                <InfoCard title="Previsibilidade" description="Processo estruturado para reduzir ruído e retrabalho." />
                <InfoCard title="Relacionamento" description="Parceria transparente, com comunicação objetiva." />
                <InfoCard title="Crescimento" description="Estrutura para ampliar capacidade mantendo padrão." />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="subtle">
        <Container>
          <CTASection
            title="Quer se tornar agregado?"
            description="Deixe seu contato e nossa equipe orienta sobre requisitos e próximos passos. (formulário será integrado depois)"
            primary={{ label: 'Falar com a equipe', to: '/contato' }}
            secondary={{ label: 'Serviços', to: '/servicos' }}
          />
        </Container>
      </Section>
    </>
  )
}

