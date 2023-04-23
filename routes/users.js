const router = require('koa-router')()
const userService = require('../service/users.service');
const userSchema = require('../validate/userSchema');
router.prefix('/api/user')


router.post('/login', async function (ctx, next) {
  try {
    await userSchema.loginSchema(ctx.request.body)
    ctx.body = await userService.loginHandle(ctx.request.body.userId, ctx.request.body.password)
  } catch (error) {
    console.log(error);
    ctx.status = error.code
    ctx.body = error
    return
  }
  ctx.status = 200
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
