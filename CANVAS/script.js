let canvas= document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// retângulos azuis
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'black';
ctx.fillRect(0,0,50,50);
ctx.closePath();

// retângulos vermelhos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'black';
ctx.fillRect(250,0,50,50);
ctx.closePath();

// retângulos pretos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(250,250,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(250,220,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(220,250,30,30);
ctx.closePath();


// retângulos amarelos
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'black';
ctx.fillRect(0,250,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'black';
ctx.fillRect(0,220,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'black';
ctx.fillRect(40,240,30,30);
ctx.closePath();


// linha verde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.moveTo(0,150);
ctx.lineTo(300,150);
ctx.stroke();


// linha azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
ctx.moveTo(0,0);
ctx.lineTo(150,150);
ctx.stroke();

// linha vermelha
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.moveTo(300,0);
ctx.lineTo(150,150);
ctx.stroke();

//linha 4 
// linha 3
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.moveTo(150,150);
ctx.lineTo(150,300);
ctx.stroke();



//meio circulo
ctx.beginPath();
ctx.arc(150, 150, 60, 4, Math.PI);
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.stroke();


//circulo 1
ctx.beginPath();
ctx.arc(50, 100, 15, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();

//circulo 2
ctx.beginPath();
ctx.arc(250, 100, 15, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();

//texto
ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.fillText("Canvas",100,90);