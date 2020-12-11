/**
 * @description 关于博客的数据处理
 * @author 林连强
 */

const { Blog, User } = require('../db/model')

/**
 * @description 查询所有的博客列表，或指定用户
 * @param{Number} userId 
 * @version  2020-10-10
 * @author  林连强
 */
const getListData = async (userId) => {
    const list = await Blog.findAll({
        include: {
            model: User,
            attributes: ['nickName', 'createdAt'],
            // where: { //User的条件
            //     // id: ''
            // }
        }
    })
    return list
}

module.exports = {
    getListData
}
