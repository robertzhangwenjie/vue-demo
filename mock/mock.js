const express = require('express')

const url = require('url')

const app = express()
const port = 3000

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Credentials','true')
    next()
}

//允许指定的origin跨域访问
app.use(allowCrossDomain);

//使用中间件对请求的数据使用json处理
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', function(req, res){
    res.send("hello world")
})

var list =  [
    { id: 1, name: '宝马', ctime: new Date() },
    { id: 2, name: '奥迪', ctime: new Date() },
    { id: 3, name: '奔驰', ctime: new Date() },
    { id: 4, name: '众泰', ctime: new Date() }
]


app.get('/getSlideshow', (req, res) => {
    let result = {
        code: 0,
        message: '请求成功',
        results: [
            {url: 'http://www.baidu.com',img: 'images/excel.jpg'},
            {url: 'http://www.baidu.com',img: 'images/pdf.jpg'},
            {url: 'http://www.baidu.com',img: 'images/word.jpg'}
        ]
    }
    res.send(result)
})



app.get('/list', function(req, res){
    let result = {
        code: 0,
        message: "请求成功",
        data: list
    }
    res.send(result)
})

app.get('/del/:id', function(req, res){
    let result = {
        code: 0,
        message: '删除成功',
        data: []
    }

    let id = req.params.id
    
    let flag = false

    list.some((item,index) => {
        if (item.id.toString() === id) {
            list.splice(index, 1)
            flag = true
            return
        }
    })

    if (!flag) {
        result['code'] = 1
        result['message'] = "删除的物品不存在"
    }
    result['data'] = list

    res.send(result)
    
})

app.post('/add', function(req, res){
    let result = {
        code: 0,
        message: "添加成功"
    }

    let name = req.body.name

    list.push({
        id: list.length + 1,
        name,
        ctime: new Date()
    })

    res.send(result)
})


app.listen(port, () => console.log(`Express server listening at http://localhost:${port}`))

