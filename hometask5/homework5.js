// Task1
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  circleLength() {
    return 2 * Math.PI * this.r;
  }
  static circleLengthStatic(radius) {
    return 2 * Math.PI * radius;
  }
  circleCopy() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
  static createCircle(x, y, r) {
    return new this(x, y, r);
  }
  dotInCircle(a, b) {
    let distance = Math.sqrt(Math.pow((this.x - a), 2) + Math.pow((this.y - a), 2));
    return distance < this.r;
  }
  circleToString() {
    return this.toString();
  }
};
const newcircle = new Circle(0, 0, 5);
console.log(newcircle);
console.log(newcircle.circleCopy());
console.log(Circle.circleLengthStatic(10));
console.log(Circle.createCircle(10, 10, 10));
console.log(newcircle.dotInCircle(6, 6));
console.log(newcircle.circleToString());

//Task2
function propsCount(currentObject) {
  const arr = Object.keys(currentObject);
  return arr.length;
}
let mentor = {
  course: "JS fundamentals",
  duration: 3,
  direction: "web-development"
};
console.log(propsCount(mentor));

//Task3
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.surname + " " + this.name);
  }
};
class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(middleName) {
    console.log(this.surname + " " + this.name + " " + middleName);
  }
  showCourse() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear - this.year;
  }
}
const stud1 = new Student("Petro", "Petrenko", 2019);
stud1.showFullName("Petrovych");
console.log("Current course: " + stud1.showCourse());

//Task4
class Marker {
  constructor(color, ink) {
    this.color = color;
    this.ink = ink;
  }
  print(text) {
    let printText = "";
    for (let i = 0; i < text.length; i++) {
      if (this.ink > 0) {
        if (text[i] !== " ") {
          this.ink -= 0.5;
        }
        printText += text[i];
      }
    }
    return printText;
  }
}
class RefillingMarker extends Marker {
  constructor(color, ink) {
    super(color, ink)
  }
  refilling() {
    return this.ink = 100;
  }
}
const pen = new RefillingMarker("red", 50);
console.log(pen.print("In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods)."));
console.log(pen.refilling());

//Task5
class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this._expirience = 1.2;
  }

  showSalary() {
    return console.log(this.fullName + " salary: " + this.dayRate * this.workingDays);
  }
  showSalaryWithExpirience() {
    return console.log(this.fullName + " salary: " + this.dayRate * this.workingDays * this._expirience);
  }
  get showExp() {
    return this._expirience;
  }
  set setExp(value) {
    this._expirience = value;
  }
  static #workers = [];
  static addWorker(worker) {
    this.#workers.push(worker);
  }
  static sortSalary() {
    const sortedSalary = this.#workers.sort((a, b) => a.dayRate * a.workingDays * a._expirience - b.dayRate * b.workingDays * b._expirience);
    sortedSalary.map(function (worker) {
      return console.log(worker.fullName + ": " + worker.dayRate * worker.workingDays * worker._expirience);
    });
  }
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New expirience: " + worker1.showExp);
worker1.showSalaryWithExpirience();
worker1.setExp = 1.5;
console.log("New expirience: " + worker1.showExp);
worker1.showSalaryWithExpirience();

let worker2 = new Worker("Tom Tomson", 30, 23);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New expirience: " + worker2.showExp);
worker2.showSalaryWithExpirience();
worker2.setExp = 1.5;
console.log("New expirience: " + worker2.showExp);
worker2.showSalaryWithExpirience();

let worker3 = new Worker("Andy Ander", 40, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New expirience: " + worker3.showExp);
worker3.showSalaryWithExpirience();
worker3.setExp = 1.5;
console.log("New expirience: " + worker3.showExp);
worker3.showSalaryWithExpirience();
Worker.addWorker(worker1);
Worker.addWorker(worker2);
Worker.addWorker(worker3);
Worker.sortSalary();