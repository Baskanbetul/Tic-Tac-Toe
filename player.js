// var Game = require("./game");



class Player{
  constructor(id,token) {
    this.id = id
    this.token = token
    this.isWinner = false
    // this.wins = []
    }
  increaseWins() {
    this.wins++
  }
}
