<template>
	<navigator url="../index/index" open-type="navigateBack">
	<view class="green"></view>
	</navigator>
</template>

<script>
	export default {
		data() {
			return {
			};},
	onLoad(){
			console.log('页面加载')
	},
	onUnload(){
			console.log('页面关闭')
	},
	onReady(){
			console.log('页面初次渲染完成')
	},
	onShow(){
			console.log('页面show')
	},
	onHide(){
			console.log('页面hide')
	},
	onShareAppMessage(){
			console.log('分享')
	},
	onPageScroll(){
			console.log('页面滚动')
	},
	onBackPress(){
			console.log('页面返回')
	}}
</script>

<style>
.green{
	background-color: #007AFF;
	width: 750upx;
	height: 750upx;
}
</style>
