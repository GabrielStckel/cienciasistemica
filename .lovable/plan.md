# Diagrama da arquitetura da consciência

Refazer a seção "A arquitetura da consciência humana" em `/copiahome` para ficar parecida com o slide enviado: um diagrama de fluxo com blocos azuis conectados, sobre fundo escuro.

## O que muda

- Fundo escuro (mesmo tratamento azul/atmosférico já usado em outras seções), no lugar do fundo claro atual.
- Título em caixa alta à esquerda, com "Inconsciente 95%" logo abaixo, como no slide.
- Quatro blocos azuis em sequência horizontal, ligados por conectores:
  `Fonte → Inconsciente coletivo → Consciência familiar → Consciência pessoal`
  - "Fonte" maior/destacado, como no slide.
  - "Consciência pessoal" traz dentro as sub-legendas: "Emocional / inconsciente individual" e "Mental / Eu-Ego".
- Ramificação abaixo de "Fonte" com quatro blocos azuis menores e o rótulo "Outras pessoas".
- "Consciente 5%" no canto inferior direito, sob o bloco de consciência pessoal.

## Mobile

Mesmo conteúdo, empilhado na vertical: os quatro blocos em coluna com conectores verticais entre eles, a ramificação "Outras pessoas" logo abaixo de "Fonte", e os rótulos 95% / 5% no topo e no fim. Sem scroll horizontal.

## Detalhes técnicos

- Arquivo: `src/components/copiahome/ConsciousnessSection.tsx` (reescrito).
- Diagrama em HTML/CSS puro (grid + divs com bordas/linhas), sem imagem — assim escala e fica nítido.
- Cores via tokens existentes (accent/primary e variações), sem hex fixo.
- A imagem enviada é referência apenas, não será embutida no site.
