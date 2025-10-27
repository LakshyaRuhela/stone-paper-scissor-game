let userScore = 0;
let comScore = 0;

var choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
var userScorePara = document.querySelector("#userScorePara"); 
var compScorePara = document.querySelector("#compScorePara");

// function to generate computer choice
const computerChoice = ()=>{
    const options = ["rock" , "paper", "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

// function to draw condtion
const drawGame = ()=>{
    msg.innerHTML = "Game was Draw !! play Again ";
    msg.style.backgroundColor="orange"
}

// function to show winner
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerHTML = `You Win !!`;
        msg.style.backgroundColor = "green";

    }else{
        comScore++;
        compScorePara.innerText = comScore;
        msg.innerHTML = `You Lose !!`;
        msg.style.backgroundColor = "red";

    }
}

// funtion to play game
const playGame = (userChoice) => {
  // computer choice
  const compChoice = computerChoice();
  // compare
  if(userChoice === compChoice){
    // Draw game condition
    drawGame();
  }else{
    let userWin = true;
    if (userChoice === "rock") {
      // com either paper , scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // comp either rock , scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // either rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice); // function to show winner
  }
  
};

// to get the user Choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // get attribute to get ID
    playGame(userChoice); // to start the game
  });
});
