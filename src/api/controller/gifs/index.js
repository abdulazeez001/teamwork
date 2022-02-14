const Users = require('../../../services/Users');
const asyncHandler = require('../../../utilities/async');
const response = require('../../../utilities/response');

const gifControllers = (services) => {
  return {
    /**
     * @param
     */
    post_gif: asyncHandler(async (req, res, next) => {
      const { body } = req;
      await services.postGif(body).then((result) => {
        response.successResponse(201, 'Gif posted successfully', result);
        return response.send(res);
      });
    }),

    get_gifs: asyncHandler(async (req, res, next) => {
      await services.getAllGif.then((result) => {
        response.successResponse(201, 'Gifs retrieved successfully', result);
        return response.send(res);
      });
    }),

    get_gif: asyncHandler(async (req, res, next) => {
      const { body } = req;
      await services.getGifByAuthorId(body).then((result) => {
        response.successResponse(201, 'Gifs retrieved successfully', result);
        return response.send(res);
      });
    }),

    delete_gif: asyncHandler(async (req, res, next) => {
      const { body } = req;
      await services.deleteGif(body).then((result) => {
        response.successResponse(201, 'Gif deleted successfully', result);
        return response.send(res);
      });
    }),
  };
};

module.exports = gifControllers(Users);
