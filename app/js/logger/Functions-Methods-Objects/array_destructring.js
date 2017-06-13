/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Title');
/* coding examples */

//ES5
const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];

const anna = names[0];
const mariam = names[1];
const joe = names[2];

log(`${anna} ${mariam} ${joe}`)


//ES6
const newnames = ['John', 'Bob', 'david','frank','mark'];
const [john,bob,...restOfNames] = newnames

log(`${john} ${bob} ${restOfNames}`)
