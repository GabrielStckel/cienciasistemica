# Ajustes técnicos (sem alterar textos visíveis)

Nenhum texto visível muda: títulos, parágrafos, labels e botões ficam idênticos.

## 1. InstructorSection: um único H2
Unificar os dois cabeçalhos (`md:hidden` + `hidden md:block`) em um só, com classes responsivas (`text-[26px] md:text-4xl`, `text-center md:text-left`) e ordenação via `order-*` no grid para manter o layout atual em mobile e desktop. Nome e stats passam a vir de `instructor` em `src/content/course.ts` (array local removido). Aplico em `src/components/copiahome/InstructorSection.tsx` e na versão da home `src/components/InstructorSection.tsx`.

## 2. Remover hacks de alinhamento
Retirar os `style={{ textAlign: "left" }}` inline dos dois `InstructorSection` e do `PreparationSection` da copiahome.

## 3. Utility `.card-elevated`
Criar em `src/index.css`:

```text
.card-elevated  -> gradiente + borda + sombra padrão
.card-elevated-accent -> mesma base, sombra mais forte (card presencial em destaque)
```

Substituir os objetos `style` inline em `PreparationSection` e `ModalitiesSection` (copiahome e home) pelas classes.

## 4. Remover páginas de rascunho
Apagar rotas `/v1`, `/v2`, `/v3` em `App.tsx` e os arquivos `src/pages/V1.tsx`, `V2.tsx`, `V3.tsx`.

## 5. SEO no `index.html`
- `og:image` e `twitter:image` → `/og-image.jpg`, com placeholder gerado em `public/`.
- `twitter:site` → `@jonas_peress`.
- `<link rel="canonical" href="https://www.cienciasistemica.com.br/">`.
- Título intacto; na description apenas `em 2026` → `[DEFINIR]` (em todas as cópias: meta, og, twitter).
- Bloco JSON-LD `Course` com `provider` (Person: Jonas Peres) e `hasCourseInstance` para as duas turmas: Onsite 2026-10-10 → 2027-07-18 e Blended 2027-01-30 → 2027-10-31, conforme `course.ts`.

## 6. Analytics GA4
`gtag.js` no `index.html` com `G-XXXXXXXXXX` (placeholder para você trocar) e eventos:
- `cta_click` (texto do botão) em qualquer link para `#inscricao`
- `apply_click` (modalidade) nos botões dos cards de modalidade
- `schedule_toggle` na troca de turma do cronograma

Um helper `src/lib/analytics.ts` com `track()` seguro (não quebra se o gtag não carregar).

## 7. Imagens
Gerar `jonas-peres` em WebP (dois tamanhos: ~160px e ~800px), usar `srcset`/`sizes`, `width`/`height` explícitos nas duas `<img>`. Hero: `loading="eager"` + `fetchpriority="high"`; seção do instrutor: `loading="lazy"`.

## 8. Movimento reduzido
Bloco `@media (prefers-reduced-motion: reduce)` no `index.css` desativando a animação de entrada do H1, transições de `translate` nos cards e o `scroll-behavior: smooth`.

## Escopo
Itens 1–3 e 6–7 tocam os componentes da `/copiahome` e, quando o mesmo código existe, também os da home `/` para manter as duas iguais. Itens 4, 5 e 8 são globais.
