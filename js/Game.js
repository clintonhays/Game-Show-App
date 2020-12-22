/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor () {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
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
      const phrase = new Phrase(phraseArray[randNum]);
      phrases.push(phrase);
      phraseArray.splice(randNum, 1);
    }

    return phrases;
  }

  getRandomPhrase () {
    const randNum = Math.floor(Math.random() * this.phrases.length);
    const randPhrase = this.phrases[randNum];

    return randPhrase;
  }

  startGame () {
    const phrase = this.getRandomPhrase();
    this.activePhrase = phrase.addPhraseToDisplay();
    document.getElementById('overlay').style.display = 'none';
  }

  checkForWin () {
    const li = document.getElementById('phrase').firstElementChild.children;
    let gameWon;

    const remaining = li.filter((item) => item.classList.contains('hidden'));
    if ((remaining.length = 0)) {
      gameWon = true;
    }

    return gameWon;
  }

  removeLife () {
    const liveHeart = document.querySelector('img[src="images/liveHeart.png"]');
    liveHeart.src = 'images/lostHeart.png';
  }
}
