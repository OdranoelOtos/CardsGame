//import * as mazo from "../mazo.js";
//import myJson from '../mazo.json';

//Obtener Tabla jugador donde se guardó el login (nombre) y un id_jugador

//Realizar la consulta a la BD y cargar el array, buscando todas las cartas posibles
//"SELECT * FROM mazo"
export const getMazo = async () => {
    /*     
    const mazo = await db.autor.findAll({
            order: ['id'],
        }).then(results => {
            return results;
        }); */
    debugger;

    const response = await fetch("../mazo.json");
    const {data} = await response.json();
    alert("aca");
    return data;

    const errMessage = await response.text();
    console.log(errMessage);
    throw new Error(errMessage);
}

//Consultar y devolver los 5 jugadores mejores

//buscarCarta(numberCardPlayer)
