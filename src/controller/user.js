/**
 *  @description 关于用户的 登录，注册等逻辑相关处理
 *  @author LLQ
 */

const { loginCheck, register } = require('../service/user.js')


const userLogin = async (openId, nickName) => {
    const userInfo = await loginCheck(openId)
    // 判断当前用户是否存在，不存在即注册
    if (userInfo) {
        return {
            userInfo,
            blogLength: userInfo.blogs.length
        }
    }
    return await register(openId, nickName)
}

module.exports = { userLogin }