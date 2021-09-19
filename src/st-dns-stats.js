import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let obj = {}
  let newDomains = domains.map((item) => item.split('.').reverse(''))

  newDomains.forEach((item) => {
    let dns = ''

    item.forEach((item0) => {
      dns = `${dns}.${item0}`
      obj[dns] = (obj[dns] || 0) + 1
    })
  })

  return obj
}
