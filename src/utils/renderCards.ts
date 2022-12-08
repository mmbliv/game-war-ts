import { generateHtmlCards } from "./generateHtmlCards.js";
import { Player } from '../modules/player';
export const renderCards = function (players: Player[]) {
    players.forEach((player) => {
        const cardNode = generateHtmlCards(player.name)
        const main = document.querySelector('.main') as HTMLDivElement
        main.innerHTML += cardNode
    })

}