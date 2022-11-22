class Animal{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    speaking()
    {
        console.log("Noises");
    }

    eating(food)
    {
        console.log(`${this.name} is eating ${food}`);
    }
}

const testAnimal = new Animal("Sharkie", 8);

testAnimal.speaking();
testAnimal.eating("Cookie");

class Dog extends Animal {
    constructor(name, age){
        super(name, age);
    }

    checkCollar(name)
    {
        console.log(`This Dog's name is ${name}`);
    }
}

const newDog = new Dog("Axel", 2);

newDog.checkCollar();