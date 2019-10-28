function createDeck() {
    const deck = [];
    for (let i = 0; i < 13; i++) {
        deck.push({
            mark: i,
            color: '♠',
        });
        deck.push({
            mark: i,
            color: '♣',
        });
        deck.push({
            mark: i,
            color: '♥',
        });
        deck.push({
            mark: i,
            color: '♦',
        });
    }
    return deck;
}
createDeck();
