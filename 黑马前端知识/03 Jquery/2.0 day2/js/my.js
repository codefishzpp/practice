$(function() {
    //1.全选案例
    $('.checkall').change(function() {
            // console.log($(this).prop('checked'));
            $('.j-checkbox ,.checkall').prop('checked', $(this).prop('checked'));
        })
        //单选全部勾多选
    $('.j-checkbox').change(function() {
            //:checked可得到响应数量的对象个数
            //console.log($('.j-checkbox:checked'));
            //console.log($('.j-checkbox').length);//3

            if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
                $('.checkall').prop('checked', true);

            } else {
                $('.checkall').prop('checked', false);

            }
            //--------------------------------------
            //7.选中加类名，即添加颜色

            if ($(this).prop('checked')) { //.element.prop('属性名'),获取元素固有的属性值
                $(this).parents('.cart-item').addClass('check-cart-item');
            } else {
                $(this).parents('.cart-item').removeClass('check-cart-item');
            }
        })
        //--------------------------------------
        //2.增减商品数量，按+，数量+1，按-，数量-1
    $('.increment').click(function() {
        var n = $(this).siblings('.itxt').val();
        //console.log(n);
        n++;
        $(this).siblings('.itxt').val(n);
        //--------------------------------------
        //3.修改小计价格，数量*单价
        var a = $(this).parent().parent().siblings('.p-price').html();
        //从索引号为1的开始截取
        a = a.substr(1);
        //console.log(a);
        //保留两位小数toFixed(2)
        $(this).parent().parent().siblings('.p-sum').html('￥' + (a * n).toFixed(2));
    })
    $('.decrement').click(function() {
            var n = $(this).siblings('.itxt').val();
            //console.log(n);
            if (n == 1) {
                return false;
            }
            n--;
            $(this).siblings('.itxt').val(n);
            //--------------------------------------
            //3.修改小计价格，数量*单价
            var a = $(this).parent().parent().siblings('.p-price').html();
            //从索引号为1的开始截取
            a = a.substr(1);
            //保留两位小数toFixed(2)
            $(this).parent().parent().siblings('.p-sum').html('￥' + (a * n).toFixed(2));
        })
        //4.用户修改文本框，计算小计的值
    $('.itxt').change(function() {
        var b = $(this).val();
        var a = $(this).parent().parent().siblings('.p-price').html();
        a = a.substr(1);
        //console.log(b);
        $(this).parent().parent().siblings('.p-sum').html('￥' + (b * a).toFixed(2));
        getSum();
    })

    //--------------------------------------
    //5.计算总计 和总额模块
    getSum();

    function getSum() {
        var count = 0;
        var money = 0;
        $('.itxt').each(function(index, domEle) {
            //console.log(domEle);
            count += parseInt($(domEle).val());
            // console.log(count);  
        });
        $('.amount-sum em').text(count);
        $('.p-sum').each(function(index, domEle) {
            money += parseFloat($(domEle).text().substr(1));
        });
        $('.price-sum em').text('￥' + money.toFixed(2));
    }
    //--------------------------------------
    //6.删除商品模板
    //1)删除当前商品
    $('.p-action').click(function() {
            $(this).parent('.cart-item').remove();
            getSum();
        })
        //2）删除选中的商品
    $('.remove-batch').click(function() {
            $('.j-checkbox:checked').parents('.cart-item').remove();
            getSum();
        })
        //3）清空购物车，删除全部商品
    $('.clear-all').click(function() {
        $('.cart-item').remove();
        getSum();

    })



})