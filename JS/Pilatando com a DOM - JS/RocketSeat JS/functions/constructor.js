/*
    Function () constructor 

    * expressao new 
    * criar um novo objeto 
    * *this keyword

*/

function Person (name){
    this.name = name
    this.walk =  function(){
        return this.name + " esta andando"
    }
}

const mayk = new Person ("mayk")
const joao = new Person ("joao")

console.log(mayk.walk())
console.log(joao.walk())