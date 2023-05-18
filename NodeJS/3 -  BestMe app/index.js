const questions = [
    "o que aprendi ?",
    "o que me deixou aborrecido? e o que pode ser feito ?",
    "o que me deixou feliz ?",
    "quantas pessoas ajudei hoje ?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n\n" + questions[index] + [" > "])
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
    
} )


process.on('exit', ()=> {
    console.log(`
    Bacana Cauezera ! 

    Oque voce aprendeu foi :
    ${answers[0]}

    O que te aborreceu e voce precisa melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje:
    ${answers[2]}

    voce ajudou ${answers[3]} pessoas hoje! 

    Volte amanha para mais reflexiçoes !
    `)
})