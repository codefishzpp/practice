<template>
	<view>
		<!--推荐开始   mode="widthFix":高度自适应  -->
		<view class="recommend_wrap">
			<view class="recommend_item" v-for="item in recommends" :key="item.id">
				<image :src="item.thumb" mode="widthFix"></image>
			</view>
		</view>
			<!--推荐结束-->
			<!--月份开始-->
			<view class="moneths_wrap">
				<view class="months_title">
					<view class="months_title_left">
						<view class="mouth_left">
							<text>18 / </text>
							01月
						</view>
						<view class="mouth_text">你负责美丽就好</view>
					</view>
					<view class="months_title_right">更多></view>	
				</view>
				<view class="months_content"></view>	
			</view>
			<!--月份结束-->
	</view>
</template>

<script>
	export default {
		data(){
			return{
				//推荐列表
				recommends:[]
			}
		},
		//挂载
	mounted(){
			this.request({
				url:"/homepage/vertical",
				data:{
					//获得几条
					limit:30,
					//关键字
					order:"hot",
					//要跳过几条
					skip:0
				}
			}).then(result=>{
				console.log(result);
				this.recommends=result.data.res.homepage[1].items;
				console.log(this.recommends);
			})
		}
	}
</script>

<style lang="scss" scoped>
//scoped:局部作用域
//推荐图片
.recommend_wrap{
	display: flex;
	flex-wrap: wrap; 	
	.recommend_item {
		width: 49%;
		border: 5rpx solid #fff;
		image{
		width: 100%;
		}	
	}
}
//月份列
.moneths_wrap{
	.months_title{
		display: flex;
		justify-content: space-between;
		.months_title_left{
			color: #d52a7e;
			font-size: 30rpx;
			font-weight: bold;
			display: flex;
			.mouth_left{
				text{
					font-size: 36rpx;
					margin-left: 5rpx;
				}
			}
			.mouth_text{
				color:#666;
				font-size: 34rpx;
				margin-left: 30rpx;
			}
		}
		.months_title_right{
			color: #d52a7e;
			font-size: 32rpx;
			font-weight: bold;
			margin-right: 5rpx;
		}
	}
	.months_content{
		
	}
}
</style>
