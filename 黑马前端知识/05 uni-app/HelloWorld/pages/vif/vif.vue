<template>
	<view >
		
	
	<!-- v-if v-show的区别，前者是否会在dom中移除，后者display:none-->
	<view v-show="isShow">
		you see see me
	</view>
	
	<!--三元计算-->
	<view v-if="sex1==1? true : false">
		男性
	</view>
	<view v-if="sex0==0? true : false">
		女性
	</view>
	
	<view v-if="sex2==1">
		男性
	</view>
	<view v-else-if="sex2==0">
		女性
	</view>
	<view v-else>
		未知
	</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:true,
				sex0:0,
				sex1:1,
				sex2:4
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
