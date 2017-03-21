//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET Lit Review pages

router.get('/foundationsAddSub', function(req, res, next) {
  res.render('foundationsAddSub', {title:"Foundations to Learning and Teaching Fractions: Addition and Subtraction"});
});

router.get('/litReviews', function(req, res, next) {
  res.render('litReviews', {title:"Literature Reviews"});
});

router.get('/opMultDiv', function(req, res, next) {
  res.render('opMultDiv', {title:"Fractions Operations: Multiplication and Division"});
});


module.exports = router;
