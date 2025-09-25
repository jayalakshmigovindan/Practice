const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function reverseString(str) {
  return str.split('').reverse().join('');
  return str.split('').reverse().join('');
}
rl.question("Enter a string to reverse: ", function(userInput) {
  const reversed = reverseString(userInput);
  console.log("Reversed string:", reversed);
 rl.close(); 
});
