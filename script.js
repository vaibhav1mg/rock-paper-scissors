let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
   return choices[Math.floor( Math.random()  * choices.length ) ];
}


let winCount = 0;
let lostCount = 0;
let tieCount = 0;

function playerSelection() {
    let userInput = prompt(" rock , paper or scissors ?");
    return userInput.toLowerCase();
}


while( (winCount+lostCount + tieCount) != 5)

{ 

    function game() {
        let y =  playerSelection();
        let z = getComputerChoice();
     
        if (y === z ) {
         alert(`it\'s a tie `);
         tieCount++;
        }
     
        else if (y === 'rock'  && z=== 'paper' ) {
         alert(`You lost! ${y}  to  ${z} `);
         lostCount++;
     
        }   
     
        else if (y === 'rock'  && z=== 'scissors' ) {
         alert(`hurray you won ${y}  beats  ${z} `);
         winCount++;
        } 
     
        else if (y === 'scissors'  && z=== 'paper' ) {
         alert(`hurray you won ${y} beats  ${z} `);
         winCount++;
        } 
     
        else if (y === 'scissors'  && z=== 'rock' ) {
         alert(`You lost! ${y}  to  ${z} `);
         lostCount++;
        } 
     
        else if (y === 'paper'  && z=== 'scissors' ) {
         alert(`You lost!  ${y}  to  ${z} `);
         lostCount++;
        } 
     
        else if (y === 'paper'  && z=== 'rock' ) {
         alert(`hurray you won ${y}  beats ${z} `);
         winCount++;
        } 
     
        else {
         alert("Please enter a valid option");
        }
     
     }
     

}

 



if(lostCount < winCount ) {
    alert(`you won! by ${winCount} - ${lostCount} `)
}
else if(lostCount > winCount ) {
    alert(`you lost! by ${winCount} - ${lostCount} `)
}

else {
    alert("it's a tie")
}