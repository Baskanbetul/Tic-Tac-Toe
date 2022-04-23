// var Player = require("./player");


class Game{
  constructor() {
    this.player1 = new Player("Skull", 💀 );
    this.player2 = new Player("Alien", 👽);
    this.turn = this.player1.token;
    this.gameContainer = {box1: '', box2: '', box3: '',
                          box4: '', box5: '', box6: '',
                          box7: '', box8: '', box9: '' }
    // this.moveCounter = 0;
    this.winner = ''
  }
   takeTurn(emoji) {
      if (emoji === this.player1.token) {
        this.turn = this.player2.token
    } else if (emoji === this.player2.token) {
      this.turn = this.player1.token
    }
   }
   determineWinner() {
     if (this.gameContainer.box1 === this.gameContainer.box2 && this.gameContainer.box2 === this.gameContainer.box3 && this.gameContainer.box1 === this.gameContainer.box3) {
       console.log(this.turn);
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
   }
  }
