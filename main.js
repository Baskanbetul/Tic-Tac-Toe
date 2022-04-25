// Global Variables
var game = new Game;

//querySelectors
var gameBoard = document.querySelector("#gameContainer");
var noWinner = document.querySelector('.no-winner')
var playersTurn = document.querySelector('.turn-message');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');

// event eventlistener
gameBoard.addEventListener('click',function(){
  addToken()
  checkWinner()

 })


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
    checkDrawGame ()

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
    if (game.checkGameStatus() === true ) {
      hide(playersTurn);
      show(noWinner);
    }
  }

  // function checkWinner() {
  //   if (game.determineFirstPlayer()) {
  //   playerOneWins.innerText = `wins ${game.player1.wins}`
  // } else if (game.determineSecondPlayer()) {
  //   playerTwoWins.innerText = `wins ${game.player2.wins}`
  // }  for (var i = 0; i < gameContainer.children.length; i++) {
  //     gameContainer.children[i].innerHTML = ""
  // }

  function checkWinner() {
    game.determineFirstPlayer()
    playerOneWins.innerText = `wins ${game.player1.wins}`
    game.determineSecondPlayer()
    playerTwoWins.innerText = `wins ${game.player2.wins}`
    if (game.gameEnd) {
    var endDelay = setTimeout(function()
    { for (var i = 0; i < gameContainer.children.length; i++) {
       gameContainer.children[i].innerHTML = ""
      } }, 3000) ;
  }
}
// Var endDelay = setTimeout(function() { for (var i = 0; i < gameContainer.children.length; i++) {
//  gameContainer.children[i].innerHTML = ""
// } }, 3000) ;
    // if (game.winner === game.player1) {
        // game.player1.isWinner = true   // player1 wins stop the game clear the board
        // game.player1.innerText = `wins ${game.player1.wins}`
    // } else if (game.winner === game.player2) {
      // game.player2.isWinner = true
      // game.player2.innerText = `wins ${game.player2.wins}`
      // player2 won stop game clear the board
    // }




// playerOneWins
// playertwowins
