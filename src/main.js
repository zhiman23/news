import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')


const son = {}

// Vue.component('son', {

// })

const father = {
  template: '<son></son>',
  components: {
    son: son
  }
}
