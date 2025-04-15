let canvas= document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// retângulos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'crimson';
ctx.strokeStyle = 'black';
ctx.fillRect(0,0,70,70);
ctx.strokeRect(70,70,50,50);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'crimson';
ctx.strokeStyle = 'black';
ctx.moveTo(200,150);
ctx.lineTo(120,120);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'crimson';
ctx.strokeStyle = 'black';
ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();
