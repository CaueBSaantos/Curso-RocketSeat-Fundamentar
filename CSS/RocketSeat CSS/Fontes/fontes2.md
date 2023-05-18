## Atribuindo mais estilo a fontes

## font-variant 

*variasçoes na apresentação fonte

css
p{
    font-variant: small-caps;
}

## font-stretch

* alargamento ou encolhimento da fonte

*aceita palavra-chaves como: expanded, condensed, normal
*aceita porcentagens de 50% a 200%

css

p{
    font-stretch: expanded
}

## letter-spacing 

*Espaços entre caracteres 

p{
    letter-spancing: 4px;
}

## word-spacing 

*Espaços entre caracteres 

p{
    word-spancing: 4px
}

## line-height 

*Espaços entre linhas
*pode ser com unidade ou sem unidades de medida
*comuns: 1.5 ou 2

p{
    line-height: 1.6;
}

## text-transform 

* transformação do texto 

css
p{
    texte-transform: uppercase; :/* captalize | lowercase Z none */
}

## text-decoration 

* Aparencia decorativa de um texto 
*line: underline | overline | line-trough 
        *podemos aplicar mais de 1 valor 
* style: wavy | dotted | double | dashed | solid
* color: `<color>` values 

css
p{
    texte-decoration: underline; /* shorthand*/
}

## text-align 

*alinhamento de um texto 

css
p{
    text-align: center; /* left | right | center | justify */
}

## text-shadow

*sombra aplicada a um texto 
* permite multiplos valores 

css
p{
    text-shadow:  1px 1px 1px red,
     2px 2px 1px green; /* offset-x| offset-y | blue-radius| color */
}

## shorthand

* font-style, font-variant, font-weight, font-stretch, font-size, line-height, e font-family

p{
    /* -style, -variant, -weight, -stretch, -size, line-height, e -family. */
    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif
}