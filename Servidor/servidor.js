require("colors");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const path = require("path");

const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://sophiataddeonasc:George20@mongodb.kfnurgf.mongodb.net/blog";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./views");

// Serve arquivos estáticos (CSS, imagens, etc)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));

let posts; // Coleção de posts
const postsCollection = client.db("blog").collection("posts");

// Armazenando os usuários em memória (somente para teste, não persistente)
let usuarios = []; // Array para armazenar os usuários

client
  .connect()
  .then(() => {
    const db = client.db("blog");
    posts = db.collection("posts");

    // Rota principal: redireciona para project.html
    app.get("/", (req, res) => {
      res.sendFile(
        path.join(
          __dirname,
          "public",
          "Aula_02",
          "Projeto_parte_2",
          "project.html"
        )
      );
    });

    // Rota do blog
    app.get("/blog", async (req, res) => {
      try {
        const todos = await posts.find().toArray();
        res.render("blogs", { posts: todos });
      } catch (err) {
        res.status(500).send("Erro ao buscar posts.");
      }
    });

    // Página de cadastro de post
    app.get("/cadastrar_post.html", (req, res) => {
      res.sendFile(
        path.join(
          __dirname,
          "public",
          "Aula_02",
          "Projeto_parte_2",
          "Aula_10",
          "Cadastrar_post.html"
        )
      );
    });

    // POST: cadastrar novo post
    app.post("/cadastrar", async (req, res) => {
      const { titulo, resumo, conteudo } = req.body;
      if (!titulo || !resumo || !conteudo) {
        return res.status(400).send("Preencha todos os campos.");
      }

      try {
        await posts.insertOne({ titulo, resumo, conteudo });
        res.render("post_cadastrado", { titulo });
      } catch (err) {
        res.status(500).send("Erro ao cadastrar post.");
      }
    });

    // Página de login
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

    // Página de cadastro de usuário
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

    // POST: cadastrar usuário (exemplo simples)
    app.post("/cadastro", (req, res) => {
      const { nome, login, senha, nascimento } = req.body;

      // Verifica se o login já está em uso
      if (usuarios.some((user) => user.login === login)) {
        return res.render("resposta", {
          status: "Erro: Usuário já cadastrado.",
          nome: null,
          login: null,
          nasc: null,
        });
      }

      // Adiciona o novo usuário ao array
      usuarios.push({ nome, login, senha, nascimento });

      // Exibe a mensagem de sucesso
      res.render("resposta", {
        status: "Usuário cadastrado com sucesso!",
        nome: nome,
        login: login,
        nasc: nascimento,
      });
    });

    // POST: autenticar login
    app.post("/login", (req, res) => {
      const { login, senha } = req.body;

      // Verifica se o login e a senha estão corretos
      const usuario = usuarios.find(
        (user) => user.login === login && user.senha === senha
      );

      if (usuario) {
        // Se o login for bem-sucedido, renderiza a página com as informações do usuário
        res.render("resposta", {
          status: "Login realizado com sucesso!",
          nome: usuario.nome,
          login: usuario.login,
          nasc: usuario.nascimento,
        });
      } else {
        // Se o login falhar, exibe a mensagem de erro
        res.render("resposta", {
          status: "Usuário ou senha inválidos.",
          nome: null,
          login: null,
          nasc: null,
        });
      }
    });

    // Iniciar servidor
    http.createServer(app).listen(80, () => {
      console.log("Servidor rodando na porta 80...".rainbow);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });
