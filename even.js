const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by commas: ", (input) => {
  let numbers = input.split(",").map(num => parseInt(num.trim()));
  let evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log("Even numbers are:", evenNumbers.join(", "));
  rl.close();
});
