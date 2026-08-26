# Remover a ramificação "caixa com 4 caixinhas" — seção A arquitetura da consciência humana

Arquivo único: `src/components/turma2026/ConsciousnessSection.tsx`. Sem tocar em texto, nos 4 cards principais (01–04) nem em outras rotas.

## O que remover
A "caixa com 4 caixinhas dentro" (grid de `SmallBlock`) e a linha/ramificação que a conecta, em **desktop e mobile**. Mantêm-se apenas os 4 cards principais (Fonte → Inconsciente coletivo → Consciência familiar → Consciência pessoal) com seus conectores originais.

### 1) Desktop — bloco "Ramificação"
Remover integralmente (linhas 154–166), incluindo a linha vertical, a linha horizontal e a caixa com os 4 `SmallBlock`:

```
{/* Ramificação */}
<div className="relative mt-10 pl-10">
  ... SmallBlock ×4 ...
</div>
```

O grid principal de 4 Nodes (linhas 135–152) e seus `Connector` permanecem intactos.

### 2) Mobile — caixa dentro do passo "Fonte"
No `MobileStep index="01" title="Fonte"`, remover o children (o box com os 4 `SmallBlock`), deixando o passo sem conteúdo extra:

- de:
  ```
  <MobileStep index="01" title="Fonte" lead>
    <div className="mt-3 rounded-xl ...">
      <div className="grid grid-cols-4 gap-1.5">
        <SmallBlock /> ... ×4
      </div>
    </div>
  </MobileStep>
  ```
- para:
  ```
  <MobileStep index="01" title="Fonte" lead />
  ```

O trilho vertical (rail) e os demais passos 02–04 permanecem.

### 3) Limpeza
Remover a função `SmallBlock` (linhas 53–55), pois deixará de ser usada após as remoções acima — evita aviso de variável não utilizada.

## Não mexer
Componentes `Node`, `Connector`, `Pill`, `MobileStep`, os Pills "Inconsciente 95% / Consciente 5%", o título da seção, o fundo atmosférico/grade e qualquer texto.

## Validação
- Build OK (`bun run build` via harness).
- Desktop e mobile: 4 cards principais visíveis, sem a caixa ramificada de 4 caixinhas.
