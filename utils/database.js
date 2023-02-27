const mysql = require('mysql2');

const connections = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'mobile_game_community',
  password: '12345678'
});

connections.getConnection((err, conn) => {
  conn.connect(err => {
    if (err) {
      console.log("数据库连接失败", err)
    } else {
      console.log("数据库连接成功")
    }
  })
})

module.exports = connections.promise()


