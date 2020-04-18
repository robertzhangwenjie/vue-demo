const express = require('express')
const router = express.Router()

const Res = require('../response')


let goodsInfo = [
    { id: 1, imgList: [
        {id: 1, src: 'images/photo/ms_caption.jpg'},
        {id: 2, src: 'images/photo/ms_caption.jpg'},
        {id: 3, src: 'images/photo/ms_caption.jpg'}
    ]},
    { id: 2, imgList: [
        {id: 1, src: 'images/photo/ms_caption.jpg'},
        {id: 2, src: 'images/photo/ms_caption.jpg'},
        {id: 3, src: 'images/photo/ms_caption.jpg'}
    ]},
    { id: 3, imgList: [
        {id: 1, src: 'images/photo/ms_caption.jpg'},
        {id: 2, src: 'images/photo/ms_caption.jpg'},
        {id: 3, src: 'images/photo/ms_caption.jpg'}
    ]},
    { id: 4, imgList: [
        {id: 1, src: 'images/photo/ms_caption.jpg'},
        {id: 2, src: 'images/photo/ms_caption.jpg'},
        {id: 3, src: 'images/photo/ms_caption.jpg'}
    ]},
    { id: 5, imgList: [
        {id: 1, src: 'images/photo/ms_caption.jpg'},
        {id: 2, src: 'images/photo/ms_caption.jpg'},
        {id: 3, src: 'images/photo/ms_caption.jpg'}
    ]},
    { id: 6, imgList: [
        {id: 1, src: 'images/photo/ms_caption.jpg'},
        {id: 2, src: 'images/photo/ms_caption.jpg'},
        {id: 3, src: 'images/photo/ms_caption.jpg'}
    ]},
    { id: 7, imgList: [
        {id: 1, src: 'images/photo/ms_caption.jpg'},
        {id: 2, src: 'images/photo/ms_caption.jpg'},
        {id: 3, src: 'images/photo/ms_caption.jpg'}
    ]}
]

let goodsList = [
    { id: 1, title: '小米手机5', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(), img: 'images/photo/ms_caption.jpg'},
    { id: 2, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' },
    { id: 3, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' },
    { id: 4, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' },
    { id: 5, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' },
    { id: 6, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' },
    { id: 7, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' },
    { id: 8, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' },
    { id: 9, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' },
    { id: 10, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' },
    { id: 11, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' },
    { id: 12, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' },
    { id: 13, title: '小米手机8', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', ctime: new Date(),img: 'images/photo/ms_caption.jpg' }
]

let commentList = [
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

let goodsDesc = [
    {id: 1, title: '我是title',desc: '<h1>我是评论</h1>'}
]


let cartInfo = [
    { id: 1, num: 3},
    { id: 2, num: 3},
    { id: 3, num: 3},
    { id: 4, num: 3},
    { id: 5, num: 3},
    { id: 6, num: 3},
    { id: 7, num: 3},
    { id: 8, num: 3}
]

router.post('/shop/goodsInfo/addCart',(req,res) => {
    let result = new Res()
    let {id,num} = req.body
    let isExist = false
    for (const goods of cartInfo) {
        if (goods.id.toString() === id) {
            isExist = true
            goods.num = goods.num + num
            result.code = 0
        }
    }

    if (! isExist) {
        console.log(typeof cartInfo)
        cartInfo.push({id: parseInt(id), num})
        result.code = 0
        result.message = '添加购物车成功'
    }

    res.send(result)
})


router.get('/cartInfo',(req,res) => {
    let result = new Res()
    result.code = 0
    result.results = cartInfo
    res.send(result)
})


router.get('/shop/getDoodsDesc/:id',(req,res) => {
    let result = new Res()
    let isExist = false
    let goodsId = parseInt(req.params.id)

    result.code =0 
    result.results = goodsDesc[0]
    res.send(result)


})


router.post('/shop/goods/postCommment',(req,res) => {
    let result = new Res()
    let isExist = false
    let {id, comment} = req.body.data
    console.log(req.body)
    for (const cmt of commentList) {
        if (cmt.id.toString() === id) {
            isExist = true
            cmt.comments.push({id: parseInt(id), comment})
            result.message = '评论成功'
            result.code = 0
        }
    }
    if (! isExist) {
        result.error_message = '评论对象不存在'
    }

    res.send(result)
})


router.get('/shop/goods/getComment/:id',(req,res) => {
    let result = new Res()
    let isExist = false
    let goodsId = req.params.id

    for (const comment of commentList) {
        if (comment.id.toString() === goodsId) {
            result.code = 0
            isExist = true
            result.results = comment.comments
        }
    }

    if (! isExist) {
        result.error_message = '评论的商品不存在'
    }

    res.send(result)

})


router.get('/shop/goodsDetail/:id',(req, res) => {
    let result = new Res()
    let isExist = false
    let goodsId = req.params.id
    if ( goodsId === undefined || goodsId === null || goodsId === '') {
        result.error_message = '请传入商品Id'
    }
    for (const goods of goodsList) {
        if(goods.id.toString() === goodsId) {
            isExist = true
            result.results = goods
            result.code = 0
        } 
     }
 
     if (! isExist) {
         result.error_message = '商品不存在'
     }
     res.send(result)
})

router.get('/shop/goodsInfo/:id', (req,res) => {
    let result = new Res()
    // 商品是否存在标识
    let isExist = false
    let goodsId = req.params.id
    if ( goodsId === undefined || goodsId === null || goodsId === '') {
        result.error_message = '请传入商品Id'
    }
    for (const goods of goodsInfo) {
       if(goods.id.toString() === goodsId) {
           isExist = true
           result.results = goods.imgList
           result.code = 0
       } 
    }

    if (! isExist) {
        result.error_message = '商品不存在'
    }
    res.send(result)
})

router.get('/shop/goodsList', (req, res) => {
    let result = new Res()
    result.code = 0
    result.results = goodsList
    res.send(result)
})

module.exports = router