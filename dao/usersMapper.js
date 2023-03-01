const promisePool = require('../utils/database');

class UserDB {
  // 获取用户列表
  async getPswByAccount(str) {
    const state = `SELECT password FROM users WHERE user_account = ?`;
    const [usersInfo] = await promisePool.execute(state, [str]);
    console.log(usersInfo);
    return usersInfo;
  }
}

module.exports = new UserDB();