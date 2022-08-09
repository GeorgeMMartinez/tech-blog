const router = require('express').Router();
const user = require('./user.js');
const posts = require('./posts.js');
const comments = require('./comments.js');

router.use('./user', user);
router.use('./post', posts);
router.use('./comment', comments);

module.exports = router;