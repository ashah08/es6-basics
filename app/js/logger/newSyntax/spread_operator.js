/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Spread Operators');

//concat array
const arr1 = ['John','Bob','Chris']
const arr2 = ['Don','Eyrie','Frank']
const members = [...arr1, ...arr2]
//log(members)


//string to array
const name = "John";
const nametoArray = [...name];
//log(nametoArray);

//functions
const addNumbers = function(n1,n2,n3){
  return n1+n2+n3
}
const numbers = [1,3,5]
//const result = addNumbers(numbers[0],numbers[1],numbers[2])
//const result = addNumbers.apply(null,numbers);
const result = addNumbers(...numbers)
//log(result);

//Objects

const pname = {
  firstname: "John",
  lastname: 'Doe'
}
const address = {
  city: 'SF',
  country: 'USA'
}
const person = {...address, ...pname}
//log(JSON.stringify(person,null,2))
