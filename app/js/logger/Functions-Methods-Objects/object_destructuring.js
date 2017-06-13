/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Title');
/* coding examples */

const user = {
  name: 'John',
  age: '28',
  address: {
    country: 'USA',
    state:'CA',
    fullAddress:{
      apt: '30'
    }
  }
}

const{name,age} = user;
const {address:{country: theCountry}} = user; //Nested properties
const{address:{fullAddress : { apt: aptNumber}}} = user; //Nested properties

log(name)
log(age)
log(theCountry)
log(aptNumber)
