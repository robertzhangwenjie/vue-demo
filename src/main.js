//项目JS的入口文件

import Vue from 'vue'

// import MintUI from 'mint-ui'
import { Swipe, SwipeItem, Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui-icons-extra.ttf'


import router from './router'
import app from './App.vue'



Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header)


var vm = new Vue({
    el: '#app',
    data: {
    },
    render: function (createElement, context) {
        return createElement(app)
    },
    router: router
    
})


