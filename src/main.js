import Vue from 'vue'
import App from './App.vue'
// import './../packages/theme-chalk/src/index.scss'

Vue.config.productionTip = false

import Toast from './../packages/toast/toast'
Vue.use(Toast, {isSingle: false})

new Vue({
  render: h => h(App),
}).$mount('#app')
