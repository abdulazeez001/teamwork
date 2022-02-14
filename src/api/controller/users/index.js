const Auth = require('../../../services/Auth');
const Users = require('../../../services/Users');
const asyncHandler = require('../../../utilities/async');
const response = require('../../../utilities/response');

const userController = (service) => {
  return {
    create_user: asyncHandler(async (req, res, next) => {
      try {
        const { body } = req;
        await service.createEmployee(body).then((result) => {
          response.successResponse(
            201,
            'Employee created successfully',
            result
          );
          return response.send(res);
        });
      } catch (error) {
        response.errorResponse(
          400,
          error.message || 'Unable to create employee'
        );
        return response.send(res);
      }
    }),

    login_user: asyncHandler(async (req, res, next) => {
      const { body } = req;
      await service.loginUser(body).then((result) => {
        response.loginSuccessResponse(
          'user successfully logged in',
          result.token
        );
        return response.send(res);
      });
    }),
    get_user: asyncHandler(async (req, res, next) => {
      const user = req.user;
      response.successResponse(200, 'Employee retrieved successfully', user);
      return response.send(res);
    }),
    get_users: asyncHandler(async (req, res, next) => {
      await service.getAllUsers().then((result) => {
        response.successResponse(
          200,
          'Employees retrieved successfully',
          result
        );
        return response.send(res);
      });
    }),
    logout_user: asyncHandler(async (req, res, next) => {
      res.clearCookie('token');

      res.status(200).json({
        status: 'success',
        message: 'Employee successfully logged out',
      });
    }),
  };
};

module.exports.auth_user = userController(Auth);
module.exports.user = userController(Users);
