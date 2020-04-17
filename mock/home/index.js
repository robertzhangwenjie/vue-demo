const express = require('express')
const router = express.Router()
let Res = require('../response')

let slideShowList = [
    {img: 'images/excel.jpg'},
    {img: 'images/images.jpg'},
    {img: 'images/pdf.jpg'}
]


router.get('/getSlideshow',(req,res) => {
    let result = new Res()
    result.code = 0
    result.results = slideShowList
    res.send(result)
})

module.exports = router