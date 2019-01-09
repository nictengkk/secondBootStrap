var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var paragraph = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var gameOver = false;
var winningScore = 5;

numInput.addEventListener("change", function() {
  paragraph.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.classList.add("green");
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.classList.add("green");
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", reset);

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("green");
  p2Display.classList.remove("green");
  gameOver = false;
}
