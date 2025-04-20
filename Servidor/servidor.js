require("colors");
const http = require("http");
const express = require("express");
const path = require("path");

const app = express();

// Serve arquivos estáticos da pasta 'public' e subpastas
app.use(express.static(path.join(__dirname, "public")));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Aula_02", "Projeto_parte_2", "index.html")
  );
});

const server = http.createServer(app);
const PORT = 80;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`.rainbow);
});
