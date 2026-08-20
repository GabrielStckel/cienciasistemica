# Três seções novas (estrutura vazia) na /copiahome

Escopo: apenas a página `/copiahome`, como combinado antes. Nenhum texto inventado — todo conteúdo fica em arrays vazios no `src/content/course.ts` para você preencher depois.

## 1. Dados no `src/content/course.ts`

Adicionar ao final:

- `identificationItems: string[] = []`
- `testimonials: { quote; name; context }[] = []`
- `faq: { q; a }[] = []`
- `sectionCopy` com `identification`, `testimonials`, `faq`, cada um com `eyebrow`, `title`, `subtitle` vazios

## 2. Novos componentes em `src/components/copiahome/`

- **IdentificationSection.tsx** — `section-muted section-block`, `container max-w-3xl`, `SectionTitle` com `sectionCopy.identification` (subtitle omitido se vazio). Itens em `grid sm:grid-cols-2 gap-3`, cada um em `card-refined p-4` com marcador `text-accent` e texto `text-[15px] leading-[1.7]`. Retorna `null` se a lista estiver vazia.
- **TestimonialsSection.tsx** — `section-white section-block`. Grid `md:grid-cols-3 gap-4 md:gap-6`, aspas decorativas `text-accent/30`, depoimento `text-[15px] leading-[1.7]`, nome em `font-display font-semibold` e contexto `text-[13px] text-muted-foreground`. Retorna `null` se vazio.
- **FaqSection.tsx** — `section-muted section-block`, `container max-w-3xl`, usando o `Accordion` do shadcn já existente. Abaixo, link centralizado para o Instagram (`instructor.instagram`) com ícone do lucide e apenas o handle. Retorna `null` se vazio.

Todos usam o `SectionTitle` local da pasta `copiahome`.

## 3. Nova ordem em `src/pages/CopiaHome.tsx`

```text
Hero → Identification → AboutCourse → Instructor → Testimonials →
Preparation → Pillars → Consciousness → Modules → Journey →
Modalities → Faq → Cta
```

Só a posição muda; o conteúdo das seções existentes fica intacto.

## 4. Alternância de fundos

Depois da reordenação, verifico se sobraram duas seções escuras (`gradient-hero`) coladas; se sim, ajusto apenas o fundo de uma delas.

Enquanto os arrays estiverem vazios, a página renderiza exatamente como hoje, só com a nova ordem.
