import { generatePlayers } from "./utils/generateCards.js";
import { generateHtmlCards } from "./utils/generateHtmlCards.js";
import { renderCards } from "./utils/renderCards.js";
import { War } from "./modules/war.js";
const players = generatePlayers("a", "b", "c", "d", "f");
const game = new War(players);
renderCards(players);
const cardNodes = document.querySelectorAll(
  ".card"
)! as NodeListOf<HTMLDivElement>;
const winners = document.querySelector(".winners")! as HTMLSpanElement;
const startBtn = document.querySelector(".btn-start")! as HTMLButtonElement;
const compareBtn = document.querySelector(".btn-compare")! as HTMLButtonElement;
game.renderStart(cardNodes);
startBtn.addEventListener("click", () => {
  game.getOneOrThreeCard(1);
  game.renderStart(cardNodes);
});
