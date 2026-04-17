# Site institucional — Nova Infinity

Projeto de site institucional da **Nova Infinity**, construído com **React + TypeScript + Vite**, roteamento com **React Router** e estilização **dark-first** via **Tailwind CSS**.

## Stack

- React + TypeScript + Vite
- React Router (rotas centralizadas em `src/routes/index.tsx`)
- Tailwind CSS (paleta `ink/brand` em `tailwind.config.js`)
- SEO básico por página com `react-helmet-async`

## Estrutura do projeto

- `src/components/layout/`: `TopBar`, `Header` (navbar com dropdown institucional), `Footer`, `Container`, `AppLayout`
- `src/components/ui/`: componentes reutilizáveis (Hero, Sections, Cards, CTA, FormField, Dropdown)
- `src/pages/`: páginas institucionais e comerciais (Home, Quem Somos, Serviços, Catálogo, Cliente, Representantes, Agregados, Contato, etc.)
- `src/content/copy.ts`: copy centralizado (conteúdo provisório) para Home e páginas internas
- `src/assets/`: logo real da empresa (usada no header e heros)

## Rodando localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Observações

- Alguns conteúdos estão marcados como **provisórios** e existem blocos preparados para futuras integrações (formulários e catálogo).
