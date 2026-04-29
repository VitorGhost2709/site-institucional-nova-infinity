import { Container } from '../components/layout/Container'
import { FormField } from '../components/ui/FormField'
import { InternalPageHero } from '../components/ui/InternalPageHero'
import { Section } from '../components/ui/Section'
import { SectionTitle } from '../components/ui/SectionTitle'
import { copy } from '../content/copy'

const PHONE = '55 74 9915-7166'
const EMAIL_MAIN = 'contato@infinitydistribuicao.com.br'
const EMAIL_FISCAL = 'fiscal@infinitydistribuicao.com.br'
const EMAIL_OPERACIONAL = 'operacional@infinitydistribuicao.com.br'
const ADDRESS = 'R. Pequiá, 20 - Vila Suzana, Belo Horizonte - MG, 31260-400'

export function Contato() {
  const mapsQuery = encodeURIComponent(ADDRESS)
  const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`
  const mapsOpenHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
  const mapsRouteHref = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`

  return (
    <>
      <InternalPageHero
        title="Contato"
        description={copy.pages.contato.hero}
        seoDescription="Contato Nova Infinity: fale com a equipe."
      />

      <Section>
        <Container>
          <div className="flex flex-col gap-10">
            {/* Bloco superior: texto institucional */}
            <div className="max-w-3xl">
              <SectionTitle
                eyebrow="Atendimento"
                title="Vamos direcionar você para o canal certo"
                description="Envie sua mensagem e retornamos com agilidade. Nesta versão, o formulário é visual (sem envio)."
              />
            </div>

            {/* Bloco inferior: cards (esquerda) + formulário (direita) */}
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/25">
                  <div className="text-sm font-semibold text-white">Telefone</div>
                  <div className="mt-2 text-sm text-white/70">
                    <a
                      href="tel:+557499157166"
                      className="underline-offset-4 hover:underline focus-visible:underline"
                      aria-label={`Ligar para ${PHONE}`}
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/25">
                  <div className="text-sm font-semibold text-white">E-mail</div>
                  <div className="mt-2 text-sm text-white/70">
                    <a
                      href={`mailto:${EMAIL_MAIN}`}
                      className="underline-offset-4 hover:underline focus-visible:underline"
                      aria-label={`Enviar e-mail para ${EMAIL_MAIN}`}
                    >
                      {EMAIL_MAIN}
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/25">
                  <div className="text-sm font-semibold text-white">Endereço</div>
                  <div className="mt-2 text-sm text-white/70">
                    <a
                      href={mapsOpenHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline focus-visible:underline"
                      aria-label="Abrir endereço no Google Maps"
                    >
                      {ADDRESS}
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/25">
                  <div className="text-sm font-semibold text-white">E-mails por setor</div>
                  <div className="mt-3 space-y-2 text-sm text-white/70">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-white/80">Administrativo / Atendimento</span>
                      <a
                        href={`mailto:${EMAIL_MAIN}`}
                        className="font-semibold text-white/80 underline-offset-4 hover:underline focus-visible:underline"
                      >
                        {EMAIL_MAIN}
                      </a>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-white/80">Fiscal</span>
                      <a
                        href={`mailto:${EMAIL_FISCAL}`}
                        className="font-semibold text-white/80 underline-offset-4 hover:underline focus-visible:underline"
                      >
                        {EMAIL_FISCAL}
                      </a>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-white/80">Operacional / Logística</span>
                      <a
                        href={`mailto:${EMAIL_OPERACIONAL}`}
                        className="font-semibold text-white/80 underline-offset-4 hover:underline focus-visible:underline"
                      >
                        {EMAIL_OPERACIONAL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-sm shadow-black/30">
                  <div className="text-sm font-semibold text-white">Formulário</div>
                  <p className="mt-2 text-sm text-white/70">Preencha os dados abaixo e nossa equipe retornará em breve.</p>

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
              </div>
            </div>

            {/* Mapa: largura total abaixo do grid */}
            <div className="mt-2 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm shadow-black/30">
              <div className="border-b border-white/10 p-6">
                <div className="text-sm font-semibold text-white">Mapa</div>
                <div className="mt-2 text-sm text-white/70">{ADDRESS}</div>
              </div>
              <div className="w-full">
                <iframe
                  title="Mapa - Infinity Distribuição"
                  src={mapsEmbedSrc}
                  className="h-[300px] w-full md:h-[500px] lg:h-[600px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="flex flex-col gap-3 border-t border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={mapsOpenHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 shadow-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                  >
                    Abrir no Google Maps
                  </a>
                  <a
                    href={mapsRouteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                  >
                    Abrir rota no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

