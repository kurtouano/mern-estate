// This is a custom error handler function that takes a status code and a message as parameters

export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}