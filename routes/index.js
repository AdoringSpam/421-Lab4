var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlBlog = require('../controllers/blog');


/* Setup routes. */
router.get('/', ctrlHome.home);
router.get('/blogList', ctrlBlog.list);
router.get('/blogAdd', ctrlBlog.add);

module.exports = router;
