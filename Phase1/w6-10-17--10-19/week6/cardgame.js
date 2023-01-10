// Overview 

// Create a JS program that uses a class to create an object representing a deck of cards. Then create a simple console version of the card game 'War'

// Steps: 

// 1. Create a Deck class 

class DeckOfCards
{
    constructor()
    {
        this.deck = []
    }

    createDeck(deck = this.deck)
    {
        let types = ["hearts", "spades", "diamonds", "clover"]
        let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

        for(let i = 0; i < types.length; i++)
        {
            for(let j = 0; j < numbers.length; j++)
            {
                deck.push({types: types[i],  numbers: numbers[j]})
            }
        }

        this.deck = deck
    }

    randomCard()
    {
        let randomInt = Math.floor(Math.random() * this.deck.length)
        return this.deck[randomInt]
    }
}


class deckOfCardCanDelete extends DeckOfCards{
    delete(type, number){
        
        for(let i=0;i<this.deck.length;i++){
        if(this.deck[i].types === type && this.deck[i].numbers === number){
        delete this.deck[i]
        }
    }
}
}
deckDeleter1 = new deckOfCardCanDelete()
deckDeleter1.createDeck()
console.log("random Card ", deckDeleter1.randomCard())

deckDeleter1.delete("clover", 5)
console.dir(deckDeleter1)
//console.log(deckDeleter1.deck)


// 2. Create a method on the Deck class that dynamically generates each card object
// example card object: {suit: "hearts", value: 2}

deck1 = new DeckOfCards()

deck1.createDeck()
console.log(deck1)

deck2 = new DeckOfCards()
deck2.createDeck()
console.log(deck2)

function playWar()
{
    deck1.randomCard()
    deck2.randomCard()

    let deck1random = deck1.randomCard()

    let deck2Random = deck2.randomCard()

    if(deck1random.numbers > deck2Random.numbers){
        console.log("deck1 has won")
    }
    else{
        console.log("deck2 has won")
    }
}

playWar()




// a card's value corresponds to the number/face card's rank

// ace = 1
// cards 2-10 = their number value 
// jacks = 11 
// queens = 12 
// kings = 13 

// 3. card objects can be held inside an array 

// 4. create a method to select a random card object 

//5. create 2 instances of the Deck class, saved into variables: deck1 and deck2

// 6. create a function playWar() that runs the random card method on each deck, and compares the values of the 2 random cards. 

// 7. console log both card objects, and a message declaring which one has the higher value