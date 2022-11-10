let firstCard = 5
let secondCard = 3
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 21) {
    message = "Do you want to draw a new card?" 
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game."
    isAlive = false
} 

console.log(message)

