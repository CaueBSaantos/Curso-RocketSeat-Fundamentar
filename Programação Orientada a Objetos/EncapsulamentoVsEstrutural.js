// Orientada a Objeto ( construindo class)

class Poli {
    constructor(altura,largura){
        this.altura = altura
        this.largura = largura
    }

    get Area(){
        return this.#Calcular()
    }

    #Calcular(){
        return this.altura * this.largura
    }
}

// criar Objeto 
let poly = new Poli(23,23)

console.log(poly.Area)