## Tipos

* background-color (para caixas)
*color (para textos)
*border-color (para-caixa)
*outros...

## Valores

Podemos definir os valores por 

* palavra-chave (blue, transpartent)
* hexadecimal (#089)
*funçoes: rgb, rgba, hsl, hsla 

``css
element{
    /*Keywords values*/
    color: currentcolor;

    /* <named-color> values */
    color: red;
    color: orange;
    color: tan;
    colocr: rebeccapurple
 /* <hex-color> values 0-F */
 color: #090; /* red green blue*/
 color: #009900;
 color: #090a;
 color: #009900aa;

 /*<rgb()> values*/
 color: rgb(43,12, 64, 0.6); /*0-255*/
 color: rgba(43,12, 64, 0.6);
 color: rgb(34 12 64 / 0.6);
 color: rgba(34 12 64 / 0.6);
 color: rgb(34 12 64 / 60%);
 color: rgba(34 12 64 / 30%)
}

/* <hsl()> values */

color: hsl(30, 100%, 50%, 0.6); /* Hue - Saturation - lumiance*/
color: hsla(30, 100%, 50%, 0.6)
color: hsl(30 100% 50% / 0.6)
color: hsla(30 100% 50% / 0.6)
color: hsl(30 100% 50% / 60%)

/* Global values*/

color: inherit;
color: initial;
https://convertacolor.com/
