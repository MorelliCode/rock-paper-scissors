
const playerEmoji = document.getElementById("playerSelection");
const pcEmoji = document.getElementById("pcSelection");

const playerScoreText = document.getElementById("playerScore");
const pcScoreText = document.getElementById("pcScore");

const message = document.querySelector(".message");
const endMessage = document.createElement('button');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

var playerSelection;
var pcSelection;

var playerScore = 0;
var pcScore = 0;

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
    updateMessage();
    updateScores();
    checkGameEnd();
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

function updateMessage(){
    if(playerSelection === pcSelection){
        message.textContent = "It's a draw!";
    }
    else if(playerSelection === 'rock' && pcSelection === 'paper'){
        message.textContent = "You lose! Paper beats Rock!";
    }
    else if(playerSelection === 'rock' && pcSelection === 'scissors'){
        message.textContent = "You win! Rock beats Scissors!";
    }
    else if(playerSelection === 'paper' && pcSelection === 'scissors'){
        message.textContent = "You lose! Scissors beats Paper!";
    }
    else if(playerSelection === 'paper' && pcSelection === 'rock'){
        message.textContent = "You win! Paper beats Rock!";
    }
    else if(playerSelection === 'scissors' && pcSelection === 'paper'){
        message.textContent = "You win! Scissors beats Paper!";
    }
    else if(playerSelection === 'scissors' && pcSelection === 'rock'){
        message.textContent = "You lose! Rock beats Scissors!";
    }
    
    
}

function updateScores(){
    if (playerSelection === pcSelection){
        
    }
    else if(playerSelection === 'rock' && pcSelection === 'paper'){
        pcScore++;
    }
    else if(playerSelection === 'rock' && pcSelection === 'scissors'){
        playerScore++;
    }
    else if(playerSelection === 'paper' && pcSelection === 'scissors'){
        pcScore++;
    }
    else if(playerSelection === 'paper' && pcSelection === 'rock'){
        playerScore++;
    }
    else if(playerSelection === 'scissors' && pcSelection === 'paper'){
        playerScore++;
    }
    else if(playerSelection === 'scissors' && pcSelection === 'rock'){
        pcScore++;
    }

    playerScoreText.textContent = `${playerScore}/5`;
    pcScoreText.textContent = `${pcScore}/5`;
    
}

function checkGameEnd(){
    if (playerScore === 5 || pcScore === 5){
        document.querySelector(".weapons").innerHTML = "";
       
        if ( playerScore === 5){
            message.textContent = "You win!";
        }
        else if ( pcScore === 5){
            message.textContent = "You lose!";
        } 

        endMessage.textContent = "Play again?";
        endMessage.addEventListener("click", function() {
            location.reload();
        });
        message.appendChild(endMessage);
    }
}