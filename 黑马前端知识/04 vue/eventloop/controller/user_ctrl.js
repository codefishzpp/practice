import db from '../db/index.js'
//使用Es6的按需导出语法，将getAllFile方法导出去
export async function getAllUser(req, res) {
    //db.query()函数返回值是promise的实例对象，因此，可以使用async/await进行简化
    const [rows] = await db.query('select id,username,nickname from ev_users')
    res.send({
        status: 0, //0成功，1失败
        message: "获取用户列表数据成功",
        data: rows,
    })
}