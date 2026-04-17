import { Container } from '../components/layout/Container'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'
import { SectionTitle } from '../components/ui/SectionTitle'
import { copy } from '../content/copy'

export function Catalogo() {
  return (
    <>
      <InternalPageHero
        title="Catálogo"
        description={copy.pages.catalogo.hero}
        seoDescription="Catálogo Nova Infinity: portfólio, categorias e destaques."
      />

      <Section>
        <Container>
          <div className="grid gap-10">
            <SectionTitle
              eyebrow="Portfólio"
              title="Catálogo preparado para evoluir"
              description="Nesta versão, estruturamos a área visual para receber integração e filtros no futuro."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D', 'Categoria E', 'Categoria F'].map((c) => (
                <div key={c} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/30">
                  <div className="text-sm font-semibold text-white">{c}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Bloco visual para apresentar linha de produtos, condições e destaques. (provisório)
                  </p>
                  <div className="mt-5 aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-ink-900 to-brand-950" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="subtle">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm shadow-black/30">
            <div className="text-sm font-semibold text-white">Em breve</div>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
              Filtros por categoria, busca, ficha de produto, disponibilidade e materiais técnicos. Esta seção já está pronta
              para receber a integração quando você decidir a fonte de dados (ERP, planilha, API, CMS, etc.).
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}

