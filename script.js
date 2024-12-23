const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const userScoreElement = document.querySelector(".user-container > .user-score");
const computerScoreElement = document.querySelector(".cpu-container > .cpu-score");

const choicesPicker = document.querySelector("#choices-picker");

document.addEventListener("DOMContentLoaded", () => {
    initializeScore();
    getHumanChoice();
});

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
    // let choice;

    choicesPicker.addEventListener("click", (event) => {
        let target = event.target.closest("button");
    
        if (target == null) {
            return;
        }
    
        console.log(target.dataset.choice);
    });
}

function getComputerChoice() {
    const idx = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[idx];
}
