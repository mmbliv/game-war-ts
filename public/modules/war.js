export class War {
    constructor(players) {
        this.winner = [];
        this.currentCards = [];
        this.players = players;
    }
    getOneOrThreeCard(cardCount, players = this.players) {
        players.forEach((player) => {
            let cardOne = null;
            let cardTwo = null;
            let cardThree = null;
            if (cardCount === 1) {
                cardOne = player.stack.shift();
                if (cardOne) {
                    this.currentCards.push(cardOne);
                    player.cardValue = cardOne.value;
                }
                else {
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
                }
                else {
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
    runAndCompare(players = this.players) {
        this.winner = players.reduce((winner, current) => {
            if (current.cardValue > winner[1]) {
                return [[current], current.cardValue];
            }
            if (current.cardValue === winner[1]) {
                return [[...winner[0], current], current.cardValue];
            }
            else {
                return winner;
            }
        }, [[], 0])[0];
        return this.winner;
    }
    logResult(players = this.players) {
        const result = players.map((player) => {
            return Object.assign(Object.assign({}, player), { stack: player.stack.length });
        });
        return result;
    }
    addCardsToWinner(player) {
        player.stack.push(...this.shuffle(this.currentCards));
        this.currentCards = [];
    }
    shuffle(cards) {
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
    isGameFinished(players = this.players) {
        const totalCards = Math.floor(52 / this.players.length) * this.players.length;
        const winner = players.filter((player) => {
            return player.stack.length >= totalCards;
        });
        if (winner.length) {
            return winner;
        }
        else {
            return false;
        }
    }
    renderStart(nodes) {
        nodes.forEach((node, index) => {
            node.querySelector(".cards-left").innerHTML =
                this.players[index].stack.length.toString();
            node.querySelector(".current-value").innerHTML =
                this.players[index].cardValue.toString();
        });
    }
}
