const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    
    const items = [
        {
        title: "D",
        mensagem: "esenvolver aplicações/serviços"
        },
        {
        title: "E",
        mensagem: "EJS usa JS para renderizar HTML"
        },
        {
        title: "M",
        mensagem: "uito facil de usar"
        },
        {
        title: "A",
        mensagem: "rmozinho"
        },
        {
        title: "I",
        mensagem: "Install ejs"
        },
        {
        title: "S",
        mensagem: "inxase simples"
        },
    ];

 const subtitulo = " uma linguagem  para criação de pagina HTML"

res.render("pages/index", {
    qualitys: items,
    subtitulo: subtitulo,
});
});

app.get("/Sobre", function(req,res){
    res.render("pages/about")
});

app.listen(8080);

console.log("foi");