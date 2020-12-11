/**
 *  @description 关于用户的 数据处理
 *  @author LLQ
 */

const { User, Blog } = require('../db/model')

/**
 *  @description 登录验证
 *  @author LLQ
 */

const loginCheck = async (openId) => {
    const res = await User.findOne({
        where: {
            openId: openId,
        },
        include: {
            model: Blog,
            attribute: []
        }
    })
    const dataValues = res && res.dataValues ? res.dataValues : null
    // console.log('用户信息.....111111....', JSON.stringify() )
    console.log('用户信息.....111111....', dataValues.blogs.length)
    return dataValues

}
/**
 * @description 用户注册：保存微信传来的用户信息
 * @param {String} openId 用户id
 * @param {String} nickName 用户昵称
 * @author LLQ
 */
const register = async (openId, nickName) => {
    const res = await User.create({
        openId: openId,
        nickName: nickName
    })
    console.log('regisRes', res)
    return res
}
module.exports = { loginCheck, register }