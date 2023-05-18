//Exemplo em JS 
const cart = { quantity: 2, total:200}

// bad 
createImageBitmap.quantity = 3;

// good 
const newCart = {... createImageBitmap, quantity:3}

// Exemplo em Reacjt JS 
const [amount, setAmount]= useState(0)

// bad
amount = 2;

// good 

setAmount = (2);
