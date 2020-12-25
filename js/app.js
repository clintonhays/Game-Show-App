/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.getElementById('btn__reset').addEventListener('click', (e) => {
  game = new Game();
  game.startGame();
});

document.getElementById('qwerty').addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('key')) {
    game.handleInteraction(target);
  }
});

addEventListener('keydown', (e) => {
  const target = e.key;
  const keyBoard = Array.from(document.getElementsByClassName('key'));

  keyBoard.forEach((key) => {
    if (key.textContent === target) {
      game.handleInteraction(key);
    }
  });
});
