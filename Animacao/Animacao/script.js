class Retangulo {
  constructor(
    cor_linha,
    cor_preenchimento,
    espessura_linha,
    x,
    y,
    largura,
    altura
  ) {
    this.cor_linha = cor_linha;
    this.cor_preenchimento = cor_preenchimento;
    this.espessura_linha = espessura_linha;
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
  }
  desenhe(contexto) {
    contexto.beginPath();
    contexto.lineWidth = this.espessura_linha;
    contexto.fillStyle = this.cor_preenchimento;
    contexto.strokeStyle = this.cor_linha;
    contexto.strokeRect(this.x, this.y, this.largura, this.altura);
    contexto.fillRect(this.x, this.y, this.largura, this.altura);
    contexto.closePath();
  }
}

let canvas1 = document.getElementById("canva1");
let ctx1 = canvas1.getContext("2d");

let retangulo1 = new Retangulo("Blue", "Red", 5, 0, 0, 20, 20);
let retangulo2 = new Retangulo("Blue", "Green", 5, 200, 200, 20, 20);
let retangulo3 = new Retangulo("blue", "yellow", 5, 200, 200, 20, 20);

// retangulo1.x = 100;
// retangulo1.desenhe(ctx1)

function animacao() {
  if (retangulo1.x == 400) {
    retangulo1.x = 0;
  }
  retangulo1.x += 1;
  ctx1.clearRect(0, 0, 400, 400);
  retangulo3.desenhe(ctx1);

  requestAnimationFrame(animacao);
}

animacao(ctx1);

document.addEventListener("mousemove", function (evento) {
  let rect = canvas1.getBoundingClientRect();
  let x_mouse = evento.clientX - rect.left;
  let y_mouse = evento.clientY - rect.top;
  console.log(x_mouse, y_mouse);

  if (x_mouse < 380 && x_mouse > 0) {
    retangulo3.x = x_mouse;
  } else if (x_mouse > 380) {
    retangulo3.x = 380;
  } else {
    retangulo3.x = 0;
  }

  if (y_mouse < 380 && y_mouse > 0) {
    retangulo3.y = y_mouse;
  } else if (y_mouse > 380) {
    retangulo3.y = 380;
  } else {
    retangulo3.y = 0;
  }
});
