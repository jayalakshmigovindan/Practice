// oddSquares.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by commas: ", (input) => {
  let numbers = input.split(",").map(num => parseInt(num.trim()));

  let oddNumbers = numbers.filter(num => num % 2 !== 0);
  let squaredOdds = oddNumbers.map(num => num * num);

  console.log("Squares of odd numbers:", squaredOdds);

  rl.close();
});
