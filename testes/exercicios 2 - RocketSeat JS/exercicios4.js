/*
    Buscando e contando dados em Arrays 

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        * Contar o numero de categorias e o numero de livros em cada categoria 
        * contar o numero de autores
        * Mostrar livros do autor Auguto Cury 
        * Transformar  a função aceima em uma função que irá receber o nome do autor 
        e devolver os livros desse autor 

*/

const booksByCategory = [
    {
        category: "book on the table",
        books:[
            {
                title: "manifesto comunista",
                author: "TioKal",
            },
            {
                title: "hari poti",
                author: "homofobica",
            },
            {
                title: "Roda do tempo",
                author: "TioKal",
            },
        ],
    },
    {
        category: "livros Dc vs Marvel",
        books: [
            {
                title: "curinga",
                author: "DC",
            },
            {
                title: "viuva casada",
                author: "TioKal",
            },
            {
                title: "superman comunista",
                author: "delirios",
            },
        ],
    },
]

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory){
    console.log('total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for ( let category of booksByCategory){
        for ( let book of category.books){
            if ( authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

console.log("total de autores: ", authors.length)
}

function countTioKal(Kal){
    let books = [];

    for ( let category of booksByCategory){
        for ( let book of category.books){
            if(book.author === Kal ){
                books.push(book.title)
            }
        }
    }
    console.log(`livros do autor ${Kal}: ${books.join(", ")} `)
}

countTioKal('TioKal');



countAuthors();
