let firstCard = 5
let secondCard = 3
let sum = firstCard + secondCard + 15
let hasBlackJack = false

if (sum <= 21) {
    console.log("Do you want to draw a new card?") 
} else if (sum === 21) {
    console.log("You have got Blackjack")
    hasBlackJack = true
} else {
    console.log("You are out of the game")
} 

console.log(hasBlackJack);