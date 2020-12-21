/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor () {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.phrase = null;
  }

  startGame () {
    getRandomPhrase(this.phrases);
    addPhraseToDisplay(this.phrase);
  }

  createPhrases () {
    const phraseArray = [
      'im mr meseeks look at me',
      'wubba lubba dub dub',
      'im pickle rick',
      'nobody exists on purpose',
      'what up my glip glops',
      'what is my purpose',
      'get schwifty',
      'life is effort',
      'to live is to risk it all',
      'sometimes science is more art than science',
    ];

    const phrases = [];

    for (let i = 0; i < 5; i++) {
      const randNum = Math.floor(Math.random() * phraseArray.length);
      phrases.push(phraseArray[randNum]);
      phraseArray.splice(randNum, 1);
    }

    return phrases;
  }

  getRandomPhrase () {
    const randNum = Math.floor(Math.random() * this.phrases.length);
    const randPhrase = this.phrases[randNum];

    this.phrase = randPhrase;
  }

  handleInteraction () {
    const keyboard = document.getElementById('qwerty');

    // keyboard.addEventListener('click', (e) {
    //   const target = e.target;

    //   if(target.)
    // })
  }

  removeLife () {}

  checkForWin () {}

  gameOver () {}
}
