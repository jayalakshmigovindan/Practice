const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

rl.question("Enter a string to check if it's a palindrome: ", function(userInput) {
  if (isPalindrome(userInput)) {
    console.log("Yes, it is a palindrome");
  } else {
    console.log("No, it is not a palindrome");
  }

  rl.close();
});
