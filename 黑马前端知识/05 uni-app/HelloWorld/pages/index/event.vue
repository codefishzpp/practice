<template>
	<view class="event">
		<input type="text" value="" style="background-color: #2C405A;height: 100upx;"
		@blur="blur"
		@focus="focus"
		@confirm="confirm"
		@click="click"
		@tap="tap"
		@longpress="longpress"
		@longtap="longtap"
		@touchstart="touchstart"
		@touchend="touchend"
		@touchmove="touchmove"
		@touchcancel="touchcancel"
		/>
		<!--longtap不推荐，会覆盖longpress-->
	</view>
</template>

<script>
	//vm:协调者 调度器(数据双向绑定)
	export default {
		//Model：所有的数据
		data() {
			return {
			};
		},
		methods: {
			blur(){
				console.log('失去焦点')
			},
			focus(){
				console.log('获取焦点')
			},
			confirm(){
				console.log('页面初次渲染完成')
			},
			click(){
				console.log('页面初次渲染完成')
			},
			tap(){
				console.log('组件被触摸')
			},
			longpress(){
				console.log('长时间按住')
			},
			longtap(){
				console.log('长时间触摸')
			},
			
	
		}
	}
</script>

<style>
</style>
