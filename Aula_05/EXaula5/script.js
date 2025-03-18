


console.log("EX01")
i=0
for(let i=1;i<100;i+=2){
    console.log(i);
}

console.log("EX02")
for(let i=5;i<501;i+=5){
    console.log(i);
}

console.log("EX03")
num=parseInt(prompt("Digite um número:"));


if (num<0){
    console.log("Numero invalido")
}
for (let i=num; i >=0;i--){
    console.log(i);
}

console.log("EX04")
num=parseInt(prompt("Digite um número:"));
if (num<0){
    console.log("Numero invalido")};

mult=1

for(i=num;i>0;i--){
    mult= mult * i;
    console.log(i,mult);
}