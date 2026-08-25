# Ajustes de espaçamento mobile do hero — /turma2026

Arquivo único: `src/components/turma2026/HeroSection.tsx`. Sem alterar texto, sem tocar desktop (valores `md:` preservados), sem mexer em outras rotas.

## 1) Ritmo vertical do bloco de conteúdo
- Container principal: `pt-8 pb-12 md:py-28` → `pt-10 pb-14 md:py-28`
- Metadados do topo: `mb-4 md:mb-10` → `mb-7 md:mb-10`
- "Curso de formação em": `mb-2.5 md:mb-3` → `mb-3 md:mb-3`
- H1: `mb-5 md:mb-8` → `mb-6 md:mb-8`
- Subtítulo: `mb-7 md:mb-12` → `mb-10 md:mb-12`
- Bloco do botão mobile: `sm:hidden w-full mb-16` → `sm:hidden w-full mb-12`

## 2) Interior do card do Jonas
- Padding do card: `p-3.5 md:p-8` → `p-5 md:p-8`
- Gap do card: `gap-3 md:gap-8` → `gap-5 md:gap-8`
- Bloco avatar+nome: `gap-3 md:gap-6` → `gap-4 md:gap-6`
- Avatar: `w-12 h-12 md:w-24 md:h-24` → `w-14 h-14 md:w-24 md:h-24`
  (ajustar `sizes` para `(max-width: 768px) 56px, 96px`; manter width/height/srcSet/fetchPriority)
- Subtítulo "Constelador · Há 10+ anos": `mt-0.5 md:mt-1` → `mt-1.5 md:mt-1`

## 3) Grid de dados (Início/Local/Vagas/Status)
- `gap-x-3 gap-y-3 md:gap-10` → `gap-x-4 gap-y-5 md:gap-10`
- Nos 4 labels: `mb-0.5 md:mb-1` → `mb-1 md:mb-1`

## 4) Não mexer
Gradientes, ruído SVG, `min-h-[100svh]`, imports de `@/content/course`, badge indicador do avatar, `track` em `@/lib/analytics`, e todo o conteúdo textual.

## Validação
- Build OK (`bun run build` via harness).
- Preview 393px: card do Jonas visível sem scroll (ou no máximo leve corte na borda inferior). Desktop pixel-idêntico ao atual.
