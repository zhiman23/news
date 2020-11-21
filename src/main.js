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

axios.defaults.baseURL = "http://157.122.54.189:9083"

// 响应拦截器固定写法：
axios.interceptors.response.use(res => {
  console.log('路过拦截器');
  const errCodePattern = /^4\d{2}$/
  if (errCodePattern.test(res.data.statusCode)) {
    Toast.fail(res.data.message || '系统错误')
  }

  if (res.data.message == "用户信息验证失败") {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.replace("/login")
  }

  return res
})

Vue.prototype.$axios = axios;

Vue.config.productionTip = false


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')