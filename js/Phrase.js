/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/**
 * @classdesc Phrase creates the innerHTML of the phrase display and changes
 * class name for matched letters
 * @constructor
 * @param {string} phrase random string generated in Game.js 
 */

class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * creates the innerHTML to be displayed in phrase UL by
   * splitting the string to an array, looping over the items
   * and creating an <li> for each letter
   * then inserts the html into the DOM
   */

  addPhraseToDisplay () {
    const stringArray = this.phrase.split('');
    let html = ``;

    stringArray.forEach((char) => {
      if (char !== ' ') {
        html += `<li class="hide letter ${char}">${char}</li>`;
      } else {
        html += `<li class="space"> </li>`;
      }
    });
    document.getElementById('phrase').firstElementChild.innerHTML = html;
  }

  /**
   * check if game.activePhrase contains chosen letter
   * @param {string} letter letter chosen from onscreen keyboard
   * @returns {bool} true if game.activePhrase contains letter or false
   */
  checkLetter (letter) {
    return this.phrase.includes(letter);
  }

  /**
   * reveal letter in phrase display if checkLetter returns true
   * @param {string} letter letter chosen from onscreen keyboard
   */

  showMatchedLetter (letter) {
    if (this.checkLetter(letter)) {
      const matches = Array.from(document.getElementsByClassName(`hide letter ${letter}`));

      matches.forEach((match) => {
        match.classList.replace('hide', 'show');
      });
    }
  }
}
