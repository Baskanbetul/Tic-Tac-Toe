// Global Variables
var game = new Game;

//querySelectors
var gameBoard = document.querySelector("#gameContainer");
var noWinner = document.querySelector('#no-winner')
var playersTurn = document.querySelector('.turn-message');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');

// event eventlistener
gameBoard.addEventListener('click',addToken)

function addToken() {
    // console.log(event.target.id)
    var showTurn = event.target
  if (game.turn === game.player1 ) {
    showTurn.innerText = "💀"
  } else if (game.turn === game.player2) {
    showTurn.innerText = "👽"
  }
    return game.takeTurn();
  }

// board fiilout chechk winner
// game.determineFirstPlayer()
 //    checkWinner() {
 //    // if (!this.gameContainer.include(game.player1) ||
 //    // !this.gameContainer.include(game.player2)
 // if ( game.winner != game.player1 &&  game.winner != game.player2 &&
 //  gameContainer[0] = 1
 // assign index to any number

 // ) {
 //   return  noWinner
 // }
 //
 //  ) {

    // if it snot include same id in first raow other conditions
    // show me no winner

//   }
// }
