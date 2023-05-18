# A cascata (cascding)

A escolha do browser de qual regra aplicar , caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo 

É levado em consideração 3 fatores

1. Origem do estilo 
2. Especificidade
3. Importancia 

### Origem do estilo 

Inline > tag style > tag link 

### Especificidade

É um calculo matematico, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector, combinators e nagation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. inline

# A regra !important

* Cuidado, evite o uso 
* Não é considerado uma boa pratica 
* Quebra o fluxo natural da cascata 