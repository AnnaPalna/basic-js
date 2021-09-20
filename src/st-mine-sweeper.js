import { NotImplementedError } from '../extensions/index.js';

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
export default function minesweeper (matrix) {
  const mines = [];

  for (let i = 0; i < matrix.length; i++) {
    mines[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      mines[i].push(matrix[i][j]);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      for (let n = 0; n < 2; n++) {
        if (n === 0) {
          if (matrix[i][j - 1] !== undefined && matrix[i][j - 1]) {
            count += 1;
          }
          if (matrix[i][j + 1] !== undefined && matrix[i][j + 1]) {
            count += 1;
          }
        } else {
          for (let x = -1; x < 2; x++) {
            if (matrix[i - n]) {
              if (matrix[i - n][j - x] !== undefined && matrix[i - n][j - x]) {
                count += 1;
              }
            }
            if (matrix[i + n]) {
              if (matrix[i + n][j - x] !== undefined && matrix[i + n][j - x]) {
                count += 1;
              }
            }
          }
        }
      }
      mines[i][j] = count;
    }
  }
  return mines;
}
