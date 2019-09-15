import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import VueRouter from 'vue-router'
import infiniteScroll from 'vue-infinite-scroll'
import store from './store/store'
import 'buefy/dist/buefy.css'

import { routes } from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(Buefy)

Vue.use(infiniteScroll)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
