// if...else 

let temperature = 37.4
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37


if(highTemperature){
    console.log('febre')
} else if (mediumTemperature){
    console.log('normal')
} else {
    console.log('hipotermia')
}

