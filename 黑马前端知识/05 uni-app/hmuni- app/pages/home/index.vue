<template>
	<view>
		<view class="home_tab">
		<view class="home_tab_title">
			<view class="title_inner">
			<!--hasmap基础需要了解，字符串数组-->
		        <uni-segmented-control :current="current" :values="items.map(v=>v.title)" @clickItem="onClickItem" styleType="text" activeColor="#d4237a"></uni-segmented-control>
			</view>
			<view class="iconfont iconsearch">🔍</view>
		    </view> 
			<view class="home_tab_content">
				<view class="content">
				    <view v-if="current === 0">
				      <homeRecommend></homeRecommend>
				    </view>
				    <view v-if="current === 1">
				     <homeCategory></homeCategory>
				    </view>
				    <view v-if="current === 2">
				     <homeNew></homeNew>
				    </view>
					<view v-if="current === 3">
					<homeAlbum></homeAlbum>
					</view>
				</view>	
			</view>
			</view>           
	</view>
</template>

<script>
	/*分段器https://ext.dcloud.net.cn/plugin?id=54*/
import {uniSegmentedControl} from '@dcloudio/uni-ui';//引入分段器的组件
import homeRecommend from "./home-recommend";
import  homeAlbum from "./home-album";
import homeCategory from "./home-category"
import homeNew from "./home-new";
export default{
	components:{
		homeRecommend,
		homeAlbum,
		homeCategory,
		homeNew,
		uniSegmentedControl
	},
	       data(){
	return{
	                items:[
						{title:"推荐"},
						{title:"分类"},
						{title:"最新"},
						{title:"专辑"}
					],

	               current:0
			};
	},
	methods:{
          onClickItem(e){
			  if(this.current !==e.currentIndex){
				  this.current=e.currentIndex;
			  }
		  }
},
onLoad(){
	this.request({
		url:"/homepage/vertical"
	}).then(res=>{
		console.log(res.data);
	}).catch(err=>{
		console.log(err.Msg);
	})
}

}
</script>

<style lang="scss">
	.home_tab{
		.home_tab_title{
			position: relative;
			.title_inner{
				width: 60%;
				margin: 0 auto;
			}
			.iconsearch{
				position: absolute;
				top:50%;
				transform: translateY(-50%);
				right:25px;
			}
			}
			.home_tab_content{
				
			}
	}

</style>
