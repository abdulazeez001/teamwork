const joi = require('joi');

const validator = (schema, source) => (req, res, next) => {
  try {
    const { error } = schema.validate(req[source], { abortEarly: false });

    if (!error) return next();

    const { details } = error;
    const messageDetails = details
      .map((i) => i.message.replace(/['"]+/g, ''))
      .join(', ');
    // TODO: Log Error

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  validateArticle: require('./schemas/article'),
  validateGif: require('./schemas/gif'),
  validateUser: require('./schemas/user'),
  validateComment: require('./schemas/comment'),
};
