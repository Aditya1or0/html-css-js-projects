let userScore = 0;
let compScore = 0;
const userScores = document.querySelector("#user-score")
const msg = document.querySelector("#msg")
const compScores = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    //rock,paper,scissor
    const randIdx = Math.floor(Math.random() * 3); //math.floor function don't show decimal values eg 1.396=>1
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => { //user win value is est to true
    if (userWin) {
        userScore++;
        userScores.innerText = userScore;
        msg.innerText = `You WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScores.innerText = compScore;
        msg.innerText = `You LOSE! Your ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissor,paper these are the choices of computer 
            userWin = compChoice === "paper" ? false : true;//false means user lost
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if(userChoice === "scissors") {//for scissor
            // computer choice=> rock,paper
            userWin = compChoice === "rock" ? false : true;// if rock appears then user lost otherwise for paper user wins,basically true is written for paper condition
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});