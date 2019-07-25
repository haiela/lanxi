import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/base.css'
Vue.config.productionTip = false
/*引入资源请求插件*/
import VueResource from 'vue-resource'
/*使用VueResource插件*/
Vue.use(VueResource)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
