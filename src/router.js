import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/index'},
    {
      path: '/index',
      component: Index
    },
    {
      path: '/newset',
      component: () => import('./views/Newset.vue')
    }
  ]
})
