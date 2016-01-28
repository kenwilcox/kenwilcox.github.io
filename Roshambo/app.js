// I can't spell, make some constants
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WIN = "win";
const LOST = "lost";

function play(playerChoice) {
  // get the computer choice
  var computerChoice = getComputerChoice();
  // see if the player is the winner
  var winner = isPlayerWinner(playerChoice, computerChoice);   
  if (winner) {
    // if they won - show them
    playerWon(computerChoice);
  } else {
    // if they lost - show them
    playerLost(computerChoice);
  }
  // hide the win or lost message
  hideWinLost(winner);
}

function isPlayerWinner(playerChoice, computerChoice) {
  // if it's a tie, the player wins  
  if (playerChoice == ROCK) {
    // If the computer chose paper the player lost
    if (computerChoice == PAPER) {
      return false;
    } else {
      // anything else, the player wins
      return true;
    }
  } else if (playerChoice == PAPER) {
    // If the computer chose scissors the player lost
    if (computerChoice == SCISSORS) {
      return false;
    } else {
      // anything else the player wins
      return true; 
    }
  } else if (playerChoice == SCISSORS) {
    // If the computer chose rock the player lost
    if (computerChoice == ROCK) {
      return false;
    } else {
      // anything else the player wins
      return true;
    }
  }
}

function getComputerChoice() {
  // get a random number between 1 and 3
  var choice = Math.floor(Math.random() * 3) + 1;
  // "translate" that into rock/paper/scissors values
  if (choice === 1) return ROCK;
  else if (choice === 2) return PAPER;
  // notice we don't need an else here
  // if we got this far, none of the other
  // contidions were met
  return SCISSORS;
}

function playerWon(computerChoice) {
  // make the win box visible
  makeVisible(WIN);
  // set the text to the computer choice
  setMessage(WIN + "-message", computerChoice);
}

function playerLost(computerChoice) {
  // make the lost box visible
  makeVisible(LOST);
  // set the text to the computer choice
  setMessage(LOST + "-message", computerChoice);
}

function hideWinLost(playerWon) {
  var func;
  // set the default timeout to 2 seconds
  var timeout = 2000;
  // Need to capture which function to call
  if (playerWon) {
    func = hideWin;
    // add an additional second so the player can "celebrate"
    timeout = timeout + 1000;
  } else {
    func = hideLost;
  }
  // call the correct function when the timeout has been reached
  window.setTimeout(func, timeout);
}

function hideWin() {
  // hide the win box
  makeHidden(WIN);
}

function hideLost() {
  // hide the lost box
  makeHidden(LOST);
}

function makeVisible(id) {
  // get the html node we want to mess with
  var node = document.getElementById(id);
  // remove hidden from our css classes
  node.classList.remove("hidden");
}

function makeHidden(id) {
  // get the html node we want to mess with
  var node = document.getElementById(id);
  // add hiden to our css class
  node.classList.add("hidden");    
}

function setMessage(id, computerChoice) {
  // get the html node we want to mess with
  var node = document.getElementById(id);
  // update the text content to the value the computer chose
  node.textContent = computerChoice.toUpperCase();
}