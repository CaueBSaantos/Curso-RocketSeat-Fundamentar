// modelando 
class Queue {
    constructor(){
        this.data = []

    }
 enqueue(item){
    this.data.push(item)
    console.log(`${item} chegou a fila!`)
 }
 dequeue(){
    const item = this.data.shift()
    console.log(`${item} saiu da fila!`)
 }
}

//utilizando 
const fila = new Queue

fila.enqueue('joao')
fila.enqueue('roberta')
fila.dequeue()