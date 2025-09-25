const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter some words separated by comma: ", (input) => {
  let words = input.split(",").map(word => word.trim());
  let lengths = words.map(word => word.length);

  console.log("Words: " + words.join(", "));
  console.log("Their lengths: " + lengths.join(", "));
  rl.close();
});