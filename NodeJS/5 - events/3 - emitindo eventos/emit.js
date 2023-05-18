//Emitindo evento

const {EventEmitter } = require('events')

const ev = new EventEmitter

ev.on('SaySomething', (mensagem) => [
    console.log('fala memo', mensagem)
])

ev.emit('SaySomething', "mayk")
ev.emit('SaySomething', "carlos")