import { Container } from '../components/layout/Container'
import { FormField } from '../components/ui/FormField'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'
import { SectionTitle } from '../components/ui/SectionTitle'
import { copy } from '../content/copy'

export function Contato() {
  return (
    <>
      <InternalPageHero
        title="Contato"
        description={copy.pages.contato.hero}
        seoDescription="Contato Nova Infinity: fale com a equipe."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="Atendimento"
                title="Vamos direcionar você para o canal certo"
                description="Envie sua mensagem e retornamos com agilidade. Nesta versão, o formulário é visual (sem envio)."
              />

              <div className="mt-8 space-y-4">
                {[
                  { t: 'Telefone', v: '(00) 0000-0000 (placeholder)' },
                  { t: 'E-mail', v: 'contato@novainfinity.com.br (placeholder)' },
                  { t: 'Endereço', v: 'Rua Exemplo, 123 — Cidade/UF (placeholder)' },
                ].map((i) => (
                  <div key={i.t} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/25">
                    <div className="text-sm font-semibold text-white">{i.t}</div>
                    <div className="mt-2 text-sm text-white/70">{i.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-sm shadow-black/30">
                <div className="text-sm font-semibold text-white">Formulário</div>
                <p className="mt-2 text-sm text-white/70">Preencha os dados abaixo. (envio será conectado depois)</p>

                <form className="mt-6 grid gap-4 sm:grid-cols-2">
                  <FormField label="Nome" name="name" placeholder="Seu nome" autoComplete="name" />
                  <FormField label="Empresa" name="company" placeholder="Nome da empresa" autoComplete="organization" />
                  <FormField label="Telefone" name="phone" placeholder="(00) 0000-0000" autoComplete="tel" />
                  <FormField label="E-mail" name="email" placeholder="seu@email.com" autoComplete="email" />
                  <FormField
                    multiline
                    label="Mensagem"
                    name="message"
                    placeholder="Conte rapidamente como podemos ajudar"
                    className="sm:col-span-2"
                  />

                  <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                    >
                      Enviar mensagem
                    </button>
                    <span className="text-xs text-white/55">* Botão visual nesta versão (sem envio).</span>
                  </div>
                </form>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/30">
                <div className="border-b border-white/10 p-6">
                  <div className="text-sm font-semibold text-white">Mapa</div>
                  <div className="mt-2 text-sm text-white/70">Área reservada para integração com Google Maps/Waze.</div>
                </div>
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-ink-900 to-brand-950" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

