import Vue from 'vue'
//导入app.vue根组件，将来把app.vue中的模板结构，渲染到html页面中
//import App from './App.vue'
import App from './App.vue'
//导入需要被全局注册的那个组件
import Count from '@/components/count.vue'
Vue.config.productionTip = false
Vue.component('count',Count)

//创建vue的实例对象
new Vue({
 // el:'#app'
 // 把render函数指定的组件，渲染到httml中去
  render: h => h(App),
}).$mount('#app')
//vue实例的$mount（）方法，作用和el属性完全一样