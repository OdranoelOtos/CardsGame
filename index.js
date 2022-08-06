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
})
conexion.end();
console.log ('leo was here')
