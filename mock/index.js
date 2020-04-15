const express = require('express')
const news = require('./home/news')
const photo = require('./home/photo')

const app = express()
const port = 3000

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000')
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
app.use(photo)

app.listen(port, () => console.log(`Express server listening at http://localhost:${port}`))

