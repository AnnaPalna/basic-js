import { reporters } from 'mocha';
import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
    let  res = []
    let count = 1

    names.forEach((name) => {
        if (res.indexOf(name) === -1) {
            res.push(name)
        } else {
            let temp = res.indexOf(`${name}(${count})`)
            if (temp === -1) {
                res.push(`${name}(${count})`)
            } else {
                res.push(`${name}(${count + 1})`)
            }
        }
    })
    return res
}
