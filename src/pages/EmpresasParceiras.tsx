import { Container } from '../components/layout/Container'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'
import { SectionTitle } from '../components/ui/SectionTitle'

export function EmpresasParceiras() {
  return (
    <>
      <InternalPageHero
        title="Empresas Parceiras"
        description="Uma área institucional para apresentar marcas, parceiros e relacionamento comercial. (conteúdo provisório)"
        seoDescription="Empresas parceiras da Nova Infinity."
      />

      <Section>
        <Container>
          <SectionTitle
            eyebrow="Relacionamento"
            title="Parcerias que fortalecem a operação"
            description="Espaço pronto para inserir logos reais, categorias e materiais institucionais."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex h-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-xs font-semibold text-white/55 shadow-sm shadow-black/30"
              >
                LOGO {i + 1}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

