let userScore = 0;
let computerScore = 0;
let rival = document.querySelector("input.rival:checked ~ span").innerHTML;
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
const rivals = {
    'Random guy' : ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    Sheldon : ['spock']
};

function getComputerChoice() {
    const choices = rivals[rival];
    return choices[Math.floor(Math.random() * choices.length)];
}

function draw() {
    userChoice_img.setAttribute('class', 'orange-glow');
    computerChoice_img.setAttribute('class', 'orange-glow');
    result_p.innerHTML = "draw!";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    userChoice_img.setAttribute('class', 'green-glow');
    computerChoice_img.setAttribute('class', 'red-glow');
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userChoice_img.setAttribute('class', 'red-glow');
    computerChoice_img.setAttribute('class', 'green-glow');
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
    for (let element of document.getElementsByClassName("choice")) {
        element.addEventListener('click', function() {
            game(this.getAttribute("id"));
        })
    }
    for (let element of document.getElementsByClassName("rival")) {
        element.addEventListener('change', () => {
            rival = document.querySelector("input.rival:checked ~ span").innerHTML;
        });
    }

}

main();