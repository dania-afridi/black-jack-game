let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

let player = {
    name : "Dania",
    chips : 200,
    sayHello: function(){
        console.log("Hejsan!")
    }

}

player.sayHello() // it would just show on console not on site
playerEl.textContent = player.name +": $"+player.chips

let card = []
let sum = 0
let message = ""

let isAlive = false
let hasBlackjack = false

function randomNumber(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber === 1){
        return 11
    } else if (randomNumber > 10){
        return 10
    } else {
    return randomNumber
    }
}

function startGame(){
    isAlive = true
    hasBlackjack = false
    let firstCard = randomNumber()
    let secondCard = randomNumber()
    card = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i =0; i< card.length; i++){
        cardEl.textContent += card[i] + " "
    }

    sumEl.textContent = "Sum: "+sum
    
    if(sum < 21){
        message ="Do you want to draw a new card?"
    } else if(sum === 21){
        message ="You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    
}

function newCard(){
    if(hasBlackjack === false){
            if(isAlive){
            let newCard = randomNumber()
            sum += newCard
            card.push(newCard)
            renderGame()
        }
    }
}