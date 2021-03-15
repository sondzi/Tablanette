class Card {
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
    }
}

const arrOfSuits = ['♣', '♥', '♦', '♠'];
const arrOfNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cards = generateCards(arrOfSuits, arrOfNumbers);
const shuffledDeck = shuffleCards(cards);

function generateCards(suits, numbers) {
    const arrOfCards = [];
    // for (let i = 0; i < suits.length; i++) {
    suits.forEach(element => {
        numbers.forEach(e => {
            let card = new Card(e, element);
            arrOfCards.push(card);
        });

    })
    // }
    return arrOfCards;
}

function shuffleCards(cardz) {

    let shuffledDeck = new Array(cardz.length);

    for (let i = 0; i < cardz.length; i++) {
        let randomIdx;
        do {
            randomIdx = Math.floor(Math.random() * shuffledDeck.length);
        } while (shuffledDeck[randomIdx] !== undefined);

        shuffledDeck[randomIdx] = cardz[i];
    }
    return shuffledDeck;
}

class Player {
    constructor(playerName) {
        this.playerCards = [];
        this._playerName = playerName;
    }

    get isHandEmpty() {
        if (this.playerCards.length === 0 || this.playerCards.length === 3) {
            return true;
        }
        return false;
    }

    passThreeCards() {
        let threeCards = [];
        for (let i = 0; i < 3; i++) {
            threeCards.push(shuffledDeck.pop());
        }
        if (this.isHandEmpty) {
            this.playerCards.push(...threeCards);
        }
        return this.playerCards;
    }
}

const player1 = new Player('Player 1');
const player2 = new Player('Player 2');

const table = [];
console.log('table', table)
function passFourCardsToTable() {
    let tableCards = [];
    for (let i = 0; i < 4; i++) {
        tableCards.push(shuffledDeck.pop());
    }
    if(table.length === 0){
        table.push(...tableCards);
    }
    return table;
}


player1.passThreeCards();
player2.passThreeCards();
player1.passThreeCards();
player2.passThreeCards();

console.log('player1 cards', player1.playerCards);
console.log('player2 cards', player2.playerCards);
console.log('table posle funkcije', passFourCardsToTable());
console.log('shuffled deck remaining cards', shuffledDeck.length);
