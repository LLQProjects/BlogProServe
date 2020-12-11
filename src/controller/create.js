const { User, Blog } = require('../db/model/index.js')

// 增删改查：创建用户
!(async function () {
    const userllq = await User.create({
        userName: 'llq123',
        password: '123456',
        nickName: '我是林连强2'
    })
    console.log('user:', userllq.nickName)
})//()

// 创建博客
!(async function () {
    const userllq = await Blog.create({
        userId: '3',
        content: '这是一篇博客内容很长的博客2',
        image: 'xxxx'
    })

})()