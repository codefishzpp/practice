<template>
	<image  class="img-border" :src="src" @click="handleClick"></image>
</template>

<script>
	export default{
		props:{
			src:String
		},
		methods:{
			handleClick(){
			//子传父数据
			//this.$emit("自定义事件"，“要传递的参数”)
			this.$emit("srcChange",this.src);
			}
		}
	}
</script>

<style lang="scss">
	.img-border{
		border-radius: 50%;
	}
</style>
