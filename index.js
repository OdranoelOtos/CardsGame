//enlace con la base de datos
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
    }else{
        console.log ('conexion exitosa')
    }
});

//Obtener Tabla jugador donde se guardó el login (nombre) y un id_jugador

//Realizar la consulta a la BD y cargar el array, buscando todas las cartas posibles
//$consulta = "SELECT * FROM mazo"
exports.consultarMazo = consultar_mazo(conexion, "SELECT * FROM mazo");

//Realizar la consulta a la BD y traer las 5 cartas mejores
//$consulta = "SELECT TOP(5) id_jugada, valor_apuesta, nombre FROM jugada INNER JOIN jugador ON jugada.id_jugador = jugador.id_jugador"
