/**
 * @description sequelize 同步数据库
 * @author llq
 */

const seq = require('./seq')

// require('../../seqModel')

// 测试连接

seq.authenticate().then(() => {
  console.log('ok')
}).catch(() => {
  console.log('err')
})
seq.sync({force: true}).then(() => {
  console.log('sync ok')
  process.exit()
})