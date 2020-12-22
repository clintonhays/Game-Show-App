/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase();
  }

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

  checkLetter (letter) {
    return this.phrase.includes(letter);
  }

  showMatchedLetter (letter) {
    if (this.checkLetter(letter)) {
      const matches = document.getElementsByClassName(`hide letter ${letter}`);

      matches.forEach((match) => {
        match.classList.remove('hide');
        match.classList.add('show');
      });
    }
  }
}

/**
 * Psuedo Code:
 * 
 * addPhraseToDisplay
 *  // create array from string
 *  // loop through array
 *    // check if character is ' ' or not and create html literal
 */
