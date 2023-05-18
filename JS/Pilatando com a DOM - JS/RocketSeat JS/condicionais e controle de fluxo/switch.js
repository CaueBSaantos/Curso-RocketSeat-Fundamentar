
// switch

function calculadore (number1, operador, number2){
    let resultado

    switch (operador){
        case '+':
            resultado = number1 + number2
            break
        case '-':
            resultado = number1 - number2
            break
        case '*':
            resultado = number1 * number2
            break
        case '/':
            resultado = number1 / number2

    

    }
    return resultado
}


console.log(calculadore(1, '-', 2))