//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET research pages

router.get('/digitalPaper', function(req, res, next) {
  res.render('digitalPaper', {title:"Digital Paper"});
});

router.get('/fracPathOverview', function(req, res, next) {
  res.render('fracPathOverview', {title:"Fractions Learning Pathways Overview"});
});

router.get('/fracResearchFindings', function(req, res, next) {
  res.render('fracResearchFindings', {title:"Fractions Research Findings"});
});

router.get('/fracResearchSum2015', function(req, res, next) {
  res.render('fracResearchSum2015', {title:"Fractions Research Summary"});
});

router.get('/fracResearchSum2017', function(req, res, next) {
  res.render('fracResearchSum2017', {title:"Fractions Research Summary"});
});

router.get('/fracTenLess', function(req, res, next) {
  res.render('fracTenLess', {title:"Fractions Top Ten Lessons"});
});

router.get('/fracTutorial', function(req, res, next) {
  res.render('fracTutorial', {title:"Fractions Learning Pathways Resource Tool"});
});

router.get('/payAttention', function(req, res, next) {
  res.render('payAttention', {title:"Paying Attention to Fractions"});
});

router.get('/payAttentionOverview', function(req, res, next) {
  res.render('payAttentionOverview', {title:"Paying Attention to Fractions Overview"});
});


module.exports = router;
