# Melhorar o design do hero no mobile — `/copiahome`

Ajustar o `src/components/copiahome/HeroSection.tsx` para que o hero da página `/copiahome` fique mais organizado em telas pequenas, reduzindo a caixa de destaque do Jonas Peres e aumentando o respiro entre os elementos.

## O que muda

### Espaçamento geral do hero
- Reduzir padding vertical do container no mobile (`py-14` ou similar) para evitar que o card empurre a tela para baixo.
- Aumentar `gap` entre headline, subtítulo, botões e card para que os elementos não fiquem colados.

### Caixa de perfil (Jonas Peres)
- Reduzir padding interno do card no mobile (`p-4` em vez de `p-5`).
- Diminuir a foto de `w-16 h-16` para algo mais proporcional (`w-14 h-14`).
- Manter os dados de início/vagas/status, mas com fontes ligeiramente menores e mais espaçamento interno entre os blocos.
- Ajustar o divisor entre a foto e os dados para não gerar sensação de "caixa grande vazia".

### Botões
- Manter os botões empilhados no mobile, mas garantir altura/padding confortável e espaçamento consistente.
- Garantir que a área de toque respeite acessibilidade mínima (44px).

### Tipografia mobile
- Revisar tamanhos do título e subtítulo para que o card não ocupe mais destaque do que a headline.
- Manter contraste e hierarquia visual.

## Detalhes técnicos
- Arquivo: `src/components/HeroSection.tsx`.
- Alterações apenas de layout mobile, mantendo o desktop como está.
- Nenhum texto de conteúdo alterado.
- Usar apenas tokens semânticos do design system (sem cores hardcoded).
