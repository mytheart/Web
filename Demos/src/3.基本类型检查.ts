type Deck = Card[];
type Color = "♠" | "♥" | "♣" | "♦";
type Card = {
  color: Color;
  mark: number;
};

function createDeck(): Deck {
  const deck: Deck = [];
  for (let i = 1; i <= 13; i++) {
    deck.push({
      mark: i,
      color: "♠"
    });

    deck.push({
      mark: i,
      color: "♣"
    });

    deck.push({
      mark: i,
      color: "♥"
    });

    deck.push({
      mark: i,
      color: "♦"
    });
  }
  return deck;
}

function printDeck(deck: Deck) {
  let deckStr = "";
  deck.forEach((el, i) => {
    if ((i + 1) % 6 === 0) {
      deckStr += el.color + el.mark + "\n";
    } else {
      deckStr += el.color + el.mark + "\t";
    }
  });

  console.log(deckStr);
}

printDeck(createDeck());
