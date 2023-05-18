// eventos 
// a outra forma (addEventListener) é mais recomendado.

const h1 = document.querySelector('h1')

h1.onclick = print

function print (){
    console.log('foi')
}