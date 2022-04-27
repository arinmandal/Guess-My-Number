"use strict";
// console.log(document.querySelector('.message').textContent); //Select the text content
// document.querySelector('.message').textContent = 'Correct Number!'; //updating the text content
// console.log(document.querySelector('.message').textContent = 'Correct Number!');
// document.querySelector('.number').textContent = 25;
// document.querySelector('.score').textContent = 23;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
   document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
   const guess = Number(document.querySelector(".guess").value);
   // console.log(guess, typeof guess);

   //When there is no input
   if (!guess) {
      // document.querySelector(".message").textContent = "⛔ No Number!";

      displayMessage("⛔ No Number!");

      //when player wins
   } else if (guess === secretNumber) {
      // document.querySelector(".message").textContent = "Correct Number!";

      displayMessage("Correct Number!");

      document.querySelector(".number").textContent = secretNumber;

      document.querySelector("body").style.backgroundColor = "green";

      document.querySelector(".number").style.width = "30rem";

      if (score > highscore) {
         highscore = score;

         document.querySelector(".highscore").textContent = highscore;
      }

   } else if (guess !== secretNumber) {

      if (score > 1) {
         // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too low!'

         displayMessage(guess > secretNumber ? 'Too High' : 'Too low!');

         score--;
         document.querySelector(".score").textContent = score;
      } else {
         // document.querySelector(".message").textContent = "You lost the game!";
         displayMessage("You lost the game!");

         document.querySelector(".score").textContent = 0;
      }
   }
   //when guess is too high
   // else if (guess > secretNumber) {
   //    if (score > 1) {
   //       document.querySelector(".message").textContent = "Too High";

   //       score--;
   //       document.querySelector(".score").textContent = score;
   //    } else {
   //       document.querySelector(".message").textContent = "You lost the game!";

   //       document.querySelector(".score").textContent = 0;
   //    }

   //    //when guess is tow low
   // } else if (guess < secretNumber) {
   //    if (score > 1) {
   //       document.querySelector(".message").textContent = "Too Low!";
   //       score--;
   //       document.querySelector(".score").textContent = score;
   //    } else {
   //       document.querySelector(".message").textContent = "Too Low";
   //    }
   // }
});

document.querySelector(".again").addEventListener("click", function () {
   score = 20;

   secretNumber = Math.trunc(Math.random() * 20 + 1);

   // document.querySelector(".message").textContent = "Start guessing...";
   displayMessage("Start guessing...");

   document.querySelector(".number").textContent = "?";

   document.querySelector(".score").textContent = score;

   document.querySelector(".guess").value = "";

   document.querySelector(".number").style.width = "15rem";

   document.querySelector("body").style.backgroundColor = "#222";
});