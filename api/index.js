import * as mazo from "../mazo.js";

//enlace con la base de datos
/*
var  mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'blackjack',
    user: 'root',
    password: ""
});

conexion.connect(function(error){
    if (error){
        throw error;
    } else {
        console.log ('conexion exitosa')
    }
});
*/

//Obtener Tabla jugador donde se guardó el login (nombre) y un id_jugador

//Realizar la consulta a la BD y cargar el array, buscando todas las cartas posibles
//$consulta = "SELECT * FROM mazo"
//const consultarMazo = async () => {
export const getMazo = async () => {
    /*     
    const mazo = await db.autor.findAll({
            order: ['id'],
        }).then(results => {
            return results;
        }); */

        debugger;
    //const {data} = await mazo[3].json();
    // if (response.ok) {
    //     alert("OK");
    //     return true;
    // }
    const response = await fetch('https://randomuser.me/api/?results=50&nat=US');
    const {results} = await response.json();

    
    //THIS 2 LINES ARE IQUAL
    //return results.map(contact => processContact(contact))
    return results;

    const errMessage = await response.text();
    console.log(errMessage);
    throw new Error(errMessage);
}


//Realizar la consulta a la BD y traer las 5 cartas mejores
//$consulta = "SELECT TOP(5) id_jugada, valor_apuesta, nombre FROM jugada INNER JOIN jugador ON jugada.id_jugador = jugador.id_jugador"



//buscarCarta(numberCardPlayer);