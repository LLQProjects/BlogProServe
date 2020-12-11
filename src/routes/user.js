const { userLogin } = require('../controller/user')
const { SuccessResModel, ErrorResModel } = require('../model/resModel')
const Router = require('koa-router')
const router = new Router()

// 登录接口
router.post('/user/login', async (ctx, next) => {
    const { openId, nickName } = ctx.request.body
    const { userInfo, blogLength } = await userLogin(openId, nickName)
    if (userInfo.nickName) {
        ctx.session.nickName = userInfo.nickName
        ctx.session.userId = userInfo.id
        ctx.session.blogLength = blogLength
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