# Kayouts e evolução 

Layout tem a ver com a maneira que os elementos estão distribuidos na tela 

## Normal flow

Ou Flow Layout é a maneira que os elemetnos `block` e `inline` ficam na pagina

```html
<p> texto block com <strong>inline</strong>dentro<p>
```

## Tables 

É a maneira de tabelas onde a tag `table` recebe um display `table`
fazendo com que os elementos internos como `td` e `tr` possam
ser usados para montar uma tabela 

``` html
<table>
    <tr>
    <td>Hora</td>
    <td>12:00</td>
    </tr>
    
    <tr>
    <td>Hora</td>
    <td>22:22</td>
    </tr>
</table>

```

## Tabless

Uso das propriedades `Float`, `clear` para que os elementos possam mudar de posição na tela.

``` html
<div style="float: left">
    esquerda
</div>

<div style="float: right">
    direita
</div>

<div style="clear:both">
    normal
</div>
```

## Flexbox 

A caixa se torna flex, fazendo com que os elemetnos internos possam receber melhor:

- Alinhamento
- Ordenação
- Tamanhos flexiveis


