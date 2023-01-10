//Game title: Rock, Paper, Scissors 

 /*General Overview of Gameplay 
player vs computer 
best 2/3 rounds 
computer makes a random choice of rock, paper or scissors 
user should choose rock, paper or scissors via buttons - can be set randomly while testing 
player and computer make a choice of rock, paper, scissors each round 

compare player vs computer's choices 
paper beats rock 
rock beats scissors 
scissors beats paper 
use if else or switch statement to determine if user or computer wins the round 
increase the score counter for the winning player each round 


check score of user and computer after each round 
if either user or computer have a score of 2 or greater (3) they win
*/



/*Requirements
user interaction causes changes to the web page using DOM methods (at least 3 changes during game play) can be images, text, score indicator 
    -show images of user's and computer's choice of rock, paper or scissors each round
    -display score of user and computer 
    -display win or lose message

correct use of at least 1 JavaScript Class that is used in the game 
    -will refactor to use a class Player that is parent class to Computer and User
    -Player will have a name property, score property, addToScore method

use of a method defined in your class 
    -addToScore method 
    -randomChoice method on Computer class - randomly chooses rock paper or scissors 

keep score - user must be able to gain points
    -score is a property of the Player class

declare if the user won or lost at the end of the game and display on the page 
    -either User or Computer will win, determined by score - best 2/3 rounds

besides any global variables, all your code should be contained in functions and classes 
 Use of CSS to set colors, fonts and overall layout of the page
  -simple flexbox layout centered 

use of iteration. examples: for loop, while loop, .forEach method, .map method
  -loop through rock paper and scissor buttons to attach addEventListener to each button 
  
*/



//Planning functions

//function getChoice
  //gets user's choice of rock paper or scissors 
  //gets a random choice for computer player of rock paper or scissors 
  //returns an object containing the user's choice and computer's choice 

//function compareChoice 
  //takes in userChoice and computerChoice as arguments 
  //use nested if else to test user vs computer 
  //outputs console.log messages for each outcome 
  //increments the winners score 


//function playGame
  //counts round number 
  //run a while loop as long as computer and user's score are < 2(best 2/3)
    //inside the while loop 
    //increment round counter 
    //run compare choice 