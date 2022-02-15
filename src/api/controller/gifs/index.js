const Users = require('../../../services/Users');
const asyncHandler = require('../../../utilities/async');
const response = require('../../../utilities/response');
const { Base64 } = require('js-base64');
const cloudinary = require('../../../services/cloudinary');
const gifControllers = (services) => {
  return {
    /**
     * @param
     */
    post_gif: asyncHandler(async (req, res, next) => {
      // const { body } = req;
      const base64String = Base64.encode(req.files[''].data);
      const uploadResult = await cloudinary.uploader.upload(
        `data:${req.files[''].mimetype};base64,${base64String}`,
        {
          folder: 'teamwork/',
        }
      );
      const { body } = req;
      body.authorId = req.user.id;
      body.gif = uploadResult.url;
      await services.postGif(body).then((result) => {
        response.successResponse(201, 'Gif posted successfully', result);
        return response.send(res);
      });
    }),

    get_gifs: asyncHandler(async (req, res, next) => {
      if (req.query.authorId) {
        await services.getGifByAuthorId(req.query).then((result) => {
          response.successResponse(201, 'Gifs retrieved successfully', result);
          return response.send(res);
        });
      }
      await services.getAllGif().then((result) => {
        response.successResponse(201, 'Gifs retrieved successfully', result);
        return response.send(res);
      });
    }),

    get_gif: asyncHandler(async (req, res, next) => {
      const body = req.params;
      await services.getGifById(body).then((result) => {
        response.successResponse(201, 'Gifs retrieved successfully', result);
        return response.send(res);
      });
    }),

    delete_gif: asyncHandler(async (req, res, next) => {
      const body = req.params;
      await services.deleteGif(body).then((result) => {
        response.successResponse(201, 'Gif deleted successfully', result);
        return response.send(res);
      });
    }),
  };
};

module.exports = gifControllers(Users);
