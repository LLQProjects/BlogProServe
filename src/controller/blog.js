const { exec } = require('../db/mysql')

// 获取博客列表
const getList = async (author,keyword) => {
    let sql = `select * from blogs where 1=1 `
    if(author) {
        sql += `and author='${author}' `
    }
    if(keyword) {
        sql += `and title='%${keyword}&' `
    }
    sql += `order by createtime desc`
    // promise
    return await exec(sql)
}
// 获取详情
const getDetail = async (id) => {
    const sql = `select * from blogs where id='${id}'` //数组
    const data = await exec(sql)
    return data[0]
}
// 新建
const newBlog = async (blogData = {}) => {
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createTime = Date.now()

    const sql = `insert into blogs(title,content,createtime,author) values(
        '${title}', '${content}',${createTime}, '${author}'
    )`
    const insertData = await exec(sql)
    return {
        id: insertData.insertId
    }
}
// 更新
const updateBlog = async (blogData) => {
    const title = blogData.title
    const content = blogData.content
    const id = blogData.id

    const sql = `
        update blogs set title='${title}', content='${content}' where id = ${id}
    `
    const updateData = await exec(sql)
    if(updateData) {
        return updateData.affectedRows > 0
    }
}
// 删除
const delBlog = (id) => {

}


module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}