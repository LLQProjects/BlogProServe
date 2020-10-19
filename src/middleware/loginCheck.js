const { ErrorResModel } = require('../model/resModel')

module.exports = async (ctx, next) => {
  // 把cookie删除掉就是未登录。
  if(ctx.session.username) {
    await next()
    return
  }
  ctx.body = new ErrorResModel(
    '未登录.......'
  )
}

// module.exports = loginCheck