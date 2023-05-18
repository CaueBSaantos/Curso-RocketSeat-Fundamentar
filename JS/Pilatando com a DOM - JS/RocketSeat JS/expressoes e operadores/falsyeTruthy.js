// Type conversion (typecasting) vs Type coersion

console.log (Number('9') + 5)

/*
    Falsy 
    Quando um valor é considerado false em contextos onde 
    um booleano é obrigatorio (condicionais e loops)

    false 
    0 
    -0
    ""
    null
    undefined
    NaN
*/
console.log( "" ? 'verdade' : 'mentira')

/*
 Quando um valor é considerado true em contextos onde um 
 booleano é obrigatorio ( condicionais e loops )

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    infinity
    -infinity

*/
console.log( "false" ? 'verdade' : 'mentira')