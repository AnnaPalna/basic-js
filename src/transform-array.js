import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {

  if (arr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let copy = arr.slice(0)
  let res = []

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === '--discard-next') {
      if (copy[i] !== undefined) {
        copy.splice(i+1, 1)
        copy.splice(i, 1)
      }
    }

    if (copy[i] === '--discard-prev') {
      if (copy[i - 1] !== undefined) {
        copy.splice(i, 1)
        copy.splice(i - 1, 1)
      } else {
        copy.splice(i, 1)
      }
    }

    if (copy[i] === '--double-next') {
      if (copy[i + 1] !== undefined) {
        copy.splice(i, 1, copy[i + 1])
      } else {
        copy.splice(i, 1)
      }
    }

    if (copy[i] === '--double-prev') {
      if (copy[i - 1] !== undefined) {
        copy.splice(i, 1, copy[i - 1])
      } else {
        copy.splice(i, 1)
      }
    }
  }

  return copy

}
