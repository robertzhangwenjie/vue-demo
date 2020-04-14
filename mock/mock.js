const express = require('express')

const url = require('url')

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

app.get('/', function (req, res) {
    res.send("hello world")
})

class Res {
    constructor(code = 0, message = '', results = []) {
        this.code = 1
        this.message = message
        this.results = results
    }
}

var newsList = [
    { id: 1, title: '宝马', ctime: new Date(), img: '', click: 1, detail: "Vue (读音 /vjuː/，类似于 view) \
    是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，\
    不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。\
    如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程\
    如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架<br>。\
    如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架<br>\
    如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架<br>\
    如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架<br>\
    如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架\
    如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架\
    如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架" },
    { id: 2, title: '奥迪', ctime: new Date(), img: '', click: 1, detail: '详情' },
    { id: 3, title: '奔驰', ctime: new Date(), img: '', click: 1, detail: '详情' },
    { id: 4, title: '众泰', ctime: new Date(), img: '', click: 1, detail: '详情' },
    { id: 5, title: '众泰', ctime: new Date(), img: '', click: 1, detail: '详情' },
    { id: 6, title: '众泰', ctime: new Date(), img: '', click: 1, detail: '详情' },
    { id: 7, title: '众泰', ctime: new Date(), img: '', click: 1, detail: '详情' },
    { id: 8, title: '众泰', ctime: new Date(), img: '', click: 1, detail: '详情' },
    { id: 9, title: '众泰', ctime: new Date(), img: '', click: 1, detail: '详情' },
    { id: 10, title: '众泰', ctime: new Date(), img: '', click: 1, detail: '详情' },
    { id: 11, title: '众泰', ctime: new Date(), img: '', click: 1, detail: '详情' }
]

var commentList = [
    {
        id: 1, comments: [
            {id: 1, username: 'robert', ctime: new Date(), comment: '我的评论'}
        ]
    }
]


app.get('/getComment/:id',(req,res) => {

    let result = new Res()
    let id = req.params.id
    let pageIndex = req.query.pageIndex
    commentList.some((comment) => {
        if(comment.id.toString() === id) {
            result.results = comment.comments.slice(0,pageIndex * 10)
            result.code = 0
            result.message = '获取评论成功'
        }
        res.send(result)
    })
})


app.post('/postComment',(req,res) =>{

    let result = new Res()
    let cmt = req.body.comment
    if (!cmt.comment) {
        result.message = '评论数据为空'
        res.send(result)
        return
    }
    result.message = '评论失败'
    commentList.forEach((cm,index) => {
        console.log(cm.id)
        console.log(req.body.id)
        if (cm.id.toString() === req.body.id) {
            cmt[id] = commentList[index].comments.length + 1
            commentList[index].comments.push(cmt)
            result.code = 0
            result.message ='评论成功'
        }
    })
    res.send(result)
})


app.get('/getSlideshow', (req, res) => {
    let result = {
        code: 0,
        message: '请求成功',
        results: [
            { url: 'http://www.baidu.com', img: 'images/excel.jpg' },
            { url: 'http://www.baidu.com', img: 'images/pdf.jpg' },
            { url: 'http://www.baidu.com', img: 'images/word.jpg' }
        ]
    }
    res.send(result)
})




app.get('/getNewsList', function (req, res) {
    let result = new Res()
    result.code = 0
    result.message = "获取新闻列表成功" 
    result.results = newsList
    
    res.send(result)
})

app.get('/getNewsInfo/:id', function (req, res) {
    let result = new Res()
    let id = parseInt(req.params.id)
    result.message = '获取该新闻详情失败'
    if (id) {
        newsList.some(news => {
            if (news.id === id) {
                result.code = 0
                result.message = '获取新闻详情成功'
                result.results = news
                return
            }
        })
        
    }
    res.send(result)
})

// app.get('/del/:id', function(req, res){
//     let result = {
//         code: 0,
//         message: '删除成功',
//         data: []
//     }

//     let id = req.params.id

//     let flag = false

//     list.some((item,index) => {
//         if (item.id.toString() === id) {
//             list.splice(index, 1)
//             flag = true
//             return
//         }
//     })

//     if (!flag) {
//         result['code'] = 1
//         result['message'] = "删除的物品不存在"
//     }
//     result['data'] = list

//     res.send(result)

// })

// app.post('/add', function(req, res){
//     let result = {
//         code: 0,
//         message: "添加成功"
//     }

//     let name = req.body.name

//     list.push({
//         id: list.length + 1,
//         name,
//         ctime: new Date()
//     })

//     res.send(result)
// })


app.listen(port, () => console.log(`Express server listening at http://localhost:${port}`))

