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

            { id: 31, name: '图片名称', url: 'images/cart.png' },
            { id: 32, name: '图片名称', url: 'images/contact.png' },
            { id: 33, name: '图片名称', url: 'images/excel.jpg' },
            { id: 34, name: '图片名称', url: 'images/images.jpg' },
            { id: 35, name: '图片名称', url: 'images/message.svg' }

        ]
    },
    {
        id: 2,
        title: '新闻',
        imgList: [
            { id: 1, name: '图片名称', url: 'images/cart.png' },
            { id: 2, name: '图片名称', url: 'images/contact.png' },
            { id: 3, name: '图片名称', url: 'images/excel.jpg' },
            { id: 4, name: '图片名称', url: 'images/images.jpg' },
            { id: 5, name: '图片名称', url: 'images/message.svg' }
        ]
    }, {
        id: 3,
        title: '咨询',
        imgList: [
            { id: 10, name: '图片名称', url: 'images/cart.png' },
            { id: 6, name: '图片名称', url: 'images/contact.png' },
            { id: 7, name: '图片名称', url: 'images/excel.jpg' },
            { id: 8, name: '图片名称', url: 'images/images.jpg' },
            { id: 9, name: '图片名称', url: 'images/message.svg' }
        ]
    }, {
        id: 4,
        title: '体育',
        imgList: [
            { id: 11, name: '图片名称', url: 'images/cart.png' },
            { id: 12, name: '图片名称', url: 'images/contact.png' },
            { id: 13, name: '图片名称', url: 'images/excel.jpg' },
            { id: 14, name: '图片名称', url: 'images/images.jpg' },
            { id: 15, name: '图片名称', url: 'images/message.svg' }
        ]
    }, {
        id: 5,
        title: '电竞',
        imgList: [
            { id: 21, name: '图片名称', url: 'images/cart.png' },
            { id: 22, name: '图片名称', url: 'images/contact.png' },
            { id: 23, name: '图片名称', url: 'images/excel.jpg' },
            { id: 24, name: '图片名称', url: 'images/images.jpg' },
            { id: 25, name: '图片名称', url: 'images/message.svg' }
        ]
    }
]

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