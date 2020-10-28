/**
 * @description 数据模型入口文件
 * @author 林连强
 */

const Sequelize = require('sequelize')
const seq = require('../seq')
const User = require('./User')
const Blog = require('./Blog')

// 外键关联：Blog: userId - User: Id。
// Blog模型属于User模型，多对一关系

Blog.belongsTo(User,{
  foreignKey: 'userId'  //默认关联id
})
// 同下。查找User 连带查询Blog
User.hasMany(Blog,{
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog
}