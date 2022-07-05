function animate(obj, target, callback) {
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);

            //回调函数写到定时器里面
            if (callback) {
                callback();
            }
            // callback && callback();

        }
        obj.style.left = obj.offsetLeft + step + 'px';
        //window.scroll(0, window.pageYOffset + step);
    }, 30)
}