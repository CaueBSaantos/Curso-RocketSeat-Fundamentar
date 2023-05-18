// Operador Condicional (ternario)


// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ?(então) value :(ou) value2

// Exemplos

// café da manha top 
let pao = true
let queijo = true 

const niceBreakFast = pao || queijo ? 'café top' : 'cafe ruim'
console.log(niceBreakFast)

// Maior de 18 

let age = 17 

const podedirigir = age >= 18 ? 'pode' : "não pode"
console.log(podedirigir)