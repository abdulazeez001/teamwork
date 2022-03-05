const Joi = require('joi');

const id = Joi.number().required();
const requiredString = Joi.string().trim().min(1).required();
const string = Joi.string().trim().min(1);

exports.postCommentSchema = Joi.object({
  authorId: id,
  userId: requiredString,
  comment: requiredString,
});

exports.deleteCommentSchema = Joi.object({
  commentId: id,
});

exports.getCommentByArticleSchema = Joi.object({
  articleId: id,
});

exports.updateCommentSchema = Joi.object({
  commentId: id,
  comment: string,
});
