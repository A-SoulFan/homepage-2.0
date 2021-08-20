import Vue from 'vue'
import App from './App.vue'
import less from 'less'

Vue.config.productionTip = false

Vue.use(less)

new Vue({
  render: h => h(App),
}).$mount('#app')
