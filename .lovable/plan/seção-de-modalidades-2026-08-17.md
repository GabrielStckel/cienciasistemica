# Seção de Modalidades

Nova seção com dois caminhos de ingresso (Presencial e Híbrida), inserida entre "Dez módulos, dez encontros" e a seção final "Vagas limitadas".

## O que será criado

Um bloco em fundo claro, com halo azul sutil no topo (mesmo tratamento da seção do método fenomenológico), título "Escolha como você quer viver a formação" e dois cards lado a lado no desktop, empilhados no celular.

### Card 1 — Turma presencial (destacado)
Borda azul à esquerda, fundo levemente gradiente e sombra mais marcada, com selo "Vagas limitadas".
- Pitch sobre a experiência completa e o campo presencial
- Ficha: 10 encontros presenciais · 10 meses (Ago/26 a Mai/27) · turma reduzida
- 4 benefícios com check azul
- Pré-inscrição: **Sob consulta**, com a nota "Condições enviadas após a aplicação"
- Botão azul "Fazer minha aplicação"

### Card 2 — Turma híbrida
Fundo branco liso, sombra suave, sem selo.
- Pitch sobre online ao vivo + presencial nos momentos-chave
- Ficha: online ao vivo + presencial · 10 meses (Ago/26 a Mai/27) · turma reduzida
- 4 benefícios com check azul
- Pré-inscrição: **Sob consulta**, com a nota "Condições enviadas após a aplicação"
- Botão contorno escuro "Fazer minha aplicação"

Abaixo do grid, uma linha centralizada: "Não sabe qual escolher? Faça a aplicação em qualquer uma delas — a modalidade pode ser ajustada na conversa de ingresso."

### Âncoras
O id `inscricao` passa da seção final para a nova seção de modalidades. Os botões "Ver modalidades" (hero) e "Escolher minha modalidade" (CTA final) passam a levar para os cards. O botão do CTA final aponta para `#inscricao`.

## Detalhes técnicos

- Novo arquivo `src/components/ModalitiesSection.tsx`, com o conteúdo dos dois cards declarado num array no topo do arquivo (fácil de editar depois) e duas constantes `APPLY_URL_PRESENCIAL` / `APPLY_URL_HIBRIDA`, ambas com `"#inscricao"` como placeholder até você me passar o link do formulário.
- Section: `id="inscricao"` + `section-white section-block relative overflow-hidden`; halo `hsl(220 86% 56% / 0.07)`.
- Cards: `flex flex-col h-full`, `rounded-2xl`, `p-5 md:p-7`, borda `hsl(var(--border))`, hover de elevação só no desktop (`md:hover:-translate-y-1`). Ficha técnica em `<dl>` com `border-y border-border py-4`. Bloco de preço com `mt-auto`, botão `w-full`.
- Tipografia conforme a escala já usada no site: tag `label-section text-[11px]`, título `text-2xl md:text-[1.75rem]`, pitch `text-[15px] leading-[1.7]`, benefícios `text-[14.5px]`, rótulos da ficha `text-[11px] uppercase`.
- `src/index.css`: nova utility `.btn-ghost-dark` espelhando `.btn-ghost-light` para fundo claro (texto `hsl(var(--foreground))`, borda `hsl(var(--foreground) / 0.18)`, hover com fundo `/0.04`, borda `/0.35` e `translateY(-2px)`).
- `src/components/CtaSection.tsx`: remove `id="inscricao"` e aponta o botão para `#inscricao`.
- `src/pages/Index.tsx`: importa e insere `ModalitiesSection` entre `ModulesSection` e `CtaSection`.
- Somente tokens semânticos; nenhuma cor hardcoded fora dos gradientes/sombras já usados no padrão do site.
