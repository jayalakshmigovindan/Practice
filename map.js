const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by commas: ", (input) => {
  let numbers = input.split(",").map(num => parseInt(num.trim()));
  let squares = numbers.map(num => num * num);
  console.log("The squares are:", squares);
  rl.close();
});
