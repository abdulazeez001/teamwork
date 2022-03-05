const Users = require('../../../services/Users');
const asyncHandler = require('../../../utilities/async');
const response = require('../../../utilities/response');
const { validateArticle } = require('../../../utilities/validator');

const articleControllers = (services) => {
  return {
    post_article: asyncHandler(async (req, res, next) => {
      const { body } = req;
      body.authorId = req.user.id;
      await services.postArticle(body).then((result) => {
        response.successResponse(201, 'Article posted successfully', result);
        return response.send(res);
      });
    }),

    get_articles: asyncHandler(async (req, res, next) => {
      if (req.query.authorId) {
        await services.getArticleByAuthorId(req.query).then((result) => {
          response.successResponse(
            201,
            'Articles retrieved successfully',
            result
          );
          return response.send(res);
        });
      } else {
        await services.getAllArticle().then((result) => {
          response.successResponse(
            201,
            'Articles retrieved successfully',
            result
          );
          return response.send(res);
        });
      }
    }),

    get_article: asyncHandler(async (req, res, next) => {
      const body = req.params;
      await services.getArticleById(body).then((result) => {
        response.successResponse(
          201,
          'Articles retrieved successfully',
          result
        );
        return response.send(res);
      });
    }),

    edit_article: asyncHandler(async (req, res, next) => {
      const { body } = req;
      body.articleId = req.params.articleId;
      await services.editArticle(body).then((result) => {
        response.successResponse(201, 'Article edited successfully', result);
        return response.send(res);
      });
    }),

    delete_article: asyncHandler(async (req, res, next) => {
      const body = req.params;
      await services.deleteArticle(body).then((result) => {
        response.successResponse(201, 'Article deleted successfully', result);
        return response.send(res);
      });
    }),
  };
};

module.exports = articleControllers(Users);
