//routes and controllers are the same thing

var express = require('express');
var router = express.Router();

//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET pathway pages
// comp pages
router.get('/comp', function(req, res, next) {
  res.render('comp', {
    myName: "Comparing Fractions",
    title: "Comparing Fractions"
  });
});

router.get('/comparingFractions', function(req, res, next) {
  res.render('comparingFractions', {
    myName: "Comparing Fractions",
    title: "Comparing Fractions"
  });
});

router.get('/compA', function(req, res, next) {
  res.render('compA', {
    myName: "Comp A",
    title: "Comp A"
  });
});


router.get('/compB', function(req, res, next) {
  res.render('compB', {
    myName: "Comp B",
    title: "Comp B"
  });
});

router.get('/compC', function(req, res, next) {
  res.render('compC', {
    myName: "Comp C",
    title: "Comp C"
  });
});

router.get('/compD', function(req, res, next) {
  res.render('compD', {
    myName: "Comp D",
    title: "Comp D"
  });
});

router.get('/compE', function(req, res, next) {
  res.render('compE', {
    myName: "Comp E",
    title: "Comp E"
  });
});

//FLP intro video
router.get('/FLPIntroductionVideo', function(req, res, next) {
  res.render('FLPIntroductionVideo', {
    myName:"FLP Introduction Video",
    title: "FLP Introdcution Video"
  });
});

// get op pages
router.get('/op', function(req, res, next) {
  res.render('op', {
    myName: "Operations",
    title: "Operations"
  });
});

router.get('/operations', function(req, res, next) {
  res.render('operations', {
    myName: "Operations",
    title: "Operations"
  });
});

router.get('/opA', function(req, res, next) {
  res.render('opA', {
    myName: "Op A",
    title: "Op A"
  });
});

router.get('/opB', function(req, res, next) {
  res.render('opB', {
    myName: "Op B",
    title: "Op B"
  });
});

router.get('/opC', function(req, res, next) {
  res.render('opC', {
    myName: "Op C",
    title: "Op C"
  });
});

router.get('/opD', function(req, res, next) {
  res.render('opD', {
    myName: "Op D",
    title: "Op D"
  });
});

router.get('/opE', function(req, res, next) {
  res.render('opE', {
    myName: "Op E",
    title: "Op E"
  });
});

/*new purple pathways**/

router.get('/opF', function(req, res, next) {
  res.render('opF', {
    myName: "Op F",
    title: "Op F"
  });
});

router.get('/opG', function(req, res, next) {
  res.render('opG', {
    myName: "Op G",
    title: "Op G"
  });
});

router.get('/opH', function(req, res, next) {
  res.render('opH', {
    myName: "Op H",
    title: "Op H"
  });
});

router.get('/opI', function(req, res, next) {
  res.render('opI', {
    myName: "Op I",
    title: "Op I"
  });
});

router.get('/opJ', function(req, res, next) {
  res.render('opJ', {
    myName: "Op J",
    title: "Op J"
  });
});

router.get('/opK', function(req, res, next) {
  res.render('opK', {
    myName: "Op K",
    title: "Op K"
  });
});

router.get('/opL', function(req, res, next) {
  res.render('opL', {
    myName: "Op L",
    title: "Op L"
  });
});

router.get('/opM', function(req, res, next) {
  res.render('opM', {
    myName: "Op M",
    title: "Op M"
  });
});

router.get('/opN', function(req, res, next) {
  res.render('opN', {
    myName: "Op N",
    title: "Op N"
  });
});

router.get('/opO', function(req, res, next) {
  res.render('opO', {
    myName: "Op O",
    title: "Op O"
  });
});

router.get('/opP', function(req, res, next) {
  res.render('opP', {
    myName: "Op P",
    title: "Op P"
  });
});

router.get('/opQ', function(req, res, next) {
  res.render('opQ', {
    myName: "Op Q",
    title: "Op Q"
  });
});

// get unit pages
router.get('/unit', function(req, res, next) {
  res.render('unit', {
    myName: "Unit Fractions",
    title: "Unit Fractions"
  });
});

router.get('/unitFractions', function(req, res, next) {
  res.render('unitFractions', {
    myName: "Unit Fractions",
    title: "Unit Fractions"
  });
});

router.get('/unitA', function(req, res, next) {
  res.render('unitA', {
    myName: "Unit A",
    title: "Unit A"
  });
});

router.get('/unitB', function(req, res, next) {
  res.render('unitB', {
    myName: "Unit B",
    title: "Unit B"
  });
});

router.get('/unitC', function(req, res, next) {
  res.render('unitC', {
    myName: "Unit C",
    title: "Unit C"
  });
});

router.get('/unitD', function(req, res, next) {
  res.render('unitD', {
    myName: "Unit D",
    title: "Unit D"
  });
});

router.get('/unitE', function(req, res, next) {
  res.render('unitE', {
    myName: "Unit E",
    title: "Unit E"
  });
});

router.get('/unitF', function(req, res, next) {
  res.render('unitF', {
    myName: "Unit F",
    title: "Unit F"
  });
});


module.exports = router;
