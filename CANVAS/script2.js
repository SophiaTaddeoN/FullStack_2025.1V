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

function linha(){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color3;
    ctx.moveTo(150,150);
    ctx.lineTo(150,300);
    ctx.stroke();
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