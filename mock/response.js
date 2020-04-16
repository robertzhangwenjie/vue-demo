class Res {
    constructor(code = 0, message = '', error_message= '',results = []) {
        this.code = 1
        this.message = message
        this.error_message = error_message
        this.results = results
    }
}

module.exports = Res