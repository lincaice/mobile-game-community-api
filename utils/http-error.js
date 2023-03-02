
class HttpError {
  /**
   * @constructor
   * @param {number} code 错误状态码，一般通过code返回给前端，但http状态码保持200
   * @param {string} msg 错误提示消息，通过msg返回给前端
   */
  constructor(code, msg){
    this.code = code;
    this.msg = msg;
  }
}