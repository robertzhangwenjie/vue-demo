const http = require('http')
const urlModule = require('url')

const server = http.createServer()

server.on('request', function(req, res) {
    const {pathname: url, query} = urlModule.parse(req.url, true)

    let data = {
        name: 'robert',
        age: 30,
        gender: 'boy'
    }
    if (url === '/getScript') {
        let scriptStr = `${query.callback}(${JSON.stringify(data)})`
        console.log(scriptStr)
        res.end(scriptStr)
    } else {
        res.end('404')
    }
})

server.listen(3000, function(){
    console.log('server listen at 3000')
})