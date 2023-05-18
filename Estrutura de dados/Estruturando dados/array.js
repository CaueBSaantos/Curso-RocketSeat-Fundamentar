const nomes = ['joao','carlos','juca','julia']


// a indexação (index) começa pelo numero 0
console.log(nomes[0]) //joao
console.log(nomes[3]) // julia

// acessar o tamanho do array 
console.log(nomes.length) // 4 

// interravel. 
for( nome of nomes){
    console.log(nome)
}


//adicionar elementos 
nomes.push('tia')
console.log(nomes)

// encontrar elemetos 
 const joao = nomes.find(nome => nome === 'tia')
 console.log ('tia')

 // deletar elemento 

 nomes.splice(2,3)
 console.log(nomes)