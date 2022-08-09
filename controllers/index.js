const router = require('express').Router();
const api = require('./api');
const home = require('./home.js');
const dash = require('./dash.js');

router.use('/api', api);
router.use('/home', home);
router.use('/dash', dash)

module.exports = router;