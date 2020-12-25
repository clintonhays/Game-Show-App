/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/**
 * @classdesc Game class creates the phrase, tracks incorrect guesses, and holds
 * the methods that handle UI interactions including checking for win and displaying
 * appropriate end screen
 */

class Game {
  constructor () {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Generate an array of 5 random phrases from an array of phrases
   * @returns {array} An array of 5 random phrases
   */

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

    // loop through phraseArray 5 times
    for (let i = 0; i < 5; i++) {
      // create random number based on phraseArray length
      const randNum = Math.floor(Math.random() * phraseArray.length);
      /**
       * create a new Phrase object based on a random phrase
       * push the phrase to phrases array
       * remove phrase from phraseArray to prevent repeated phrases
       */
      const phrase = new Phrase(phraseArray[randNum]);
      phrases.push(phrase);
      phraseArray.splice(randNum, 1);
    }

    return phrases;
  }

  /**
   * generate a random phrase from the phrases array
   * @returns {string} String is returned and put into the activePhrase property
   */

  getRandomPhrase () {
    const randNum = Math.floor(Math.random() * this.phrases.length);
    const randPhrase = this.phrases[randNum];

    this.activePhrase = randPhrase;
    return randPhrase;
  }

  /**
   * will start or reset game accordingly
   * to start game: calls getRandomPhrase(), addPhraseToDisplay, hide start screen overlay
   * to reset game: calls same functions, also removes class list and disabled from letter keys
   *                restores life hearts that were lost
   */

  startGame () {
    const phrase = this.getRandomPhrase();
    phrase.addPhraseToDisplay();
    document.getElementById('overlay').style.display = 'none';

    const keys = Array.from(document.getElementsByClassName('key'));
    keys.forEach((key) => {
      key.classList.remove('chosen', 'wrong');
      key.disabled = false;
    });

    const lostHeart = Array.from(document.querySelectorAll('img[src="images/lostHeart.png"]'));
    lostHeart.forEach((heart) => (heart.src = 'images/liveHeart.png'));
  }

  /**
   * checks if game is won by determining if any hidden letters remain
   * @returns {bool} True if game is won, False if not
   */

  checkForWin () {
    // target list items that hold the phrase
    const li = Array.from(document.querySelectorAll('li'));

    // filter list items with 'hide' class, if array.length is 0, game is won
    const remaining = li.filter((item) => item.classList.contains('hide'));
    if (remaining.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * change heart img source and increment missed counter
   * if missed counter > 5 call gameOver method with false parameter
   */

  removeLife () {
    const liveHeart = document.querySelector('img[src="images/liveHeart.png"]');
    liveHeart.src = 'images/lostHeart.png';
    this.missed += 1;

    if (this.missed >= 5) {
      this.gameOver(false);
    }
  }

  /**
   * changes overlay based on win or lose of game, clears 'phrase' innerHTML
   * @param {bool} gameWon true or false to determine if game is won
   */

  gameOver (gameWon) {
    const overlay = document.getElementById('overlay');
    const gameOverMessage = document.getElementById('game-over-message');

    if (gameWon) {
      overlay.style.display = 'flex';
      overlay.classList.remove('start');
      overlay.className = 'win';
      gameOverMessage.innerText =
        'By the power vested in me by the Council of Ricks, I hereby proclaim you winner...or whatever. Good job.';
    } else if (!gameWon) {
      overlay.style.display = 'flex';
      overlay.classList.remove('start');
      overlay.className = 'lose';
      gameOverMessage.innerText = 'Looks like you might be a Jerry. Better luck next time.';
    }

    document.getElementById('phrase').firstElementChild.innerHTML = '';
  }

  /**
   * Disables button, if not in phrase removeLife()  and adds 'wrong' class
   * if in phrase showMatchedLetter(), checkForWin()
   * if checkForWin() is true, gameOver(true)
   * 
   * @param {button} button letter displayed in onscreen keyboard
   */

  handleInteraction (button) {
    button.disabled = true;
    const letter = button.textContent;

    if (this.activePhrase.checkLetter(letter) === false) {
      button.classList.add('wrong');
      this.removeLife();
    } else {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }
  }
}
