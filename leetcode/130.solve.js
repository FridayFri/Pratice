var solve = function (board) {
  let row = board.length;
  if (row === 0) return [];
  let col = board[0].length;
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  function dfs(i, j) {
    if (i >= 0 && i < row && j >= 0 && j < col && board[i][j] === "O") {
      board[i][j] = "@";
      for (let dir of dirs) {
        dfs(i + dir[0], j + dir[1]);
      }
    }
  }
  for (let i = 0; i < row; i++) {
    if (i === 0 || i === row - 1) {
      // 处理上下边
      for (let j = 0; j < col; j++) {
        if (board[i][j] === "O") {
          dfs(i, j);
        }
      }
      console.log(board)
    } else {
      // 处理左右边
      for (let j of [0, col - 1]) {
        if (board[i][j] === "O") {
          dfs(i, j);
        }
      }
    }
    console.log(board)
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === "@") {
        board[i][j] = "O";
      }
    }
  }
  return board
};

const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "O", "X"],
];
console.log(solve(board));
