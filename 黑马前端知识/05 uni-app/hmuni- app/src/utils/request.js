//es6
export default(params)=>{
	//加载中
	uni.showLoading({
		title:"加载中"
	})
return new Promise((resolve,reject)=>{
	wx.request({
		//url,data不想写了，直接传参
		...params,//解构传参
		//成功
		success(res){
			resolve(res);
		},
		//失败
		fail(err){
			reject(err);
		},
		//回调函数，成功失败都会执行
		complete(){
			uni.hideLoading();
		}
	})
})	
}

