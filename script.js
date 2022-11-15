let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() { 

    let randomNumber = Math.floor( Math.random() * 13) + 1 // Value 1-13
    if (randomNumber > 10) {
        return 10 
    } else if (randomNumber === 1) {
        return 11 
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // Generate two ranom numbers
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Re-assign the cards and sum variable so that the game can start
    renderGame()
}

function renderGame() {
    
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?" 
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game."
        isAlive = false
    } 
  
   messageEl.textContent = message
}

function newCard() {
    // Conditions for a new card 
    if(isAlive === true && hasBlackJack === false) {
      
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame();

        }

}

