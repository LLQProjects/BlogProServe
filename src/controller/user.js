const {exec} = require('../db/mysql')
const login = async (username,password) => {
    const sql = `
        select username, password, realname from users where username='${username}' and password='${password}'
    `
    const rows = await exec(sql)
    return rows[0] || {}
    
}
module.exports = {
    login
}