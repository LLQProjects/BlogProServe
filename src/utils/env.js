/**
 *  @description 环境变量
 *  @author llq
 */
const env = proceee.env.NODE_ENV

module.exports = {
  isDev: env === 'dev',
  notDev: env !== 'dev',
  isProd: env === 'production',
  notProd: env !== 'production',
  isTest: env === 'test',
  notTest: env !== 'test'
}