const timeOut = 3000

const time = () => console.log('done')

let tempo = setTimeout(time,timeOut)
console.log('mostrar')
clearTimeout(tempo)