const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by space: ", (answer) => {
  let numbers = answer.split(" ").map(Number);
  let result = numbers.filter(num => num > 10);

  console.log("Numbers greater than 10:", result);

  rl.close();
});
