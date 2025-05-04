require("colors");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://sophiataddeonasc:George20@mongodb.kfnurgf.mongodb.net/blog";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
// app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static(__dirname + "/public"));

let posts; // Coleção de posts
const postsCollection = client.db("blog").collection("posts");

client
  .connect()
  .then(() => {
    const db = client.db("blog");
    posts = db.collection("posts");

    // Rota principal: redireciona para Projects.html
    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/public/Aula_02/Projeto_parte_2/project.html");
    });

    // Rota para exibir o blog com posts dinâmicos
    app.get("/blog", async (req, res) => {
      try {
        const todos = await posts.find().toArray();
        res.render("blogs", { posts: todos }); // usa blogs.ejs
      } catch (err) {
        res.status(500).send("Erro ao buscar posts.");
      }
    });

    // Rota para exibir o formulário de cadastro
    app.get("/cadastrar_post.html", (req, res) => {
      res.sendFile(
        __dirname +
          "/public/Aula_02/Projeto_parte_2/Aula_10/Cadastrar_post.html"
      );
    });

    // Rota para receber e cadastrar novo post
    app.post("/cadastrar", async (req, res) => {
      const { titulo, resumo, conteudo } = req.body;
      if (!titulo || !resumo || !conteudo) {
        return res.status(400).send("Preencha todos os campos.");
      }

      try {
        await posts.insertOne({ titulo, resumo, conteudo });
        // Após cadastrar, redireciona para a página de confirmação
        res.render("post_cadastrado", { titulo });
      } catch (err) {
        res.status(500).send("Erro ao cadastrar post.");
      }
    });

    // Iniciar servidor na porta 80
    http.createServer(app).listen(80, () => {
      console.log("Servidor rodando na porta 80...".rainbow);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });

// app.get("/resetar-posts", async (req, res) => {
//   try {
//     await postsCollection.deleteMany({});
//     res.send("Todos os posts foram apagados.");
//   } catch (erro) {
//     res.status(500).send("Erro ao apagar os posts.");
//   }
// });
