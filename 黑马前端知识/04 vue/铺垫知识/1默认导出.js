let n1 = 10 //定义模块私有化成员
let n2 = 20;

function show() { //定义模块私有化方法

}
//注意1：只能使用一次，不能导入两次
export default { //使用export default默认导出语法，向外共享n1和show两个成员
    n1,
    show
}