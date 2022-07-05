import thenFs from "then-fs";
//async / await是es8引入是新语法， 简化promise异步操作， 之前只能用链式.then() 的方式处理promise异步操做
//.then链式调用的优点：解决了回调地狱的问题
//.then链式调用的缺点：代码冗余，阅读性差，不易理解
async function getAllFile() {
    const r1 = await thenFs.readFile('./files/1.txt', 'utf-8')
    console.log(r1);
    const r2 = await thenFs.readFile('./files/2.txt', 'utf-8')
    console.log(r2);
    const r3 = await thenFs.readFile('./files/3.txt', 'utf-8')
    console.log(r3);
}
getAllFile()
    //注意事项：
    //在function 中使用了await，则function 必须被async修饰
    //在async方法中，第一个await之前的代码会同步执行，await之后的代码会异步执行
    //例如
console.log('A');
async function getAll() {
    console.log('B');
    const r1 = await thenFs.readFile('./files/1.txt', 'utf-8')
    const r2 = await thenFs.readFile('./files/2.txt', 'utf-8')
    const r3 = await thenFs.readFile('./files/3.txt', 'utf-8')
    console.log(r1, r2, r3);
    console.log('D');
}
getAll()
console.log('C');
//ABC1112222333D