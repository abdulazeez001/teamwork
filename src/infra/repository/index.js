const Article = require("./article");
const Gif = require("./gif");
const User = require("./user");
const Comment = require("./comment");
const BaseQueries = require("./main_queries");

module.exports = {
  article: new Article(),
  gif: new Gif(),
  user: new User(),
  comment: new Comment(),
  BaseQueries,
};
