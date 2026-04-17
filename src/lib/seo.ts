export const COMPANY_NAME = 'Nova Infinity'

export function buildTitle(pageTitle?: string) {
  if (!pageTitle) return COMPANY_NAME
  return `${pageTitle} | ${COMPANY_NAME}`
}

