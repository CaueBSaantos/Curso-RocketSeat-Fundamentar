// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde 
//  cada texto é uma posição do array.Depois disso, transforme o array 
// em texto e onde eram espaços coleque _

let frase = "sei la qual é dessa bagaça"
let array = frase.split(" ")
let frasecomUnderscore = array.join("_")
console.log(frasecomUnderscore.toLocaleUpperCase())
