# Nova rota /presencial

Landing page enxuta apenas com a turma presencial: hero, cronograma, aplicação e CTA final.
As rotas `/` e `/turma2026` permanecem intocadas.

## Arquivos criados

- `src/pages/Presencial.tsx` — `<main className="min-h-screen">` com Hero → Modules → Application → Cta.
- `src/components/presencial/HeroSection.tsx`
- `src/components/presencial/ModulesSection.tsx`
- `src/components/presencial/ApplicationSection.tsx`
- `src/components/presencial/CtaSection.tsx`

`SectionTitle` é importado de `@/components/turma2026/SectionTitle` (não duplicado).

## Único arquivo existente alterado

`src/App.tsx`: import de `Presencial` e `<Route path="/presencial" element={<Presencial />} />` acima do catch-all. Nada mais.

## Detalhes por componente

**HeroSection** — cópia visual do hero de turma2026 (gradientes, ruído, foto com srcSet, card de perfil), com:
- pill "Turma presencial 2026" e um terceiro item de metadados com `VENUE`, no mesmo estilo de "10 Módulos"/"10 Meses";
- um único botão em todos os breakpoints: "Fazer minha aplicação", `href="#inscricao"`, `btn-primary`, `w-full sm:w-auto`, espaçamento `mb-12 sm:mb-16 md:mb-24`; blocos `sm:hidden` e Presencial/Híbrida removidos;
- `onClick` → `track("apply_click", { modality: "presencial", source: "hero_presencial" })`;
- grid do card: Início `formatShort(startsAt("presencial"))`, Local `CITY`, Vagas e Status idênticos.

**ModulesSection** — cópia sem estado `modality`, sem `tabs` e sem tablist; `modulesFor("presencial")` fixo. Mantém "mostrar 5 + Ver todos os módulos" e todas as classes de timeline e badges de data. SectionTitle mantém eyebrow "Cronograma 2026" e label "Dez módulos, dez encontros"; apenas o subtitle muda para o texto novo fornecido.

**ApplicationSection** — `id="inscricao"`, `section-white section-block relative overflow-hidden` com o mesmo gradiente radial de fundo. Container `max-w-2xl`, card único usando `modalities.find(m => m.id === "presencial")` e as mesmas classes do card de modalidades: tag/badge, título, pitch, `dl` com `specsFor("presencial")`, `ul` de benefícios, bloco de preço e CTA com `m.cta.text` → `track("apply_click", { modality: "presencial", source: "presencial_page" })`. SectionTitle com os textos novos de Aplicação. Sem o parágrafo "Não sabe qual escolher?".

**CtaSection** — cópia da de turma2026, textos idênticos; só o rótulo do botão passa a "Fazer minha aplicação" (`href="#inscricao"`).

## Dados

Todas as datas, specs, módulos, benefícios e preços vêm de `@/content/course` — nenhum valor hardcoded. Nenhuma menção à modalidade híbrida.

## Validação

Typecheck + build; conferir que o diff toca apenas os cinco arquivos novos e `src/App.tsx`.
