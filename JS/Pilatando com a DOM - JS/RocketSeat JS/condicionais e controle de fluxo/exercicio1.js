/* ### Transformar notas escolares 

Crie um algoritmo que transforme as notas do sistema numerico para sistema de notas
em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 -   B
* entre 70 - 79 -   C
* entre 60 - 69 -   D
* menos que 60 -    f

*/

let nota = 80

let otima = nota >= 90;
let boa = nota >= 80 && nota <= 89;
let media = nota >= 70 && nota <= 79;
let baixomedia = nota >= 60 && nota <= 69;
let notabaixa = nota <= 60;


if (otima){
    console.log('A')
} else if (boa){
    console.log('B')
} else if (media){
    console.log('C')
} else if (baixomedia){
    console.log ('D')
} else if (notabaixa) {
    console.log('F')
} else {
    console.log('não passou')
}

console.log(nota)
