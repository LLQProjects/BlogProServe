
/**
 * @description sequelize 同步数据库
 * @author
 */
const seq = require('./seq.js')
// 连接数据库
seq.authenticate().then(() => {
  console.log('ok')
}).catch(() => {
  console.log('err')
})
// 执行数据库同步并退出
seq.sync({force: true}).then(() => {
  console.log('sync ok')
  process.exit()
})
module.exports = seq