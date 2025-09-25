const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addTraditional(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

rl.question("Enter the first number: ", (num1) => {
  rl.question("Enter the second number: ", (num2) => {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log("Using Traditional Function: " + addTraditional(num1, num2));
    console.log("Using Arrow Function: " + addArrow(num1, num2));
    rl.close();
  });
});
