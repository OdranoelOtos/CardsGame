var playerName="";
var url = location.href;
var creditos = 50;
var total = 0
var player = playerName

//http://localhost:5500/juego/consola.html?name=leo
 
if (!url==""){
    const arr_url = url.split("?");
    if (arr_url.length>1){
        const arr_name = arr_url[1].split("=");
        if (arr_name.length>1){
            
            alert (arr_name[1]);
            document.getElementById("titulo1").innerHTML = arr_name[1];
            
        }    
    }
}

function redirect() {
    playerName = document.getElementById("playerName").value;
}
//alert (playerName);
//onclick="redirect()" 

