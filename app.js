// let userScore=0;
// let compScore=0;

// const choices=document.querySelectorAll("choice");
// const msg=document.querySelector("msg");

// const genComputerChoice=()=>{
//     //rock,paper,scissors
//     let options=["rock","paper","scissors"];
//     const randIdx=Math.floor(Math.random()*3);
//     return options[randIndex];
// };
// const drawGame =() =>{
// console.log("game was game.");
// msg.innerText="draw";
// };
// const showWinner=(userWin)=>{
//     if(userWin){
//         console.log("you win");
//         msg.innerText="you win";
//     }
//     else{
//         console.log("you lose");
//         msg.innerText="you lose!";
//     }
// }


// const playGame=(userChoice)=>{
//     console.log("choice was clicked",userChoice);
//     //generate computer choice
// const compChoice=genComputerChoice();
// console.log("comp choice",compChoice);
// if(userChoice===compChoice){
//     //draw
//     drawGame();
// }
// else{
//     let userWin=true;
//     if(userChoice==="rock"){
//         //scissor,paper
//         userWin=compChoice=="paper"?false:true;
//     }
//     else if(userChoice==="paper"){
//         //rock scissors
//         userWin=compChoice==="scissors"?false:true;
//     }
//     else{
//         //rock paper
//         userWin=compChoice==="rock"?false:true;
//     }
//     showWinner(userWin);
// }
// };



// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         const userChoice =choice.getAttribute("id");
        
//         playGame(userChoice);
//     });
// });



let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You lost.";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});