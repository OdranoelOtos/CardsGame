var playerName="";
var url = location.href;
var creditos = 50;

function onLoading() {
    //http://localhost:5500/juego/consola.html?name=leo
    //action="machine"
    if (!url==""){
        const arr_url = url.split("?");
        if (arr_url.length>1){
            const arr_name = arr_url[1].split("=");
            if (arr_name.length>1){
                alert("aca");
                alert(document.getElementById("titulo1"));
                //document.getElementById("titulo1").innerHTML = arr_name[1];
            }    
        }
    }
}
