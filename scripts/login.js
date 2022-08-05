function validateForm() {
    if (document.getElementById("playerName").value == "") {
        alert("Please, we need a Login name!!!");
        return false;
    }
    else {
        return true;
    }
}
