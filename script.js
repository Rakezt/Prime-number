var readlineSync = require('readline-sync')
var chalk = require("chalk");
var userName = readlineSync.question("Naam dedo bhaiya.....")
var potato = "potato"

console.log("Welcome " + (userName) + ", to the bandhar club");
var date = readlineSync.question("Input you date of born....")
var mon = readlineSync.question("Input you month of born....")
var num=parseInt(date)+parseInt(mon);


function primeNum(num) {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return (chalk.bgRedBright("Sorry, the total is not a prime number"))
    }
  }
  return (chalk.greenBright(" Yay!! the total is a prime number"))
}
console.log(primeNum(num))