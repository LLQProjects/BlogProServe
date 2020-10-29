const { Blog, User } = require('./seqInit')

!(async function () {

    const updateUser = await User.update({ //返回成功修改了几行  [1]
        nickName: 'llq_sz'
    }, {
        where: {
            password: '123456'
        }
    })

    updateUser[0].length > 0 // 1 > 0 更新成功

})()