let computer = 0, player = 0, round = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const restart = document.querySelector("#restart");
const scoreContainer = document.querySelector(".scores");
const statusContainer = document.querySelector(".status");

const playerscoreDisplay = document.createElement("h1");
const computerscoreDisplay = document.createElement("h1");
const roundStatus = document.createElement("h1");
const gameStatus = document.createElement("h1");

playerscoreDisplay.setAttribute('id', 'playerscore');
computerscoreDisplay.setAttribute('id', 'computerScore');
roundStatus.setAttribute('id', 'roundStatus');
gameStatus.setAttribute('id', 'gameStatus');

roundStatus.textContent = "";
gameStatus.textContent = "";
playerscoreDisplay.textContent = `Player Score: ${player}`;
computerscoreDisplay.textContent = `Computer score: ${computer}`;

scoreContainer.appendChild(playerscoreDisplay);
scoreContainer.appendChild(computerscoreDisplay);
statusContainer.appendChild(roundStatus);
statusContainer.appendChild(gameStatus);




const getComputerChoice = () => {
    return Math.floor(Math.random() * 10 % 3);
};
const choices = [rock, paper, scissors];
const playGame = (playerpick, computerpick) => {
    round++;

    let playerChoice, computerChoice;

    switch (playerpick) {
        case 0: playerChoice = "Rock"; break;
        case 1: playerChoice = "Paper"; break;
        case 2: playerChoice = "Scissors"; break;
    }

    switch (computerpick) {
        case 0: computerChoice = "Rock"; break;
        case 1: computerChoice = "Paper"; break;
        case 2: computerChoice = "Scissors"; break;
    }

    if (computerpick === playerpick) {
        roundStatus.textContent = "SAD DAYS, IT'S A DRAW XD";
    } else if ((computerpick === 0 && playerpick === 2) || computerpick === 1 && playerpick === 0 || computerpick === 2 && playerpick === 1) {
        computer++;
        roundStatus.textContent = "YOU LOST :( GGS";
    } else {
        player++;
        roundStatus.textContent = "YOU WON :) GGEZ";
    }

    gameStatus.textContent = `You picked ${playerChoice}, Computer picked ${computerChoice}.`;
    playerscoreDisplay.textContent = `Player Score: ${player}`;
    computerscoreDisplay.textContent = `Computer score: ${computer}`;
};

const restartGame = () => {
    player = 0;
    computer = 0;
    playerscoreDisplay.textContent = `Player Score: ${player}`;
    computerscoreDisplay.textContent = `Computer score: ${computer}`;
    roundStatus.textContent = "";
    gameStatus.textContent = "";
};

choices.forEach((choice, index) => {
    choice.addEventListener("click", () => playGame(index, getComputerChoice()));
});

restart.addEventListener("click", () => restartGame());
