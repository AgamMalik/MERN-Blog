export const errorHandler = (statusCode, message) =>{
    const error = new Error()
    error.statusCode = statusCode
    error.message = message
    return error;
}

// from here the control will go to the error handling middleware function