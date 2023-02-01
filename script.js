 
/* Basic JAVASCRIPT code for a console rock, paper, scissors game */

/* Function to get the computers randomly selected choice */
function getComputerChoice() {
    let options = [
        "rock",
        "paper",
        "scissors"
    ]
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    console.log("the C chose " + computerChoice)
    return computerChoice
}

/* Function to determine who wins the round, using basic comparing statements */
function playRound(playerSelection, computerSelection) {
    playerOption = playerSelection.toLowerCase()
    
    if (playerOption === computerSelection) {
        return ["It is a draw!" + " Both selected " + playerOption, 0]
    }
    else if (playerOption === "rock" && computerSelection === "scissors") {
        return ["You win! " + playerOption + " beats " + computerSelection, +1]
    }
    else if (playerOption === "paper" && computerSelection === "rock") {
        return ["You win! " + playerOption + " beats " + computerSelection, +1]
    }
    else if (playerOption === "scissors" && computerSelection === "paper") {
        return ["You win! " + playerOption + " beats " + computerSelection, +1]
    }
    else {
        return ["You Loose! " + computerSelection + " beats " + playerOption, 0]
    }
    
}

/* Function to run the game, counts the winner each round, return results of each round and final result of game */
function game() {

    const rockBtn = document.getElementById('rock')
    const paperBtn = document.getElementById('paper')
    const scissorsBtn = document.getElementById('scissors')

    const scoreDiv = document.getElementById('score')
    const roundDiv = document.getElementById('round')
    const dispDiv = document.getElementById('display')
    const finalDiv = document.getElementById('final')

    let score = 0;
    let round = 0;
  
    // action once the 'rock' button is clicked
    rockBtn.addEventListener("click", function(e){
        let playerSelection = 'rock'
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        console.log(result[0]);
        dispDiv.textContent = result[0]
        scoreDiv.textContent = "Score: " + (score += result[1]);
        round == round++
        roundDiv.textContent = "Round No. " + round + " out of 5."
        if ( round == 5 && score < 3){
            finalDiv.textContent = "YOU LOSE !!!"
        }
        else if ( round == 5 && score >= 3){
            finalDiv.textContent = "CONGRATULAIONS, YOU WIN !!!"
        }
    })

    // action once the 'paper' button is clicked
    paperBtn.addEventListener("click", function(e){
        let playerSelection = 'paper'
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        console.log(result[0]);
        dispDiv.textContent = result[0]
        scoreDiv.textContent = "Score: " + (score += result[1]);
        round == round++
        roundDiv.textContent = "Round No. " + round + " out of 5."
        if ( round == 5 && score < 3){
            finalDiv.textContent = "YOU LOSE !!!"
        }
        else if ( round == 5 && score >= 3){
            finalDiv.textContent = "CONGRATULAIONS, YOU WIN !!!"
        }
    })
    
    // action once the 'scissors' button is clicked
    scissorsBtn.addEventListener("click", function(e){
        let playerSelection = 'scissors'
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        console.log(result[0]);
        dispDiv.textContent = result[0]
        scoreDiv.textContent = "Score: " + (score += result[1]);
        round == round++
        roundDiv.textContent = "Round No. " + round + " out of 5."
        if ( round == 5 && score < 3){
            finalDiv.textContent = "YOU LOSE !!!"
        }
        else if ( round == 5 && score >= 3){
            finalDiv.textContent = "CONGRATULAIONS, YOU WIN !!!"
        }
    })
 
}


game()