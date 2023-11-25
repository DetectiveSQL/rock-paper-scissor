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
    //if Player wins return 1, if computer wins return 2, if tie return 3
    return playerSelection===computerSelection ? 3:winCondition[playerSelection]===computerSelection ? 1:2
}

function playRound(){
    let playerSelection = playerChoice()
    //if invalid choice return 0
    return !['rock', 'paper', 'scissor'].includes(playerSelection) ? 0:winCondition(playerSelection,computerChoice())
}

function game(){
    let pwin = 0
    let cwin = 0
    let ties = 0
    let inval = 0
    for (let i=1;i<=5;i++){
        while(true){
            let result = playRound()
            const resultSet = {
                0:'Invalid Choice. Please enter Rock, Paper or Scissor', 1:'You win', 2:'Computer Wins', 3: 'Tie'
            };
            if (result===0){
                alert(resultSet[0])
                inval++
            } else{
                if (result===1){
                    console.log(resultSet[1])
                    pwin++
                } else if(result===2){
                    console.log(resultSet[2])
                    cwin++
                } else if(result===3){
                    console.log(resultSet[3])
                    ties++
                }
                break;
            }
        }
    }
    let finalscore = 'Player Wins-'+pwin+' '+'Computer Wins-'+cwin+' '+'Ties-'+ties+' '+'Invalid Choice-'+inval
    return console.log(finalscore)
}

game()