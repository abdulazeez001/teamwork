const asyncHandler = require('../../utilities/async');
const { config } = require('../../config');
const jwtWebToken = require('../../infra/jwt');
const response = require('../../utilities/response');

exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  //    Get token from Request header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  //    Or get token from cookies
  else if (req.cookies.token) {
    token = req.cookies.token;
  }
  // Check for token existence
  if (!token) {
    // return next(new ErrorResponse('Not authorized to access this route', 401));
    response.errorResponse(401, 'Not authorized to access this route');
    return response.send(res);
  }

  try {
    // Verify token
    const verify = jwtWebToken({ config }).verify_token();
    const user = verify(token);

    // Get user from token
    // req.user = await ;
    req.user = user;

    next();
  } catch (err) {
    response.errorResponse(401, 'Not authorized to access this route');
    return response.send(res);
  }
});

// Give access to authorized roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.job_role)) {
      response.errorResponse(401, 'Not authorized to access this route');
      return response.send(res);
    }
    next();
  };
};
