//ex 01

//let nome = prompt("Qual o seu nome?");
//let idade = prompt("Qual a sua idade?");
//let ano_atual = 2025;
//let ano_nascimento = ano_atual - idade;

 
//let resposta = "Olá " + nome + ", seu ano de nascimento é " + ano_nascimento + " !"
//document.getElementById("ex1" ).innerHTML = resposta

//ex02
function imprimeMensagem(msg){
    console.log(msg)
}


imprimeMensagem('Oi')
imprimeMensagem("tudo bem?")
imprimeMensagem("sla o que falar aqui")

//ex função

function soma(a,b){
    let c = a+b;
    console.log('A soma de ' + a + " e " + b + " é igual a " + c)
   return c;
}
let c= soma(3,4)

//função chamar ex 02
function ex2(){
   let num= parseInt(document.getElementById("ex2_in").value);
   for(let i = 0; i<=num; i ++){
   console.log(i)
   }
}

function ex3(){
   let num1= parseInt(document.getElementById('ex3_1').value);
   let num2= parseInt(document.getElementById('ex3_2').value);
   let result= num1 + num2;
   console.log(result);
   document.getElementById('ex3_resp').innerHTML = "A soma de " + num1 + " e " + num2 + " é " + result;
}

function ex4(){
    let num1= parseInt(document.getElementById('ex4_1').value);
    let num2= parseInt(document.getElementById('ex4_2').value);
    if (num1 < 0 || num2 < 0){
       let result= num1 + num2;}
       else{
          let result = num1 * num2;}
    document.getElementById('ex4_resp').innerHTML = "O resultado" + " é " + result;
}