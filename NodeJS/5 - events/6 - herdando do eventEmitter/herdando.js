const { inherits } = require ('util')
const { EventEmitter } = require('events')

function character (name){
    this.name = name
}

inherits(character, EventEmitter)

const champolim = new character('chapolim');

champolim.on('help', () => console.log(` Eu! o ${champolim.name} colorado!`))

console.log('Oh! e agora, quem poderá me defender ?')
champolim.emit('help')