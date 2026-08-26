# Ajustar as caixas "95%" e "5%" na seção "A arquitetura da consciência humana"

Arquivo único: `src/components/turma2026/ConsciousnessSection.tsx`
Rotas afetadas: apenas `/turma2026`.

## Problema
No mobile (393px) as duas `Pill` ("Inconsciente 95%" e "Consciente 5%") estão num `grid-cols-2`. O valor "95%" é renderizado em `text-lg` e transborda para fora da pílula, ficando desalinhado e "fora da caixa".

## Mudança
Ajustar o componente `Pill` e o container do header para que as duas caixas tenham o mesmo tamanho e o conteúdo caiba dentro, sem mudar textos nem o layout desktop.

1. **Container das pills** (linha 124): trocar
   `mt-5 grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3`
   por
   `mt-5 grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3 items-stretch`
   (mantém 2 colunas no mobile, alinha altura).

2. **Pill** (linhas 54-61):
   - Trocar `inline-flex items-baseline gap-2 ... px-4 py-1.5` por
     `inline-flex items-baseline gap-1.5 ... px-3 py-1.5 md:px-4` (padding menor no mobile).
   - Label: `text-[11px] md:text-xs` → `text-[10px] md:text-xs` e
     `tracking-[0.2em]` → `tracking-[0.15em] md:tracking-[0.2em]`.
   - Value: `text-lg md:text-xl` → `text-base md:text-xl`.
   - Adicionar `min-w-0` e `justify-center` na pílula para evitar overflow e centralizar o conteúdo em cada célula do grid.

Resultado: as duas caixas ficam com largura/altura iguais e "95%" / "5%" cabem dentro, no mobile e no desktop.

## Validação
- Build OK.
- Screenshot mobile 393px mostrando as duas pills alinhadas e com os valores dentro das caixas.
- Desktop pixel-idêntico (todos os valores `md:` preservados).
