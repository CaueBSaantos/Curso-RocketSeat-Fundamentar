# Seletores 

conecta um elemento HTML com o CSS a fim de alterar o elemento. 

## Tipos 

* Element selectore
    - Todos os elementos HTML
* ID Selector
    - Um elemento que tenha um atributo `id`.
    - Cada id deverá ser unico. ~ # usa no ID
* Class Selector
    - Os elementos que contenha um atributo `class`.
    - Podemos ter uma ou mais classes. ~ . ponto usa no class
* Attribute selector
    - Um elemento que tenha um atributo espefico.[]. usado em atributo especifico
* Pseudo-class selector
    - Elementos que tem estado especifico. explo: No CSS. p: hover{color: red}

## Multiplos

Você poderá selecionar multiplos elementos e aplicar alguma regra css para todos eles.

Usamos uma separação por virgula para isso 

```  css
h1,p,a {
    color: red;
}
```