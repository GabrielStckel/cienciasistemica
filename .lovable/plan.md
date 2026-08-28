# Calendário presencial + nova rota /presencial

## A) Calendário da presencial — `src/content/course.ts`

Substituir apenas o array `schedule.presencial` por:

```ts
presencial: [
  "2026-11-14", "2026-12-19", "2027-01-23", "2027-02-13", "2027-03-20",
  "2027-04-17", "2027-05-22", "2027-06-19", "2027-07-17", "2027-08-21",
],
```

Sai `2026-10-10`, entra `2027-08-21` no fim — continuam 10 datas, todas em sábado. Nada mais no arquivo muda (híbrida, modules, formatação, exports intactos). Efeito visível em `/` e `/turma2026`: módulo I passa a "14–15 Nov 2026", módulo X a "21–22 Ago 2027", e o card presencial mostra "10 meses · Nov/26 a Ago/27".

## B) Nova rota /presencial

Landing enxuta com hero, cronograma, aplicação e CTA final. Arquivos existentes alterados: só `src/App.tsx` (import + rota acima do catch-all). Nenhuma menção à modalidade híbrida.

### Arquivos criados
- `src/pages/Presencial.tsx` — `<main className="min-h-screen">` com Hero → Modules → Application → Cta.
- `src/components/presencial/HeroSection.tsx`
- `src/components/presencial/ModulesSection.tsx`
- `src/components/presencial/ApplicationSection.tsx`
- `src/components/presencial/CtaSection.tsx`

`SectionTitle` importado de `@/components/turma2026/SectionTitle` (sem duplicar).

### HeroSection
Cópia visual do hero de turma2026 (gradientes, ruído, foto com srcSet, card de perfil, `min-h-screen min-h-[100svh]`, paddings responsivos intactos), com:
- pill "Turma presencial 2026" e terceiro item de metadados exibindo `CITY`, mesmo estilo dos demais (com separador de bolinha);
- um único botão em todos os breakpoints: container `flex w-full items-center justify-center mb-12 sm:mb-16 md:mb-24`, `<a href="#inscricao" data-analytics="apply" className="btn-primary group w-full sm:w-auto text-sm md:text-base py-3.5">` com o glow, texto "Fazer minha aplicação" + seta, `track("apply_click", { modality: "presencial", source: "hero_presencial" })`. O `data-analytics="apply"` evita o disparo duplo de `cta_click` pelo listener global do App.tsx;
- grid do card: Início `formatShort(startsAt("presencial"))`, Local `CITY`, Vagas/Status idênticos.

### ModulesSection
Cópia sem estado `modality`, sem `tabs`/tablist; `modulesFor("presencial")` fixo. Mantém showAll + slice(0, 5) + botão "Ver todos os módulos" e todas as classes de timeline/badges de data. SectionTitle mantém eyebrow "Cronograma 2026" e label "Dez módulos, dez encontros"; só o subtitle muda para: "Dez encontros presenciais em Balneário Camboriú, de sábado a domingo, ao longo de dez meses."

### ApplicationSection
`<section id="inscricao" className="section-white section-block relative overflow-hidden">` com o mesmo gradiente radial de fundo. Container `container max-w-2xl relative` — card único, sem grid. Guarda de tipo:

```ts
const presencial = modalities.find((m) => m.id === "presencial");
if (!presencial) return null;
```

SectionTitle com os textos novos de Aplicação (eyebrow "Aplicação", label "Vagas para a turma presencial", subtitle fornecido). Card com as mesmas classes do article de ModalitiesSection: tag/badge condicional, h3, pitch, `dl` com `specsFor("presencial")`, `ul` de benefícios com ✓, bloco de preço (label/value/suffix condicional/note) e `<a href={APPLY_URL.presencial} data-analytics="apply" className="btn-primary w-full mt-5">` com `track("apply_click", { modality: "presencial", source: "presencial_page" })`. Sem o parágrafo "Não sabe qual escolher?".

### CtaSection
Cópia da de turma2026, textos idênticos; botão passa a "Fazer minha aplicação", com `data-analytics="apply"` e `track("apply_click", { modality: "presencial", source: "cta_final" })`.

## Validação
Typecheck (`tsc --noEmit`) + build; diff restrito aos cinco arquivos novos, `src/App.tsx` e `schedule.presencial`; conferir em `/turma2026` as novas datas do item A.
