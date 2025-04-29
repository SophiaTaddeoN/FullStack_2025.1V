// app.post("/cadastro", function (requisicao, resposta) {
//   resposta.render("resposta_cadastro", {
//     nome: requisicao.body.nome,
//     sobrenome: requisicao.body.sobrenome,
//     nascimento: new Date(requisicao.body.nascimento), // Converte para Date
//     civil: requisicao.body.civil,
//   });
// });

require("colors");
const http = require("http");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// Configurações do Express
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Rotas
app.get("/", (req, res) => {
  // Redireciona para a página de projetos como especificado
  res.sendFile(
    path.join(__dirname, "public", "Aula_02", "Projeto_parte_2", "project.html")
  );
});

// Rota para a página de login
app.get("/login", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Aula_02", "Projeto_parte_2", "Login.html")
  );
});

// Rota para exibir o formulário de cadastro (GET)
app.get("/cadastra", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Aula_02",
      "Projeto_parte_2",
      "Cadastro.html"
    )
  );
});

// Rota para processar o formulário de cadastro (POST)
app.post("/cadastra", (req, res) => {
  const { nome, login, senha, nascimento } = req.body;

  console.log("Dados recebidos:", { nome, login, nascimento });

  // Renderiza a página de resposta com EJS
  res.render("resposta", {
    status: "Cadastro realizado com sucesso!",
    nome: nome,
    login: login,
  });
});

// Rota para processar o login (POST)
app.post("/login", (req, res) => {
  const { login, senha } = req.body;

  console.log("Tentativa de login:", { login });

  // Aqui você normalmente verificaria no banco de dados
  // Vamos considerar que o login foi bem-sucedido para o exemplo
  res.render("resposta", {
    status: "Login realizado com sucesso!",
    login: login,
  });
});

// Iniciar servidor
const PORT = 80;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`.rainbow);
});


var dbo = client.db("exemplo_bd");
var customers = dbo.createCollection("customers",);

app.post("/cadastrar_usuario", function(req, resp) {
  var data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

  usuarios.insertOne(data, function (err) {
    console.log(err)
    if (err) {
      resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
    }else {
      resp.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})        
    };
  });
 
});
