const Joi = require('joi');

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
  return await schema.validateAsync(obj)

}

/**
 * 进行注册相关校验
 * @param {object} obj 注册验证对象
 * @returns 返回一个promise对象
 */
async function registerSchema(obj) {
  const schema = Joi.object({
    userId: Joi.string().pattern(/^\w{6,16}$/).required().error(new Error('用户名格式不正确')),
    password: Joi.string().pattern(/^[\w!@#$%^&*+-=]{6,18}$/).required().error(new Error('密码格式不正确')),
    validPsw: Joi.string().valid(Joi.ref('password')).required().error(new Error('两次密码不一致'))
  }).unknown()
  return await schema.validateAsync(obj)
}

module.exports = {
  loginSchema,
  registerSchema
}