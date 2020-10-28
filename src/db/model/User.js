/**
 * @description  用户模型
 * @author 林连强
 */

const Sequelize = require('sequelize')
const seq = require('../seq')

const User = seq.define('user',{
  // id自动创建
  userName:{
    type: Sequelize.STRING, //varchat(255)
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  nickName: {
    type: Sequelize.STRING,
    comment: '昵称' //描述
  }
})

module.exports = User