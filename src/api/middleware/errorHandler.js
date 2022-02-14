const response = require('../../utilities/response');

const ErrorHandler = (err, req, res, next) => {
  const error = { ...err };
  error.message = err.message;

  response.errorResponse(
    error.statusCode || 500,
    error.message || 'Server Error'
  );

  return response.send(res);
};

module.exports = ErrorHandler;
