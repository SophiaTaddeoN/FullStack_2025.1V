




function comparacao(){
    let r = Math.random() * 100;

    let i = Math.floor(r);
    console.log(i)

    let nusuario = parseInt(document.getElementById("box1").value);

    if(nusuario < i){
        document.getElementById('resposta').innerHTML
                                          .style.setProperty("background-color", "red") = "Número menor";
    }
    else if(nusuario > i){
        document.getElementById('resposta').style.setProperty("background-color", "red")= "Número maior";
    }
    else{
        document.getElementById('resposta').style.setProperty("background-color", "green") = "Número igual";
    }
}