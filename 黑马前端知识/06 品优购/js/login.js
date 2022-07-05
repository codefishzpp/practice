window.onload = function() {
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    var txt = document.querySelector('.txt');
    var btn = document.querySelector('.btn');
    regexp(txt, regnc); // 昵称
    regexp(btn, regpwd); // 密码框
    // 表单验证的函数
    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                // console.log('正确的');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
            } else {
                // console.log('不正确');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请从新输入 ';
            }
        }
    }
}