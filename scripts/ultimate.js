import * as api from '/api/index.js';

var url = location.href;
const playerName = "";
const TIE = "TIE";
const WIN = "WIN";
const LOST = "LOST";

let idCarta1Player;
let idCarta2Player;
let idCarta1Machine;
let idCarta2Machine;
const valorCard1Player = 0;
const valorCard2Player = 0;
const valorCard1Machine = 0;
const valorCard2Machine = 0;
const Creditos = 50;
const resto = 0;
const apuesta = 0;
const creditos = 50;
const total = 0;
const result = 0;
const totalPlayer = 0;
const totalMachine = 0;

//const Carta1_img = document.getElementById("Carta1_img");
//const Carta2_img = document.getElementById("Carta2_img");
//const Carta3_img = document.getElementById("Carta3_img");
//const Carta4_img = document.getElementById("Carta4_img");

alert("cargando mazo...");
const mazo = api.getMazo();
alert("mazo cargado");


function onLoading() {
    //action="machine"
    alert("aca MACHINE");
    if (!url == ""){
        const arr_url = url.split("?");
        if (arr_url.length > 1){
            const arr_name = arr_url[1].split("=");
            if (arr_name.length > 1){
                alert("aca");
                alert(document.getElementById("titulo1"));
                //document.getElementById("titulo1").innerHTML = arr_name[1];
            }    
        }
    }
}

function onClickPlayer1(imgCartaPlayer, imgCartaMachine) {
    //Se carga CARD1PLAYER
    const numberCardPlayer = Math.floor(Math.random() * 54);
    //Se carga CARD1MACHINE
    const numberCardMachine = Math.floor(Math.random() * 54);

    //CARGAR CARTA3 DE PLAYER
    const Carta1Player_img = document.getElementById(imgCartaPlayer);

    //Obtener la carta del mazo de acuerdo al id numberCardPlayer
    const card1Player = buscarCarta(numberCardPlayer);
    idCarta1Player = card1Player.id;
    //userImg.src = multimedia/carta/${number}.jpeg;
    Carta1Player_img.scr = card1Player.imagen;
    valorCard1Player = card1Player.valor;

    //Sumo el total del valor de las cartas del jugador
    totalPlayer = totalPlayer + valorCard1Player;

    if (numberCardPlayer == numberCardMachine || 
        numberCardPlayer == idCarta2Player || 
        numberCardPlayer == idCarta2Machine ||
        numberCardPlayer == idCarta2Machine) {
        for (var i=1; i<55; i++){
            i = Math.floor(Math.random() * 54); //3
            if (i != numberCardMachine) {
                break;
            }
        }
        numberCardMachine = i;
    }

    //CARGAR CARTA1 DE MACHINE
    const Carta1Machine_img = document.getElementById(imgCartaMachine);
    //Obtener la carta del mazo de acuerdo al id numberCardPlayer
    const card1Machine = buscarCarta(numberCardMachine);
    idCarta1Machine = card1Machine.id;
    //Carta1_img.src = multimedia/carta/${number2}.jpeg;
    Carta1Machine_img.scr = card1Machine.imagen;
    valorCard1Machine = card1Machine.valor;
 
    //Sumo el total del valor de las cartas de la máquina
    totalMachine = totalMachine + valorCard1Machine;
}
    
function onClickPlayer2(imgCartaPlayer, imgCartaMachine) {
    const numberCardPlayer = Math.floor(Math.random() * 54);
    const numberCardMachine = Math.floor(Math.random() * 54);

    //CARGAR CARTA3 DE PLAYER
    const Carta2Player_img = document.getElementById(imgCartaPlayer);
    //Obtener la carta del mazo de acuerdo al id numberCardPlayer
    const card2Player = buscarCarta(numberCardPlayer);
    idCarta1Player = card2Player.id;
    //`multimedia/carta/${ numberCardPlayer }.jpeg`;
    Carta2Player_img.scr = card2Player.imagen;
    valorCard2Player = card2Player.valor;

    //Sumo el total del valor de las cartas del jugador
    totalPlayer = totalPlayer + valorCard2Player;

    if (numberCardPlayer == numberCardMachine) {
        for (var i=1; i<55; i++){
            i = Math.floor(Math.random() * 54); //3
            if (i != numberCardMachine) {
                break;
            }
        }
        numberCardMachine = i;
    }

    //CARGAR CARTA2 DE MACHINE
    const Carta2Machine_img = document.getElementById(imgCartaMachine);

    //Obtener la carta del mazo de acuerdo al id numberCardPlayer
    //Carta2_img.src = `multimedia/carta/${Carta2}.jpeg`;
    //userImg.src = `multimedia/carta/${Carta4}.jpeg`;
    const card2Machine = buscarCarta(numberCardMachine);
    //Carta1_img.src = multimedia/carta/${number2}.jpeg;
    idCarta2Machine = card2Machine.id;
    valorCard2Machine = card2Machine.valor;
    Carta2Machine_img.scr = card2Machine.imagen;
    
    //Sumo el total del valor de las cartas de la máquina
    totalMachine = totalMachine + valorCard2Machine;
}

//Click en botón PLAY
function onPlayClick() {
    if (totalPlayer == totalMachine) {
        alert("You have tied!");
        //resultText.innerHTML = "You have tied!";
        resto = resto + apuesta;
    } else if (totalPlayer > totalMachine) {
        resto = resto + (apuesta * 2);
        alert("You win!");
        //resultText.innerHTML = "You win!";
    } else { //totalPlayer < totalMachine
        alert("You lost!");
        //resultText.innerHTML = "You lost!";
        resto = resto - apuesta;
    }

    //TODO: Cargar APUESTA
    //Se carga el Saldo
    const idSaldo = document.getElementById("idSaldo");
    idSaldo.innerHTML = resto;
}
 
function buscarCarta(numberCard){
    //Obtener la carta del resultadoMazo de acuerdo al id number1CardPlayer
    //TODO: PROBAR 
    const json = { } //CARGAR EL JSON
    var data = JSON.parse(json);
    for (var i in data) {
        if (data[i]instanceof Object) {
            console.log(data[i]);
        }
    }

    const carta = {};
        //{"id":"1","carta":"As de tréboles","valor":"1","imagen":"\/multimedia\/cartas\/1.jpg"},
    // resultadoMazo;
    carta;
}

 