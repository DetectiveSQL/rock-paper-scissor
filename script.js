function playerChoice(){
    const playerChoice = prompt("Enter your choice: ").toLowerCase()
    console.log("You chose: ",playerChoice)
    return playerChoice
}

function computerChoice(){
    const rpsarray = ['rock', 'paper', 'scissor']
    const computerChoice = Math.floor(Math.random()*rpsarray.length)
    console.log("Computer chose: ",rpsarray[computerChoice])
    return rpsarray[computerChoice]
}

function winCondition(playerSelection, computerSelection){
    const winCondition = {rock:'scissor', scissor:'paper', paper:'rock'};

    return winCondition[playerSelection]===computerSelection ? console.log('You win!'):console.log('Computer wins!')
}

function playRound(){
    let playerSelection = playerChoice()
    return !['rock', 'paper', 'scissor'].includes(playerSelection) ? alert('Invalid Choice'):winCondition(playerSelection,computerChoice())
}

playRound()