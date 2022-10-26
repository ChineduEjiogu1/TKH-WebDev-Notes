let playerName = prompt("Enter your name.")
alert("Hello " + playerName + "!")

class Fighter{
  constructor(healthPoints,attackMethod){            // For figther we only need to pass healthPoints and attackMethod
                                                     // because names will be assigned separately to monster and player 
    this.healthPoints = healthPoints;                // I think the assignment wants name and healthPoints in here but idk it's late at night
    this.attackMethod = attackMethod;
  }
  attack(Fighter){
    let attackPoints = randomNum(1,6);
    Fighter.healthPoints = Fighter.healthPoints - attackPoints;
    alert(`${this.name} attacked ${Fighter.name} and did did ${attackPoints} damage! ${Fighter.name} has ${Fighter.healthPoints} health left!`)
  }
}

class Monster extends Fighter{
  constructor(name,healthPoints,attackMethod){    //If we do not add the healthPoints and attackMethod to the constructor  
    super(healthPoints,attackMethod)              //the child class does not know what to call or inherit from parent
    this.name=name
  }
}

myMonster = new Monster("Snorlax",15,"kick")   //Here and for the Player we create a new class assigned to a variable without const or let.
                                               // and pass the 3 different values  (name, healthPoints, attackMethod)
class Hero extends Fighter{
    
  constructor(name,healthPoints,attackMethod){   //If we do not add the healthPoints and attackMethod to the constructor 
    super(healthPoints,attackMethod)             //the child class does not know what to call or inherit from parent
    this.name=name
  }
}

 myHero = new Hero (playerName,15,"punch") //Same thing we did for the monster class we do for the hero class


function randomNum(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) 
  }


/*function playerAttack(){
let attackPoints = randomNum(1,6);
monsterHealth = monsterHealth - attackPoints;
alert(`Player attacked monster and did ${attackPoints} damage! Monster has ${monsterHealth} health left!`) 
}
function monsterAttack(){
let attackPoints = randomNum(1,6);
playerHealth = playerHealth - attackPoints;
alert(`Monster attacked player and did did ${attackPoints} damage! ${playerName} has ${playerHealth} health left!`)
}
*/

function playRound(){
    randomNum(0,2);
    if (randomNum(0,2)===0){
        myHero.attack(myMonster);
    if (myMonster.healthPoints>0){
      myMonster.attack(myHero)
    }
  }
  else if (randomNum(0,2)===1){
    myMonster.attack(myHero);
    if (myHero.healthPoints>0){
      myHero.attack(myMonster);
    }
  }
}                    // ~~~~~~~~~~~~~~~~~~~~~~VERY IMPORTANT!! BECAUSE WE CREATED THE NEW MONSTER AND HERO CLASSES WE MUST USE THE VARIABLE WE ASSIGNED THEM TO.
                     // IF WE JUST USE Hero OR Monster WE WILL BE USING THE EMPTY CLASS INSTEAD OF THE NEWLY CREATED CLASS. IN THIS CASE myMonster and myHero hold
                     // HOLD THE NAME HP AND ATTACKMETHOD WE PASSED EARLIER IN LINES 24 AND 34. IF WE JUST USE HERO AND MONSTER NOTHING WILL RUN~~~~~~~~~~~~~~~~~~~

function playGame(){          
    alert(`Hello ${myHero.name}! You are fighting ${myMonster.name}! 
    ${myHero.name}'s health is ${myHero.healthPoints}, and ${myMonster.name}'s health is ${myMonster.healthPoints}!`);
    let roundNumber = 0;
        while(myHero.healthPoints>0 && myMonster.healthPoints>0){
        roundNumber++;
        alert(`this is round number ${roundNumber}. 
        ${myHero.name} is at ${myHero.healthPoints} health and ${myMonster.name} is at ${myMonster.healthPoints} health.`)
        playRound(); 
        }
        if (myHero.healthPoints <= 0) {
          alert(`${myMonster.name} wins! You lose.`);
        }
        else if (myMonster.healthPoints <= 0) {
    alert(`${myHero.name} wins!!! Congratulations!!`)
    }
  }
  playGame(); 