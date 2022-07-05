<template>
	<view class="page ">
		
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item> 
				<image src="../../static/e.png" mode=""  class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/q.png" mode=""  class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/r.png" mode=""  class="carousel"></image>
			</swiper-item>
		</swiper>
		<!--轮播图-->
		<!--热门超英start-->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/fire.png" class="hot-ico"></image>
				<view class="hot-title">
					热门超英
				</view>
			</view>
		</view>
		<scroll-view scroll-y="true" class="page-block hot">
			<view class="single-poster">
				<view class="poster-warpper">
					<image src="../../static/dog1.png" class="poster"></image>
					<view class="" class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<view class="movie-scroe-wapper">
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/xx.png" class="star-icon"></image>
						<view class="movie-score">
							9.1
						</view>
					</view>
				</view>
				
			</view>
			<view class="single-poster">
				<view class="poster-warpper">
					<image src="../../static/dog2.png" class="poster"></image>
					<view class="" class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<view class="movie-scroe-wapper">
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/xx.png" class="star-icon"></image>
						<view class="movie-score">
							9.2
						</view>
					</view>
				</view>
				
			</view>
			<view class="single-poster">
				<view class="poster-warpper">
					<image src="../../static/dog3.png" class="poster"></image>
					<view class="" class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<view class="movie-scroe-wapper">
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/xx.png" class="star-icon"></image>
						<view class="movie-score">
							9.3
						</view>
					</view>
				</view>
				
			</view>
			<view class="single-poster">
				<view class="poster-warpper">
					<image src="../../static/dog2.png" class="poster"></image>
					<view class="" class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<view class="movie-scroe-wapper">
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/xx.png" class="star-icon"></image>
						<view class="movie-score">
							9.4
						</view>
					</view>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-warpper">
					<image src="../../static/dog2.png" class="poster"></image>
					<view class="" class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<view class="movie-scroe-wapper">
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/xx.png" class="star-icon"></image>
						<view class="movie-score">
							9.2
						</view>
					</view>
				</view>
			</view>
			<view class="single-poster">
				<view class="poster-warpper">
					<image src="../../static/dog2.png" class="poster"></image>
					<view class="" class="movie-name">
						蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠
					</view>
					<view class="movie-scroe-wapper">
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/yxx.png" class="star-icon"></image>
						<image src="../../static/xx.png" class="star-icon"></image>
						<view class="movie-score">
							9.4
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	//import common from "../../comon/common.js";
	export default {
		data() {
			return {
				//carouselList:[]
			}
		},
		/*onLoad() {
			var me=this;
			var serverUrl=common.serverUrl;
			
			
			//请求轮播图数据
			uni/require({
				url:'https://www.imovietrailer.com/superhero/index/carousel/list',
				method:"post",
				success:(res)=>{
					console.log(res.data);
					//获取真实数据前，无比判断状态是否为200
					if(res.data .status==200){
						var carouseList=res.data .data;
						this.carouseList=carouseList;
					}
				}
			})
			

		},*/
		methods: {

		}
	}
</script>

<style>
	@import url("index.css");
</style>
