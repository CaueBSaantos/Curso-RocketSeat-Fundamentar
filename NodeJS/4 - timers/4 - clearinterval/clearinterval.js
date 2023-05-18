const seg = 1000

const tempo = () => console.log('checado!')

let clear = setInterval(tempo, seg)



setTimeout( () =>clearInterval(clear), 4000 )