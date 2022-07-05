$(function() {
    // 节流阀  互斥锁 ------把点击和滚动操作分开
    var flag = true;
    // 1.显示隐藏电梯导航
    var toolTop = $('.recommend ').offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();

        } else {
            $('.fixedtool').fadeOut();

        }

    }
    $(window).scroll(function() {
        toggleTool();
        //3.页面滚动到某个区域，左侧电梯导航小li相应添加和删除current类名
        if (flag) {
            $('.floor .w').each(function(i, ele) {
                console.log(ele);
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
                }
            });
        }


    })



    //2.点击电梯导航页面，可以滑动到相应的内容区域
    $('.fixedtool li').click(function() {
        flag = false;
        //console.log($(this).index());
        //选出对应索引号的盒子，计算对应的offsetTop（）
        var current = $('.floor .w').eq($(this).index()).offset().top;
        $('bddy,html').stop().animate({
            scrollTop: current,
            function() {
                flag = true;
            }
        });
        //点击添加类，兄弟去除类
        $(this).addClass('current').siblings().removeClass();


    })
})