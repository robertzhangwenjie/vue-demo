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

Vue.use(MintUI)


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


