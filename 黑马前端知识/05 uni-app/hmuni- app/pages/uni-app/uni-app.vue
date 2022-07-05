<template>
  <view> </view>
</template>

<script>
export default {
  data() {
    list: [
      {
        id: 0,
        text: "苹果",
      },
      {
        id: 1,
        text: "西瓜",
      },
      {
        id: 2,
        text: "草莓",
      },
      {
        id: 3,
        text: "火龙果",
      },
    ];
  },
  methods: {},
    //计算属性
    computed: {
      //把cnMoney看成是在data中的普通的数据一样来使用即可
      cnMoney(){
        return "￥" + this.money;
      },
      //过滤数组
      filterList(){
        //只要id>0都不要显示
        return this.list.filter((v) => v.id <= 0);
      },
    },
  
};
</script>

<style>
</style>
