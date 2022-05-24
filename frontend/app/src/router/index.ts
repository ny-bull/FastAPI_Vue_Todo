import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import UserView from '../views/UserView.vue'
import { UserModule } from '@/store/user'
import store from '@/store/index';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'user',
    component: UserView,
  },
  {
    path: '/todo',
    name: 'todo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TodoView.vue'),
    meta: { requiresAuth: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && store.getters.UserModule.UserId == 0) {
    next({ path: '/', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router
