# Tribo Hooponopower — Página de Vendas

Página de vendas da campanha "Jornada Emagrecendo de Dentro Para Fora" da Tribo Hooponopower, direcionando para o checkout na Hotmart.

## Run & Operate

- `pnpm --filter @workspace/tribo-vendas run dev` — inicia a página de vendas (porta atribuída automaticamente)
- `pnpm run typecheck` — typecheck completo em todos os pacotes

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS
- Animações: Framer Motion
- Roteamento: Wouter

## Where things live

- Página principal: `artifacts/tribo-vendas/src/pages/SalesPage.tsx`
- Tema/cores: `artifacts/tribo-vendas/src/index.css`
- Imagens: `attached_assets/` (foto do casal e Mapa Personalizado)

## Product

Página de vendas de uma única rota (`/`) para a Tribo Hooponopower. Campanha temática de emagrecimento emocional — "Parar de descontar emoções na comida e começar a perder peso sem sofrimento". Todos os CTAs direcionam para `https://hooponoponodojeitocerto.com.br/tribo`.

## User preferences

- Sem pixel do Meta Ads / Facebook na página
- Checkout via Hotmart: https://hooponoponodojeitocerto.com.br/tribo
- Design inspirado no visual do Mapa Personalizado: roxo escuro profundo, dourado, tipografia Playfair Display

## Gotchas

- As imagens devem ser importadas via alias `@assets/` (não via `attached_assets/` diretamente em URLs)
- Qualquer `@import url(...)` no `index.css` deve ser a primeira linha do arquivo (antes do `@import "tailwindcss"`)

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
