setTimeout(() => {
        console.log(11);
        setTimeout(() => {
            console.log(22);
            setTimeout(() => {
                console.log(33);
            })
        })
    })
    //多层回调函数的相互嵌套，形成了回调地狱
    /*
    缺点：代码耦合性太强，牵一发而动全身，难以维护
         大量的冗余的代码相互嵌套，代码的可读性变差
解决这个问题，使用promise
    */