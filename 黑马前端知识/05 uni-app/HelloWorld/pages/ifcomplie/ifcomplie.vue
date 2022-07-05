<template>
	<view>
		<view>
		<!-- #ifdef H5-->
		<view>
			只在H5编译
		</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS-->
		<view>
			只在iOS/安卓编译
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-->
		<view>
			只在小程序（微信，支付宝，百度）进行编译
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN-->
		<view>
			只在微信小程序进行编译
		</view>
		<!-- #endif -->
		</view>
		<view class="color">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(){
			//#ifdef H5
				console.log("只在H5编译");
			//#endif
			
			//#ifdef APP-PLUS
				console.log("只在iOS/安卓编译");
			//#endif
			
			//#ifdef MP
				console.log("只在小程序（微信，支付宝，百度）进行编译");
			//#endif
			
			//#ifdef MP-WEIXIN
				console.log("只在微信小程序进行编译");
			//#endif}

	}
</script>

<style>
  .color{
	//#ifdef H5
		background-color: #007AFF;
	
	//#endif
	//#ifdef APP-PLUS
		background-color: red;
		
	//#endif
	//#ifdef MP
		background-color: yellow;
	
	//#endif
	//#ifdef MP-WEIXIN
		background-color:black;
	
	//#endif	
	width: 200upx;
		height: 200upx;
}
</style>
