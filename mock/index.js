const express = require('express')
const news = require('./home/news')
const photo = require('./home/photo')
const shop = require('./home/shop')
const index = require('./home/index')
const app = express()
const port = require('../src/settings').port

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
}

//允许指定的origin跨域访问
app.use(allowCrossDomain);
//使用中间件对请求的数据使用json处理
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(news)
app.use(index)
app.use(photo)
app.use(shop)
app.listen(port, () => console.log(`Express server listening at http://localhost:${port}`))

