import Vue from 'vue'
import App from './App.vue'
import router from './router'

//vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

//轻提示
import { Toast } from 'vant';
Vue.use(Toast);

//axios
import axios from "axios"
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')