import { Container } from '../components/layout/Container'
import { CTASection } from '../components/ui/CTASection'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'
import { SectionTitle } from '../components/ui/SectionTitle'

export function TrabalheConosco() {
  return (
    <>
      <InternalPageHero
        title="Trabalhe Conosco"
        description="Oportunidades e crescimento em um ambiente orientado a padrão, consistência e parceria. (conteúdo provisório)"
        seoDescription="Trabalhe Conosco — Nova Infinity."
      />

      <Section>
        <Container>
          <SectionTitle
            eyebrow="Carreira"
            title="Pronto para receber vagas e formulário"
            description="Nesta versão, deixamos a estrutura visual pronta para publicar vagas, requisitos e um formulário de candidatura."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {['Vendas / Comercial', 'Logística / Operações', 'Administrativo'].map((a) => (
              <div key={a} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/30">
                <div className="text-sm font-semibold text-white">{a}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Placeholder para descrição de vagas e perfil desejado.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <CTASection
              title="Quer enviar seu perfil?"
              description="Deixe seu contato e sua área de interesse. A integração do formulário pode ser feita na próxima etapa."
              primary={{ label: 'Falar com a equipe', to: '/contato' }}
              secondary={{ label: 'Quem Somos', to: '/quem-somos' }}
            />
          </div>
        </Container>
      </Section>
    </>
  )
}

