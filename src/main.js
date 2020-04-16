//项目JS的入口文件

import Vue from 'vue'

// import MintUI from 'mint-ui'
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/lib/mui/css/mui.min.css'
import '@/lib/mui/css/app.css'
import '@/lib/mui/css/icons-extra.css'
import '@/lib/mui/fonts/mui-icons-extra.ttf'
import VuePreview from 'vue-preview'

Vue.use(MintUI)
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
  })

import router from './router'
import app from './App.vue'





//全局路由器
import { dateFilter } from '@/filter'
Vue.filter('dateFilter', dateFilter)

var vm = new Vue({
    el: '#app',
    data: {
    },
    render: function (createElement, context) {
        return createElement(app)
    },
    router: router

})


