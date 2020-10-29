const { User, Blog } = require('./seqInit')

// 增删改查：查询

!(async function () {
    // 查询一条记录
    const userllq = await User.findOne({
        where: {
            password: '123456'
        }
    })
    console.log('search_user:', userllq.nickName)

    // 查询特定的列: userName,nickName
    const userllqName = await User.findOne({
        attributes: ['userName', 'nickName'],
        where: {
            userName: 'llq123'
        }
    })
    console.log('userLlqName:', userllqName.dataValues.userName)
    // 查询列表
    const userAll = await Blog.findAll({
        where: {
            userId: 1
        },
        order: [ //排序：按id倒叙
            ['id', 'desc']
        ]
    })
    const UserList = userAll.map(blog => blog.dataValues)

    // 分页：跳过几条，如每页10条，即跳过10条
    const blogPage = await Blog.findAll({
        limit: 2, //本次查询多少条
        offset: 0, //跳过多少条
        order: [
            ['id', 'desc']
        ]
    })

    // 查分页总数: 会返回总数
    const blogCountAll = await Blog.findAndCountAll({
        limit: 2, //本次查询多少条
        offset: 0, //跳过多少条
        order: [
            ['id', 'desc']
        ]
    })
    const count = blogCountAll.count //总数
    const pageData = blogCountAll.rows.map(i => i.dataValues)//分页数据

    // 连表查询
    const blogListWithUser = await Blog.findAndCountAll({
        order: [
            ['id', 'desc']
        ],
        include: {
            mode: User,
            attribute: ['userName', 'nickName'],
            where: {
                userName: 'zhangsan'
            }
        }
    })

    //const count = blogListWithUser.count //总数
    const withData = blogListWithUser.rows.map(blog => {
        const blogVal = blog.dataValues
        blogVal.user = blogVal.user.dataValues
        return blogVal
    })

})()