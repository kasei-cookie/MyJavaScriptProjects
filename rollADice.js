`use strict`
let player1 = `Player 1`;
let player2 = `Player 2`;

function noName() {
    if (!player1) {
        player1 = `Player 1`;
    }
    if (!player2) {
        player2 = `Player 2`;
    }
}

function setNames() {
    player1 = prompt("What is your name player 1?");
    player2 = prompt("What is your name player 2?");

    noName();

    document.getElementsByTagName("h2")[0].innerHTML = `${player1}`;
    document.getElementsByTagName("h2")[1].innerHTML = `${player2}`;

    rollDice();
}

function rollDice() {
    let diceNumber1 = Math.trunc((Math.random() * 6) + 1);
    let diceNumber2 = Math.trunc((Math.random() * 6) + 1);
    let diceName1 = `Dice_images/dice${diceNumber1}.png`;
    let diceName2 = `Dice_images/dice${diceNumber2}.png`;

    document.getElementsByTagName("img")[0].setAttribute("src", diceName1);
    document.getElementsByTagName("img")[1].setAttribute("src", diceName2);


    if (diceNumber1 > diceNumber2) {
        document.getElementsByTagName("h1")[0].innerText = `${player1} wins!`;
    } else if (diceNumber1 < diceNumber2) {
        document.getElementsByTagName("h1")[0].innerText = `${player2} wins!`;
    } else {
        document.getElementsByTagName("h1")[0].innerText = `It is a draw! Roll again!`;
    }

}

document.getElementById("roll-again").addEventListener("click", rollDice);
document.getElementById("set-names").addEventListener("click", setNames);
