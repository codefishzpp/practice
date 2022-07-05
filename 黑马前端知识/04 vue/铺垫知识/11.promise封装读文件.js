import fs from "fs"
/*
//方法的封装要求
///1.方法的名称getFile
//2.方法接收一个形参fpath,表示读取的文件的路径
function getFile(fpath) {
    //3.方法的返回值为promise实例对象
    return new Promise()(function() {
        //4.下面代码表示具体的，读文件的异步操作
        //在new promise（）构造函数期间，传递一个function函数，将具体的异步操作定义到function函数内部
        fs.readFile(fpath, 'utf8', (err, dataStr) => {})
    })

}
//第6行代码new promise（）只是创建el一个形式上的异步操作
*/
//
function getFile(fpath) {
    //reslove形参;调用getFiles()方法时，通过.then()指定的‘成功的’回调函数
    //reject 形参：调用getfile()方法时，通过.then()指定的‘失败的’回调函数
    return new Promise(function(reslove, reject) {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err)
                return reject(err)
            reslove(dataStr)
        })
    })
}
//getFile('./files/1.txt', then(成功的回调函数, 失败的回调函数));
getFile('./files/1.txt').then((r1) => { console.log(r1) }, (err) => { console.log(err.message) })