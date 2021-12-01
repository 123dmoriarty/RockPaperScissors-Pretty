//VARIABLES
let userChoice; // get value from R/P/S buttons
let compChoice; // random choice of R/P/S
let userScore = 0, compScore = 0; // Keep track of wins/losses
//let result; maybe result variable

// Statup functionality *NOT A FUNCTION*
// Add event listeners to all 3 buttons
// Onclick call getInput function
document.getElementById("rock").addEventListener("click", function() {
  getInput(this.id);
});
document.getElementById("paper").addEventListener("click", function() {
  getInput(this.id);
});
document.getElementById("scissors").addEventListener("click", function() {
  getInput(this.id);
});

// Get input (User's Choice of RPS)
function getInput(choice)
{
  userChoice = choice;
  // console.log(choice);
  getRandomChoice();
}

// Get random computer's choice of RPS
function getRandomChoice()
{
  // randomly chose 1 of 3 options
  compChoice = Math.floor(Math.random() * 3); // sets compchoice equal to 0 1 or 2
  // 0 is rock
  // 1 is paper
  // 2 is scissors
  // console.log(compChoice);
}

// Comparing user vs. comp choices
function compareChoices()
{
  // switch statment for ALL possibilities
  switch (userChoice + compChoice)
  {
    case "scissors2" // scissors vs scissors
    case "paper1": //paper vs paper
    case "rock0": //rock vs rock
      resultMessage = "Draw!"; // rock vs rock

        break;
    case "scissors0": // scossors vs rock
    case "paper2":  // paper vs scissors
    case "rock1""   // rock vs paper
      resultMessage = "you Lose :("; // rock vs paper
      updateScore("comp");
        break;
      case "scissors1": //scissors vs paper
      case "paper0":  // paper vs rock
      case "rock2":   //rock vs scissors
        resultMessage = " You Win!"; // rock vs Scissors
        updateScore("user");
      break;
    default:
    resultMessage = "Something Went Wrong...";
  }

  displayresult();
}

// Display the round's winner
function displayresult()
{
  // get HTML element to display the text and assign resultMessage string
  document.getElementById("output").textContent = resultMessage;
  // assign string value
}

//Update score
function updateScore(winner)
{
  if (winner == "user") {
    userScore++;
  }
      else
    {
      compScore++;
    }


  // increment user ir comp score base on round winner
  // update score on screen
  winner++;
  console.console.log(compScore + " : " + userScore);
}

//Reset Score
function resetScore()
{
  // set user and comp score to 0
  // update score on screen
}
