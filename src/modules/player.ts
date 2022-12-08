import { Card } from "./card.js";
export class Player {
    public cardValue: number = 0;
    public name: string;
    public stack: Card[];
    constructor(name: string, stack: Card[]) {
        this.name = name;
        this.stack = stack
    }

}