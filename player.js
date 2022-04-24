// var Game = require("./game");



class Player{
  constructor(id,token) {
    this.id = id
    this.token = token
    this.isWinner = true
    this.wins = 0
  }
  increaseWins() {
    this.wins++
  }
}
