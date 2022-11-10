let firstCard = 5
let secondCard = 3

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card?") 
} else if (sum === 21) {
    console.log("You have got Blackjack")
} else {
    console.log("You are out of the game")
}