function playerChoice(){
    const playerChoice = prompt("Enter your choice: ").toLowerCase()
    console.log("You chose: ",playerChoice)
    return playerChoice
}

function computerChoice(){
    const rpsarray = ['rock', 'paper', 'scissor']
    const computerChoice = Math.floor(Math.random()*rpsarray.length)
    console.log("Computer chose: ",rpsarray[computerChoice])
    return computerChoice
}

playerChoice()
computerChoice()