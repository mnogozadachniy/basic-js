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
  //throw new NotImplementedError('Not implemented');
  let result = [];
  let height = matrix.length;
  let width = matrix[0].length;

  for (let i = 0; i < height; i++) {
    result.push([]);
    for (let j = 0; j < width; j++) {
      result[i].push(0);
    }
  }

  let i = 0;
  let j = 0;
  console.log(matrix);

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j]) {
        try {
          result[i - 1][j - 1]++;
        } catch { }
        try {
          result[i - 1][j]++;
        } catch { }
        try {
          result[i - 1][j + 1]++;
        } catch { }
        try {
          result[i][j - 1]++;
        } catch { }
        try {
          result[i][j + 1]++;
        } catch { }
        try {
          result[i + 1][j - 1]++;
        } catch { }
        try {
          result[i + 1][j]++;
        } catch { }
        try {
          result[i + 1][j + 1]++;
        } catch { }
      }
    }
  }

  console.log(result);
  return result;


}

module.exports = {
  minesweeper
};
