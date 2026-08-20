Ajustar posicionamento do hero mobile da /copiahome

## Objetivo
Reposicionar dois elementos no hero da página /copiahome somente no mobile:
1. Subir a faixa de metadados "FORMAÇÃO 2026 · 10 MÓDULOS · 10 MESES".
2. Descer o card do Jonas Peres.

## Alterações técnicas
- Arquivo: `src/components/copiahome/HeroSection.tsx`.
- Reduzir o padding-top do container interno no mobile (`py-10` → `pt-6` ou similar) para aproximar os metadados do topo.
- Aumentar o margin-bottom entre os botões e o card do Jonas no mobile (`mb-10` → `mb-14`/`mb-16`) para empurrar o card para baixo.
- Preservar o layout desktop intacto (valores com `md:` permanecem os mesmos).

## Validação
- Rodar `bun run build` após a edição.
- Verificar visualmente no preview mobile.
