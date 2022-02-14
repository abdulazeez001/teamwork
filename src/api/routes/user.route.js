const express = require('express');
const router = express.Router();
const { users } = require('../controller');
const { protect } = require('../middleware/protect');

router.post('/users', users.user.create_user);
router.post('/login_user', users.auth_user.login_user);
router.get('/log_out', users.user.logout_user);
router.get('/user', protect, users.user.get_user);
router.get('/users', protect, users.user.get_users);

module.exports = router;
