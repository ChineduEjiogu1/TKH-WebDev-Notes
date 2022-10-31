//Game title: Connect 4

 /*General Overview of Gameplay 

Describe the sequence of events that happen in your game
include how the score is used 
include how the game will end - including win/lose message 

- Player vs Player/Computer
- score maybe just a simple win or lose or a best out of 5
- User/player and computer tries to place dices chip on the Connect 4 playing board taking turns one after the other.
- Each trying to get a connection of 4 consecutive dices chips together either vertically, horizontally, and diagonally.
  But also trying to impede each other.
- If either player wins or loses there will be a message saying you win or lose
*/


/*Requirements - include a short note about how your game will fulfill each of these requirements 

user interaction causes changes to the web page using DOM methods (at least 3 changes during game play) can be images, text, score indicator 
  - Show a 6 * 7 grid that consist of empty holes, the grid will consist of a blue background
  - Users/player will be able to click on the position they want to place their disc chips at.
  - Display score of user and computer 
  - Display win or lose message

correct use of at least 1 JavaScript Class that is used in the game 
  - Will use a class Player that is parent class to Computer and User
  - Player will have a name property, chip/piece property, keepScore property, chooseCell property

use of a method defined in your class 
  - keepScore method, in keep score I need a condition to handle a tie // optional
  - computerChoice method on Computer class - picks a spot that impedes your next move and wants to win. 

keep score - user must be able to gain points
  - keepScore is a property of the Player class which will be extended by 
    user and computer // optional
 
declare if the user won or lost at the end of the game and display on the page 
  - Either user or computer will win, determined by outcome i.e. who get the connect four match
    either horizontally, vertically, and diagonally

 Use of CSS to set colors, fonts and overall layout of the page
  - Use of CSS to set colors, fonts and overall layout of the page
  - Flex-Box layout centered, with flex wrap with several divs.

use of iteration. examples: for loop, while loop, .forEach method, .map method
  - Loop through grid cell and attach addEventListener to each empty space 
  - Loop through each column to see which position a player put a chip in
  
*/


/* Plan functions 
start thinking about your basic functions! give them a name and list what they do 

function checkVertical 
-- Iterate through the 2d array, but only iterating the rows part of the array (one for loop)
-- It maybe nested loops, just in case
-- Compare the index of the rows part of the 2d array to see if they match or identical
-- Count the number of times the rows index match 
-- If the count equals 4, return true 

function checkHorizontal
-- Iterate through the 2d array, but only iterating the columns part of the array (one for loop)
-- It maybe nested loops, just in case
-- compare the index of the columns part of the 2d array to see if they match or identical
-- count the number of times the columns index match 

function checkDiagonallyUpwards
-- Iterate through the 2d array using nested for loops going through both rows and columns or x and y axis
-- add the indexes of both x and y axis, if the next x and y index that are added together total number is equal to 
   the previous number total then its a valid diagonal
-- count the number of times this pattern is done  
-- if the count equals 4, return true 

function checkDiagonallyDownwards
-- Iterate through the 2d array using nested for loops going through both rows and columns or x and y axis
-- add the indexes of both x and y axis, if the next x and y index that are added together total number is an
increase of two from the previous number then its a valid diagonal
-- count the number of times this pattern is done  
-- if the count equals 4, return true 

function computerChoice // optional
-- A smart choice a computer will pick in order to impede the other player and win the game
-- Will do research on how to do it 


[0,0][0,1][0,2][0,3][0,4][0,5][0,6]
[1,0][1,1][1,2][1,3][1,4][1,5][1,6]
[2,0][2,1][2,2][2,3][2,4][2,5][2,6]
[3,0][3,1][3,2][3,3][3,4][3,5][3,6]
[4,0][4,1][4,2][4,3][4,4][4,5][4,6]
[5,0][5,1][5,2][5,3][5,4][5,5][5,6]


Another method is to have all the winning tiles in array and loop through to see if either player chip positions
match those winning, if one of the player matches that player wins and the other loses.

let winningArray = [ 
[0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
[34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
[21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
[13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
[0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
[40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
[3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
[6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
[41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
[14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
[6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
[21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
[5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
[40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
[11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
[5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
[15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
[26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
[36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
[8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
[11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
];

*/
