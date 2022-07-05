//若上一个.then()方法中返回了一个新的promise实例对象，则通过下一个。then继续处理，通过.then()方法继续处理，通过.then()方法的链式调用，就解决了回调地狱的问题
import thenFs from "then-fs"
thenFs.readFile('./files/1.txt', 'utf8')
    .catch(err => { //捕获第一行发生的错误，并输出错误的信息。放最后，前面都没法执行，若想继续执行其他行，放第一行
        console.log(err.message);
    })
    .then((r1) => {
        console.log(r1)
        return thenFs.readFile('./files/2.txt', 'utf8')
    })
    .then((r2) => {
        console.log(r2)
        return thenFs.readFile('./files/3.txt', 'utf8')
    })
    .then((r3) => {
        console.log(r3)
    })