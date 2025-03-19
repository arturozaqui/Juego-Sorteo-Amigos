// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let indice = 0;
let inputAmigos;
let ulListaAmigos;
let amigoSorteado;

function agregarAmigo() {
    
    inputAmigos = document.getElementById('amigo').value;     
    ulListaAmigos = document.getElementById('listaAmigos');     

    if  (inputAmigos === "") {
        alert ('Ingrese un nombre válido');
    } else {
        listaAmigos.push(inputAmigos);
        console.log (listaAmigos);
        limpiarCaja();
        ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + " " + inputAmigos;
        return;
    } 
} 

function sortearAmigo() {
    amigoSorteado =  listaAmigos[Math.floor(Math.random()*listaAmigos.length)];

    if (listaAmigos.length < 2 ) {
        alert ("Debes ingresar al menos dos nombres para iniciar el Sorteo");
    }
    document.getElementById('resultado').innerHTML = `Tú amigo sorteado es ${amigoSorteado}`;
    return;
}

    

function limpiarCaja() {
    document.getElementById('amigo').value = "";
    return;
}
