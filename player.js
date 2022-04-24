// var Game = require("./game");



class Player{
  constructor(id,token) {
    this.id = id
    this.token = token
    this.isWinner = true
    this.wins = []
    // this.result = "No winner,Try again"
  }
  increaseWins() {
    this.wins++
  }
}
