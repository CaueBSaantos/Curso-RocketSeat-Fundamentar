//definir 
class parafuso {
    constructor(){
        if(this.constructor === parafuso)
        throw Error ('classe abstrata não pode ser instanciada')
    }
    get tipo(){
        throw Error ('Método "get tipo()" precisa ser implementado')
    }
}

class fenda extends parafuso{
    constructor(){
        super()
    }
    get tipo(){
        return 'fenda'
    }
}

class philips extends parafuso {
    constructor(){
        super()
    }
    get tipo(){
        return 'philips'
    }
}

class allen extends parafuso {
    constructor(){
        super()
    }

    get tipo (){
        return 'allen'
    }
}

class caue extends parafuso {
    constructor(){
        super()
    }
    get tipo(){
        return 'caue'
    }
}

let sei = new caue  
let Philips = new philips
console.log(sei.tipo)
console.log(Philips.tipo)