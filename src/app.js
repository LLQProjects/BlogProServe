const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
// 处理req.body
const bodyparser = require('koa-bodyparser')
// 日志处理
const logger = require('koa-logger')
// 引入session 和 redis
const session = require('koa-generic-session')
const redisStore = require('koa-redis')

// 处理路由
const user = require('./routes/user')
const blog = require('./routes/blog')

// redis配置文件
const { REDIS_CONF } = require('./conf/db')

// error handler 监听错误
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
// session配置
app.keys = ['#jfsd123']
app.use(session({
  //  配置
  cookie: {
    path: '/',
    httpOnly: true, //js无法更改httpOnly
    maxAge: 24*60*60*1000
  },
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}` //redis  地址
  })
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  await next()
  const ms = new Date() 
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

// routes
app.use(user.routes(), user.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
