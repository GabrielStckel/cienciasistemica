# Cronograma com as duas turmas (/copiahome)

Regra: nenhum texto existente muda. Os únicos textos novos são "Presencial" e "Híbrida" nos botões.

## 1. Alternador de turma no cronograma
Em `src/components/copiahome/ModulesSection.tsx`:
- Estado `modality` (`presencial` | `hibrida`), padrão presencial.
- Logo abaixo do `SectionTitle` (que fica intacto), um seletor pill centralizado com dois botões: fundo `hsl(var(--foreground)/0.05)`, borda `hsl(var(--border))`, `rounded-full`, `p-1`. Ativo com fundo `accent` + texto `accent-foreground`; inativo em `text-muted-foreground`; transição suave.
- Mobile: alternador `w-full` com botões `flex-1`; a partir de `sm:` volta a `inline-flex` centralizado.
- Acessibilidade: `role="tablist"` no contêiner, `role="tab"` + `aria-selected` nos botões.
- Lista passa a vir de `modulesFor(modality)`; mantém os 5 módulos iniciais + botão "Ver todos os módulos", e ao trocar de turma `showAll` volta a `false`.

## 2. Reordenação do fim da página
Em `src/pages/CopiaHome.tsx`, mover `JourneySection` para depois de `ModulesSection`:

```text
<ModulesSection />
<JourneySection />
<ModalitiesSection />
<CtaSection />
```

Só reordenação — nada muda dentro de `JourneySection`.

## Escopo
Apenas `/copiahome`. Home principal e /v1 /v2 /v3 permanecem como estão.
