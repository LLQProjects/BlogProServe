const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { host } = MYSQL_CONF
const { isProd, isTest } = require('../utils/env')
const conf = {
    host,
    dialect: 'mysql'
}
if (isTest) {
    conf.logging = () => { }
}
if (isProd) {
    conf.pool = {
        max: 5, //连接池中最大的连接数量
        min: 0, //最小
        idle: 1000  //一个连接池十秒之内未被使用，则释放
    }
}

const seq = new Sequelize(MYSQL_CONF.database, MYSQL_CONF.user, MYSQL_CONF.password, conf)

module.exports = seq