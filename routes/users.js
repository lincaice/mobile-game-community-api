const router = require('koa-router')()
const userService = require('../service/user.service');

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = userService.isExist()
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
