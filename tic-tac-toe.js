document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
  board.innerHTML = "";

  // Initialize variables to track game state and turns and begin with X
  let isXTurn = true;
  const gameState = Array(9).fill(null);

  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.cursor = "pointer";

    square.addEventListener("click", function() {
      if (!gameState[i]) {
        const mark = isXTurn ? "X" : "O";
        gameState[i] = mark;            // Update the game state
        square.textContent = mark;      // Display X or O in the square
        square.classList.add(mark);     // Add the respective class (X or O) for styling
        isXTurn = !isXTurn;
      }
    });

    square.addEventListener("mouseenter", function() {
      if (!gameState[i]) {
        square.classList.add("hover");
      }
    });

    square.addEventListener("mouseleave", function() {
      square.classList.remove("hover");
    });

    board.appendChild(square);
  }
});
