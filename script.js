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
    userImg.style.visibility = "visible";

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
    cpuImg.style.visibility = "visible";
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
