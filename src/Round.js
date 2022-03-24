const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.determineCurrentCard();
  };

  determineCurrentCard() {
    return this.currentCard = this.deck.cards[this.turns];
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    };
    this.turns += 1;
    this.determineCurrentCard();
    return turn.giveFeedback();
  };

  calculatePercentCorrect() {
    return Math.ceil((this.turns - this.incorrectGuesses.length)/this.turns * 100)
  };

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  };
};

module.exports = Round;
