let secretNumber = Math.floor(Math.random() * 20) + 1;
let gameOver = false;

function checkGuess() {
  if (gameOver) return;

  const guessInput = document.getElementById('guessInput');
  const guess = Number(guessInput.value);
  const numberDisplay = document.getElementById('numberDisplay');
  const message = document.getElementById('message');

  if (!guess || guess < 1 || guess > 20) {
    message.textContent = "Please enter a number between 1 and 20.";
    return;
  }

  if (guess === secretNumber) {
    numberDisplay.textContent = secretNumber;
    numberDisplay.style.backgroundColor = "#28a745";
    message.textContent = "Correct!";
    gameOver = true;
  } else if (guess > secretNumber) {
    message.textContent = "Too high! Try again.";
  } else {
    message.textContent = "Too low! Try again.";
  }

  guessInput.value = "";
}
