const express = require("express");
const app = express();

app.get("/", function(req, res){
 res.send("<html><body><h1>teste scrapping node js</h1><table><tr class='coluna' id=coluna'><td class='linha'>linha um</td></tr><tr><td class='linha'>linha dois</td></tr><tr><td class='linha'>linha tres</td></tr><tr><td>linha quatro</td></tr><tr><td>linha cinco</td></tr></table></body></html>");

 }
);

app.get("/sobre", function(req, res){
 res.send("desenvolvimento e programação");

 }
);

app.get("/autor", function(req, res){
 res.send("rodrigo");

 }
);

app.get('/ola/:nome/:cargo', function(req, res){
  res.send("nome: "+req.params.nome+"<br> cargo com demon: "+req.params.cargo);
 });


app.listen(5000, function(){

	console.log("servidor HTTP rodando na porta 5000")
});