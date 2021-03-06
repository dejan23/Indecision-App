
class Person {
  constructor(name = 'John Doe', age = '0') {
    this.name = name,
    this.age = age
  }
  getGreeting() {
    // return 'Hi ' + this.name + '!'
    return `Hi ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, major, homeLocation) {
    super(name, age, major)
    this.homeLocation = homeLocation
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I am from ${this.homeLocation}`
    }
    return greeting;
  }
}

const me = new Traveler('Dejan', '25', 'Math', 'Belgrade')
console.log(me.getGreeting())


const me2 = new Traveler()
console.log(me2.getGreeting())
