# Combinators

Combinadores, opis eles trabalham para buscar e combinar seletores a fim
de aplicar estilização 

## Descendant combinator 

* Identificado por um espaço entre os seletores
* Busca um elemento dentro do outro

``` css
body article h2 {
    color: red;
}
```

## Child combinator 

* Identificado pelo sinal `>` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai 
* Elementos depois do filho direto serão desconsiderados

``` css
body > ul > li {
    color: red;
}
```

## Adjacent sibling combinator

* Identificado pelo sinal `+` entre dois seletores 
* Seleciona somente o elelento do lado direto que é irmão direto na hierarquia

```css
h1 + p {
    color: red;
}
```

## General sibling combinator

* Identificado pelo sinal `~` entre dois seletores
* Seleciona todos os elementos irmãos

``` css
h1 ~ p {
    color: red;
}
```

## Utilizando combinadores

``` css
ul > li [class="red"]{
    color: red;
}
```

## Dica

* Seletores muito especificos tendem a causar dificuldades no reuso das regras de estilização dos elementos 
* Muitas vezes, um simples uso de classes, torna o trablaho muito mais eficiente.