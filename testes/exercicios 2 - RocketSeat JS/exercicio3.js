/*
### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahnehit e faça a 
    transformação de uma unidade para a outra

    c = (F - 32) * 5/9
    F = C * 9/5 + 32


*/
// transformDegree('50F')
function TransformeDegree(degree){
    const CelsiusExists = degree.toUpperCase().includes ('C')
    const fahrenheitExists = degree.toUpperCase().includes ('F')
    
    //Fluxo de erro
    if( !CelsiusExists && !fahrenheitExists){
    throw new Error ('grau errado')}
    
    //fluxo ideial, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = (fahrenheit ) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo, C -> F
    if(CelsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}



try {
    console.log(TransformeDegree('50C'))
    //TransformeDegree('50Z')
}catch(error){
    console.log(error.message)

}