<template>
  <div class="test">
    1111111111111
    <h3>这是用户自定义的test页面-----{{ username }}</h3>
    <button @click="changename">修改用户名</button>
  </div>
</template>

<script>
//默认导出，固定写法
export default {
  //data数据源
  //注意：vue组件中的data不能像之前一样，不能指向对象
  //data必须是一个函数
  data() {
    //return出去的可以定义数据
    return {
      username: "zs",
    };
  },
  methods: {
    changename() {
      //在组件中，
      this.username = "zhangsan ";
    },
  },
  //当前组件的侦听器
  watch: {},
  //当前组件的计算属性
  computed: {},
  //当前组件中的过滤器
  filters: {},
};
</script>

<style  lang='less' scoped>
.test {
  color: red;
  h3 {
    background: blue;
  }
}
</style>