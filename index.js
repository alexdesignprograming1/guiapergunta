const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

//Database
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!")
  })
  .catch(msgErro => {
    console.log(msgErro)
  }) 

//Estou para Express usar o EJS como View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect("/")
  });

})

app.listen(3333, () => {
  console.log("servido rodando com sucesso!");
})