//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET support docs pages

router.get('/actFracUnd', function(req, res, next) {
  res.render('actFracUnd', {title:"Actions to Develop Fractions Understanding"});
});

router.get('/buildAddSub', function(req, res, next) {
  res.render('buildAddSub', {title:"Building to Addition and Subtraction of Fractions"});
});

router.get('/buildEquiv', function(req, res, next) {
  res.render('buildEquiv', {title:"Building Understanding of Equivalence"});
});

router.get('/buildUnitFrac', function(req, res, next) {
  res.render('buildUnitFrac', {title:"Building Understanding of Unit Fractions"});
});

router.get('/devFracNumSense', function(req, res, next) {
  res.render('devFracNumSense', {title:"Developing Fraction Number Sense"});
});

router.get('/devPartItDisembed', function(req, res, next) {
  res.render('devPartItDisembed', {title:"Developing Proficiency with Partitioning, Iterating and Disembedding"});
});

router.get('/fracAcrossStrands', function(req, res, next) {
  res.render('fracAcrossStrands', {title:"Fractions Across Strands and Grades: Sample Tasks"});
});

router.get('/purpRep', function(req, res, next) {
  res.render('purpRep', {title:"Purposeful Representations"});
});

router.get('/respThink', function(req, res, next) {
  res.render('respThink', {title:"Being Responsive to Student Thinking"});
});

router.get('/supportDocs', function(req, res, next) {
  res.render('supportDocs', {title:"Support Documents"});
});

router.get('/tasksThinking', function(req, res, next) {
  res.render('tasksThinking', {title:"Intentional Tasks to Develop Fractions Thinking"});
});

router.get('/waysWeUseFrac', function(req, res, next) {
  res.render('waysWeUseFrac', {title:"Ways We Use Fractions"});
});


module.exports = router;
