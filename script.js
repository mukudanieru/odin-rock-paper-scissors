const CHOICES = ["rock", "paper", "scissors"];

function getHumanChoice() {
    let choice;

    while (true) {
        const PROMPT_TEXT = `Choose between these:
        [1] - Rock
        [2] - Paper
        [3] - Scissors`;
    
        choice = Number(prompt(PROMPT_TEXT));
        
        if ((choice - 1) >= (CHOICES.length - CHOICES.length) && (choice - 1) < CHOICES.length) {
            return CHOICES[choice - 1];
        }

        alert("Invalid choice: Try again!");
    }
}

function getComputerChoice() {
    const idx = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[idx];
}
