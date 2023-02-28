const promisePool = require('../utils/database');

class UserDB {
  // 获取用户列表
  async getUserInfo() {
    const state = `SELECT password FROM users WHERE user_account='2328462307@qq.com'`;
    const [usersInfo] = await promisePool.execute(state);
    console.log(usersInfo);
    return {
      usersInfo
    }
  }
}

module.exports = new UserDB()