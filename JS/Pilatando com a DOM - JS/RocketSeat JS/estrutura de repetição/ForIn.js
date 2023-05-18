// for... in 

let person = {
    name: 'joao',
    age: 30,
    weight: 90.3
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}