let canvas= document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function quadrado(color1, str1, x1, y1, h1, w1){
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = color1;
    ctx.strokeStyle = str1;
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
 
quadrado('yellow', "crimson", 60,50,70,70)
quadrado("blue" ,"crimson", 80, 40, 100,100)