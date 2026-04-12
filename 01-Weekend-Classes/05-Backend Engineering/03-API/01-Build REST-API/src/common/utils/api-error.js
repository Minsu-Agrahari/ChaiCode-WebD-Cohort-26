// Standarized structure of error
class ApiError extends Error {

    constructor (statusCode, message){
        super(this.message)
        this.statusCode = statusCode
        this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }

    static badRequest (message = "Bad request"){
        return new ApiError(400, message)
    }

    static unauthorized (message = "Unauthorized"){
        return new ApiError(401, message)
    }
    
}

// throw new ApiError() <-- how to use it << syntax >>

export default ApiError;
