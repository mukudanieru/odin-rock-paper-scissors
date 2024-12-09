const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
    // 
    // 
    // 
    // 
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
