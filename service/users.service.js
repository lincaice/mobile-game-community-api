
const userDB = require('../dao/usersMapper');
const md5 = require('../utils/encrypt');
const HttpError = require('../utils/http-error');

class UserService {
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
    return {
      code: 200,
      msg: '登录成功'
    }
  }
}

module.exports = new UserService()