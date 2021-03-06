const express = require('express')

const router = express.Router()

let Res = require('../response')


let photoCategoryList = [
    {
        id: 0,
        title: '全部',
        imgList: []
    },
    {
        id: 1,
        title: '科技',
        imgList: [

            { id: 31, name: '图片名称', url: 'images/cart.png', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 32, name: '图片名称', url: 'images/contact.png', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 33, name: '图片名称', url: 'images/excel.jpg', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 34, name: '图片名称', url: 'images/images.jpg', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 35, name: '图片名称', url: 'images/message.svg', click: 1, ctime: new Date(), desc: '图片描述' }

        ]
    },
    {
        id: 2,
        title: '新闻',
        imgList: [
            { id: 1, name: '图片名称', url: 'images/cart.png', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 2, name: '图片名称', url: 'images/contact.png', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 3, name: '图片名称', url: 'images/excel.jpg', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 4, name: '图片名称', url: 'images/images.jpg', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 5, name: '图片名称', url: 'images/message.svg', click: 1, ctime: new Date(), desc: '图片描述' }
        ]
    }, {
        id: 3,
        title: '咨询',
        imgList: [
            { id: 10, name: '图片名称', url: 'images/cart.png', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 6, name: '图片名称', url: 'images/contact.png', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 7, name: '图片名称', url: 'images/excel.jpg', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 8, name: '图片名称', url: 'images/images.jpg', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 9, name: '图片名称', url: 'images/message.svg', click: 1, ctime: new Date(), desc: '图片描述' }
        ]
    }, {
        id: 4,
        title: '体育',
        imgList: [
            { id: 11, name: '图片名称', url: 'images/cart.png', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 12, name: '图片名称', url: 'images/contact.png', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 13, name: '图片名称', url: 'images/excel.jpg', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 14, name: '图片名称', url: 'images/images.jpg', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 15, name: '图片名称', url: 'images/message.svg', click: 1, ctime: new Date(), desc: '图片描述' }
        ]
    }, {
        id: 5,
        title: '电竞',
        imgList: [
            { id: 21, name: '图片名称', url: 'images/cart.png', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 22, name: '图片名称', url: 'images/contact.png', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 23, name: '图片名称', url: 'images/excel.jpg', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 24, name: '图片名称', url: 'images/images.jpg', click: 1, ctime: new Date(), desc: '图片描述' },
            { id: 25, name: '图片名称', url: 'images/message.svg', click: 1, ctime: new Date(), desc: '图片描述' }
        ]
    }
]

commentList = [
    {
        id: 1,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    },
    {
        id: 31,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    }, {
        id: 2,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    }, {
        id: 3,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    }, {
        id: 4,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    }, {
        id: 5,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    }, {
        id: 6,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    }, {
        id: 7,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    }, {
        id: 8,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    }, {
        id: 9,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    }, {
        id: 10,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    }, {
        id: 11,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    }, {
        id: 12,
        comments: [
            { id: 1, username: 'robert', comment: '评论内容', ctime: new Date() }
        ]
    },
]


let thumbnailList = [{
    id: 31,
    thumbnail: [
        {
            src: 'images/photo/mx_scenery.jpg',
            msrc: 'images/photo/ms_scenery.jpg',
            alt: 'scenery',
            title: 'Scenery Image',
            w: 600,
            h: 400
        },
        {
            src: 'images/photo/max_caption.jpg',
            msrc: 'images/photo/ms_caption.jpg',
            alt: 'caption',
            title: 'Caption Image',
            w: 600,
            h: 400
        }
    ]
}]

router.get('/photoInfo/thumbnail/:id', (req, res) => {
    let result = new Res()
    let isExist = false
    let id = parseInt(req.params.id)
    for (const thum of thumbnailList) {
        if (thum.id === id ) {
            isExist = true
            result.results = thum.thumbnail
            result.code = 0
        } 
    }
    if (! isExist) {
        result.error_message = '获取的图片不存在'
    }
    res.send(result)
})

router.post('/photo/postComment', (req, res) => {
    let result = new Res()
    let { id, comment } = req.body
    if (!comment) {
        result.error_message = '评论为空'
    }
    for (const ct of commentList) {
        if (ct.id.toString() === id) {
            let commetnId = ct.comments.length + 1
            let newComment = { id: commetnId, username: 'robert', comment: comment, ctime: new Date() }
            ct.comments.push(newComment)
            result.code = 0
            result.message = "评论成功"
            res.send(result)

            return
        }
    }
    result.error_message = "评论对象不存在"
    res.send(result)
})

router.get('/photoComment/:id', (req, res) => {
    let result = new Res()
    let isExist = false
    for (const comment of commentList) {
        if (comment.id.toString() === req.params.id) {
            result.results = comment.comments
            result.code = 0
            result.message = '获取成功'
            isExist = true
        }

    }
    if (!isExist) {
        result.code = 1
        result.error_message = '获取失败'
    }
    res.send(result)
})

router.get('/photoInfo/:id', (req, res) => {
    let result = new Res()
    let allImgList = []
    for (const photoCategory of photoCategoryList) {
        let { id, title, imgList } = photoCategory
        for (const img of imgList) {
            if (img.id === parseInt(req.params.id)) {
                result.code = 0
                result.results = img
                res.send(result)
                return
            }
        }
    }
    result.error_message = '图片不存在'
    res.send(result)
}
)


router.get('/imgList/:cateId', (req, res) => {
    let result = new Res()
    let cateId = req.params.cateId

    for (let photoCategory of photoCategoryList) {
        let { id, title, imgList } = photoCategory

        if (cateId === '0') {
            result.code = 0
            result.results = result.results.concat(imgList)
        }
        else if (photoCategory.id === parseInt(cateId)) {
            let { id, title, imgList } = photoCategory
            result.code = 0
            result.results = imgList
        } else {
            result.code = 1
            result.message = '查询的对象不存在'
        }
    }
    res.send(result)
})

router.get('/imgCategory', (req, res) => {
    let result = new Res()

    for (let photoCategory of photoCategoryList) {
        let { id, title, imageList } = photoCategory
        result.results.push({ id, title })
    }

    result.code = 0

    res.send(result)
})


module.exports = router