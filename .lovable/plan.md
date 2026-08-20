# Fonte única de conteúdo e datas (/copiahome)

Escopo: apenas a página `/copiahome`. A home principal e as versões v1/v2/v3 ficam intocadas.

**Nenhum texto muda.** Só datas, duração, local e a origem dos dados.

## 1. Novo arquivo `src/content/course.ts`

Fonte única de verdade com:
- Cidade/UF: **Balneário Camboriú · Santa Catarina**
- Links de inscrição (`#inscricao` para as duas turmas, prontos para trocar pelos links reais depois)
- Os dez módulos (títulos e descrições exatamente como estão hoje)
- Calendário real das duas turmas (datas ISO do primeiro dia de cada encontro), presencial de Out/26 a Jul/27 e híbrida de Jan/27 a Out/27
- Funções de formatação: "10–11 Out 2026", "Out/26", "Out/26 a Jul/27"
- Dados do instrutor (nome, Instagram, números)

## 2. Modalidades passam a vir do course.ts

O array hoje dentro de `ModalitiesSection.tsx` (copiahome) migra para o `course.ts` com os mesmos textos. A ficha técnica de cada card passa a ser gerada:
- Presencial: Formato `10 encontros presenciais` · Duração `10 meses · Out/26 a Jul/27` · Turma `Reduzida` · Local `Balneário Camboriú · Santa Catarina`
- Híbrida: Formato `Online ao vivo + presencial` · Duração `10 meses · Jan/27 a Out/27` · Turma `Reduzida` · Presenciais `Balneário Camboriú · Santa Catarina`

## 3. Correções de datas

- `ModulesSection` (copiahome): apaga a lista local e usa o calendário da turma presencial — as dez datas atuais estão erradas.
- `HeroSection` (copiahome): "Início" passa de `Ago/26` para a data real da turma presencial.
- `ModalitiesSection`: duração das duas turmas corrigida via o novo cálculo.

## 4. Local no hero

Quarto item no card de perfil, mesmo padrão visual dos outros: label `Local`, valor `Balneário Camboriú`. O grid vai de `grid-cols-3` para `grid-cols-2 md:grid-cols-4` para caber no mobile.

## Detalhes técnicos

- Arquivo novo: `src/content/course.ts` (tipos `Modality`, `schedule`, `formatWeekend`, `formatShort`, `rangeLabel`, `modulesFor`, `modalities`, `APPLY_URL`, `CITY`/`STATE`/`VENUE`, `instructor`).
- Arquivos alterados: `src/components/copiahome/ModulesSection.tsx`, `ModalitiesSection.tsx`, `HeroSection.tsx`.
- Regra permanente: nenhum componente de `/copiahome` mantém data, preço, cidade ou link de inscrição hardcoded.
