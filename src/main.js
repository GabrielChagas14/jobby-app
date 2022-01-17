import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import  store  from './store/store'
import router from './router'
import "./plugins/fontawesome"

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
