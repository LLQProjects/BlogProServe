class BasicResModel {
    constructor(data, msg) {
        if (typeof data === 'string') { //data 为空的情况
            this.msg = data
            data = null
            msg = null
        }
        if (data) {
            this.data = data
        }
        if (msg) {
            this.msg = msg
        }
    }
}

class SuccessResModel extends BasicResModel {
    constructor(data, msg) {
        super(data, msg)
        this.errno = 0
    }
}
class ErrorResModel extends BasicResModel {
    constructor(data, msg) {
        super(data, msg)
        this.errno = -1
    }
}

module.exports = {
    SuccessResModel,
    ErrorResModel
}