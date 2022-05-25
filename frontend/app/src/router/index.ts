import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import UserView from '../views/UserView.vue'
import store from '../store'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'user',
    component: UserView,
    beforeEnter(to,from,next){
      if(store.getters["UserModule/userId"] !=0){
        next('/todo');
      }else{
        next()
      }
    }
  },
  {
    path: '/todo',
    name: 'todo',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TodoView.vue'),
    beforeEnter(to,from,next){
      if(store.getters["UserModule/userId"] !=0){
        next();
      }else{
        next('/')
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
