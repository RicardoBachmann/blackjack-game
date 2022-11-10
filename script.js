let firstCard = 5
let secondCard = 20
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true

if (sum <= 21) {
    console.log("Do you want to draw a new card?") 
} else if (sum === 21) {
    console.log("You have got Blackjack")
    hasBlackJack = true;
} else {
    isAlive = false;
    console.log("You are out of the game!")
} 

console.log(isAlive)

