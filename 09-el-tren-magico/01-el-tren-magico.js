function moveTrain(board, mov) {
  const rowLocomotora = board.findIndex((row) => row.includes("@"));
  const positionLocomotora = board[rowLocomotora].indexOf("@");
  const options = {
    "*": "eat",
    "·": "none",
  };
  const movimiento = {
    U: (row, col) => board[row - 1]?.charAt(col),
    D: (row, col) => board[row + 1]?.charAt(col),
    R: (row, col) => board[row].charAt(col + 1),
    L: (row, col) => board[row].charAt(col - 1),
  };
  const evaluatedParam = movimiento[mov](rowLocomotora, positionLocomotora);

  return options[evaluatedParam] || "crash";
}
