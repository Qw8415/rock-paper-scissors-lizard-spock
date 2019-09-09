const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rules = {
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

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    if (computerChoice === userChoice) {
        console.log("draw!");
    } else {
        rules[userChoice].includes(computerChoice) ? console.log("User win!") : console.log("Computer win!");
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