//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET digital pathway pages
router.get('/compFrac', function(req, res, next) {
  res.render('compFrac', {
    title: "Research Informed Instruction Comparing Fractions"
  });
});

router.get('/connAcrossStrands', function(req, res, next) {
  res.render('connAcrossStrands', {
    title: "Connections Across Strands (Gr. 4)"
  });
});

router.get('/curConn4_8', function(req, res, next) {
  res.render('curConn4_8', {
    title: "Curriculum Connections (Gr 4-8)"
  });
});

router.get('/currConn_8', function(req, res, next) {
  res.render('currConn_8', {
    title: "Curriculum Connections (k- Gr8)"
  });
});

router.get('/currConn_8Tab', function(req, res, next) {
  res.render('currConn_8Tab', {
    title: "Curriculum Connections (k- Gr8) Tablet"
  });
});

router.get('/fractionsContentVideoTranscript', function(req, res, next) {
  res.render('fractionsContentVideoTranscript', {
    title: "Fractions(Content) Video Transcript"
  });
});

router.get('/fracRepCompOrder', function(req, res, next) {
  res.render('fracRepCompOrder', {
    title: "Fractions Representing Comparing Ordering"
  });
});

router.get('/fractionsContent', function(req, res, next) {
  res.render('fractionsContent', {
    title: "Fractions(Content)"
  });
});

router.get('/instrDec', function(req, res, next) {
  res.render('instrDec', {
    title: "Instructional Decisions"
  });
});

router.get('/introduction', function(req, res, next) {
  res.render('introduction', {
    title: "Introudction"
  });
});

router.get('/instructionalDecisionsVideoTranscript', function(req, res, next) {
  res.render('instructionalDecisionsVideoTranscript', {
    title: "Instructional Decisions Video Transcript"
  });
});


router.get('/orderFrac', function(req, res, next) {
  res.render('orderFrac', {
    title: "Research Informed Instruction Ordering Fractions"
  });
});

router.get('/proLearnIntroFrac', function(req, res, next) {
  res.render('proLearnIntroFrac', {
    title: "Professional Introduction to Learning Fractions"
  });
});

router.get('/proLearningVideoTranscript', function(req, res, next) {
  res.render('proLearningVideoTranscript', {
    title: "Professional Learning Video Transcript"
  });
});

router.get('/repFrac', function(req, res, next) {
  res.render('repFrac', {
    title: "Research Informed Instruction Representing Fractions"
  });
});

router.get('/researchBackground', function(req, res, next) {
  res.render('researchBackground', {
    title: "Research Background"
  });
});

router.get('/resources', function(req, res, next) {
  res.render('resources', {
    title: "Resources"
  });
});

router.get('/studentLearn', function(req, res, next) {
  res.render('studentLearn', {
    title: "Student Learning"
  });
});

router.get('/studentLearningVideoTranscript', function(req, res, next) {
  res.render('studentLearningVideoTranscript', {
    title: "Student Learning Video Transcript"
  });
});

router.get('/teachProLearn', function(req, res, next) {
  res.render('teachProLearn', {
    title: "Teacher Professional Learning"
  });
});

router.get('/waysWeUseFrac', function(req, res, next) {
  res.render('waysWeUseFrac', {
    title: "Ways We Use Fractions"
  });
});


module.exports = router;
