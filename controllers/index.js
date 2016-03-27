var express = require('express');
var router = express.Router();
var config = require('../config/config.json');
var gen = require('color-generator');


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render(config.pages.index.render, 
  	{ 
  		pagedata: config.pages.index,
      userColor: gen().hexString()
  	});
});


module.exports = router;


// tutorials
// https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
//http://blog.modulus.io/nodejs-and-express-sessions