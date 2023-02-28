const userDB = require('../dao/usersMapper');

class UserService {
  async isExist() {
    const { usersInfo } = await userDB.getUserInfo()
    console.log(usersInfo);
    return {
      usersInfo
    }
  }
}

module.exports = new UserService()