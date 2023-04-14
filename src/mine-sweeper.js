const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const result = [];

  for (let i = 0; i < numRows; i += 1) {
    result.push(new Array(matrix[0].length).fill(0));
  }
  console.log(result)
  
  for (let i = 0; i < numRows; i += 1) {
    for (let j =0; j < numCols; j += 1) {
        
        //right
      if (matrix[i][j + 1] !== undefined && matrix[i][j + 1]) {
        result[i][j] += 1;
      }
      
      //left
      if (matrix[i][j - 1] !== undefined && matrix[i][j - 1]) {
        result[i][j] += 1;
      }
      
      //top
      if (matrix[i - 1] !== undefined && matrix[i - 1][j]) {
        result[i][j] += 1;
      }

      //bottom
      if (matrix[i + 1] !== undefined && matrix[i + 1][j]) {
        result[i][j] += 1;
      }

      //top right
      if (matrix[i - 1] !== undefined && matrix[i - 1][j + 1]) {
        result[i][j] += 1;
      }

      //top left
      if (matrix[i - 1] !== undefined && matrix[i - 1][j - 1]) {
        result[i][j] += 1;
      }

      //bottom right
      if (matrix[i + 1] !== undefined && matrix[i + 1][j + 1]) {
        result[i][j] += 1;
      }

      //bottom left
      if (matrix[i + 1] !== undefined && matrix[i + 1][j - 1]) {
        result[i][j] += 1;
      }
    }
  }
  
  return result;
}

/*
function minesweeper(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const result = [];

  for (let i = 0; i < numRows; i += 1) {
    result.push(new Array(matrix[0].length).fill(0));
  }

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];
  
  for (let row = 0; row < numRows; row += 1) {
    for (let col = 0; col < numCols; col += 1) {
      if (matrix[row][col]) {
        for (const direction of directions) {
          const newRow = row + direction[0];
          const newCol = col + direction[1];

          if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
            result[newRow][newCol] += 1;
          }
        }
      }
    }
  }

  return result;
}
*/

module.exports = {
  minesweeper
};
