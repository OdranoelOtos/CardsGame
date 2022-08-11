const Carta1 = "Carta1_img";
const Carta2 = "Carta2_img";
const Carta3 = "Carta3_img";
const Carta4 = "Carta4_img";
const Creditos = 50;
const Resto = 0;
const Apuesta = 0;
const Carta1_img = document.getElementById("Carta1_img");
const Carta2_img = document.getElementById("Carta2_img");
const Carta3_img = document.getElementById("Carta3_img");
const Carta4_img = document.getElementById("Carta4_img");
const result = TotalMachine - TotalPlayer;
const TotalMachine=(Carta1++Carta2);
const TotalPlayer = (Carta3++Carta4);
const ranking = (5 mayores); 

Carta3_img.addEventListener("click", () => {
    play(...);
});
Carta4_img.addEventListener("click", () => {
    play(...);
});

function play(Carta3_img) {
        const number = Math.floor(Math.random() * 54);
    
    Carta1_img.src = `multimedia/carta/${Carta1}.jpeg`;
    userImg.src = `multimedia/carta/${Carta3}.jpeg`;
    Carta2_img.src = `multimedia/carta/${Carta2}.jpeg`;
    userImg.src = `multimedia/carta/${Carta4}.jpeg`;

        const result = calcResult(TotalMachine, TotalPlayer);

        switch (result) {
            case TIE:
                resultText.innerHTML = "You have tied!";
                break;
            case WIN:
                resultText.innerHTML = "You win!";
                break;
            case LOST:
                resultText.innerHTML = "You lost!";
                break;
        }
        isPlaying = false;
    }, 2000;



     {
        
}


function calcResult(TotalPlayer, TotalMachine) {
    if (TotalPlayer === TotalMachine) {
        return TIE;
        Resto = Resto+++(Apuesta/2);

    } else if (TotalPlayer > TotalMachine);
        return WIN;
        Resto = Resto+++Apuesta;
        if (TotalPlayer < TotalMachine);
         return LOST;
         Resto = Resto--Apuesta;
