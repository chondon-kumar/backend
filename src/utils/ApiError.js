class ApiError extends Error {
    constructor (
        statuscode,
        message = "Something went worng",
        errors = [],
        statck = ''
    ) {
        super(message)
        this.statuscode
        this.message = message
        this.data = null
        this.errors = errors
        this.success = false

        if (statck){
            this.stack = statck
        }else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}