import App from './App'
import request from "./src/utils/request.js"
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.baseurl='www.baidu.com'//定义全局变量，通过vue的原型实现
Vue.prototype.request=request;
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif