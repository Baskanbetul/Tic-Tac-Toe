// Global Variables
var game = new Game;

//querySelectors
var gameBoard = document.querySelector("#gameContainer");
var noWinner = document.querySelector('.no-winner')
var playersTurn = document.querySelector('.turn-message');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');
var winnerOne = document.querySelector('.player-one');

// event eventlistener
gameBoard.addEventListener('click',function() {
  addToken()
  checkWinner()
 })

  function addToken() {
    var showTurn = event.target
    if (game.turn === game.player1 && showTurn.innerText === '') {
    showTurn.innerText = "💀"
    game.gameContainer[event.target.id] = 1
  } else if (game.turn === game.player2 && showTurn.innerText === '') {
    showTurn.innerText = "👽"
    game.gameContainer[event.target.id] = 2
  }
    game.takeTurn()
    checkDrawGame ()
  }

  function show(element) {
    element.classList.remove('hidden');
  }

  function hide(element) {
    element.classList.add('hidden');
  }

  function checkDrawGame () {
    if (game.checkGameStatus() === true) {
      hide(playersTurn);
      show(noWinner);
    }
  }

//   function checkWinner() {
//     game.determineFirstPlayer()
//     playerOneWins.innerText = `Ohh, no score ${game.player1.wins}!`
//     game.determineSecondPlayer()
//     playerTwoWins.innerText = `Ohh, no score ${game.player1.wins}!`
//     if (game.gameEnd) {
//     var endDelay = setTimeout(function()
//     { for (var i = 0; i < gameContainer.children.length; i++) {
//        gameContainer.children[i].innerHTML = ""
//       } }, 3000) ;
//   }
// }

function checkWinner() {
  if (game.determineFirstPlayer() && game.gameEnd) {
  playerOneWins.innerText = `Ohh, no score ${game.player1.wins}!`
  playersTurn.innerText = `${game.player1} It is winner`
} else if (game.determineSecondPlayer() && game.gameEnd) {
  playerTwoWins.innerText = `Ohh, no score ${game.player1.wins}!`
  playersTurn.innerText = `${game.player2} It is winner`
}
  var endDelay = setTimeout(function()
  { for (var i = 0; i < gameContainer.children.length; i++) {
     gameContainer.children[i].innerHTML = ""
    } }, 3000) ;
}

// function checkWinner() {
//     game.determineFirstPlayer()
//     playerOneWins.innerText = `${game.player1.wins} won!`
//     game.determineSecondPlayer()
//     playerTwoWins.innerText = `${game.player1.wins} won!`
//     if (game.gameEnd || game.gameWon) {
//     var endDelay = setTimeout(function()
//     { for (var i = 0; i < gameContainer.children.length; i++) {
//        gameContainer.children[i].innerHTML = ""
//       } }, 3000) ;
//   }
// }
