
const playerEmoji = document.getElementById("playerSelection");
const pcEmoji = document.getElementById("pcSelection");

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

var playerSelection;
var pcSelection;

// Add event listeners to the buttons
// Once clicked, they start the function
rock.addEventListener("click", function() {
    console.log(rock.id);
    playerSelection = rock.id;
    playRound();
})

paper.addEventListener("click", function() {
    console.log(paper.id);
    playerSelection = paper.id;
    playRound();
})

scissors.addEventListener("click", function() {
    console.log(scissors.id);
    playerSelection = scissors.id;
    playRound();
})

function playRound(){
    getPcSelection();
    updateEmojis();


}

function getPcSelection(){
    pcSelection = Math.random();
    if (pcSelection < 0.34){
        pcSelection = 'rock';
    }
    else if (pcSelection <= 0.67){
        pcSelection = 'paper';
    }
    else {
        pcSelection = 'scissors';
    }
    console.log(pcSelection);
}

function updateEmojis(){
    switch (playerSelection){
        case "rock":
            playerEmoji.textContent = '✊';
            break
        case "paper":
            playerEmoji.textContent = '✋';
            break
        case "scissors":
            playerEmoji.textContent = '✌';
            break
    }
    switch (pcSelection){
        case "rock":
            pcEmoji.textContent = '✊';
            break
        case "paper":
            pcEmoji.textContent = '✋';
            break
        case "scissors":
            pcEmoji.textContent = '✌';
            break
    }
}