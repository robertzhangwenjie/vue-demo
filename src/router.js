import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from './components/Home.vue'
import news from './components/home/news/News.vue'
import member from './components/Member.vue'
import cart from './components/Cart.vue'
import search from './components/Search.vue'
import newsInfo from './components/home/news/newsInfo.vue'
import photo from './components/home/photo/Photo.vue'
import photoInfo from './components/home/photo/photoInfo.vue'
import shop from './components/home/shop/Shop.vue'


var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/home/photoList', component: photo },
    { path: '/home/photoInfo/:id', component: photoInfo },
    { path: '/home/news', component: news },
    { path: '/home/newsInfo/:id', component: newsInfo },
    { path: '/home/shop', component: shop },
    { path: '/cart', component: cart },
    { path: '/search', component: search },
    { path: '/member', component: member },
  ],
  linkActiveClass: 'mui-active'  //指定路由高亮的类
})

export default router