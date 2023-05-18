const sum = function (number1, number2){
  total = number1 + number2
  return total

}

let number1 = 11
let number2 = 12 

console.log(`o primeiro numero é ${number1}`)
console.log(`o segundo numero é ${number2}`)
console.log(`a soma dos numeros são ${sum(number1,number2)}`)


const Suco = function (suco1, suco2){
    return suco1 + suco2
}

let copo = Suco ('laranja', ' maçã')

console.log(copo)


const estante = function (livro1, livro2, livro3){
    return livro1 + livro2 + livro3

}

let biblioteca  = estante ('HP', ' RDT', ' AD')

console.log(biblioteca)