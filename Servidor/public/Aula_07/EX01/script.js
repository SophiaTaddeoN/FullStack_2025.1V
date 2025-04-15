let canvas= document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// retângulos1
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'black';
ctx.fillRect(0,0,50,50);
ctx.closePath();

// retângulos2
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'black';
ctx.fillRect(350,0,50,50);

ctx.closePath();

// retângulos3
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'black';
ctx.fillRect(350,350,50,50);
ctx.closePath();

// retângulos4
ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'black';
ctx.fillRect(0,350,50,50);
ctx.closePath();

// linha 3
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.stroke();


// linha 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.moveTo(0,0);
ctx.lineTo(400,400);
ctx.stroke();

// linha 2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "blue";
ctx.moveTo(0,400);
ctx.lineTo(400,0);
ctx.stroke();


//meio circulo
ctx.beginPath();
ctx.arc(200, 200, 40, 0, Math.PI);
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.stroke();


//circulo 1
ctx.beginPath();
ctx.arc(50, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();

//circulo 2
ctx.beginPath();
ctx.arc(350, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.stroke();

//texto
ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.fillText("Desenvolvimento Web",100,90);