import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'style/index.scss'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(ElementUI)
Vue.use(MavonEditor)
Vue.config.productionTip = false//阻止vue在启动时生成生产模式下的提示


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)//vue1.0写法： components: { App }  局部注册组件
})
