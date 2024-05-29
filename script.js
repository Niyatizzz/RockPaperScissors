let userScore = 0;
let pcScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#pc-score");

const genPcChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randindx = Math.floor(Math.random() * 3);
    return options[randindx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };
  
  const showWinner = (userWin, userChoice, pcChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${pcChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${pcChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };

const playGame = (userChoice) => {
    console.log("user choice", userChoice)
    const pcChoice = genPcChoice();
    console.log("pc choice", pcChoice);

    if(userChoice == pcChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = pcChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = pcChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = pcChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, pcChoice);
      }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});