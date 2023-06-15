function playGame(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var resultElement = document.getElementById("result");

    if (userChoice === computerChoice) {
      resultElement.textContent = "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultElement.textContent = "You win!";
    } else {
      resultElement.textContent = "You lose!";
    }
  }