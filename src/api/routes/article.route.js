const express = require('express');
const { comment } = require('../../infra/repository');
const router = express.Router();
const { articles, comments } = require('../controller');
const { protect } = require('../middleware/protect');

router.post('/articles/:articleId/comments', protect, comments.post_comment);
router.get('/articles/:articleId/comments', comments.get_comments);
router.put('/articles/comments/:commentId', comments.edit_comment);
router.delete('/articles/comments/:commentId', comments.delete_Comment);
router.post('/articles', protect, articles.post_article);
router.get('/articles', articles.get_articles);
router.get('/articles/:articleId', articles.get_article);
router.put('/articles/:articleId', protect, articles.edit_article);
router.delete('/articles/:articleId', protect, articles.delete_article);

module.exports = router;
