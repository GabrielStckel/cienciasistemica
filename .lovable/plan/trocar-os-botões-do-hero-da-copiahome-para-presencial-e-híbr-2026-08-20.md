Trocar os botões do hero da /copiahome para "Presencial" e "Híbrida"

Objetivo

Substituir os dois botões atuais do hero da página /copiahome — "Conhecer o curso" e "Ver modalidades" — por botões diretos de modalidade: "Presencial" e "Híbrida". Ambos devem rolar a página até a seção de modalidades (`#inscricao`), cujo título é "Escolha como você quer viver a formação".

Escopo

- A alteração será aplicada somente em `src/components/copiahome/HeroSection.tsx`.
- Nenhuma página adicional será modificada.
- O conteúdo e o estilo das demais seções permanecem inalterados.

Alterações planejadas

1. Remover os links atuais do hero:
   - "Conhecer o curso" (link para `#sobre`)
   - "Ver modalidades" (link para `#inscricao`)

2. Adicionar dois novos botões lado a lado:
   - "Presencial" → `href="#inscricao"`
   - "Híbrida" → `href="#inscricao"`

3. Manter a aparência e comportamento existentes:
   - Layout responsivo: empilhados no mobile, lado a lado no desktop.
   - Mesmas classes de botão primário e secundário fantasma (`btn-primary` e `btn-ghost-light`).
   - Manter o efeito de sombra azul no botão principal.
   - Manter a seta no hover do botão principal, se for o botão "Presencial".

4. Adicionar rastreamento de evento simples (GA4) em cada botão:
   - `hero_modality_click` com parâmetro `modality: "presencial"` ou `modality: "hibrida"`, usando a função `track` já existente em `src/lib/analytics.ts`.

Resultado esperado

- O usuário chega ao hero da /copiahome e vê apenas dois botões claros: "Presencial" e "Híbrida".
- Qualquer um dos botões leva diretamente à seção de escolha da modalidade.
- A experiência mobile e desktop permanece consistente com o restante da página.
