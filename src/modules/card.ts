export class Card {
    public value: number;
    private suit: string
    constructor(value: number, suit: string) {
        this.value = value;
        this.suit = suit
    }
}