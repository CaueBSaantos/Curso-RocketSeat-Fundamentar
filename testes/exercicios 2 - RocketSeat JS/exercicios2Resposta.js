/*
 ### Sistema de gastos familiar
 Crie um objeto que possuira 2 propriedades, ambas do tipo array:

 * receitas: []
 * despesas: []
 
 Agora, crie uma função que irá calcular o total de receitas e despesas
 e irá mostrar uma mensagem se a familia esta com saldo positivo ou negativo,
 seguido do valor do saldo

*/

let familia = {
    receitas: [25,32,250.43,360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array){
    let total = 0;
    for( let value of array){
        total += value
    }
    
    
    return total

}

function calculateBalance(){
    const calculateReceitas = sum(familia.receitas)
    const calculateDespesas = sum(familia.despesas)

    const total = calculateReceitas - calculateDespesas
    
    const TudoCerto = total >= 0

    let textbalance = "Negativo"

    if(TudoCerto){
        textbalance = "positivo"
    }
    console.log(`seu saldo é ${textbalance}: ${total.toFixed(2)}R$`)

}

calculateBalance()




