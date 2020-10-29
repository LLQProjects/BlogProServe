const { login } = require('../controller/user')
const { SuccessResModel, ErrorResModel } = require('../model/resModel')
const Router = require('koa-router')
const router = new Router()

// 登录接口
router.post('/api/user/login', async (ctx, next) => {
    const { username, password } = ctx.request.body

    const data = await login(username, password)
    console.log('ctx.request:', ctx.request)
    if (data.username) {
        ctx.session.username = data.username
        ctx.session.realname = data.realname
        ctx.body = new SuccessResModel(ctx.session, 'success')
        return
    }
    ctx.body = new ErrorResModel('登录失败。')
})

// 获取用户信息

router.post('/api/user/info', async (ctx, next) => {
    if (ctx.session.username == null) {
        // 未登录
        const tset = new ErrorResModel('test000')
        console.log('ctx.session--', tset.msg)
        ctx.body = new ErrorResModel('未登录哦')
        return
    }
    let userInfo = {
        realname: ctx.session.realname
    }
    ctx.body = new SuccessResModel(userInfo)
})

router.get('/api/user/login-test', async (ctx, next) => {
    if (ctx.session.username) {
        ctx.body = new SuccessResModel({
            session: req.session
        })
    }
    ctx.body = new ErrorResModel('未登录')
})

module.exports = router