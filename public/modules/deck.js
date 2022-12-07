import { Card } from "./card.js";
export class Deck {
    constructor() {
        this.suits = ["diamonds", "hearts", "spades", "clubs"];
        this.deck = [];
        this.shuffledDeck = [];
    }
    deckOriginal() {
        for (let i = 2; i <= 14; i++) {
            for (let j = 0; j <= 3; j++) {
                const card = new Card(i, this.suits[j]);
                this.deck.push(card);
            }
        }
        return this;
    }
    shuffle(cards = this.deck) {
        const deck = [...cards];
        let currentIndex = deck.length;
        let randomIndex = 0;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [deck[currentIndex], deck[randomIndex]] = [
                deck[randomIndex],
                deck[currentIndex],
            ];
        }
        this.shuffledDeck = deck;
        return this;
    }
    split(cards = this.shuffledDeck, stacks = 2) {
        const cardsAmountForEachStack = Math.floor(cards.length / stacks);
        const splittedCards = [];
        for (let i = 0; i < cardsAmountForEachStack * stacks; i += cardsAmountForEachStack) {
            let cardsInEachStack = [];
            if (i + cardsAmountForEachStack >= cards.length) {
                cardsInEachStack = cards.slice(i);
            }
            else {
                cardsInEachStack = cards.slice(i, i + cardsAmountForEachStack);
            }
            splittedCards.push(cardsInEachStack);
        }
        return splittedCards;
    }
}
