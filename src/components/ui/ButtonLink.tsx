import { NavLink, type NavLinkProps } from 'react-router-dom'

type ButtonLinkProps = NavLinkProps & {
  variant?: 'primary' | 'ghost'
}

export function ButtonLink({ variant = 'primary', className, ...props }: ButtonLinkProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white'
  const styles =
    variant === 'primary'
      ? 'bg-brand-600 text-white hover:bg-brand-700'
      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'

  return <NavLink className={[base, styles, 'px-4 py-2', className].filter(Boolean).join(' ')} {...props} />
}

