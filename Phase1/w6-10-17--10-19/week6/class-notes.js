/* JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called [[Prototype]] that can be used to extend object properties and methods. You can read more about prototypes in our Understanding Prototypes and Inheritance in JavaScript tutorial.

Until recently, industrious developers used constructor functions to mimic an object-oriented design pattern in JavaScript. The language specification ECMAScript 2015, often referred to as ES6, introduced classes to the JavaScript language. Classes in JavaScript do not actually offer additional functionality, and are often described as providing “syntactical sugar” over prototypes and inheritance in that they offer a cleaner and more elegant syntax. Because other programming languages use classes, the class syntax in JavaScript makes it more straightforward for developers to move between languages.

-https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript

//OOp in JavaScript = Classes

*/


//Yesterday we saw the example of a bike as an object
let bike = {
    handlebars: "round bars",
    color: "blue",
    wheels: 4,
  };
  
  //So we could represent a real world object - a bike - as an object, as digital data
  
  //Now we have a single bike represented, but what if we wanted to represent multiple bikes? We could repeat ourselves and create multiple bike objects saved to different variables with different property values
  let bike2 = {
    handlebars: "flat bars",
    color: "red",
    wheels: 2
  };
  
  let bike3 = {
    handlebars: "mustache bars",
    color: "black",
    wheels: 3,
  };
  
  //This is not following the principle of DRY code - Don't Repeat Yourself.
  
  //This is where Classes come in. We can think of Classes as a 'blueprint' or template for an object. Lets look at the syntax for declaring a class
  
  // A JavaScript class is a type of function
  
  //class keyword, class name uppercased
  class Bike {
    //constructor function - takes in these params when a new Bike instance is created
    //constructor builds the object with the given data, It is used to initialize object properties
    //It is executed automatically when a new object is created
    constructor(handlebars, color, numOfWheels) {
      //this = referring to itself
      // https://www.w3schools.com/js/js_this.asp
  
      //this.handlebars is the Bike's handlebars property
      //handlebars(on the right of the =) is a value coming in from the constructor
      //example: wrensBike.handlebars = "flat bars"
      this.handlebars = handlebars;
      this.color = color;
      this.numOfWheels = numOfWheels;
    }
    // properties that don't change when instantiating a new bike
    speed = 10 
  }
  
  //create a new instance of Bike saved into the variable wrensBike
  let wrensBike = new Bike("flat bars", "purple", 2 )
  // console.log(wrensBike)
  
  //Create another instance of Bike
  
  //Do Now: Create a class named Student that takes in name, age, and major as constructor parameters. create an instance of student saved to a variable and console.log the variable

  // Keyword class tell JS we're defining a new class
  // Student is the class name
  class Student
  {
    // runs when we create a new instance using Student class
    // taking in 3 values
    constructor(name, age, major)
    {
        this.name = name
        this.age = age
        this.major = major
    }
    studentInfo()
    {
       return `This student info is ${this.name}, ${this.age}, ${this.major}`
    }
  }

  let student = new Student('Chris', 26, 'Law')
  console.log(student.studentInfo())

  let newStudent = new Student("Bella", 20, "Art")
  // console.log(newStudent)
  
  //Methods
  //We can add methods to an object we declare without a class:
  let bike4 = {
    handlebars: "mustache bars",
    color: "black",
    wheels: 3,
    ride: function rideBike(){
      return(`weee this is fun`)
    }
  };
  // console.log(bike4.ride())
  
  //we can also include functions as methods in a class declaration
  
  //Person example
  class Person {
    constructor(name){
      this.name = name
    }
    //greet is a method of the Person class
    // methods are functions attached to objects
    // don't use "function keyword" (scope)
    greet(){
      return `Nice to meet you ${this.name}!`
    }
  }
  let wren = new Person("Wren")
//   console.log(wren.greet())
  
  //Car example
  //adapted from https://www.w3schools.com/js/js_classes.asp
  class Car {
    constructor(make, year) {
      this.make = make;
      this.year = year;
    }
    age(year = this.year) {
      let currentYear = 2022
      // 2022 - 2014
      // this.year = the value for the objects year property
      return currentYear - year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
  // console.log(`My car is ${myCar.age()} years old`)
  
  
  //Fruit example
  class Fruit {
    constructor(name, color) {
      this.name = name;
      this.color = color;
  
    }
    //daysOld is a parameter passed when isGoodToEat() method is called
    //pass name as this.name
    isGoodToEat(daysOld, name = this.name) {
      if (daysOld <= 3) {
        return `Yum that ${name} looks good!`;
      } else if (daysOld <= 6) {
        return `Better eat that ${name} quick...`;
      } else {
        return `What is that gross squishy thing... a ${name} ?!?`;
      }
    }
  }
  
  let banana = new Fruit("banana", "yellow");
  //call isGoodToEat on banana object, passing a number for the daysOld param
  console.log(banana.isGoodToEat(7));
  
  //Do now
  //add a method to your student Class that returns a message including the student's name, age, and major
  //console.log the result of calling the method
  
  
  
  //Parent Classes
  //There are time when we want to use a general class, and add more unique properties and/or methods to it
  
  //Parent class is general, child or subclass adds specificity
  
  // https://javascript.info/class-inheritance
  
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    //speed is an argument passed when calling run
    run(speed) {
      //the animal object's speed property is updated using this
      this.speed = speed;
      return `${this.name} runs with speed ${this.speed}.`
    }
    stop() {
      //the animal object's speed property is again updated using this
      this.speed = 0;
      return `${this.name} stands still.`
    }
  }
  
  let animal = new Animal("My animal");
  let dog = new Animal("dog")
//   console.log(dog.run(8))
  //can still access speed property
//   console.log(dog.speed)
  
  //calling the run method updates the value of the speed property
//   console.log(dog.run(10));
//   console.log(dog.speed);
  
  
  /*
  …And we would like to create another class Rabbit.
  
  As rabbits are animals, Rabbit class should be based on Animal, have access to animal methods, so that rabbits can do what “generic” animals can do.
  
  The syntax to extend another class is: class Child extends Parent.
  */
  
  //create class Rabbit that inherits from Animal:
  class Rabbit extends Animal {
    constructor(name, earType){
    // Super is getting the name property from Animal
    // must be called first! before anything else in constructor
    super(name)
    this.earType = earType
  }
    
    hide() {
      return`${this.name} hides!`
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  //objects made with class Rabbit still have access to methods from class Animal
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!