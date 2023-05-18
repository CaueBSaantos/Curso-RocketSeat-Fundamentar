const {EventEmitter} = require('events')

const ev = new EventEmitter()

ev.once('teste',(mensagem) =>[
    console.log('fala memo', mensagem)

])

ev.emit('teste', "juao")