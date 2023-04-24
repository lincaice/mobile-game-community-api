const promisePool = require('../utils/database');

class UserDB {
  /**
   * @description 根据用户账号获取密码（数据库中获取到加密的密码）
   * @author linCaice <2328462307@qq.com>
   * @param {string} str - 用户登录账号
   * @returns {Promise<{password:string}[]>} 用户密码数组
   */
  async getPswByAccount(str) {
    const state = `SELECT password FROM user WHERE user_account = ?`;
    const [usersInfo] = await promisePool.execute(state, [str]);
    return usersInfo;
  }

  /**
   * @description 根据用户账号获取密码（数据库中获取到加密的密码）
   * @author linCaice <2328462307@qq.com>
   * @param {string} str - 用户登录账号
   * @returns {Promise<{password:string}[]>} 用户密码数组
   */
  async insertUser(userId, password) {
    const state = `INSERT INTO user (user_account, password) VALUES(?,?)`;
    const res = await promisePool.execute(state, [userId, password]);
    return res;
  }
}

module.exports = new UserDB();