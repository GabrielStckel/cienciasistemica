# Ajustes mobile do hero — `/turma2026`

Arquivo único: `src/components/turma2026/HeroSection.tsx`. Sem alterar texto, sem tocar desktop, sem mexer em outras rotas.

## 1) Botões do hero

- Esconder o container atual de botões no mobile aplicando `hidden sm:flex` no wrapper e trocando `mb-16 md:mb-24` por `sm:mb-16 md:mb-24`:
  - de: `w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 mb-16 md:mb-24`
  - para: `hidden sm:flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 sm:mb-16 md:mb-24`
  - Os dois botões internos (Presencial / Híbrida) permanecem idênticos.
- Logo acima desse container, inserir um novo bloco visível só no mobile:
  - `<div className="sm:hidden w-full mb-16">` contendo um `<a href="#inscricao">` com `btn-primary group w-full justify-center text-sm py-3.5`, `style={{ boxShadow: "0 0 24px hsl(220 86% 56% / 0.28)" }}`, `onClick={() => track("hero_modalities_click", { source: "hero_mobile" })}`, label "Ver as modalidades" + seta `→`.
  - `#inscricao` já existe na ModalitiesSection; não criar âncora nova.

## 2) Card de dados (grid Início/Local/Vagas/Status)

- Trocar o grid de `grid grid-cols-4 gap-2 md:gap-10 w-full md:w-auto` para `grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-3 md:gap-10 w-full md:w-auto`.
- Nos 4 itens filhos, trocar `text-center md:text-left` por `text-left md:text-left`.

## 3) Ritmo vertical (só mobile)

- Metadados do topo: `mb-5 md:mb-10` → `mb-4 md:mb-10`.
- Subtítulo: `mb-8 md:mb-12` → `mb-7 md:mb-12`.
- Container principal: `pt-6 pb-10 md:py-28` → `pt-8 pb-12 md:py-28`.

## 4) Não mexer

Gradientes, ruído SVG, `min-h-[100svh]`, imports de `@/content/course`, imagens (srcSet/sizes/width/height/fetchPriority), badge do avatar, import de `track` em `@/lib/analytics`. Nenhum texto existente muda — única string nova: "Ver as modalidades".

## Validação
- Build OK (`bun run build` via harness).
- Verificar mobile (393px) e desktop no preview: desktop pixel-idêntico, mobile com botão único, card 2×2 e ritmo ajustado.
