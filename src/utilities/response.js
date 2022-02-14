class Response {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.message = null;
    this.data = null;
    this.token = null;
  }

  successResponse(statusCode, message, data) {
    this.statusCode = statusCode;
    this.type = 'success';
    this.message = message;
    this.data = data;
  }

  loginSuccessResponse(message, token) {
    this.statusCode = 200;
    this.type = 'login success';
    this.message = message;
    this.token = token;
  }

  errorResponse(statusCode, message) {
    this.statusCode = statusCode;
    this.type = 'error';
    this.message = message;
  }

  send(res) {
    let result = {
      status: this.type,
      message: this.message,
      data: this.data,
    };
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    if (this.type === 'login success') {
      return res
        .status(this.statusCode)
        .cookie('token', this.token, options)
        .json({
          status: this.type,
          message: this.message,
        });
    }
    if (this.type === 'error') {
      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message,
      });
    }

    return res.status(this.statusCode).json(result);
  }
}

module.exports = new Response();
