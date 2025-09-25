const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

rl.question("Enter a sentence: ", function(userInput) {
  console.log("Capitalized sentence:", capitalizeWords(userInput));
  rl.close();
});