import Vue from 'vue'
import App from './App'
//导入 vue路由
import router from './router'
//导入 elementUI
import ElementUI from 'element-ui'
//导入 elementUI的样式
import 'element-ui/lib/theme-chalk/index.css'

//适用于vue的elementUI组件插件
Vue.use(ElementUI);

Vue.config.productionTip = false
var a = 10
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
