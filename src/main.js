//项目JS的入口文件

import Vue from 'vue'

import router from './router'
import app from './App.vue'

// import MintUI from 'mint-ui'

import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../lib/mui/css/mui.min.css'

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


