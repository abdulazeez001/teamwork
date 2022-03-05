const Joi = require('joi');

const id = Joi.number().required();
const requiredString = Joi.string().trim().min(1).required();
const string = Joi.string().trim().min(1);

exports.postGifSchema = Joi.object({
  authorId: id,
  title: requiredString,
  gif: Joi.string().trim().regex(new RegExp('^(http://|https//:)')).required(),
});

exports.getGifIdSchema = Joi.object({
  gifId: id,
});

exports.getGifByAuthorIdSchema = Joi.object({
  authorId: id,
});
