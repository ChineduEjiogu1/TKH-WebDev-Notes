//data types
//how to represent a list of names
//as a string this is clumsy
"Ada Alan Evelyn Ellen"

//arrays give us a way to store a list of items
let programmers = ['Ada ', 'Alan', 'Evelyn', 'Ellen']

//review arrays 
//array values are ied starting at 0 
//access array values 
//We can access values in an array by using bracket notation 
programmers[0] // Ada 

//loop over an array 
for(let i=0; i<programmers.length;i++){
//   console.log(programmers[i])
  //logs each programmer name 
}

//another way to iterate over an array 
//forEach runs the code in the curly brackets for each item in the array 
//programmerName is a placeholder for the array items
//this can be called anything, as long as you use the same placeholder inside the curly brackets

// first parameter of .foreach function is each item in the array 
// second param is numbered index

programmers.forEach((programmerName, index)=>{
  console.log(programmerName, index)
})



//Properties 
//We have seen some properties before such as .length
//used to get length of string or array 
programmers.length // 4 items in the array 
programmers[0].length //3 characters in the string 'Ada' 
//this is using Dot Notation 
//the word that comes after the . is the property name 

//We can also access these properties using bracket notation
// console.log(programmers["length"]) 
//same thing as programmers.length

//Methods
//We have seen some methods such as .toLowerCase()
//This is a function that all string data types have access to 
//we can call .toLowerCase() a string method 

//Objects are similar to arrays, except that instead of using ies to access and modify their data, you access the data in objects through what are called properties.
//source - https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects

//Objects are made up of key/value pairs 
//key/value pairs are also called properties 

//object syntax
//object stored in a variable 
let objectName = {
  //objects use curly braces
  key1: "value 1",
  //objects are made up of kays and values 
  //key name, colon, value, comma
  key2: "value 2",
  "key 3": "value 3",
  //values can different data types
  five: 5, 
}
//quotes around property names are optional for single-word string properties 





//model real world objects
let bike = {
  handlebars: "flat bars",
  color: "red",
  wheels: 2,
}

//access properties of bike 
//dot notation
// console.log(bike.handlebars)
//bracket notation
// console.log(bike["color"])

//add properties 
bike.type = "mountain"
// console.log(bike.type)

//update properties
bike.color = "purple"
console.log(bike.color)

//objects can also be thought of as dictionaries, they have a key(word) and a value(definition)

let dictionary = {
  dove: "a small wild pigeon",
  wren: "any of various small singing birds",
  cardinal: "also called redbird, any of various medium-size thick-billed species of songbirds of the New World, many with crested heads."
}


//access values 
dictionary.dove
dictionary["wren"]

//loop over an object 

//create an array of the key names from dictionary object
let dictionaryWords = Object.keys(dictionary)
//console.log(definitions)
//logs an array of the words(keys) from dictionary

//loop 
// for(let i=0; i < definitions.length; i++){
// //   console.log(`${definitions[i]}: ${dictionary[definitions[i]]}`)
// }
//defintions[i] = dove, wren
//dictionary[definitions[0]] = dictionary["dove"] = "a small wild pigeon"

// a neater way to write this
// .forEach runs the code in the curly brackets for each item in the array definitions 
// word is a placeholder for each item 
// definitions.forEach((word)=>{
//   //console.log(`${word}: ${dictionary[word]}`)
// })

//dictionaryWords=['dove', 'wren', cardinal]
dictionaryWords.forEach((word)=>{
    console.log(`${word}: ${dictionary[word]}`)
})

console.log(Object.entries(dictionary).map((key, value)=>[`${key}: ${value}`]))