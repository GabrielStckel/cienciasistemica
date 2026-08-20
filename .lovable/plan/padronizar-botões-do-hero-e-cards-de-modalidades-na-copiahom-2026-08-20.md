Padronizar botões do hero e cards de modalidades na /copiahome

Objetivo

Deixar os botões do hero e os cards da seção "Escolha como você quer viver a formação" visualmente iguais entre si, usando o estilo azul destacado como referência.

Escopo

- As alterações serão aplicadas somente em `src/components/copiahome/HeroSection.tsx` e `src/components/copiahome/ModalitiesSection.tsx`.
- Nenhuma outra página ou componente será modificado.

Alterações planejadas

1. Hero da /copiahome (`src/components/copiahome/HeroSection.tsx`)
   - Tornar os dois botões — "Presencial" e "Híbrida" — idênticos em estilo e tamanho.
   - Ambos devem usar a classe `btn-primary` (fundo azul, texto branco, cantos arredondados, sombra azul).
   - Remover o estilo fantasma (`btn-ghost-light`) do segundo botão.
   - Garantir que ambos tenham a mesma largura/padding para não ficarem desiguais.

2. Seção "Escolha como você quer viver a formação" (`src/components/copiahome/ModalitiesSection.tsx`)
   - Aplicar o mesmo estilo de card em ambas as modalidades:
     - Usar `card-elevated-accent` em ambos os cards (borda azul de destaque e sombra mais acentuada).
   - Tornar os botões de aplicação dos dois cards iguais:
     - Ambos devem usar `btn-primary` (azul) com o texto atual do card ("Fazer minha aplicação" / "Escolher minha modalidade").
   - Remover a lógica condicional que alterna entre `card-elevated-accent`/`card-plain` e `btn-primary`/`btn-ghost-dark` com base no `featured`.

Resultado esperado

- Hero: dois botões azuis, mesmo tamanho, lado a lado, ambos levando à seção de modalidades.
- Modalidades: dois cards com a mesma borda azul e sombra, e dois botões azuis na parte inferior.
- A experiência mobile e desktop permanece responsiva e consistente com o restante da página.
