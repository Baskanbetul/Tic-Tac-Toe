// var Player = require("./player");



class Game {
  constructor() {
    this.player1 = new Player(1, "💀" );
    this.player2 = new Player(2, "👽");
    this.gameContainer = ["","","","","","","","",""]
    this.turn = this.player1; //this.turn = this.plater.token
    // this.gameContainer = {box1: '', box2: '', box3: '',
    //                       box4: '', box5: '', box6: '',
    //                       box7: '', box8: '', box9: '' }
    // this.moveCounter = 0;
    this.winner = ""
  }
   // takeTurn(emoji) {
   //    if (emoji === this.player1.token) {
   //      this.turn = this.player2.token
   //  } else if (emoji === this.player2.token) {
   //    this.turn = this.player1.token
   //  }
   // }
   takeTurn() {
      if (this.turn === this.player1) {
        this.turn = this.player2
    } else if (this.turn === this.player2) {
      this.turn = this.player1
    }
   }

    determineFirstPlayer() {
       if((this.gameContainer[0] === 1 && this.gameContainer[1] === 1 && this.gameContainer[2] === 1) ||
          (this.gameContainer[3] === 1 && this.gameContainer[4] === 1 && this.gameContainer[5] === 1) ||
          (this.gameContainer[6] === 1 && this.gameContainer[7] === 1 && this.gameContainer[8] === 1) ||
          (this.gameContainer[0] === 1 && this.gameContainer[3] === 1 && this.gameContainer[6] === 1) ||
          (this.gameContainer[1] === 1 && this.gameContainer[4] === 1 && this.gameContainer[7] === 1) ||
          (this.gameContainer[2] === 1 && this.gameContainer[5] === 1 && this.gameContainer[8] === 1) ||
          (this.gameContainer[0] === 1 && this.gameContainer[4] === 1 && this.gameContainer[8] === 1) ||
          (this.gameContainer[2] === 1 && this.gameContainer[4] === 1 && this.gameContainer[6] === 1) )
        {
          this.winner = this.player1
          console.log(this.winner)
          this.player1.increaseWins();

    }
  }

    determineSecondPlayer() {
       if ((this.gameContainer[0] === 2 && this.gameContainer[1] === 2 && this.gameContainer[2] === 2) ||
          (this.gameContainer[3] === 2 && this.gameContainer[4] === 2 && this.gameContainer[5] === 2) ||
          (this.gameContainer[6] === 2 && this.gameContainer[7] === 2 && this.gameContainer[8] === 2) ||
          (this.gameContainer[0] === 2 && this.gameContainer[3] === 2 && this.gameContainer[6] === 2) ||
          (this.gameContainer[1] === 2 && this.gameContainer[4] === 2 && this.gameContainer[7] === 2) ||
          (this.gameContainer[2] === 2 && this.gameContainer[5] === 2 && this.gameContainer[8] === 2) ||
          (this.gameContainer[0] === 2 && this.gameContainer[4] === 2 && this.gameContainer[8] === 2) ||
          (this.gameContainer[2] === 2 && this.gameContainer[4] === 2 && this.gameContainer[6] === 2) )
     {
          this.winner = this.player2
          console.log(this.winner)
          this.player2.increaseWins();
    }
    }

    //how to check win function
   // determineWinner() {
   //   if (this.gameContainer.box1 === this.gameContainer.box2 && this.gameContainer.box2 === this.gameContainer.box3) {
   //     // return this.turn = or winnwr
   //     console.log('firstrow');
   //   }
     // } else if (this.gameContainer.box4 === this.gameContainer.box5 && this.gameContainer.box5 === this.gameContainer.box6 && this.gameContainer.box4 === this.gameContainer.box5) {

     }
     // } else if () {}
     // if (1===2 && 2===3 && 3==)
     // if click 1 2 3 horizantally you ll // WARNING:
     // '' 4 5 6
     // 7 8 9
     // 1 4 7  vertically
     //2 5 8
     // 3 6 9
     // 1 5 9 and 3 5 7 diagnal
