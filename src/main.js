import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Toast from './../packages/toast/toast'
Vue.use(Toast)

new Vue({
  render: h => h(App),
}).$mount('#app')
