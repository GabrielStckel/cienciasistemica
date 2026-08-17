# Ajustes de responsividade mobile

Aplicação do documento enviado, com uma exceção: a **justificação de texto permanece como está hoje** (justificado no mobile e no desktop) — o item 2 do documento não será aplicado.

## O que muda

### Espaçamento e ritmo
- Padding do container passa a ser responsivo: 1.25rem no celular, 1.5rem em telas pequenas, 2rem a partir de telas grandes.
- Nova utility `.section-block` (3.5rem no mobile / 6rem no desktop) aplicada em Sobre o curso, Jonas Peres, Pilares, Consciência, Preparação, Módulos e Ingresso — hoje cada uma usa um espaçamento diferente e o scroll fica desequilibrado.

### Hero
- Altura passa a `100svh` (corrige o corte causado pela barra de endereço no Safari iOS).
- Paddings menores no mobile, título reduzido para 2.6rem com entrelinha 0.95, kicker menor, subtítulo em 15px com mais contraste.
- Remoção da div de nav vazia (código morto).
- Tags de metadata e labels do card de perfil maiores e com mais contraste; grid do card menos espremido no mobile.

### Tipografia
- Corpo de texto padronizado em 15px no mobile com entrelinha confortável; títulos de card em 17px; labels de seção em 11px.
- `SectionTitle` no mobile: 26px em vez de text-3xl.

### Navegação e CTAs
- "Conhecer o curso" passa a apontar para `#sobre` (novo id em Sobre o curso) em vez de pular para o rodapé.
- Novo botão secundário no hero: "Ver modalidades" (estilo ghost) apontando para `#inscricao`. No mobile os dois botões ficam empilhados em largura total; a partir de telas pequenas ficam lado a lado.
- CTA final ganha o botão "Escolher minha modalidade" e perde o `id="inscricao"`; título reduzido no mobile.
- `scroll-margin-top` nas âncoras para o conteúdo não ficar colado no topo.

### HTML
- `<html lang="pt-BR">` no lugar de `en`.

## Detalhes técnicos

- `tailwind.config.ts`: `container.padding` vira objeto `{ DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" }`.
- `src/index.css`: adiciona `.section-block` e `section[id] { scroll-margin-top: 2rem; }`. A regra `main :where(header, section) p:not(...)` com `text-align: justify` fica intacta.
- Componentes tocados: `HeroSection`, `AboutCourseSection`, `PillarsSection`, `ConsciousnessSection`, `JourneySection`, `ModulesSection`, `InstructorSection`, `PreparationSection`, `SectionTitle`, `CtaSection`.
- As classes `text-justify` hardcoded nos componentes permanecem (decisão do usuário).
- Somente cores por tokens semânticos; nenhum texto de conteúdo alterado.
- Escopo: página `/` (Index). As páginas `/v1`, `/v2`, `/v3` não são alteradas.
