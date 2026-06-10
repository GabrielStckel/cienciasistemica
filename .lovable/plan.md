## Ajustes solicitados

### 1. Hero (`src/components/HeroSection.tsx`)
- Remover o ponto final após "Ciência Sistêmica" (tirar o `.` em destaque accent).
- Remover a linha "segundo Bert Hellinger." abaixo do título.
- Remover o grid quadriculado do fundo (a `div` com `backgroundImage` de linhas).
- Manter os blobs ambiente e o restante do layout intactos.

### 2. Justificar textos do site
- Aplicar `text-align: justify` aos parágrafos de conteúdo em todas as páginas (Index, V1, V2, V3), seguindo o mesmo padrão já existente em `.v2-page` no `src/index.css`.
- Generalizar a regra para `main` (sem depender de classe específica) ou adicionar as classes `v1-page`, `v3-page` e aplicar ao Index também — escolherei generalizar via `main :where(header, section) p:not([class*=font-display]):not([class*=uppercase]):not([class*=tabular-nums])`.
- Manter `text-align-last: left` e `hyphens: none` para evitar grandes espaçamentos e quebras com hífen.

### 3. Tipografia em fundos claros
- Aumentar levemente o tamanho e peso dos parágrafos sobre fundo claro (seções com `bg-background`, `bg-white`, `bg-muted` claro) para melhorar legibilidade.
- Ajustes previstos: parágrafos passam de `text-base`/`text-sm` para `text-[17px]`/`text-base` e `font-light` → `font-normal` (peso 400 → 450 via classe utilitária ou ajuste direto).
- Aplicar nas seções: `AboutCourseSection`, `ComparisonSection`, `DifferentialsSection`, `InstructorSection`, `JourneySection`, `PillarsSection`, `PreparationSection`, `ModulesSection`, `ConsciousnessSection`, `CtaSection` — apenas onde o fundo é claro.

### 4. Seção "Método fenomenológico" → layout em balões
- Localizar a seção atual (provavelmente em `PillarsSection` ou `ConsciousnessSection` — verificarei na implementação).
- Substituir o layout atual por cards/balões arredondados (`rounded-full` ou `rounded-3xl` com formato orgânico), distribuídos em grid responsivo.
- Cada balão contém: ícone/numeração + título curto + descrição.
- Visual: fundo suave com gradiente sutil usando tokens do design system, borda fina, sombra leve, animação `hover` de elevação.
- Manter conteúdo textual existente; mudar apenas o container visual.

### Detalhes técnicos
- Arquivos a editar:
  - `src/components/HeroSection.tsx` — remover ponto, frase Hellinger, grid de fundo.
  - `src/index.css` — generalizar regra de justificação; adicionar utilitário para tipografia em fundo claro se necessário.
  - Componentes de seções com fundo claro listadas acima — ajuste de classes Tailwind nos parágrafos.
  - Componente da seção "Método fenomenológico" — refatorar para layout de balões.
- Sem mudanças de conteúdo (textos permanecem), sem mudanças de rotas, sem backend.
- Usar exclusivamente tokens semânticos do `index.css`/`tailwind.config.ts` (sem cores hardcoded).
