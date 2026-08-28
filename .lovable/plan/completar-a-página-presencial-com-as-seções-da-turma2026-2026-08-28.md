# Completar a página /presencial com as seções da /turma2026

## Objetivo

Completar a landing `/presencial` adicionando as seções de conteúdo que hoje só
existem na `/turma2026`, mantendo os componentes de modalidade da pasta
`presencial` (Hero, Modules, Application, Cta).

## Arquivo alterado

Apenas `src/pages/Presencial.tsx`. Nenhum componente é editado; nenhum texto muda;
as rotas `/` e `/turma2026` permanecem idênticas.

## O que fazer

Reescrever `src/pages/Presencial.tsx` (imports + corpo) com esta ordem:

```tsx
<HeroSection />                // @/components/presencial/HeroSection
<IdentificationSection />      // @/components/turma2026/IdentificationSection
<AboutCourseSection />         // @/components/turma2026/AboutCourseSection
<InstructorSection />          // @/components/turma2026/InstructorSection
<TestimonialsSection />        // @/components/turma2026/TestimonialsSection
<PreparationSection />         // @/components/turma2026/PreparationSection
<PillarsSection />             // @/components/turma2026/PillarsSection
<ConsciousnessSection />       // @/components/turma2026/ConsciousnessSection
<ModulesSection />             // @/components/presencial/ModulesSection
<JourneySection />             // @/components/turma2026/JourneySection
<ApplicationSection />         // @/components/presencial/ApplicationSection
<FaqSection />                 // @/components/turma2026/FaqSection
<CtaSection />                 // @/components/presencial/CtaSection
```

Mantém `<main className="min-h-screen">`.

Regras observadas:
- Componentes de `turma2026` são neutros de modalidade (não citam presencial nem
  híbrida, não usam datas) — importados diretamente, sem cópias.
- **Não** inclui `ModalitiesSection` de `turma2026` (evita menção à híbrida).
- A seção de aplicação da `/presencial` continua sendo
  `@/components/presencial/ApplicationSection.tsx`, inalterada.

## Validação

`tsc --noEmit` e `vite build` OK. Diff restrito a `src/pages/Presencial.tsx`.
Conferir visualmente em `/presencial` as novas seções e em `/turma2026` que nada
mudou.