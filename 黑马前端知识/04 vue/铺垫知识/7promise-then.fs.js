//promise基本概念
/*1.promise是一个回调函数
    创建promise的实例const p = new Promise()
    new 出来promise实例对象， 代表一个异步操作
2.promise.prototype上包含一个.then()方法
    每一次new promise()构造函数得到的实例对象
    都可以通过原型链的方法访问到.then()方法，例如p.then()
3. .then()方法用来预先指定成功和失败的回调函数
    p.then(成功的回调函数，失败的回调函数)
    p.then(result=>{},error=>{})
    调用.then()方法时，成功的回调函数就是必选的，失败的回调函数是可选的
    */
//----------------------------------------------------------------------
//1.then-fs的基本使用
//调用then-fs的readFile()方法，异步读取文件的内容，返回值是promise的实例对象，因此可以调用.then()方法为每个promise异步操作指定成功和失败之后的回调函数
import thenFs from 'then-fs'
//.then()中的失败是可选的，可以被省略,无顺序可言
thenFs.readFile('./files/1.txt', 'utf8').then(r1 => { console.log(r1) }, err1 => { console.log(err1.message) })
thenFs.readFile('./files/2.txt', 'utf8').then(r2 => { console.log(r2) }, err2 => { console.log(err2.message) })
thenFs.readFile('./files/3.txt', 'utf8').then(r3 => { console.log(r3) }, err3 => { console.log(err3.message) })