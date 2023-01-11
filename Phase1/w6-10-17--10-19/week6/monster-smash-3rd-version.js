class Fighter
{
  constructor(name, healthPoints, attackPoints = randomNum(1, 6))
  {
    this.name = name
    this.healthPoints = healthPoints
    this.attackPoints = attackPoints
  }

  attack(target, perk)
  {

  //subtract playerAttackPoints from monsterHealth and update the monsterHealth variable

  if(perk)
  {
    target.healthPoints -= perk
    alert(`You attacked ${target.name} with ${perk} attack points of damage, ${target.name} has ${target.healthPoints} health points left`)
  }
  else
  {
    target.healthPoints -= this.attackPoints
    alert(`You attacked ${target.name} with ${this.attackPoints} attack points of damage, ${target.name} has ${target.healthPoints} health points left`)
  }
  
    console.log(target)

    //use an alert with string template literals to tell the player: 
    
  }

}

class Hero extends Fighter
{
  constructor(name, healthPoints, weaponDamage, attackPoints)
  {
    super(name, healthPoints, attackPoints)
    this.weapon = "Axe"
    this.weaponDamage = weaponDamage
  }

  heroAttack(target)
  {
    this.attack(target, this.weaponDamage)
  }

}
class Monster extends Fighter
{
  constructor(name, healthPoints, abilityDamage, attackPoints)
  {
    super(name, healthPoints, attackPoints)
    this.ability = "shape-shift"
    this.abilityDamage = abilityDamage
  }

  monsterAbility(target)
  {
    this.attack(target, this.abilityDamage)
  }
}

function randomNum(min, max) 
{
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

let myMonster = new Monster("Boogyman", 15, 5) // have leave attack points at 0 or it wont work
console.log(myMonster)

let myHero = new Hero("Superman", 15, 5) // have leave attack points at 0 or it wont work

console.log(myHero)


function playRound() {
  //use randomNum to return either 0 or 1
  let playerTurn = randomNum(0, 2)
  //0 = player goes first, 1 = monster goes first
  
  //use if/else to determine who goes first
  
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 

  if(playerTurn === 0)
  {
    if(randomNum(4, 5) === 4)
    {
      myHero.heroAttack(myMonster, perk)
    }
    else
    {
      myHero.attack(myMonster)
    }
    
    if(myMonster.healthPoints > 0)
    {
      if(randomNum(4, 5) === 4)
      {
        myMonster.monsterAbility(myHero, perk)
      }
      else
      {
        myMonster.attack(myHero)
      }
    }
  }

  if(playerTurn === 1)
  {
    if(randomNum(4, 5) === 4)
    {
      myMonster.monsterAbility(myHero, perk)
    }
    else
    {
      myMonster.attack(myHero)
    }
    
    if(myHero.healthPoints > 0)
    {
      if(randomNum(4, 5) === 4)
      {
        myHero.heroAttack(myMonster, perk)
      }
      else
      {
        myHero.attack(myMonster)
      }
    } 
  }
}

function playGame() {
  //beginning game message
  alert(
    `Hello, ${myHero.name}! You are fighting ${myMonster.name}! Your health is at ${myHero.healthPoints}, ${myMonster.name}'s health is at ${myMonster.healthPoints}`

   
  );

  // alert(`${myHero.name} is ${myHero.weapon()} and ${myMonster.ability()}`);

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(myHero.healthPoints > 0 && myMonster.healthPoints > 0){
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
    alert(`This is round ${roundNumber} the current health points for ${myHero.name} is ${myHero.healthPoints} and current health points for ${myMonster.name} is ${myMonster.healthPoints}`)
   //call playRound inside the while loop
    playRound()
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if(myHero.healthPoints >= 0 && myMonster.healthPoints <= 0)
  {
    alert(`${myHero.name} you win ${myMonster.name} you lose`);
  }
  
  if(myMonster.healthPoints >= 0 && myHero.healthPoints <= 0)
  {
    alert(`${myMonster.name} you win ${myHero.name} you lose`);
  }

}

//call playGame to start game
playGame()