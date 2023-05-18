// throw (joga a informação para fora da função)
// try (tenta fazer a função)
//catch (pega o erro da função)


function SayMyName (nome = ''){
    if (nome === ''){
        throw 'Nome Obrigatorio'

    }
        console.log('depois do erro')
}

try {
    SayMyName()
} catch (e){
    console.log(e)
}

console.log('após a função de erro')