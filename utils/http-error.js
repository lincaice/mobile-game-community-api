
class HttpError {
  /**
   * @constructor
   * @param {number} code 错误状态码，一般通过code返回给前端，但http状态码保持200
   * @param {string} msg 错误提示消息，通过msg返回给前端
   * @param {Object} data 传递的对象
   */
  constructor(code, msg, data=null){
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
}

module.exports = HttpError