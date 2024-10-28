document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
  const status = document.getElementById("status");
  const newGameButton = document.querySelector(".btn");


  // initialize variables to track game state and turns and begin with X's turn
  let isXTurn = true;
  const gameState = Array(9).fill(null);
  let gameActive = true;              // track if the game is still active

  // winning combinations (rows, columns, diagonals)
  const winningCombinations = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // top-left to bottom-right diagonal
    [2, 4, 6]  // top-right to bottom-left diagonal
  ];

  // check if a player has won
  function checkWinner() {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];      // return "X" or "O" if there's a winner
      }
    }
    return null;
  }

  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("click", function() {
      if (!gameState[i] && gameActive) {
        const mark = isXTurn ? "X" : "O";
        gameState[i] = mark;
        square.textContent = mark;
        square.classList.add(mark);

        // check for a winner after each move
        const winner = checkWinner();
        if (winner) {
          status.textContent = `Congratulations! ${winner} is the Winner!`;
          status.classList.add("you-won");
          gameActive = false;             // stop further moves
        } else {
          isXTurn = !isXTurn;             // switch turns if no winner
        }
      }
    });

    square.addEventListener("mouseenter", function() {
      if (!gameState[i] && gameActive) {
        square.classList.add("hover");
      }
    });

    square.addEventListener("mouseleave", function() {
      square.classList.remove("hover");
    });

    board.appendChild(square);
  }

  // reset the game when "New Game" button is clicked
  newGameButton.addEventListener("click", function() {
    isXTurn = true;
    gameState.fill(null);
    gameActive = true;

    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.textContent = "";                        // remove X or O
      square.classList.remove("X", "O", "hover");     // remove any classes
    });

    status.textContent = "Move your mouse over a square and click to play an X or an O.";
    status.classList.remove("you-won");
  });
});