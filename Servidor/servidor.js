require("colors");
var http = require("http");
var express = require("express");
var path = require("path");

var app = express();


app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Aula_02", "Projeto_parte_2", "index.html")
  );
});

var server = http.createServer(app);
var PORT = 80;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`.rainbow);
});