function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}


function makeDeck() {
  var deck = [];
  var suits = ['club', 'diamonds', 'hearts', 'spades'];
  for (var rank = 0; rank < 13; rank++) {
	   for (var suit = 0; suit < suits.length; suit++) {
      deck.push(new Card(rank, suits[suit]));
     }
  }
  return deck;
}

console.log(makeDeck());



// deck.push(new Card(i,'clubs'));

// [{ rank: 1, suit: 'spades'}]

function shuffle(cards) {
  var temp;
  var random;
  for (var i = 0; i < cards; i++) {
    random = Math.floor(Math.random(cards.length - 1));
    temp = cards[i];
    cards[i] = cards[random];
    cards[random] = temp;
  }
  return cards;
}
console.log(shuffle(makeDeck()));
