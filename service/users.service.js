
const userDB = require('../dao/usersMapper');
const md5 = require('../utils/encrypt');

class UserService {
  
  async loginHandle(username, password) {
    const pswList = await userDB.getPswByAccount(username);
    if(pswList.length === 0) {
      throw new Error('该用户不存在')
    }
    return {
      usersInfo
    } 
  }
}

module.exports = new UserService()