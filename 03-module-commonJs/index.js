const { myName, myFavoriteNumber, myHobbies } = require('./multiply-exports');
const greeting = require('./single-export');

console.log(myName);
console.log(myFavoriteNumber);
console.log(myHobbies);
greeting(myName);
