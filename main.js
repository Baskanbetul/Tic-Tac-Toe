// Global Variables
var game = new Game;

//querySelectors
var gameBoard = document.querySelector("#gameContainer");
var noWinner = document.querySelector('.no-winner')
var playersTurn = document.querySelector('.turn-message');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');

// event eventlistener
gameBoard.addEventListener('click',addToken)


// function addToken(index) {
//     // console.log(event.target.id)
//     var showTurn = event.target
//   if (game.turn === game.player1 ) {
//     showTurn.innerText = "💀"
//     game.gameContainer[index] = "1"
//     game.determineFirstPlayer()
//   } else if (game.turn === game.player2) {
//     // console.log("okay")
//     showTurn.innerText = "👽"
//     game.gameContainer[index] = "2"
//   }
//     game.determineSecondPlayer()
//     return game.takeTurn();
//   }

function addToken() {
    // console.log(event.target)
    var showTurn = event.target
  if (game.turn === game.player1 && showTurn.innerText === '') {
    showTurn.innerText = "💀"
    game.gameContainer[event.target.id] = 1
  } else if (game.turn === game.player2 && showTurn.innerText === '') {
    showTurn.innerText = "👽"
    game.gameContainer[event.target.id] = 2

  }
    game.takeTurn()
    // checkDrawGame ()
  }
// HERE

  function show(element) {
      element.classList.remove('hidden');
  }

  function hide(element) {
      element.classList.add('hidden');
  }

  // function updateDOM(location) {
  //     location.innerText = game.playersTurn;
  // }

  function checkDrawGame () {
    if (game.checkGameStatus() === true && game.gameContainer ) {
      hide(playersTurn);
      show(noWinner);
    }
  }
