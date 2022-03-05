const Joi = require('joi');

const id = Joi.number().required();
const requiredString = Joi.string().trim().min(1).required();
const string = Joi.string().trim().min(1);

exports.postArticleSchema = Joi.object({
  authorId: id,
  title: requiredString,
  article: requiredString,
});

exports.getArticleByAuthorIdSchema = Joi.object({
  authorId: id,
});

exports.getArticleIdSchema = Joi.object({
  articleId: id,
});

exports.editArticleSchema = Joi.object({
  authorId: id,
  title: string,
  article: string,
});
