/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Lexical this');
//ES5
const oldperson = {
  name: 'John',
  cars: ['Ferrari','BMW'],
  getInfo: function(){
    this.cars.forEach(function(car){
        log(`${this.name} has ${car}`)
    });
  }
}
// Error: TypeError: can`t read property 'name' of undefined
//        as this no longer refers to person object

//ES 5 Fix
const person = {
  name: 'John',
  cars: ['Ferrari','BMW'],
  getInfo: function(){
    this.cars.forEach(function(car){
        log(`${this.name} has ${car}`)
    }.bind(this));
  }
}
person.getInfo()
// Bind function to person 'this' or add var that = this to fix the issue

//ES6 using arrow function
const newPerson = {
  name: 'Bob',
  cars: ['Ferrari','BMW'],
  getInfo(){
    this.cars.forEach(car => {
        log(`${this.name} has ${car}`)
    });
  }
}
newPerson.getInfo();
