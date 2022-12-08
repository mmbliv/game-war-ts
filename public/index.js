import { generatePlayers } from "./utils/generateCards.js";
import { renderCards } from "./utils/renderCards.js";
import { War } from "./modules/war.js";
const players = generatePlayers("a", "b", "c", "d", "f", "g", "h");
const game = new War(players);
renderCards(players);
const cardNodes = document.querySelectorAll(".card");
const winners = document.querySelector(".winners");
const main = document.querySelector(".main");
const currentCards = document.querySelector(".current-cards");
const startBtn = document.querySelector(".btn-start");
const compareBtn = document.querySelector(".btn-compare");
const finalWinnerNode = document.querySelector(".final-winner");
game.renderStart(cardNodes, currentCards);
let needCompare = false;
let winnerForEachRound = [];
startBtn.addEventListener("click", () => {
    let finalWinner = game.isGameFinished();
    if (currentCards.innerText === "0") {
        game.getOneOrThreeCard(1);
        game.renderStart(cardNodes, currentCards);
        return;
    }
    if (winnerForEachRound.length > 1) {
        game.getOneOrThreeCard(3, winnerForEachRound);
        game.renderStart(cardNodes, currentCards);
        winners.innerText = "";
        needCompare = true;
        return;
    }
    if (winnerForEachRound.length === 1) {
        game.addCardsToWinner(winnerForEachRound[0]);
        game.getOneOrThreeCard(1);
        winnerForEachRound = [];
        winners.innerText = "";
        game.renderStart(cardNodes, currentCards);
        return;
    }
    if (finalWinner) {
        finalWinnerNode.innerText = "Winner is: " + finalWinner[0].name;
        finalWinnerNode.style.display = "block";
        main.style.display = "none";
    }
    alert("please click compare button");
});
compareBtn.addEventListener("click", () => {
    console.log(winnerForEachRound);
    if (winnerForEachRound.length === 0) {
        winnerForEachRound = game.runAndCompare();
        game.renderCompare(winners);
        return;
    }
    if (winnerForEachRound.length > 1 && needCompare) {
        winnerForEachRound = game.runAndCompare(winnerForEachRound);
        game.renderCompare(winners);
        needCompare = false;
        return;
    }
    alert("please click start button");
});
