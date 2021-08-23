import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { firestorePlugin } from 'vuefire'
import './plugins/element.js'
import router from './router'

Vue.use(firestorePlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
