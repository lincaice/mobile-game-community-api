const userDB = require('../dao/usersMapper');

class UserService {
  async loginHandle(username, password) {
    const usersInfo = await userDB.getPswByAccount();
    return {
      usersInfo
    }
  }
}

module.exports = new UserService()