/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Title');
/* coding examples */

//Default Parameters
//ES5
var calculatePay = function calculatePay(yearSalary) {
  var bonus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    teamBonus: 0,
    employeeBonus: 0
  };
  return yearSalary + bonus.teamBonus + bonus.employeeBonus;
};

//ES6
const newcalculatePay = (yearSalary, bonus = {
  teamBonus: 0,
  employeeBonus: 0
}) => {
  return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

log(newcalculatePay(22000, {teamBonus: 10000, employeeBonus: 6000 }));
