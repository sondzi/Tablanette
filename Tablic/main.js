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

console.log(shuffledDeck.length);

