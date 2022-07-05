//1.创建基本服务器
import express from 'express'
const app = express()
app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})