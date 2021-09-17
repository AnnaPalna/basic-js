import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (str.length === 0) {
    return str
  }

  let res = ''
  let num = 1
  
  for (let i = 0; i < str.length; i++) {
  	if (str[i] === str[i+1]) {
    	num++
    }
  
    else {
    
      if (num > 1) {
    	res += `${num}${str[i]}`
    }
      if (num === 1) {
      res += `${str[i]}`
    }
          num = 1
  }
}
  
  return res
  
}
