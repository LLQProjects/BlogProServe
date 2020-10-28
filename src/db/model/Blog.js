/**
 * @description  博客数据模型
 * @author 林连强
 */

const Sequelize = require('sequelize')
const seq = require('../seq')

const Blog = seq.define('blog',{
  image: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Blog