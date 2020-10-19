const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const seq = require('./src/db/seq')
// const seq = new Sequelize()

// 创建 user 模型
const User = seq.define('user',{
  // id自动创建
  userName:{
    type: Sequelize.STRING, //varchat(255)
    allowNUll: false
  },
  password: {
    type: Sequelize.STRING,
    allowNUll: false 
  },
  nickName: {
    type: Sequelize.STRING
  }
})

module.exports = {
  User
}