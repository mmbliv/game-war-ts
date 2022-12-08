import { Player } from "../modules/player.js";
import { Deck } from "../modules/deck.js";
export const generatePlayers = function (...players) {
    const deck = new Deck();
    const splitedDeck = deck
        .deckOriginal()
        .shuffle()
        .split(undefined, players.length);
    const generatedPlayers = [];
    // if (typeof splitedDeck === "string") {
    //   return splitedDeck;
    // }
    for (let i = 0; i < players.length; i++) {
        const player = new Player(players[i], splitedDeck[i]);
        generatedPlayers.push(player);
    }
    return generatedPlayers;
};
