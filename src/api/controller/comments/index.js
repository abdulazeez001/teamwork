const Users = require('../../../services/Users');
const asyncHandler = require('../../../utilities/async');
const response = require('../../../utilities/response');

const commentControllers = (services) => {
  return {
    /**
     * @param
     */
    post_comment: asyncHandler(async (req, res, next) => {
      const { body } = req;
      body.userId = req.user.id;
      body.articleId = req.params.articleId;
      await services.postComment(body).then((result) => {
        response.successResponse(201, 'Comment posted successfully', result);
        return response.send(res);
      });
    }),

    get_comments: asyncHandler(async (req, res, next) => {
      const body = req.params;
      await services.getCommentByCol(body).then((result) => {
        response.successResponse(
          201,
          'Comments retrieved successfully',
          result
        );
        return response.send(res);
      });
    }),

    edit_comment: asyncHandler(async (req, res, next) => {
      const { body } = req;
      body.commentId = req.params.commentId;
      await services.updateComment(body).then((result) => {
        response.successResponse(201, 'Comment edited successfully', result);
        return response.send(res);
      });
    }),

    delete_Comment: asyncHandler(async (req, res, next) => {
      const body = req.params;
      await services.deleteComment(body).then((result) => {
        response.successResponse(201, 'Comment deleted successfully', result);
        return response.send(res);
      });
    }),
  };
};

module.exports = commentControllers(Users);
