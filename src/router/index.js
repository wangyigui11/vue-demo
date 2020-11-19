import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import(/* webpackChunkName: "table" */ '../views/Echarts.vue')
  },
  {
    path: '/bar',
    name: 'bar',
    component: () => import(/* webpackChunkName: "table" */ '../views/Bar.vue')
  },
  {
    path: '/foo',
    name: 'foo',
    component: () => import(/* webpackChunkName: "table" */ '../views/Foo.vue')
  },
  {
    path: '/user',
    name: 'user',
    // 路由独享的守卫
    component: () => import(/* webpackChunkName: "table" */ '../views/User.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "table" */ '../views/Table.vue')
  },
  {
    path: '/image',
    name: 'image',
    component: () => import(/* webpackChunkName: "table" */ '../views/Image.vue')
  },
  {
    path: '/top',
    name: 'top',
    component: () => import(/* webpackChunkName: "table" */ '../views/Top.vue')
  },
  {
    path: '/element',
    name: 'element',
    component: () => import(/* webpackChunkName: "table" */ '../views/Element.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// // 全局前置钩子
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })

//   else next()
// })

// 全局后置钩和前置不同的是 这些钩子不会接受next函数 也不会改变导航本身
// router.afterEach((to, from) => {
//   //...
// })



export default router
