import { Container } from '../components/layout/Container'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'

export function RelatorioTransparencia() {
  return (
    <>
      <InternalPageHero
        title="Relatório de Transparência e Igualdade Salarial"
        description="Área institucional para disponibilizar relatórios e documentos conforme exigências aplicáveis. (conteúdo provisório)"
        seoDescription="Relatório de Transparência e Igualdade Salarial — Nova Infinity."
      />

      <Section>
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm shadow-black/30">
            <div className="text-sm font-semibold text-white">Documentos</div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Placeholder para anexos (PDF), links e histórico de publicações. A integração pode ser feita via CMS, drive ou
              repositório.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Relatório — 2026 (placeholder)', 'Relatório — 2025 (placeholder)'].map((d) => (
                <div key={d} className="rounded-2xl border border-white/10 bg-ink-900/60 p-5">
                  <div className="text-sm font-semibold text-white">{d}</div>
                  <div className="mt-2 text-xs text-white/60">Link para PDF / download (futuro)</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

