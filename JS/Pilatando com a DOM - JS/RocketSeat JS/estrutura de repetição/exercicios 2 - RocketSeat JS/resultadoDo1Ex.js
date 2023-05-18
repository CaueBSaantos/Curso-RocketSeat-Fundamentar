



function getscore(score){

let scoreA = score >= 90
let scoreB = score >=80 && score <= 89
let scoreC = score >=70 && score <= 79
let scoreD = score >=60 && score <= 69
let scoreF = score < 60

let scorefinal;

if(scoreA){
    scorefinal = "A"
} else if (scoreB){
    scorefinal = "B"
} else if (scoreC){
    scorefinal = "C"
} else if (scoreD){
    scorefinal = "D"
} else if (scoreF){
    scorefinal = "F"
} else {
    "nota invalida"
}
 return scorefinal
}


console.log(getscore(40))
console.log(getscore(34))
console.log(getscore(34))
console.log(getscore(80))
console.log(getscore(80))
console.log(getscore(80))
console.log(getscore(80))