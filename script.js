const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const userScoreElement = document.querySelector(".user-container > .user-score");
const computerScoreElement = document.querySelector(".cpu-container > .cpu-score");

initializeScore();

function initializeScore() {
    userScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}

function playRound(humanChoice, computerChoice) {
    alert(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        alert(`It's a tie! Both chose ${humanChoice}.`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You won! ${humanChoice} crushes ${computerChoice}.`);
        alert(`You won! ${humanChoice} crushes ${computerChoice}.`)
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You won! ${humanChoice} covers ${computerChoice}.`);
        alert(`You won! ${humanChoice} covers ${computerChoice}.`)
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You won! ${humanChoice} cut ${computerChoice}.`)
        alert(`You won! ${humanChoice} cut ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}.`)
        alert(`You lost! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

function getHumanChoice() {
    let choice;

    while (true) {
        const PROMPT_TEXT = `Choose between these:
        [1] - rock
        [2] - paper
        [3] - scissors`;
    
        choice = Number(prompt(PROMPT_TEXT));
        
        if ((choice - 1) >= (CHOICES.length - CHOICES.length) && (choice - 1) < CHOICES.length) {
            return CHOICES[choice - 1];
        }

        alert("Invalid choice: try again!");
    }
}

function getComputerChoice() {
    const idx = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[idx];
}
