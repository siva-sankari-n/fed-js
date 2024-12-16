let playgame= confirm("Shall we play rock, paper and scissors");
if(playgame){
    let playerchoice = prompt("Please enter rock , paper or scissors");
    if(playerchoice){
        let playerOne=playerchoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computer_choice=Math.floor(Math.random()*3 + 1);
            let computer = computer_choice === 1 ? "rock" : computer_choice === 2 ? "paper" : "scissors"
            switch(playerOne){
                case computer:
                    alert("Tie Game !!!");
                    break;
                case "rock":
                    if (computer=="paper"){
                        alert("computer wins!");
                    } else{
                        alert("playerOne wins!");
                    }
                    break;
                case "paper":
                    if (computer=="scissors"){
                        alert("computer wins!");
                    } else{
                        alert("playerOne wins!");
                    }
                    break;
                default:
                    if (computer=="rock"){
                        alert("computer wins!");
                    } else{
                        alert("playerOne wins!");
                    }
                    break;
            }
            let playAgain=confirm("Play Agian?");
            playAgain? location.reload(): alert("Ok , thanks for playing")
        }
        else{
            alert("You didn't enter rock,paper or scissors");
        }
    }
    else{
        alert("I guess you changed your mind. Maybe next time")
    }
}
else{
    alert("Ok, maybe next time")
}