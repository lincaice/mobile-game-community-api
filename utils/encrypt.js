const crypto = require('crypto');

const md5Encypt = (password) => {
  let hash = crypto.createHash('md5')
  let newPsw = hash.update(password,'utf-8').digest('hex')
  return newPsw
}

module.exports = {
  md5Encypt
}