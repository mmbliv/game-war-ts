import { Player } from "./player.js";
import { Card } from "./card.js";
export class War {
  private players: Player[];
  private winner: Player[] = [];
  private currentCards: Card[] = [];
  constructor(players: Player[]) {
    this.players = players;
  }
  getOneOrThreeCard(cardCount: number, players: Player[] = this.players) {
    players.forEach((player) => {
      let cardOne = null;
      let cardTwo = null;
      let cardThree = null;
      if (cardCount === 1) {
        cardOne = player.stack.shift();
        if (cardOne) {
          this.currentCards.push(cardOne);
          player.cardValue = cardOne.value;
        } else {
          player.cardValue = 0;
        }
      }
      if (cardCount === 3) {
        cardOne = player.stack.shift();
        cardTwo = player.stack.shift();
        cardThree = player.stack.shift();
        if (cardOne) {
          this.currentCards.push(cardOne);
          player.cardValue = cardOne.value;
        } else {
          player.cardValue = 0;
        }
        if (cardTwo) {
          this.currentCards.push(cardTwo);
        }
        if (cardThree) {
          this.currentCards.push(cardThree);
        }
      }
    });
  }
  runAndCompare(players: Player[] = this.players) {
    this.winner = players.reduce<[Player[], number]>(
      (winner, current) => {
        if (current.cardValue > winner[1]) {
          return [[current], current.cardValue];
        }
        if (current.cardValue === winner[1]) {
          return [[...winner[0], current], current.cardValue];
        } else {
          return winner;
        }
      },
      [[], 0]
    )[0];
    return this.winner;
  }
  logResult(players: Player[] = this.players) {
    const result = players.map((player) => {
      return { ...player, stack: player.stack.length };
    });
    return result;
  }
  addCardsToWinner(player: Player) {
    player.stack.push(...this.shuffle(this.currentCards));
    this.currentCards = [];
  }
  shuffle(cards: Card[]) {
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
    return deck;
  }
  isGameFinished(players: Player[] = this.players) {
    const totalCards =
      Math.floor(52 / this.players.length) * this.players.length;
    const winner = players.filter((player) => {
      return player.stack.length >= totalCards;
    });
    if (winner.length) {
      return winner;
    } else {
      return false;
    }
  }
  renderStart(nodes: NodeListOf<HTMLDivElement>) {
    nodes.forEach((node, index) => {
      node.querySelector(".cards-left")!.innerHTML =
        this.players[index].stack.length.toString();
      node.querySelector(".current-value")!.innerHTML =
        this.players[index].cardValue.toString();
    });
  }
}
