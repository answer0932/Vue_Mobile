import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['@/view/index'], resolve)
    },
    {
      path: '/Contact',
      component: resolve => require(['@/view/Contact'], resolve)
    }
  ]
});

export default router;
