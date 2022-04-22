// var Player = require("./player");

var player1 = new Player(id, token);
var player2 = new Player(id, token);

class Game{
  constructor() {
    this.player1 = []
    this.player2 = []
    this.turn = player1
  }
   takeTurn() {
      if (this.turn === player1) {
        this.turn = player2
    } else if (this.turn === player2) {
      this.turn = player1
    }
   }
   showWinner() {
     // if click 1 2 3 horizantally you ll // WARNING:
     // '' 4 5 6
     // 7 8 9
     // 1 4 7  vertically
     //2 5 8
     // 3 6 9
     // 1 5 9 and 3 5 7 diagnal
   }
  }
