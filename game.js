class Game {
  constructor() {
    this.player1 = new Player(1, "💀" );
    this.player2 = new Player(2, "👽");
    this.gameContainer = ["","","","","","","","",""]
    this.turn = this.player1;
    this.winner = " " ;
    this.gameEnd = false;
  }
  takeTurn() {
    if (this.turn === this.player1) {
      this.turn = this.player2
    } else if (this.turn === this.player2) {
      this.turn = this.player1
    }
  }
  determineFirstPlayer() {
    if((this.gameContainer[0] == 1 && this.gameContainer[1] == 1 && this.gameContainer[2] == 1) ||
       (this.gameContainer[3] == 1 && this.gameContainer[4] == 1 && this.gameContainer[5] == 1) ||
       (this.gameContainer[6] == 1 && this.gameContainer[7] == 1 && this.gameContainer[8] == 1) ||
       (this.gameContainer[0] == 1 && this.gameContainer[3] == 1 && this.gameContainer[6] == 1) ||
       (this.gameContainer[1] == 1 && this.gameContainer[4] == 1 && this.gameContainer[7] == 1) ||
       (this.gameContainer[2] == 1 && this.gameContainer[5] == 1 && this.gameContainer[8] == 1) ||
       (this.gameContainer[0] == 1 && this.gameContainer[4] == 1 && this.gameContainer[8] == 1) ||
       (this.gameContainer[2] == 1 && this.gameContainer[4] == 1 && this.gameContainer[6] == 1) )
    {
       this.winner = this.player1
       // this.player1.isWinner = true;
       this.player1.increaseWins();
       this.gameEnd = true;
    }
  }
  determineSecondPlayer() {
    if((this.gameContainer[0] == 2 && this.gameContainer[1] == 2 && this.gameContainer[2] == 2) ||
       (this.gameContainer[3] == 2 && this.gameContainer[4] == 2 && this.gameContainer[5] == 2) ||
       (this.gameContainer[6] == 2 && this.gameContainer[7] == 2 && this.gameContainer[8] == 2) ||
       (this.gameContainer[0] == 2 && this.gameContainer[3] == 2 && this.gameContainer[6] == 2) ||
       (this.gameContainer[1] == 2 && this.gameContainer[4] == 2 && this.gameContainer[7] == 2) ||
       (this.gameContainer[2] == 2 && this.gameContainer[5] == 2 && this.gameContainer[8] == 2) ||
       (this.gameContainer[0] == 2 && this.gameContainer[4] == 2 && this.gameContainer[8] == 2) ||
       (this.gameContainer[2] == 2 && this.gameContainer[4] == 2 && this.gameContainer[6] == 2) )
    {
       this.winner = this.player2
       // this.player2.isWinner = true;
       this.player2.increaseWins();
       this.gameEnd = true;
    }
  }
  checkDrawStatus() {
    var drawGame = false;
    if (!this.gameContainer.includes("") && this.winner != this.player1 && this.winner != this.player2){
       drawGame = true;
       this.resetGame();
    }
       return drawGame;
    }
  resetGame() {
    this.gameEnd = false
    // this.player1.isWinner = false
    // this.player2.isWinner = false
    this.winner = ""
    this.gameContainer  = ["","","","","","","","",""]
  }
}
