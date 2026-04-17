export type NavLinkItem = {
  label: string
  to: string
  description?: string
}

export type NavGroupItem = {
  label: string
  children: NavLinkItem[]
}

export type NavItem = NavLinkItem | NavGroupItem

export function isNavGroup(item: NavItem): item is NavGroupItem {
  return 'children' in item
}

export const INSTITUCIONAL_ITEMS: NavLinkItem[] = [
  { label: 'Quem Somos', to: '/quem-somos', description: 'História, visão e valores da Nova Infinity.' },
  { label: 'Nossos Serviços', to: '/servicos', description: 'Distribuição, suporte comercial e operação.' },
  { label: 'Catálogo de Produtos', to: '/catalogo', description: 'Portfólio e categorias (em evolução).' },
  { label: 'Trabalhe Conosco', to: '/trabalhe-conosco', description: 'Oportunidades e cadastro (futuro).' },
  { label: 'Política de Privacidade', to: '/politica-de-privacidade', description: 'Diretrizes e privacidade.' },
  {
    label: 'Relatório de Transparência e Igualdade Salarial',
    to: '/relatorio-transparencia',
    description: 'Publicação institucional (quando aplicável).',
  },
]

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Institucional', children: INSTITUCIONAL_ITEMS },
  { label: 'Empresas Parceiras', to: '/empresas-parceiras' },
  { label: 'Seja Cliente', to: '/cliente' },
  { label: 'Representantes', to: '/representantes' },
  { label: 'Agregados', to: '/agregados' },
  { label: 'Contato', to: '/contato' },
]

