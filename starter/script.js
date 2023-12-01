'use strict';
/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;

document.querySelector('.guess').value = 15;

**/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => { 
   document.querySelector('.message').textContent = message  
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    
    if (!guess) {
       displayMessage('⛔ No Number');


        // when the player wins  
    } else if (guess === secretNumber) {
        displayMessage('🥳 Correct number');
        
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector(' body').style.backgroundColor = '#60b347'

        document.querySelector('number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        

    } else if (guess !== secretNumber) { 
        if (score > 1) {

            displayMessage( guess > secretNumber ? '📈 Too High' : '📉  Too Low');
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            displayMessage('🤪 You lost the game');

            document.querySelector('.score').textContent = 0;
            
        }
        // } else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = '📉  Too Low';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else { 
        //         document.querySelector('.message').textContent =
        //           '🤪 You lost the game';

        //     }
        // }

    }
})






///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20;

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = ''; 

    displayMessage('Start guessing...');

    document.querySelector(' body').style.backgroundColor = '#222';

    document.querySelector('number').style.width = '15rem';



});