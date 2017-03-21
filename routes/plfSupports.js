//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET plf support pages

router.get('/adobePayAttention', function(req, res, next) {
  res.render('adobePayAttention', {title:"Adobe Paying Attention Series"});
});

router.get('/postcard', function(req, res, next) {
  res.render('postcard', {title:"Postcard"});
});

router.get('/proLearnIntroFrac', function(req, res, next) {
  res.render('proLearnIntroFrac', {title:"Professional Introduction to Learning Fractions"});
});



module.exports = router;
