let userScore = 0;
let compScore = 0;

let userwin = true ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetButton = document.querySelector("#resetButton")

choices.forEach(choice => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
});

const compGen = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random ()*3);
    return options[randomIdx];
}

const playgame = (userChoice) => {
    const compChoice = compGen();
    if (userChoice === compChoice) {
        Drawgame();
    }
    else{
        
        if (userChoice === "rock") {
            //scissors and paper
            userwin = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper") { // rock and scissors
            userwin = compChoice === "scissors" ? false : true ;
        }else{ 
            // paper and rock
            userwin = compChoice === "rock" ? false : true ;
        }
        showWinner(userwin,userChoice,compChoice);
    }

}

const Drawgame = () => {
    msg.innerText = "Game was Draw"
    msg.style.background = "#032437";
}

const showWinner = (userwin , userChoice,compChoice) => {
    if(userwin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost ! ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
}

resetButton.addEventListener ("click" , () => {
    userScore=0;
    userScorePara.innerText = userScore;
    compScore=0;
    compScorePara.innerText = compScore;
    msg.innerText = "Move your turn !";
    msg.style.background = "#032437";
})