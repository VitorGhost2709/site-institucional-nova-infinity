import { useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Container } from './Container'
import { NAV_ITEMS, isNavGroup, type NavGroupItem, type NavLinkItem } from '../../lib/nav'
import { Logo } from '../brand/Logo'
import { Dropdown } from '../ui/Dropdown'

export function Header() {
  const [open, setOpen] = useState(false)
  const [institutionalOpenMobile, setInstitutionalOpenMobile] = useState(false)
  const location = useLocation()

  const items = useMemo(() => NAV_ITEMS, [])
  const institutional = useMemo(
    () => items.find((i) => isNavGroup(i) && i.label === 'Institucional') as NavGroupItem | undefined,
    [items],
  )
  const desktopLinks = useMemo(() => items.filter((i) => !isNavGroup(i)) as NavLinkItem[], [items])

  return (
    <header className="border-b border-white/10 bg-ink-950/70 text-white backdrop-blur supports-[backdrop-filter]:bg-ink-950/50">
      <Container className="flex h-20 items-center gap-6 sm:h-24 sm:gap-10 lg:h-28">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex items-center">
            <Logo
              priority
              format="svg"
              tone="onDark"
              preset="header"
            />
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-2 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                'rounded-xl px-3.5 py-2.5 text-[15px] font-medium transition',
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-white/80 hover:bg-white/10 hover:text-white',
              ].join(' ')
            }
          >
            Home
          </NavLink>

          {institutional ? (
            <Dropdown key={location.pathname} label={institutional.label} items={institutional.children} />
          ) : null}

          {desktopLinks
            .filter((i) => i.to !== '/')
            .map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'rounded-xl px-3.5 py-2.5 text-[15px] font-medium transition',
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[15px] font-semibold text-white shadow-sm hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-ink-950/95 lg:hidden">
          <Container className="py-3">
            <div className="grid gap-1">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'rounded-xl px-3.5 py-3 text-[15px] font-semibold transition',
                    isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white',
                  ].join(' ')
                }
              >
                Home
              </NavLink>

              {institutional ? (
                <div className="rounded-xl border border-white/10 bg-white/5">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-left text-[15px] font-semibold text-white hover:bg-white/10"
                    aria-expanded={institutionalOpenMobile}
                    onClick={() => setInstitutionalOpenMobile((v) => !v)}
                  >
                    <span>Institucional</span>
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className={[
                        'h-5 w-5 text-white/70 transition',
                        institutionalOpenMobile ? 'rotate-180' : '',
                      ].join(' ')}
                    >
                      <path
                        fill="currentColor"
                        d="M5.25 7.5a.75.75 0 0 1 1.06 0L10 11.19l3.69-3.69a.75.75 0 1 1 1.06 1.06l-4.22 4.22a.75.75 0 0 1-1.06 0L5.25 8.56a.75.75 0 0 1 0-1.06Z"
                      />
                    </svg>
                  </button>

                  <div
                    className={[
                      'grid overflow-hidden transition-all duration-200',
                      institutionalOpenMobile ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    ].join(' ')}
                  >
                    <div className="min-h-0">
                      <div className="grid gap-1 px-2 pb-2">
                        {institutional.children.map((child: NavLinkItem) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              [
                                'rounded-xl px-3.5 py-2.5 text-[15px] font-semibold transition',
                                isActive
                                  ? 'bg-white/10 text-white'
                                  : 'text-white/80 hover:bg-white/10 hover:text-white',
                              ].join(' ')
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {desktopLinks
                .filter((i) => i.to !== '/')
                .map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        'rounded-xl px-3.5 py-3 text-[15px] font-semibold transition',
                        isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white',
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

