import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HelloWorldRouter from './components/HelloWorldRouter.vue'
import TestRouter from './components/TestRouter.vue'
import Card from './components/Card.vue'
import Buttons from './components/Buttons.vue'

// Injetar dependência
Vue.use(VueRouter)

// Definir as rotas do sistema
const router = new VueRouter({
  //linkActiveClass: "active",
  linkExactActiveClass: 'active',
  routes: [
    {path: '/', component: HelloWorldRouter},
    {path: '/test', component: TestRouter},
    {path: '/card', component: Card},
    {path: '/buttons', component: Buttons}
  ]
})

// Cria a instância da aplicação
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})