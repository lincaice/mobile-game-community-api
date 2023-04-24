/**
 * 通过joi库进行验证的中间件
 * @param {Function} joiFun joi的验证函数（async函数）
 * @returns {Function} 返回一个async函数
 */
const HttpError = require('../utils/http-error');

function validParams(joiFun) {
  return async (ctx, next) => {
    try {
      await joiFun(ctx.request.body)
    } catch (error) {
      ctx.status = 403
      ctx.body = new HttpError(403, error.message)
      return
    }
    await next()
  }
}

module.exports = {
  validParams
}