<template>
	<view>
		
			<view class="" v-for="(stuObj,index) in studentArray">
			<view >
				姓名：{{stuObj.name}},年纪：{{stuObj.age}}
			</view>
			<view >
				擅长技能：
				<!--自动换行了-->
				<!--<view v-for="sk in stuObj.skill">
					{{sk}}
				</view>
				-->
				<!--不自动换行了-->
				
				<block v-for="(sk,skindex) in stuObj.skill">
					{{sk}}
				</block>
			</view>
		</view>
		
	
		<view v-for="stu in studentArray" :key="stu.id"><!--:key保证组件和数据值唯一-->
				<checkbox :value="stu.name" />{{stu.name}}
		</view>
		<button type="primary" @click="addStu()">新增学生</button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				studentArray :[
					{id:1,
					name:"jack",
					age:19,
					skill:["java","css","html"]
					},
					{
						id:2,
					name:"tom",
					age:20,
					skill:["vue","css","html"]
					},
					{
						id:3,
					name:"steve",
					age:21,
					skill:["js","css","html"]
					},
					{
						id:4,
					name:"rose",
					age:22,
					skill:["c","css","html"]
					},
					
					
				]
				
			}
		},
		
		methods: {
			addStu(){
				var  studentArray=this.studentArray;
				var newId=studentArray.length+1;
				var newStu={
					id:newId,
					name:"新生"+newId,
					age:22,
				}
				//studentArray.push(newStu);
				studentArray.unshift(newStu);
			}
		}
	
	}
</script>

<style>
</style>
