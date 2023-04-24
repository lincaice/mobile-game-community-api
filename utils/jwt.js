const jwt = require('jsonwebtoken');
let key = "Lincaice"
let expires = 60 * 60 * 24

/**
 * 生成JWT，一般data为用户id
 * @param {object} data JWT存储的数据
 * @returns {string} 返回生成的JWT
 */
const generateJWT = (data = {}) => {
  return jwt.sign(data, key, { expiresIn: expires })
}

/**
 * 对JWT进行验证
 * @param {string} JWT 要验证的JWT
 */
const verifyJWT = (JWT) => {
  try {
    let toeknKey = jwt.verify(JWT, key)
    return toeknKey
  } catch (error) {
    console.log(1313);
  }
}

module.exports = {
  generateJWT,
  verifyJWT
}


