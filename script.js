const CHOICES = ["rock", "paper", "scissors"];

let humanScore;
let computerScore;

const userScoreElement = document.querySelector(
    ".user-container > .user-score"
);
const computerScoreElement = document.querySelector(
    ".cpu-container > .cpu-score"
);

// MAIN
document.addEventListener("DOMContentLoaded", () => {
    initializeScore();

    getHumanChoice((humanChoice) => {
        if (humanScore < 5 && computerScore < 5) {
            playRound(humanChoice, getComputerChoice());
        }
    });

    restartGame();
});

function initializeScore() {
    humanScore = 0;
    computerScore = 0;
    userScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}

function playRound(humanChoice, computerChoice) {
    displayChoices(humanChoice, computerChoice);

    const status = document.querySelector(".info-text > #status");
    const detailedInfo = document.querySelector(".info-text > #detailed-info");

    const winMessages = {
        rock: "Rock crushes scissors.",
        paper: "Paper covers rock.",
        scissors: "Scissors cut paper.",
    };
    const loseMessages = {
        rock: "Rock is crushed by paper.",
        paper: "Paper is cut by scissors.",
        scissors: "Scissors are crushed by rock.",
    };

    if (humanChoice === computerChoice) {
        status.textContent = "IT'S A TIE!";
        detailedInfo.textContent = `Both chose ${humanChoice}.`;
        return;
    }

    if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        status.textContent = "YOU WIN!";
        detailedInfo.textContent = winMessages[humanChoice];
        userScoreElement.textContent = ++humanScore;
    } else {
        status.textContent = "YOU LOSE!";
        detailedInfo.textContent = loseMessages[humanChoice];
        computerScoreElement.textContent = ++computerScore;
    }

    if (humanScore === 5 || computerScore === 5) {
        endGame(humanChoice, computerChoice, winMessages, loseMessages);
    }
}

function displayChoices(humanChoice, computerChoice) {
    const rockImg = "./assets/rock.svg";
    const paperImg = "./assets/paper.svg";
    const scissorsImg = "./assets/scissors.svg";

    const userImg = document.querySelector(".user-choice > .img-choice");

    switch (humanChoice) {
        case "rock":
            userImg.src = rockImg;
            break;
        case "paper":
            userImg.src = paperImg;
            break;
        case "scissors":
            userImg.src = scissorsImg;
            break;
    }
    if (!userImg.style.visibility) {
        userImg.style.visibility = "visible";
    }

    const cpuImg = document.querySelector(".cpu-choice > .img-choice");

    switch (computerChoice) {
        case "rock":
            cpuImg.src = rockImg;
            break;
        case "paper":
            cpuImg.src = paperImg;
            break;
        case "scissors":
            cpuImg.src = scissorsImg;
            break;
    }
    if (!cpuImg.style.visibility) {
        cpuImg.style.visibility = "visible";
    }
}

function endGame(humanChoice, computerChoice, winMessages, loseMessages) {
    const status = document.querySelector(".info-text > #status");
    const detailedInfo = document.querySelector(".info-text > #detailed-info");
    const tryAgainButton = document.querySelector(
        ".info-text > #try-again-button"
    );

    if (humanScore === 5) {
        status.style.fontSize = "16px";
        status.textContent = "CONGRATULATIONS!";
        detailedInfo.textContent = `YOU WON! ${winMessages[humanChoice]}`;
    } else if (computerScore === 5) {
        status.textContent = "GAME OVER!";
        detailedInfo.textContent = `YOU LOST! ${loseMessages[humanChoice]}`;
    }

    tryAgainButton.style.visibility = "visible";
}

function restartGame() {
    const tryAgainButton = document.querySelector(
        ".info-text > #try-again-button"
    );

    tryAgainButton.addEventListener("click", (event) => {
        location.reload();
    });
}

function getHumanChoice(callback) {
    const choicesPicker = document.querySelector("#choices-picker");

    choicesPicker.addEventListener("click", (event) => {
        let target = event.target.closest("button");

        if (target == null) {
            return;
        }

        callback(target.dataset.choice);
    });
}

function getComputerChoice() {
    const idx = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[idx];
}
