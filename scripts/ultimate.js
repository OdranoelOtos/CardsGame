var playerName="";
var url = location.href;
var creditos = 50;
var total = 0;

//// Variables que vienen de juego.js
let idCarta1Player;
let idCarta2Player;
let idCarta3Machine;
let idCarta4Machine;
const Creditos = 50;
const Resto = 0;
const Apuesta = 0;
const Carta1_img = document.getElementById("Carta1_img");
const Carta2_img = document.getElementById("Carta2_img");
const Carta3_img = document.getElementById("Carta3_img");
const Carta4_img = document.getElementById("Carta4_img");
const TIE = "TIE";
const WIN = "WIN";
const LOST = "LOST";

//// Esta parte viene de juego.js
//const resultadoMazo = consultarMazo();

let valorCard1Player = 0;
let valorCard2Player = 0;
let valorCard1Machine = 0;
let valorCard2Machine = 0;

let result;
let totalPlayer = 0;
let totalMachine = 0;

////
function onLoading() {
    //http://localhost:5500/juego/consola.html?name=leo
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


//// Viene de juego.js
function onClickPlayer1(btnCartaImg, imgCartaPlayer, imgCartaMachine) {
    const numberCardPlayer = Math.floor(Math.random() * 54);
    const numberCardMachine = Math.floor(Math.random() * 54);

    //CARGAR CARTA3 DE PLAYER
    const Carta3Player_img = document.getElementById(imgCartaPlayer);
    //Obtener la carta del mazo de acuerdo al id numberCardPlayer
    var card1Player = buscarCarta(numberCardPlayer);
    idCarta1Player = card1Player.id;
    //Carta3Player_img.scr = `multimedia/carta/${ numberCardPlayer }.jpeg`;
    Carta3Player_img.scr = card1Player.imagen;
    valorCard1Player = card1Player.valor;

    //Sumo el total del valor de las cartas del jugador
    totalPlayer += valorCard1Player;

    if (numberCardPlayer == numberCardMachine) {
        for (var i=1; i<55; i++){
            i = Math.floor(Math.random() * 54); //3
            if (i != numberCardMachine) {
                break;
            }
        }
        numberCardMachine = i;
    }

    //CARGAR CARTA3 DE PLAYER
    const idCarta1_img = document.getElementById(imgCartaMachine);
    //Obtener la carta del mazo.json de acuerdo al id numberCardMachine
    var card1Machine;
    //idCarta1_img.scr = `multimedia/carta/${ numberCardMachine }.jpeg`;
    valorCard1Machine = card1Machine.valor;
    
    //Sumo el total del valor de las cartas de la máquina
    totalMachine += valorCard1Machine;

    //// Viene de juego.js
    
function onClickPlayer2(btnCartaImg, imgCartaPlayer, imgCartaMachine) {
    const numberCardPlayer = Math.floor(Math.random() * 54);
    const numberCardMachine = Math.floor(Math.random() * 54);

    //CARGAR CARTA3 DE PLAYER
    const Carta3Player_img = document.getElementById(imgCartaPlayer);
    //Obtener la carta del mazo de acuerdo al id numberCardPlayer
    var card1Player = buscarCarta(numberCardPlayer);
    //Carta3Player_img.scr = `multimedia/carta/${ numberCardPlayer }.jpeg`;
    Carta3Player_img.scr = card1Player.imagen;
    valorCard1Player = card1Player.valor;

    //Sumo el total del valor de las cartas del jugador
    totalPlayer += valorCard1Player;

    /// Viene de Juego.js
     //SACAR ESTO A UNA FUNCION Q HAGA ONCLICK CUANDO HACE CLICK EN EL BOTON PLAY
     const result = calcResult(totalMachine, totalPlayer);
     switch (result) {
         case TIE:
             //resultText.innerHTML = "You have tied!";
             alert("You have tied!");
             break;
         case WIN:
             //resultText.innerHTML = "You win!";
             alert("You win!");
             break;
         case LOST:
             resultText.innerHTML = "You lost!";
             alert("You lost!");
             break;
     }
 }
 
     if (numberCardPlayer == numberCardMachine) {
         for (var i=1; i<55; i++){
             i = Math.floor(Math.random() * 54); //3
             if (i != numberCardMachine) {
                 break;
             }
         }
         numberCardMachine = i;
     }
 
     //CARGAR CARTA3 DE PLAYER
     const idCarta1_img = document.getElementById(imgCartaMachine);
     //Obtener la carta del mazo.json de acuerdo al id numberCardMachine
     var card1Machine;
     //idCarta1_img.scr = `multimedia/carta/${ numberCardMachine }.jpeg`;
     valorCard1Machine = card1Machine.valor;
     
     //Sumo el total del valor de las cartas de la máquina
     totalMachine += valorCard1Machine;
 
     //{"id":"1","carta":"As de tréboles","valor":"1","imagen":"\/multimedia\/cartas\/1.jpg"},
  
 
     //Carta1_img.src = `multimedia/carta/${number2}.jpeg`;
     //userImg.src = `multimedia/carta/${number}.jpeg`;
 
     //Carta2_img.src = `multimedia/carta/${Carta2}.jpeg`;
     //userImg.src = `multimedia/carta/${Carta4}.jpeg`;
     const result = calcResult(totalMachine, totalPlayer);
     switch (result) {
         case TIE:
             //resultText.innerHTML = "You have tied!";
             alert("You have tied!");
             break;
         case WIN:
             //resultText.innerHTML = "You win!";
             alert("You win!");
             break;
         case LOST:
             resultText.innerHTML = "You lost!";
             alert("You lost!");
             break;
     }
 }
 
 function buscarCarta(numberCard){
     //Obtener la carta del resultadoMazo de acuerdo al id number1CardPlayer
     const carta = {};
     // resultadoMazo;
     carta;
 }
 
 function calcResult(totalPlayer, totalMachine) {
     if (totalPlayer == totalMachine) {
         Resto += Apuesta;
         return TIE;
     } else if (totalPlayer > totalMachine) {
         Resto = Resto + (Apuesta * 2);
         return WIN;
     } else { //totalPlayer < totalMachine
         Resto = Resto - Apuesta;
         return LOST;
     }
 }
 