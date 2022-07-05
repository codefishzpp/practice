<!--<template><script><style>这三个标签在每个页面都只能存在一个-->
<!--<template>:View
-->
<template>	
	<view class="content">
		<image class="logo" :src="img"</image>
		<view class="text-area">
			<text class="title">{{title+'verygood'}}</text>
			<input type="text" :value="title" @input="change"/>
		</view>
		<!--<navigator url="../hello/hello" >-->
		<navigator v-bind:url="url" ><!--错误写法:url={{url}}-->
		<view class="text-area" >
			I am {{student.age >=18 ?'成年':'未成年'}} years old.<br/>
			I have skills such as:{{skill[0]}},{{skill[1]}},{{skill[2]}},{{skill[3]}},{{skill[4]}}
		</view>
		</navigator>
	</view>
</template>

<script>
	//vm:协调者 调度器(数据双向绑定)
	export default {
		//Model：所有的数据
		data() {
			return {
				title: 'Hello World Zpp',
				student:{
					age:18
				},
				skill:["java","html","css","springclode","vue"],
				url:"../hello/hello",
				img:"/static/logo.png",
				
			};
		},
		onLoad() {

		},
		methods: {
			change(e){
				var txtTitle=e.detail.value;
				//断点debugger;
				this.title=txtTitle;
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
