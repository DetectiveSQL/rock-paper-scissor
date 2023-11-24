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

    return playerSelection===computerSelection ? console.log('Tie'):winCondition[playerSelection]===computerSelection ? console.log('You win!'):console.log('Computer wins!')
}

function playRound(){
    let playerSelection = playerChoice()
    return !['rock', 'paper', 'scissor'].includes(playerSelection) ? 0:winCondition(playerSelection,computerChoice())
}

function game(){
    for (let i=1;i<=5;i++){
        while(true){
            let result = playRound()
            if (result===0){
                alert('Invalid choice')
            }
            else{
                break;
            }
        }
    }
}

game()