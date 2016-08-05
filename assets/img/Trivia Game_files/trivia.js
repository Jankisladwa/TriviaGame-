//  $(document).ready(function(){
 
// //this adds the gem # to the current score and displays it

// function updateGame(gem){
//  currentScore = (currentScore + gem);
//   displayScore();
//   numberCompare();
//   displayWinLoss();
// };

// // click functions for the 4 gems
// $("#gem1").click(function() {
//   updateGame(gem1);
// });

// $("#gem2").click(function() {
//   updateGame(gem2);
// });

// $("#gem3").click(function() {
//   updateGame(gem3);
// });

// $("#gem4").click(function() {
//   updateGame(gem4);
// });

// console.log( "ready!" );

// });//end of document ready function

// //this displays the score
// function displayScore(){
// $("#sum").html(currentScore);
// };

// function displayWinLoss(){
//  $("#wins").html(win);
//   $("#losses").html(losses);
// };

// function displayNumberToReach(){
//   $("#CC").html(numberToReach);
  
// };

// //declares the variables
// var currentScore = 0;
// var win = 0;
// var losses = 0;

// var numberToReach

// var gem1
// var gem2
// var gem3
// var gem4

// //compares the number to reach to the current user score
// function numberCompare(){
//   if (numberToReach == currentScore){
//         win++;
//         startGame();
//   }
//   else if(currentScore > numberToReach){
//     losses++;
//     startGame();
//   }
// }

// //the function starts the game
// function startGame() {
//   //generates random number for user to guess and for crystals
//   numberToReach=Math.floor((Math.random() * 102) + 19);
  
//     gem1=Math.floor(Math.random() * 13);
//     gem2=Math.floor(Math.random() * 13);
//     gem3=Math.floor(Math.random() * 13);
//     gem4=Math.floor(Math.random() * 13);
  
//   currentScore = 0;
//   displayNumberToReach();

// };


// startGame();
