import { generatePlayers } from "./utils/generateCards.js";
import { renderCards } from "./utils/renderCards.js";
import { War } from "./modules/war.js";
const players = generatePlayers("a", "b", "c", "d", "f");
const game = new War(players);
renderCards(players);
const cardNodes = document.querySelectorAll(".card");
const winners = document.querySelector(".winners");
const startBtn = document.querySelector(".btn-start");
const compareBtn = document.querySelector(".btn-compare");
game.renderStart(cardNodes);
startBtn.addEventListener("click", () => {
    game.getOneOrThreeCard(1);
    game.renderStart(cardNodes);
});
