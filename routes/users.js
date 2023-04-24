const router = require('koa-router')()
const userService = require('../service/users.service');
const userSchema = require('../validate/userSchema');
const { validParams } = require('../middleware/validParams')
router.prefix('/api/user')


router.post('/login', validParams(userSchema.loginSchema), async function (ctx, next) {
  try {
    ctx.body = await userService.loginHandle(ctx.request.body.userId, ctx.request.body.password)
  } catch (error) {
    ctx.status = error.code
    ctx.body = error
    return
  }
  ctx.status = 200
})

router.post('/register', validParams(userSchema.registerSchema), async function (ctx, next) {
  try {
    ctx.body = await userService.registerHandle(ctx.request.body.userId, ctx.request.body.password)
  } catch (error) {
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
