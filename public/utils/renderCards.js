import { generateHtmlCards } from "./generateHtmlCards.js";
export const renderCards = function (players) {
    players.forEach((player) => {
        const cardNode = generateHtmlCards(player.name);
        const main = document.querySelector('.main');
        main.innerHTML += cardNode;
    });
};
