const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

rl.question("Enter a sentence: ", function(userInput) {
  console.log("Longest word:", longestWord(userInput));
  rl.close();
});