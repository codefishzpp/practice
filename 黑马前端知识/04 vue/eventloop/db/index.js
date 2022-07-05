//2.创建db数据库模块
import mysql from 'mysql2'
const pool = mysql.createPool({
        host: '127.0.0.1',
        port: 3306,
        database: 'my_db_01', //请填写要操作的数据库的名称
        user: 'root', //请填写登录数据库的用户名
        password: 'admin123' //请填写登录数据库的密码
    })
    //默认导出一个支持promiseAPI的pool
export default pool.promise()