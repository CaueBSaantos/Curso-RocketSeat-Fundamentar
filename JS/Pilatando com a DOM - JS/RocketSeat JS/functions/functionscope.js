//function scope 

let subject 

function createThink (){
    subject = 'study'
    
    return subject
}

console.log(subject)
console.log(createThink()) // quando função tem que colocar entre '()'
console.log(subject)
