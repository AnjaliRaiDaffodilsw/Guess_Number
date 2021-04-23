'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 
// '🎉 Correct Number !';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let num = '';
let message =  document.querySelector('.message');
let number = document.querySelector('.number');



document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess);

    if(!guess) {
        document.querySelector('.message').textContent = 
       '⛔ No number !';  
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 
'🎉 Correct Number !';
document.querySelector('.number').textContent = secretNumber;

       document.querySelector('body').style.backgroundColor = '#60b347';

       document.querySelector('.number').style.width = '30rem';

       if(score > highscore) {
           highscore = score;
           document.querySelector('.highscore').textContent = highscore;
       }
    } else if(guess > secretNumber) {

        if(score > 0) {
        document.querySelector('.message').textContent = 
       ' ➕  Too high!';
       score--;
       document.querySelector('.score').textContent = score;
        } 
        if(score == 0) {
            document.querySelector('.message').textContent = 
             '  🧨  Sorry you lost the game !!';
        }

    } else if(guess < secretNumber ){
        if(score > 0) {
        document.querySelector('.message').textContent = 
      '    ➖  Too low!';
      score--;
      document.querySelector('.score').textContent = score;
        } 
        if (score == 0){
            document.querySelector('.message').textContent = 
             '  🧨  Sorry you lost the game !!';
        }
    }
});

document.querySelector('.again').addEventListener
('click',function() {
    document.querySelector('.guess').value= '';
    document.querySelector('.number').textContent = 20;
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

})