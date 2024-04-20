/**
 * TODO:
 * 1. Create a class named Animal with the following conditions:
 * - Have properties:
 * - name: string
 * - age: int
 * - isMammal: boolean
 * - Has a constructor to initialize the property:
 * - name
 * - age
 * - isMammal
 * Create a class named Rabbit with the following conditions:
 * - Is an instance of class Animal
 * - Has a method:
 * - eat which returns the string value `${this.name} is eating!`
 * - When instantiated, the isMammal property must be true.
 * Create a class called Eagle with the following conditions:
 * - Derived from class Animal
 * Has a method:
 * - fly which returns the string value `${this.name} is flying!`
 * - When instantiated, the isMammal property must be false.
 * Create an instance of class Rabbit named "myRabbit" with the following conditions:
 * - the name property should be: "Labi"
 * - age property value: 2
 * Create an instance of class Eagle named "myEagle" with the following conditions:
 * - name property value: "Elo"
 * - age property value: 4
 */
// Write the code below
// TODO 1
class Animal {
    constructor(name, age, isMammal) {
      this.name = name;
      this.age = age;
      this.isMammal = isMammal;
    }
  }
  
  // TODO 2
  class Rabbit extends Animal {
    constructor(name, age) {
      super(name, age, true);
    }
    eat() {
      return `${this.name} is eating!`;
    }
  }
  
  // TODO 3
  class Eagle extends Animal {
    constructor(name, age) {
      super(name, age, false);
    }
    fly() {
      return `${this.name} is flying!`;
    }
  }
  
  // TODO 4
  let myRabbit = new Rabbit("Labi", 2);
  
  // TODO 5
  let myEagle = new Eagle("Elo", 4);
  
  // Testing with console.log()
  console.log(myRabbit.eat()); // Output: The rabbit is eating!
  console.log(myEagle.fly()); // Output: Elo is flying!
