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

    this.activePhrase = randPhrase;
    return randPhrase;
  }

  startGame () {
    const phrase = this.getRandomPhrase();
    phrase.addPhraseToDisplay();
    document.getElementById('overlay').style.display = 'none';
  }

  checkForWin () {
    const li = Array.from(document.querySelectorAll('li'));

    const remaining = li.filter((item) => item.classList.contains('hide'));
    if (remaining.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  removeLife () {
    const liveHeart = document.querySelector('img[src="images/liveHeart.png"]');
    liveHeart.src = 'images/lostHeart.png';
    this.missed += 1;

    if (this.missed >= 5) {
      this.gameOver(false);
    }
  }

  gameOver (gameWon) {
    const overlay = document.getElementById('overlay');
    const gameOverMessage = document.getElementById('game-over-message');
    if (gameWon) {
      overlay.style.display = 'initial';
      overlay.classList.replace('start', 'win');
      gameOverMessage.innerText =
        'By the power vested in me by the Council of Ricks, I hereby proclaim you winner...or whatever. Good job.';
    } else if (!gameWon) {
      overlay.style.display = 'initial';
      overlay.classList.replace('start', 'lose');
      gameOverMessage.innerText = 'Looks like you might be a Jerry. Better luck next time.';
    }
  }
}
