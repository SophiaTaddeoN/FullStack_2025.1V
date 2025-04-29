require("colors");
const http = require("http");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const users = []; // Banco de dados em memória

// Configurações
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Rotas
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Aula_02", "Projeto_parte_2", "index.html")
  );
});

app.get("/login", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Aula_02",
      "Projeto_parte_2",
      "Aula_09",
      "login.html"
    )
  );
});

app.get("/cadastro", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "Aula_02",
      "Projeto_parte_2",
      "Aula_09",
      "cadastro.html"
    )
  );
});

app.post("/cadastro", (req, res) => {
  const { nome, login, senha, nascimento } = req.body;
  users.push({ nome, login, senha, nascimento });

  res.render("resposta", {
    nome,
    login,
    nasc: nascimento,
    status: "Cadastro realizado com sucesso!",
  });
});

app.post("/login", (req, res) => {
  const { login, senha } = req.body;
  const user = users.find((u) => u.login === login && u.senha === senha);

  if (user) {
    res.render("resposta", {
      nome: user.nome,
      login: user.login,
      nasc: user.nascimento,
      status: "Login realizado com sucesso!",
    });
  } else {
    res.render("resposta", {
      nome: "",
      login: "",
      nasc: "",
      status: "Login falhou! Verifique usuário e senha.",
    });
  }
});

// Iniciar servidor
const PORT = 80;
http.createServer(app).listen(PORT, () => {
  console.log(`Servidor rodando: http://localhost`.rainbow);
});
