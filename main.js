// var Player = require("./player");
// var Game = require("./game");


// try query slector and eventlistener on main by usuing dom

// Global Variables

var game = new Game;

//querySelectors

var gameBoard = document.querySelector("#box1");



// event eventlistener
  // for (var i = 0; i < gameBoard.length; i++) {
  gameBoard.addEventListener('click',addIcon)
    // return addIcon(i)

  function addIcon() {

  if (game.turn === game.player1 ) {
        gameBoard.innerText = "💀"
  }  else if (game.turn === game.player2) {
          gameBoard.innerText = "👽"
        }
        return game.takeTurn();
   // game.determineFirstPlayer()
  }
