//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET planning Supports pages

router.get('/compFrac', function(req, res, next) {
  res.render('compFrac', {title:"Research Informed Instruction Comparing Fractions"});
});

router.get('/connAcrossStrands', function(req, res, next) {
  res.render('connAcrossStrands', {title:"Connections Across Strands (Gr. 4)"});
});

router.get('/curConn4_8', function(req, res, next) {
  res.render('curConn4_8', {title:"Curriculum Connections (Gr 4-8)"});
});

router.get('/currConn_8', function(req, res, next) {
  res.render('currConn_8', {title:"Curriculum Connections (k- Gr8)"});
});

router.get('/currConn_8Tab', function(req, res, next) {
  res.render('currConn_8Tab', {title:"Curriculum Connections (k- Gr8) Tablet"});
});

router.get('/orderFrac', function(req, res, next) {
  res.render('orderFrac', {title:"Research Informed Instruction Ordering Fractions"});
});

router.get('/repFrac', function(req, res, next) {
  res.render('repFrac', {title:"Research Informed Instruction Representing Fractions"});
});


module.exports = router;
