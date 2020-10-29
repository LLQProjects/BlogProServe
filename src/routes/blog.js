// 只处理路由相关
const { SuccessResModel, ErrorResModel } = require('../model/resModel')
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const Router = require('koa-router')
const loginCheck = require('../middleware/loginCheck')


const router = new Router()
router.prefix('/blog')
// 动态路由
router.get('/profile/:userName/:pageIndex', async (ctx, next) => {
    const { userName } = ctx.params
    console.log(userName)

})
// 获取列表  --  登录检查放在函数里做
router.get('/list', async (ctx, next) => {
    let author = ctx.query.author
    const keyword = ctx.query.keyword
    // if(ctx.query.isadmin) {
    //   // 自动将cookie携带的信息，去session换取
    //   console.log('ctx.session.username:', ctx.session.username)
    //   if(ctx.session.username == null) {
    //     // 未登录
    //     ctx.body = new ErrorResModel('未登录哦')
    //     return
    //   }
    //   author = ctx.session.username
    // }

    const blogList = await getList(author, keyword)
    ctx.body = new SuccessResModel(blogList, '获取列表成功')
})

// 获取详情
router.get('/detail', async (ctx, next) => {
    const id = ctx.query.id
    console.log('id:', ctx.query)
    const blogDetail = await getDetail(id)
    ctx.body = new SuccessResModel(blogDetail, '获取详情成功')
})

// 新增博客
router.post('/new', loginCheck, async (ctx, next) => {
    const body = ctx.request.body
    body.author = ctx.session.username
    const newBlogId = await newBlog(body)
    ctx.body = new SuccessResModel(newBlogId, '新增成功！')
})

module.exports = router
