import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
