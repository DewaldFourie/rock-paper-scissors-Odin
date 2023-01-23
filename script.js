 
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
        return 0
    }
    else if (playerOption === "rock" && computerSelection === "scissors") {
        return 1
    }
    else if (playerOption === "paper" && computerSelection === "rock") {
        return 1
    }
    else if (playerOption === "scissors" && computerSelection === "paper") {
        return 1
    }
    else {
        return 2

    }
}

/* Function to run the game, there will be 5 rounds, counts the winner each round, return results of each round and final result of game */
function game(results) {
    let user = 0
    let computer = 0
    for (let i=0; i<5; i++) {
        const playerSelection = prompt("Choose Rock, Paper or Scissors")
        const computerSelection = getComputerChoice()
        result = playRound(playerSelection, computerSelection)
        if (result === 1){
            user += 1
            console.log("You win! " + playerOption + " beats " + computerSelection)
        }
        else if (result === 2){
            computer += 1
            console.log("You Loose! " + computerSelection + " beats " + playerOption)
        }
        else if (result === 0){
            console.log("It is a draw!" + " Both selected " + playerOption)
        }
        console.log("score: " + user)
    }
    if (computer > user){
        console.log("YOU LOSE " + computer + " to " + user)
    }
    else if (user > computer){
        console.log("YOU WIN " + user + " to " + computer)
    }
    else{
        console.log("It is a draw " + user + "/" + computer)
    }

}


game()