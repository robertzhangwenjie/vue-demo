import axios from 'axios'
// mock服务的地址
const port  = require('../settings').port

const url = 'http://' + window.location.hostname + ':' +port
console.log(url)
const service = axios.create({
    baseURL: url,
    timeout: 5000
})

export default service