const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  //log to console for dev
  console.log('ERROR: ' + err.name);
  console.log('MESSAGE:' + err.message);
  console.log(err.stack);
  let message = err.message;

  //cast error check. Wrong id
  if (err.name == 'CastError') {
    message = `Resource not found`;

    err = new ErrorResponse(message, 404);
  }

  //mongoose validation error
  if (err.name === 'ValidationError') {
    message = Object.values(err.errors).map((val) => val.message); //(val=>val.message) is just like (function(val){val.message}
    err = new ErrorResponse(message, 400);
  }

  //mongoose duplicate key check
  if (err.code === 11000) {
    let errorPoint; 
    for(let element in err.keyValue){
      errorPoint = element; 
    }
    message = `Such ${errorPoint} already exists`;
    
    err = new ErrorResponse(message, 400);
  }

  //json web token error
  if (err.name === 'JsonWebTokenError') {
    err = new ErrorResponse(err.name + ': '+ err.message, 401);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    sent: req.body,
    error: message || 'Server Error',
  });
};

module.exports = errorHandler;