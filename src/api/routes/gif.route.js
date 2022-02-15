const express = require('express');
const router = express.Router();
const { gifs, comments } = require('../controller');
const { protect } = require('../middleware/protect');

router.post('/gifs/:articleId/comments', protect, comments.post_comment);
router.get('/gifs/:articleId/comments', comments.get_comments);
router.put('/gifs/comments/:commentId', comments.edit_comment);
router.delete('/gifs/comments/:commentId', comments.delete_Comment);
router.post('/gifs', protect, gifs.post_gif);
router.get('/gifs', gifs.get_gifs);
router.get('/gifs/:gifId', gifs.get_gif);
router.delete('/gifs/:gifId', protect, gifs.delete_gif);

module.exports = router;
