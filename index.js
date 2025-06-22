// Prompt user for input
const prompt = require('prompt-sync')();

let answer = parseInt(prompt("Please enter the number you would like to Fizzbuzz up to: "));
console.log("I'm happy");
for (let i = 1; i<= answer; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}