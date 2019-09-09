let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const userChoice_img = document.getElementById("user-choice");
const computerChoice_img = document.getElementById("computer-choice");
const winnerElements = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['rock', 'scissors']
};

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return choices[Math.floor(Math.random() * 5)];
}

function draw() {
    result_p.innerHTML = "draw!";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerChoice} beats ${userChoice}. You lose!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    computerChoice_img.src = `images/${computerChoice}.png`;
    userChoice_img.src = `images/${userChoice}.png`;
    if (computerChoice === userChoice) {
        draw();
    } else {
        winnerElements[userChoice].includes(computerChoice) ?
            win(userChoice, computerChoice) : lose(userChoice, computerChoice);
    }
}

function main() {
    for (let elementsByClassNameKey of document.getElementsByClassName("choice")) {
        elementsByClassNameKey.addEventListener('click', function() {
            game(this.getAttribute("id"));
        })
    }
}

main();