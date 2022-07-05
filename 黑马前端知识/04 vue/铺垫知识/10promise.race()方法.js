import thenFs from "then-fs";
//promise异步操作，发起并行的异步操作，只要任何一个异步操作完成，就以及执行下一步.then()操作
//1.定义数组，存放三个异步操作
const promiseArr = [
        thenFs.readFile('./files/1.txt', 'utf8'),
        thenFs.readFile('./files/2.txt', 'utf8'),
        thenFs.readFile('./files/3.txt', 'utf8'),
    ]
    //2.将promise的数组，作为promise。all（）的参数
Promise.race(promiseArr)
    .then(([r1, r2, r3]) => {
        console.log(r1, r2, r3) //读取所有文件读取成功（等待机制）
    })
    .catch(err => { //捕获异步操作的错误
        console.log(err.message);
    })