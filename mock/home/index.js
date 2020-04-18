const express = require('express')
const router = express.Router()
let Res = require('../response')

let slideShowList = [
    {id: 1, src: 'images/excel.jpg'},
    {id: 2, src: 'images/images.jpg'},
    {id: 3, src: 'images/pdf.jpg'}
]


router.get('/home/getSlideshow',(req,res) => {
    let result = new Res()
    result.code = 0
    result.results = slideShowList
    res.send(result)
})

module.exports = router