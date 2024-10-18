document.addEventListener("DOMContentLoaded", function () {
    // Get the board element
    const board = document.getElementById("board");
  
    // Apply the grid styling to the board
    board.style.display = "grid";
    board.style.gridTemplateColumns = "repeat(3, 150px)";
    board.style.gridTemplateRows = "repeat(3, 150px)";
    board.style.gap = "20px";
  
    // Set each child div in the board to be a blank square
    const squares = board.querySelectorAll("div");
    squares.forEach(square => {
      square.style.width = "150px";
      square.style.height = "150px";
    //   square.style.border = "1px solid black";
      square.style.display = "flex";
      square.style.alignItems = "center";
      square.style.justifyContent = "center";
      square.style.fontSize = "36px"; // Optional, for future X or O
      square.style.backgroundColor = "white"; // Set background to white
      square.style.borderRadius = "10px"; // Round the corners slightly
      square.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.2)"; // Add shadow
    });
  });
