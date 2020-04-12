import axios from 'axios'


const url = 'http://localhost:3000'
const service = axios.create({
    baseURL: url,
    timeout: 5000
})

export default service