const env = process.env.NODE_ENV  //获取环境变量

// mysql 连接配置
let MYSQL_CONF
let REDIS_CONF
let host = 'rds2ivze3ynj3ueo.mysql.rds.aliyuncs.com'
// nginx : 8099

if (env === 'dev') {
    // mysql
    MYSQL_CONF = {
        host: host,
        user: 'linlq',
        password: 'Linlianqiang',
        port: '3306',
        database: 'linlq'
    }
    // redis
    REDIS_CONF = {
        host: '127.0.0.1',
        port: 6379
    }
}

if (env === 'production') {
    // mysql
    MYSQL_CONF = {
        host: host,
        user: 'linlq',
        password: 'Linlianqiang',
        port: '3306',
        database: 'linlq'
    }
    // redis
    REDIS_CONF = {

        host: '127.0.0.1',
        port: 6379
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}