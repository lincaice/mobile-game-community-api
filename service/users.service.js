
const userDB = require('../dao/usersMapper');
const md5 = require('../utils/encrypt');
const HttpError = require('../utils/http-error');
const { generateJWT, verifyJWT } = require('../utils/jwt')

class UserService {
  /**
   * 登录的service函数
   * @param {string} username 用户名
   * @param {string} password 密码
   * @returns {Promise<object>} 返回给前端的对象
   */
  async loginHandle(username, password) {
    let pswList = []
    const validPsw = md5.md5Encypt(password)
    try {
      pswList = await userDB.getPswByAccount(username);
    } catch (error) {
      throw new HttpError(500, '服务器错误，请退出App或稍后再试，如若还出现错误，请联系管理员。')
    }
    if (pswList.length === 0 || pswList[0].password !== validPsw) {
      throw new HttpError(401, '请确认你输入了正确的账号和密码，请检查相关信息后重试。如未注册，请先前去注册。')
    }
    let token = generateJWT({ userId: username })
    console.log('jwtvvv :>> ', verifyJWT(token));
    return {
      code: 200,
      msg: '登录成功',
      data: {
        token: token
      }
    }
  }

  /**
   * 注册的service函数
   * @param {string} username 用户名
   * @param {string} password 密码
   * @returns {Promise<object>} 返回给前端的对象
   */
  async registerHandle(username, password) {
    const md5Psw = md5.md5Encypt(password)
    try {
      await userDB.insertUser(username, md5Psw);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new HttpError(401, '该账号已经被注册，请更换账号后重试。')
      } else {
        throw new HttpError(500, '服务器错误，请退出App或稍后再试，如若还出现错误，请联系管理员。')
      }
    }
    return {
      code: 200,
      msg: '注册成功，请返回登录界面登录，体验更多功能。'
    }
  }
}

module.exports = new UserService()