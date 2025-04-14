let canvas1 = document.getElementById('canva1');
let ctx1 = canvas1.getContext('2d');

// EX AULA
let kOKUJOUDAI = {
  x: 0,
  y: 100,
  raio: 50,
  img: new Image(),
  desenha: function() {
    
    if (this.img.complete && this.img.naturalWidth > 0) {
      ctx1.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
    }
  }
}


kOKUJOUDAI.img.src = "IMAGEM/kOKUJOUDAI.png"; 

function desenhar() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
  kOKUJOUDAI.desenha(); 
  requestAnimationFrame(desenhar);
}


desenhar();

document.addEventListener("mousemove", function(evento) {
  let rect = canvas1.getBoundingClientRect();
  let x_mouse = evento.clientX - rect.left;
  let y_mouse = evento.clientY - rect.top;

  if (x_mouse < canvas1.width - 2*kOKUJOUDAI.raio && x_mouse > 0) {
    kOKUJOUDAI.x = x_mouse;
  } else if (x_mouse >= canvas1.width - 2*kOKUJOUDAI.raio) {
    kOKUJOUDAI.x = canvas1.width - 2*kOKUJOUDAI.raio;
  } else {
    kOKUJOUDAI.x = 0;
  }

  if (y_mouse < canvas1.height - 2*kOKUJOUDAI.raio && y_mouse > 0) {
    kOKUJOUDAI.y = y_mouse;
  } else if (y_mouse >= canvas1.height - 2*kOKUJOUDAI.raio) {
    kOKUJOUDAI.y = canvas1.height - 2*kOKUJOUDAI.raio;
  } else {
    kOKUJOUDAI.y = 0;
  }
});