const router = require('koa-router')()
const userService = require('../service/users.service');

router.prefix('/api')

router.get('/login', async function (ctx, next) {
  ctx.body = await userService.isExist()
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
