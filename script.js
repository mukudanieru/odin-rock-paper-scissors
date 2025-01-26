const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const userScoreElement = document.querySelector(
    ".user-container > .user-score"
);
const computerScoreElement = document.querySelector(
    ".cpu-container > .cpu-score"
);

document.addEventListener("DOMContentLoaded", () => {
    initializeScore();

    getHumanChoice((humanChoice) => {
        playRound(humanChoice, getComputerChoice());
    });
});

function initializeScore() {
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
        const loseMessages = {
            rock: "Rock is crushed by paper.",
            paper: "Paper is cut by scissors.",
            scissors: "Scissors are crushed by rock.",
        };
        status.textContent = "YOU LOSE!";
        detailedInfo.textContent = loseMessages[computerChoice];
        computerScoreElement.textContent = ++computerScore;
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
