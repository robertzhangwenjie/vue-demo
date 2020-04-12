import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from './components/Home.vue'
import member from './components/Member.vue'
import cart from './components/Cart.vue'
import search from './components/Search.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
      { path: '/cart', component: cart },
      { path: '/search', component: search },
      { path: '/member', component: member },
    ],
    linkActiveClass: 'mui-active'  //指定路由高亮的类
 })

export default router