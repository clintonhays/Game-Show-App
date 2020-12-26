# Game-Show-App
An interactive web based game where players try to guess a hidden phrase.

## Gameplay

Phrase Hunter is a hangman style game that chooses a random phrase from an array and inserts it, hidden, into the phrase display. Players then either click a letter or use the keyboard to guess letters in the phrase. If the letter is in the phrase, it is displayed and the button disabled. If the letter is not in the phrase, a life is lost and the button is disabled. When the phrase is guessed correctly a win screen is displayed. If all five lives are lost, a lose screen is displayed. From the game over screen, the game can be reset and played again.

## Object Oriented Programming

I used classes to create this game. This helped to keep jobs separated and helped me to understand what exatly goes into OOP and making objects interact with one another.

### Classes

This game contains two classes that are controlled through the app.js file.

#### Phrase.js

Phrase.js is the class that determines how the phrase is inserted into the HTML, how the letters are checked, and how the letters are displayed when guessed correctly. This class makes uses of arrays in almost each method. The necessity of arrays to get the work done in this class pushed me to learn more about HTML Collections and static & live NodeLists. It also really showed me the power of the `Array.from()` method. Because of the need to use arrays to break the phrase own into individual characters, I had to learn how to turn DOM collections into arrays that have access to array methods. Fortunately, this was a straightforward process that yielded great results.

#### Game.js

Game.js is where the bulk of the work for the game resides. It creates the phrase array, and the methods for getting the random phrase, starting the game, checking for win status, removing lifes on wrong guesses, and displaying a game over message. The interactive methods are consolidated into one method that is called when a button is pressed. This makes it easier to read what happens when each button is clicked or pressed.

## Customization

Custom elements of Phrase Hunter include an animation on letter reveal, display of the phrase when the game is lost, and a night mode.