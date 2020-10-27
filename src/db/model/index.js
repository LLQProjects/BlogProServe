const Sequelize = require('sequelize')
const seq = require('./seq')
// const seq = new Sequelize()

// 创建 user 模型
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

// 创建Blog 模型

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