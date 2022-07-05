<template>
	<view>
		<uni-badge text="1"></uni-badge>
		<uni-badge text="2" type="success" @click="bindClick"></uni-badge>
		<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
	</view>
</template>

<script>
	import {uniBadge} from '@dcloudio/uni-ui'
	//import uniBadge from '@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue' //也可使用此方式引入组件
	export default {
	    components: {uniBadge},
		methods:{
			bindClick(){
				console.log(111111);
			}
		},
		//原生微信小程序的api
		onLoad(){
			//https://157.122.54.189:9088/image/v3/homepage/vertical,
			wx.request({
				url:"https://www.xqb2b.com",
				success(res){
					console.log(res);
				}
			})
			//2.uni-api
			uni.resquest({
				url:"https://www.xqb2b.com/",
			}).then(res=>{
				console.log(res);
			})
		}
	}
</script>

<style>

</style>
