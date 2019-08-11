import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import './assets/css/global.css'    
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueAxios,Axios)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
