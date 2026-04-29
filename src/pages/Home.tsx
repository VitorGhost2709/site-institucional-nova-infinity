import { Helmet } from 'react-helmet-async'
import { Container } from '../components/layout/Container'
import { CTASection } from '../components/ui/CTASection'
import { HeroBanner } from '../components/ui/HeroBanner'
import { InfoCard } from '../components/ui/InfoCard'
import { Section } from '../components/ui/Section'
import { SectionTitle } from '../components/ui/SectionTitle'
import { WarehouseCarousel } from '../components/ui/WarehouseCarousel'
import { buildTitle } from '../lib/seo'
import { copy } from '../content/copy'

export function Home() {
  return (
    <>
      <Helmet>
        <title>{buildTitle('Home')}</title>
        <meta name="description" content={copy.home.seoDescription} />
      </Helmet>

      <HeroBanner
        title={copy.home.hero.title}
        subtitle={copy.home.hero.subtitle}
        description={copy.home.hero.description}
        primary={copy.home.hero.primaryCta}
        secondary={copy.home.hero.secondaryCta}
      />

      {/* 2. Sobre a empresa */}
      <Section variant="subtle">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="Sobre"
                title="Uma operação feita para escalar com qualidade."
                description="Estrutura, processos e relacionamento próximo para atender com previsibilidade. Nossa proposta é construir parcerias sólidas com clientes, representantes e agregados."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard
                  title="Credibilidade"
                  description="Atuação orientada a padrão de atendimento, alinhamento comercial e transparência. (provisório)"
                />
                <InfoCard
                  title="Presença no mercado"
                  description="Cobertura e atendimento com foco em relacionamento e recorrência. (provisório)"
                />
                <InfoCard
                  title="Gestão & logística"
                  description="Rotinas operacionais claras para reduzir ruído e aumentar previsibilidade. (provisório)"
                />
                <InfoCard
                  title="Parcerias"
                  description="Modelo pensado para construir relações duradouras em toda a cadeia. (provisório)"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2.1 Nossa estrutura */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="ESTRUTURA"
                title="Conheça nossa operação por dentro"
                description="Nossa estrutura foi pensada para garantir organização, agilidade e segurança em cada etapa da distribuição."
              />
            </div>
            <div className="lg:col-span-7">
              <WarehouseCarousel />
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Áreas de atuação */}
      <Section>
        <Container>
          <div className="grid gap-10">
            <SectionTitle
              eyebrow="Atuação"
              title="O que a Nova Infinity entrega na prática"
              description="Soluções de distribuição e relacionamento comercial para apoiar o crescimento do canal e a consistência da operação."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  t: 'Distribuição',
                  d: 'Execução com padrão: pedidos, separação, expedição e acompanhamento. (provisório)',
                },
                {
                  t: 'Relacionamento comercial',
                  d: 'Apoio de campo e alinhamento com clientes e parceiros para performance. (provisório)',
                },
                { t: 'Inteligência de portfólio', d: 'Organização de mix e giro para tomada de decisão. (provisório)' },
                { t: 'Expansão', d: 'Estrutura para abertura de novas frentes e cobertura. (provisório)' },
                { t: 'Suporte', d: 'Pós-venda e canais claros para resolver com agilidade. (provisório)' },
                { t: 'Parcerias logísticas', d: 'Modelo com agregados para ampliar capacidade com controle. (provisório)' },
              ].map((i) => (
                <InfoCard key={i.t} title={i.t} description={i.d} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Diferenciais */}
      <Section variant="subtle">
        <Container>
          <div className="grid gap-10">
            <SectionTitle
              eyebrow="Diferenciais"
              title="Consistência que se sente no dia a dia"
              description="O foco é operar bem, comunicar com clareza e manter padrões — do primeiro contato à entrega."
              align="center"
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: 'Variedade com curadoria', d: 'Mix pensado para giro e demanda do canal. (provisório)' },
                { t: 'Agilidade e previsibilidade', d: 'Rotina operacional para cumprir prazos e reduzir ruídos.' },
                { t: 'Atendimento próximo', d: 'Canais claros e acompanhamento de ponta a ponta.' },
                { t: 'Parceria comercial', d: 'Alinhamento de metas e ações com clientes e representantes.' },
                { t: 'Confiança', d: 'Transparência e consistência nas entregas e no relacionamento.' },
                { t: 'Expansão', d: 'Estrutura para crescer mantendo padrão e governança.' },
              ].map((i) => (
                <InfoCard key={i.t} title={i.t} description={i.d} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Parceiros */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="Relacionamento"
                title="Construído com parceiros e clientes"
                description="Aqui você pode inserir logos reais e cases. Nesta versão, deixamos uma área visual pronta para receber os materiais."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-3">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xs font-semibold text-white/55 shadow-sm shadow-black/30"
                  >
                    LOGO {idx + 1}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-white/60">
                Placeholder para logos de parceiros, marcas representadas e/ou clientes.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Chamadas estratégicas */}
      <Section variant="subtle">
        <Container>
          <div className="grid gap-10">
            <SectionTitle
              eyebrow="Caminhos"
              title="Soluções e parcerias estratégicas"
              description="Três frentes com CTAs diretos para quem quer se conectar com a Nova Infinity."
            />

            <div className="grid gap-4 lg:grid-cols-3">
              <InfoCard
                title="Quero ser cliente"
                description="Entenda benefícios, atendimento e como iniciar parceria comercial com a Nova Infinity."
              />
              <InfoCard
                title="Quero ser representante"
                description="Modelo de parceria comercial com suporte e estrutura para expansão. (provisório)"
              />
              <InfoCard
                title="Quero ser agregado"
                description="Parceria com motoristas e logística para ampliar capacidade com padrão. (provisório)"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <CTASection
                title="Seja Cliente"
                description="Benefícios, relacionamento e suporte. Preparemos um caminho claro para o cadastro."
                primary={{ label: 'Ver página', to: '/cliente' }}
                secondary={{ label: 'Contato', to: '/contato' }}
              />
              <CTASection
                title="Representantes"
                description="Parceria comercial para expandir presença e fortalecer atendimento regional."
                primary={{ label: 'Ver página', to: '/representantes' }}
                secondary={{ label: 'Contato', to: '/contato' }}
              />
              <CTASection
                title="Agregados"
                description="Operação com padrão e integração com parceiros logísticos."
                primary={{ label: 'Ver página', to: '/agregados' }}
                secondary={{ label: 'Contato', to: '/contato' }}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Contato rápido */}
      <Section>
        <Container>
          <CTASection
            title="Vamos conversar sobre uma parceria?"
            description="Conte rapidamente o que você precisa e nossa equipe retorna com o melhor caminho. (conteúdo provisório)"
            primary={{ label: 'Falar com a equipe', to: '/contato' }}
            secondary={{ label: 'Ver Catálogo', to: '/catalogo' }}
          />
        </Container>
      </Section>
    </>
  )
}

