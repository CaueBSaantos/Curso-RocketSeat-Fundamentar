class veiculo{
    rodas = 6;
    mover(direcao){}
    virar(direcao){}
}

class moto extends veiculo  {
    constructor(){
        super()
        this.rodas = 2
    }
}

class caminhao extends veiculo{
    constructor(){
        super()
        this.rodas = 6
    }
}

let bike = new moto 
let busao = new caminhao

console.log(busao)