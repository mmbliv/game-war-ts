import { Card } from "./card.js";
export class Player {
    private cardValue: number = 0;
    private name: string;
    private stack: Card[];
    constructor(name: string, stack: Card[]) {
        this.name = name;
        this.stack = stack
    }

}