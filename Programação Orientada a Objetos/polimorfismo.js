class atleta {
    peso;
    categoria;

    constructor(peso){
        this.peso
    }
    definirCategoria(){
        if (this.peso >= 50){
            this.categora = 'infantil'
        }
        else if (this.peso <= 65){
            this.categoria = 'juvenil '
        }
        else { this.categoria = 'adulto'}
    }
}

class lutador extends atleta{
    constructor(peso){
        super(peso)
    }
    definirCategoria(){
        if(this.peso){
            this.categoria = 'pluma'
        }
        else if (this.peso){
            this.categoria = 'leve'
        }
        else if(this.peso){
            this.categoria = 'meio-leve'
        }
        else{this.categoria = 'pesado'}
    }
}

let participante = new lutador ()
console.log(participante)