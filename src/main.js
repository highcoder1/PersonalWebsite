import Vue from 'vue'
import App from './App'
import router from './router'

import 'style/index.scss'

Vue.config.productionTip = false//阻止vue在启动时生成生产模式下的提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)//vue1.0写法： components: { App }  局部注册组件
})
