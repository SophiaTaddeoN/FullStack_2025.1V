// let carro = {
//     cor: 'green',
//     modelo: 'Suv',
//     marca : 'Toyota',
//     buzina: function(){
//         return("BII BIIIIIII")
//     }
// };

// let carro2 ={
//     cor: "black",
//     modelo:"SUV",
//     marca:'Toyota',
//     buzina: function(){
//         return "FOM FOMMMM"
//     }
// }
// console.log(carro);
// console.log(carro.cor)
// console.log(carro.buzina())
// alert(carro2.buzina)



class Carro{
    constructor(cor,modelo,marca){
      this.cor = cor;
      this.modelo = modelo;
      this.marca = marca;
    }
    buzina(){
        return "BIIIII BIIIIII"
    }
}

let carro1= new Carro('green','SUV','Toyota')
console.log(carro1)

let carro2 = new Carro('Black','SUV','Toyota')
console.log(carro2)

let carros = []
carros.push(carro1)
carros.push(carro2)
for (let i = 0; i < carros.length; i++){
    console.log(carros[i].buzina())
}





class Retangulo{
    constructor(cor_linha,cor_preenchimento,espessura_linha,x,y,largura,altura){
        this.cor_linha=cor_linha; 
        this.cor_preenchimento=cor_preenchimento;
        this.espessura_linha=espessura_linha
        this.x=x;
        this.y=y;
        this.largura=largura;
        this.altura=altura;
        
    }
    desenhe(contexto){
        contexto.beginPath();
        contexto.lineWidth = this.espessura_linha;
        contexto.fillStyle = this.cor_preenchimento;
        contexto.strokeStyle = this.cor_linha
        contexto.strokeRect(this.x, this.y, this.largura, this.altura);
        contexto.fillRect(this.x, this.y, this.largura, this.altura);
        contexto.closePath(); 
    }
}


let canvas = document.getElementById('canva1')
let ctx1 = canva1.getContext('2d')

let retangulo1= new Retangulo('Blue','Red',3,200,200,40,40);
retangulo1.desenhe(ctx1);
retangulo1.x = 100;
retangulo1.desenhe(ctx1)