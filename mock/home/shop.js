const express = require('express')
const router = express.Router()

const Res = require('../response')


let goodsList = [
    { id: 1, title: '小米手机5', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', img: 'images/photo/ms_caption.jpg'},
    { id: 2, title: '小米手机6', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', img: 'images/photo/ms_caption.jpg' },
    { id: 3, title: '小米手机8', price_now: 999, price_old: 1299, balance: 99, status: '热卖中', img: 'images/photo/ms_caption.jpg' }
]

router.get('/shop/goodsList', (req, res) => {
    let result = new Res()
    result.code = 0
    result.results = goodsList
    res.send(result)
})

module.exports = router