let canvas= document.getElementById('canva1');
let ctx = canvas.getContext('2d');

function quadrado(color1, str1, x1, y1, h1, w1){
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = color1;
    ctx.fillRect(x1,y1,h1,w1);
    ctx.closePath();
}

function circulo(x2, y2, z1, rad1, rad2, color2,str2){
    ctx.beginPath();
    ctx.arc(x2, y2, z1, rad1, rad2 * Math.PI);
    ctx.fillStyle = color2;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = str2;
    ctx.stroke();

}


function arco(x, y, raio, inicioAngulo, fimAngulo, cor, sentidoHorario) {
    ctx.strokeStyle = cor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, raio, inicioAngulo, fimAngulo, sentidoHorario);
    ctx.stroke();
}

function linha(color3, x3,y3,li,lf){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color3;
    ctx.moveTo(x3,y3);
    ctx.lineTo(li,lf);
    ctx.stroke();
}


function text(tam ,font, cor, texto,x5,y5){
    ctx.font = tam ,font;
    ctx.fillStyle = cor;
    ctx.fillText(texto,x5,y5);

}
// quadrados azul e vermelho
quadrado('blue', "black", 0,0,45,45)
quadrado("red", "black",255,0,45,45)

//quadrados petros
quadrado("black",'black',270,270,30,30)
quadrado("black",'black',270,240,30,30)
quadrado("black",'black',240,270,30,30)

//quadradso amarelos
quadrado("yellow",'black',0,270,30,30)
quadrado("yellow",'black',0,240,30,30)
quadrado("yellow",'black',30,270,30,30)

//quadrados perto da linha
quadrado('red',"black",110,149,40,40)
quadrado("aquamarine",'black',0,150,30,30)
quadrado('aquamarine','black',0,120,30,30)
quadrado('aquamarine','black',270,135,30,30)


//linhas
linha("green",0,150,300,150)
linha("blue",0,0,150,150)
linha("red",300,0,150,150)
linha("black",150,150,150,270)

//bolas
circulo(150, 115, 15, 0, 2,'aquamarine','blue')
circulo(75, 225, 15, 0, 2,'yellow','green')
circulo(225, 225, 15, 0, 2,'yellow','green')
circulo(150, 300, 40, 0, Math.PI, 'aquamarine','green', true);

//arcos
arco(150, 150, 60, 0, Math.PI, 'green', true);
arco(150,150,80,3.94,Math.PI, 'green', true)
arco(150, 150, 80, 5.5, 2*Math.PI, 'green', false);
arco(150, 300, 60, 4.7, 2*Math.PI, 'green', false);
arco(150, 300, 80, 4.7, Math.PI, 'green', true);



//texto
text('60px', 'Arial', 'black', 'canvas',150,70)

