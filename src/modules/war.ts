import { Player } from "./player.js"
import { Card } from "./card.js";
export class War {
    private players: Player[];
    private winner: Player[] = [];
    private currentCards: Card[] = []
    constructor(players: Player[]) {
        this.players = players
    }
}