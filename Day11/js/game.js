var playerOneChoice = "Rock";
var PlayerTwoChoice = "scissors";
if (playerOneChoice == "Rock" && PlayerTwoChoice == "Paper") {
  console.log(`the player who choose paper wins`);
} else if (playerOneChoice == "Rock" && PlayerTwoChoice == "scissors") {
  console.log(`the player who chose rock wins`);
} else if (playerOneChoice == PlayerTwoChoice) {
  console.log(`it \'s a tie `);
}
