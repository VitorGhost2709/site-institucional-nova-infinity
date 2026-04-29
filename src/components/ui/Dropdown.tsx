import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { NavLinkItem } from '../../lib/nav'

type DropdownProps = {
  label: string
  items: NavLinkItem[]
  className?: string
}

export function Dropdown({ label, items, className }: DropdownProps) {
  const id = useId()
  const menuId = `dropdown-${id}`
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onDocPointerDown(e: PointerEvent) {
      if (!open) return
      const el = rootRef.current
      if (!el) return
      if (e.target instanceof Node && !el.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDocPointerDown)
    return () => document.removeEventListener('pointerdown', onDocPointerDown)
  }, [open])

  return (
    <div
      ref={rootRef}
      className={['relative', className].filter(Boolean).join(' ')}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={[
          'inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-[15px] font-medium transition',
          'text-white/80 hover:bg-white/10 hover:text-white',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950',
        ].join(' ')}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false)
        }}
      >
        {label}
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={['h-4 w-4 transition', open ? 'rotate-180 text-white' : 'text-white/60'].join(' ')}
        >
          <path
            fill="currentColor"
            d="M5.25 7.5a.75.75 0 0 1 1.06 0L10 11.19l3.69-3.69a.75.75 0 1 1 1.06 1.06l-4.22 4.22a.75.75 0 0 1-1.06 0L5.25 8.56a.75.75 0 0 1 0-1.06Z"
          />
        </svg>
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label={label}
        className={[
          'absolute left-0 top-full z-50 mt-2 w-[360px] origin-top-left',
          'rounded-2xl border border-white/10 bg-ink-900/95 p-2 shadow-lg shadow-black/40 backdrop-blur supports-[backdrop-filter]:bg-ink-900/80',
          'transition duration-150',
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0',
        ].join(' ')}
      >
        <div className="grid gap-1">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              role="menuitem"
              className="rounded-xl px-3 py-2.5 transition hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30"
              onClick={() => setOpen(false)}
            >
              <div className="text-sm font-semibold text-white">{item.label}</div>
              {item.description ? (
                <div className="mt-0.5 text-xs leading-relaxed text-white/65">{item.description}</div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

