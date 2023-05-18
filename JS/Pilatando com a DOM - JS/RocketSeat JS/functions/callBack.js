const opa = () => { console.log('nome')}
   

opa ( (seila1, seila2) => {
    let total = seila1 + seila2
    return total
} )

console.log( opa)