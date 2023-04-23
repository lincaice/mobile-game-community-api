const Joi = require('joi');
const HttpError = require('../utils/http-error');

/**
 * 进行登录相关校验
 * @param {object} obj 登录验证对象
 * @returns 返回一个promise对象
 */
async function loginSchema(obj) {
  const schema = Joi.object({
    userId: Joi.string().pattern(/^\w{6,16}$/).required().error(new Error('用户名格式不正确')),
    password: Joi.string().pattern(/^[\w!@#$%^&*+-=]{6,18}$/).required().error(new Error('密码格式不正确'))
  }).unknown()
  try {
    await schema.validateAsync(obj)
  } catch (error) {
    throw new HttpError(403, error.message)
  }
}

module.exports = {
  loginSchema
}