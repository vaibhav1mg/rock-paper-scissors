const choices = ['rock', 'paper', 'scissors'];

let mainStatus = document.querySelector('#mainStatus');
let subStatus = document.querySelector('#subStatus');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let playerMoveImage = document.getElementById('playerMoveImage');
let ComputerMoveImage = document.getElementById('ComputerMoveImage');
let modal = document.getElementById('modal');
let resetButton = document.getElementById('reset');
let modalText = document.getElementById('modal-text');



function getComputerChoice() {
   return choices[Math.floor( Math.random()  * 3) ];
}

let winCount = 0;
let lostCount = 0;


function game(x) {
    let y = x;
    let z = getComputerChoice();

    if(lostCount >= 5 || winCount >= 5) {

        if(lostCount < winCount ) {
            modalText.textContent = "You won!";
    
        } else if(lostCount > winCount ) {
            modalText.textContent = "You lost...";
            
        } 

        showWinnerModal();
        
    }
    else{
        if (y === z ) {
            mainStatus.textContent = `It's a tie!`;
            subStatus.textContent = `${y} ties with ${z}`;
        } else if ((y === 'rock' && z === 'paper') || (y === 'scissors' && z === 'rock') || (y === 'paper' && z === 'scissors')) {
            mainStatus.textContent = `You lost!`;
            subStatus.textContent = `${y} is beaten by ${z}`;
            lostCount++;
        } else if ((y === 'rock' && z === 'scissors') || (y === 'scissors' && z === 'paper') || (y === 'paper' && z === 'rock')) {
            mainStatus.textContent = `You won!`;
            subStatus.textContent = `${y} beats ${z}`;
            winCount++;
        } 
        else 
        {
            mainStatus.textContent =  "Please enter a valid option";
        }    
    }
    
    
    ComputerMoveImage.textContent = z;
    playerScore.textContent = `Player: ${winCount} ` ;
    computerScore.textContent = `Computer: ${lostCount} `;

    switch (y) {
        case 'rock':
            playerMoveImage.textContent = `✊`;
            break;
        case 'paper':
            playerMoveImage.textContent = `✋`;
            break;
        case 'scissors':
            playerMoveImage.textContent = `✌️`;
            break;
    }

    switch (z) {
        case 'rock':
            ComputerMoveImage.textContent = `✊`;
            break;
        case 'paper':
            ComputerMoveImage.textContent = `✋`;
            break;
        case 'scissors':
            ComputerMoveImage.textContent = `✌️`;
            break;
    }





}


rock.addEventListener('click', () => game('rock'))
paper.addEventListener('click', () => game('paper'))
scissors.addEventListener('click', () => game('scissors'))



if(lostCount >= 5 || winCount >= 5) {

    if(lostCount < winCount ) {
        modalText.textContent = "You won the game!";

    } else if(lostCount > winCount ) {
        modalText.textContent = "You lost the game!";
        
    } else {
        modalText.textContent = "It's a tie!";
        
    }
    
}


function showWinnerModal() {
    modal.classList.remove('hidden'); // make the modal visible
    setTimeout(function() {
        modal.classList.remove('scale-0', 'opacity-0'); // start the transition
    }, 0); // no delay, but using setTimeout to ensure this happens in the next event loop
}

resetButton.addEventListener('click', function() {
    modal.classList.add('scale-0', 'opacity-0'); // hide the modal
    setTimeout(() => modal.classList.add('hidden'), 500); // delay hiding to allow transition to complete
    winCount = 0;
    lostCount = 0;
    playerScore.textContent = `Player: ${winCount} ` ;
    computerScore.textContent = `Computer: ${lostCount} `;

    // hide the modal when the button is clicked
});

