'use strict';
/*
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }

  hello() {
    console.log(`Hello! ${this.name}`);
  }

  exit() {
    console.log(`Пользователь ${this.name} ушел...`);
  }
}
*/

/************** */
/*
const ivan = new User('Ivan', 25),
  alex = new User('Alex', 30);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();
ivan.exit();
*/

/************** */
/*
function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}
showThis(4, 5);
*/


/************** */
/*
class User11 {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }

  hello() {
    console.log('Hello ' + this.name);
    console.log('name: ' + this.name);
    console.log('id: ' + this.id);
  }
}

const ivan11 = new User11('Ivan11', 2511); /
ivan11.hello();
*/



/************** */
/*
class Rectangle {
  //создание глобального класса
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea() { //метод класса
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }
  showMyProps() {
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25,10, 'Всем привет', 'red');

div.showMyProps();
console.log(div.calcArea());
*/

/************** */
/*
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`************`);
    console.log(this.name);
    console.log(this.age);
  }
}

// Использование:
const user1 = new User("Иван", 22);
user1.sayHi(); // Иван 22

const user2 = new User("Федя", 500);
user2.sayHi(); // Федя 500
*/

const log = function (a,b, ...rest) {
      console.log(a, b, rest);
  };

  log('basic', 'rest', 'operator', 'usage');
