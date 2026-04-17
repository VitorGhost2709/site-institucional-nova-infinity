import { Container } from '../components/layout/Container'
import { CTASection } from '../components/ui/CTASection'
import { InfoCard } from '../components/ui/InfoCard'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'
import { SectionTitle } from '../components/ui/SectionTitle'
import { copy } from '../content/copy'

export function Representantes() {
  return (
    <>
      <InternalPageHero
        title="Representantes"
        description={copy.pages.representantes.hero}
        seoDescription="Representantes Nova Infinity: parceria comercial e benefícios."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="Parceria comercial"
                title="Modelo para crescer com padrão"
                description="Conteúdo provisório: responsabilidades, suporte e benefícios para representantes."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard title="Suporte" description="Materiais, alinhamento e acompanhamento com a equipe." />
                <InfoCard title="Território" description="Definição de áreas atendidas e objetivos. (provisório)" />
                <InfoCard title="Portfólio" description="Mix organizado para giro e demanda do canal." />
                <InfoCard title="Relacionamento" description="Modelo orientado a longo prazo e consistência." />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="subtle">
        <Container>
          <CTASection
            title="Quer representar a Nova Infinity?"
            description="Fale com a equipe para entender o modelo de parceria, requisitos e próximas etapas."
            primary={{ label: 'Entrar em contato', to: '/contato' }}
            secondary={{ label: 'Quem Somos', to: '/quem-somos' }}
          />
        </Container>
      </Section>
    </>
  )
}

