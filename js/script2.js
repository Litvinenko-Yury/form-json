'use strict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;

  this.hello = function () {
    console.log(`Hello! ${this.name}`);
  };
}

User.prototype.exit = function() {
  console.log(`Пользователь ${this.name} ушел...`);
};



/************** */
const ivan = new User('Ivan', 25),
  alex = new User('Alex', 30);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();
ivan.exit();

/**/
