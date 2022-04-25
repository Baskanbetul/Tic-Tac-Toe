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
gameBoard.addEventListener('click',addToken)

//Functions

function addToken() {
  var showTurn = event.target
  if (game.turn === game.player1 && showTurn.innerText === '') {
    showTurn.innerText = "💀"
    game.gameContainer[event.target.id] = 1
    game.takeTurn();
  } else if (game.turn === game.player2 && showTurn.innerText === '') {
    showTurn.innerText = "👽"
    game.gameContainer[event.target.id] = 2
    game.takeTurn();
  }
  backToTurn()
  checkWinner();
  showWinnerText()
}

function showWinnerText() {
  if (game.winner === game.player1) {
    playerOneWins.innerText = game.player1.wins
    playersTurn.innerText = `${game.player1.token} is WINNER`
  } else if (game.winner === game.player2) {
    playerTwoWins.innerText = game.player2.wins
    playersTurn.innerText = `${game.player2.token} is WINNER`
  }
}

function checkWinner() {
  game.determineFirstPlayer();
  game.determineSecondPlayer();
  checkDrawGame();
  timesUp();
}

function checkDrawGame() {
  if (game.checkDrawStatus() === true) {
    hide(playersTurn);
    show(noWinner);
    game.gameEnd = true
  }
}

function timesUp() {
  if (game.gameEnd) {
    setTimeout(function() {
      game.resetGame()
      hide(noWinner);
      emptyGame();
  }, 1000) ;
 }
  show(playersTurn);
}

function emptyGame() {
  for (var i = 0; i < gameContainer.children.length; i++) {
    gameContainer.children[i].innerHTML = ""
  }
}

function backToTurn() {
  if (game.turn === game.player1) {
    playersTurn.innerText = `it is ${game.player1.token} 's turn`
  } else if (game.turn === game.player2) {
    playersTurn.innerText = `it is ${game.player2.token} 's turn`
  }
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}
