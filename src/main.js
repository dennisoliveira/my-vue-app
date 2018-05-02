import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HelloWorldRouter from './components/HelloWorldRouter.vue'
import TestRouter from './components/TestRouter.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {path: '/', component: HelloWorldRouter},
    {path: '/test', component: TestRouter}
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})