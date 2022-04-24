// Global Variables
var game = new Game;

//querySelectors
var gameBoard = document.querySelector("#gameContainer");

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


// game.determineFirstPlayer()
