import { Container } from './Container'
import { INSTITUCIONAL_ITEMS, NAV_ITEMS, isNavGroup, type NavLinkItem } from '../../lib/nav'
import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { COMPANY_NAME } from '../../lib/seo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-white/10 bg-ink-950">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo format="svg" tone="onDark" className="h-9 w-auto" />
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Distribuição com foco em relacionamento comercial, agilidade logística e consistência operacional.
              (texto provisório)
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold text-white">Navegação rápida</div>
            <ul className="mt-4 grid gap-2 text-sm">
              {NAV_ITEMS.filter((i): i is NavLinkItem => !isNavGroup(i)).map((item) => (
                <li key={item.to}>
                  <Link className="text-white/70 hover:text-white" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Institucional</li>
              {INSTITUCIONAL_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link className="text-white/70 hover:text-white" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-semibold text-white">Contato</div>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <div>Telefone: (00) 0000-0000 (placeholder)</div>
              <div>E-mail: contato@novainfinity.com.br (placeholder)</div>
              <div className="pt-2">
                <div className="text-sm font-semibold text-white">Endereço</div>
                <div className="mt-2 text-sm text-white/70">Rua Exemplo, 123 — Cidade/UF (placeholder)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {year} {COMPANY_NAME}. Todos os direitos reservados.
          </div>
          <div className="text-white/45">Site institucional — versão inicial</div>
        </div>
      </Container>
    </footer>
  )
}

