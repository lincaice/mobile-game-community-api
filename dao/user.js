const promisePool = require('../utils/database');

class UserDB {
  // 获取用户列表
  async getUserInfo() {
    const state = `SELECT COUNT(*) total FROM users`;
    const [usersInfo] = await promisePool.execute(state);
    console.log(usersInfo);
    return {
      usersInfo
    }
  }
}

module.exports = new UserDB()