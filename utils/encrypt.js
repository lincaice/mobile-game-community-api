const crypto = require('crypto');
/**
 * 对密码进行加密
 * @param {string} password 需要加密的密码
 * @returns {string} 加密的结果
 */
const md5Encypt = (password) => {
  let hash = crypto.createHash('md5')
  let newPsw = hash.update(password,'utf-8').digest('hex')
  return newPsw
}

module.exports = {
  md5Encypt
}