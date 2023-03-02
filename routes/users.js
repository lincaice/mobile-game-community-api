const router = require('koa-router')()
const userService = require('../service/users.service');

router.prefix('/api/user')


router.get('/login', async function (ctx, next) {
  ctx.body = await userService.loginHandle('2328462307')
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
