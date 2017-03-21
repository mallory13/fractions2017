//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET tasks digital paper pages

router.get('/compOrder', function(req, res, next) {
  res.render('compOrder', {title:"Comparing and Ordering Fractions (Gr 6)"});
});

router.get('/digitalTasks', function(req, res, next) {
  res.render('digitalTasks', {title:"Digital Paper Tasks"});
});

router.get('/equivFrac', function(req, res, next) {
  res.render('equivFrac', {title:"Equivalence of Fractions (Jr - Int)"});
});

router.get('/fracRep', function(req, res, next) {
  res.render('fracRep', {title:"Fractions Representation (Jr-Int)"});
});

router.get('/impSetRep', function(req, res, next) {
  res.render('impSetRep', {title:"Improper Fractions with Set Representations (Gr 6)"});
});


router.get('/orderNumLine', function(req, res, next) {
  res.render('orderNumLine', {title:"Ordering on a Number Line (Gr 7)"});
});

router.get('/rep', function(req, res, next) {
  res.render('rep', {title:"Representations (Jr)"});
});

router.get('/setAreaMod', function(req, res, next) {
  res.render('setAreaMod', {title:"Fractions Representations with Set Area Models (Gr 6)"});
});

router.get('/setRep', function(req, res, next) {
  res.render('setRep', {title:"Set Representations (Jr)"});
});



// GET tasks pathway pages

router.get('/brownie', function(req, res, next) {
  res.render('brownie', {title:"Unit B Brownie Sharing"});
});

router.get('/buildingFlags', function(req, res, next) {
  res.render('buildingFlags', {title:"Op B Building Flags"});
});


router.get('/buildStage', function(req, res, next) {
  res.render('buildStage', {title:"Op D Building a Stage"});
});


router.get('/changeWholes', function(req, res, next) {
  res.render('changeWholes', {title:"Changing Wholes"});
});


router.get('/compARecipeBLM1', function(req, res, next) {
  res.render('compARecipeBLM1', {title:"Recipe Task BLM"});
});

router.get('/comp', function(req, res, next) {
  res.render('comp', {title:"Comparing Fractions"});
});


router.get('/compARecipeBLM2', function(req, res, next) {
  res.render('compARecipeBLM2', {title:"Recipe Task BLM2"});
});


router.get('/countGame', function(req, res, next) {
  res.render('countGame', {title:"Unit D Counting Game"});
});

router.get('/desktopFrac', function(req, res, next) {
  res.render('desktopFrac', {title:"Unit B Desktop Fractions"});
});

router.get('/iHave', function(req, res, next) {
  res.render('iHave', {title:"Unit F I Have, Who Has"});
});


router.get('/op', function(req, res, next) {
  res.render('op', {title:"Operations"});
});

router.get('/buildFlags', function(req, res, next) {
  res.render('buildFlags', {title:"Op B Building Flags"});
});


router.get('/opBBuildFlagsBLM1', function(req, res, next) {
  res.render('opBBuildFlagsBLM1', {title:"Building Flags BLM"});
});


router.get('/opBBuildFlagsBLM2', function(req, res, next) {
  res.render('opBBuildFlagsBLM2', {title:"Building Flags BLM2"});
});


router.get('/opDBuildStageBLM1', function(req, res, next) {
  res.render('opDBuildStageBLM1', {title:"Building a Stage BLM1"});
});


router.get('/opDBuildStageBLM2', function(req, res, next) {
  res.render('opDBuildStageBLM2', {title:"Building a Stage BLM2"});
});

router.get('/opDBuildStageBLM3', function(req, res, next) {
  res.render('opDBuildStageBLM3', {title:"Building a Stage BLM3"});
});


router.get('/opDRelayRaceBLM', function(req, res, next) {
  res.render('opDRelayRaceBLM', {title:"Relay Race BLM"});
});

router.get('/opETurfBLM', function(req, res, next) {
  res.render('opETurfBLM', {title:"Turf Touchdown BLM"});
});


router.get('/paperFold', function(req, res, next) {
  res.render('paperFold', {title:"Comp E Pretty Powerful Paper Folding"});
});

router.get('/pathwayTasks', function(req, res, next) {
  res.render('pathwayTasks', {title:"Fraction Pathways Tasks"});
});


router.get('/recipe', function(req, res, next) {
  res.render('recipe', {title:"Comp A Recipe Task"});
});

router.get('/relayRace', function(req, res, next) {
  res.render('relayRace', {title:"Op D Relay Race"});
});

router.get('/shapeSets', function(req, res, next) {
  res.render('shapeSets', {title:"Unit F Fraction Shape Sets"});
});


router.get('/turfTouch', function(req, res, next) {
  res.render('turfTouch', {title:"Op E Turf Touchdown"});
});

router.get('/unit', function(req, res, next) {
  res.render('unit', {title:"Unit Fractions"});
});

router.get('/unitBDesktopBLM', function(req, res, next) {
  res.render('unitBDesktopBLM', {title:"Desktop Fractions BLM"});
});


router.get('/unitFChangeWholesBLM', function(req, res, next) {
  res.render('unitFChangeWholesBLM', {title:"Changing Wholes BLM"});
});

router.get('/walkLine', function(req, res, next) {
  res.render('walkLine', {title:"Unit A Walk the Line"});
});





// GET tasks template pages
router.get('/walkLineTemplate', function(req, res, next) {
  res.render('walkLineTemplate', {title:"Unit A Walk the Line Template"});
});

router.get('/turfTouchdownTemplate', function(req, res, next) {
  res.render('turfTouchdownTemplate', {title:"Op E Turf Touchdown Template"});
});


router.get('/recipeTemplate', function(req, res, next) {
  res.render('recipeTemplate', {title:"Comp A Recipe Task Template"});
});

router.get('/relayRaceTemplate', function(req, res, next) {
  res.render('relayRaceTemplate', {title:"Op D Relay Race Template"});
});

router.get('/shapeSetsTemplate', function(req, res, next) {
  res.render('shapeSetsTemplate', {title:"Unit F Fraction Shape Sets Template"});
});

router.get('/paperFoldTemplate', function(req, res, next) {
  res.render('paperFoldTemplate', {title:"Comp E Pretty Powerful Paper Folding Template"});
});

router.get('/countGameTemplate', function(req, res, next) {
  res.render('countGameTemplate', {title:"Unit D Counting Game Template"});
});

router.get('/desktopFracTemplate', function(req, res, next) {
  res.render('desktopFracTemplate', {title:"Unit B Desktop Fractions Template"});
});

router.get('/iHaveTemplate', function(req, res, next) {
  res.render('iHaveTemplate', {title:"Unit F I Have, Who Has Template"});
});

router.get('/brownieTemplate', function(req, res, next) {
  res.render('brownieTemplate', {title:"Unit B Brownie Sharing Template"});
});

router.get('/buildingFlagsTemplate', function(req, res, next) {
  res.render('buildingFlagsTemplate', {title:"Op B Building Flags Template"});
});


router.get('/buildStageTemplate', function(req, res, next) {
  res.render('buildStageTemplate', {title:"Op D Building a Stage Template"});
});


router.get('/changeWholesTemplate', function(req, res, next) {
  res.render('changeWholesTemplate', {title:"Changing Wholes Template"});
});


// GET tasks implementation pages
router.get('/walkLineImplementation', function(req, res, next) {
  res.render('walkLineImplementation', {title:"Unit A Walk the Line Implementation"});
});

router.get('/turfTouchdownImplementation', function(req, res, next) {
  res.render('turfTouchdownImplementation', {title:"Op E Turf Touchdown Implementation"});
});


router.get('/recipeImplementation', function(req, res, next) {
  res.render('recipeImplementation', {title:"Comp A Recipe Task Implementation"});
});

router.get('/relayRaceImplementation', function(req, res, next) {
  res.render('relayRaceImplementation', {title:"Op D Relay Race Implementation"});
});

router.get('/shapeSetsImplementation', function(req, res, next) {
  res.render('shapeSetsImplementation', {title:"Unit F Fraction Shape Sets Implementation"});
});

router.get('/paperFoldImplementation', function(req, res, next) {
  res.render('paperFoldImplementation', {title:"Comp E Pretty Powerful Paper Folding Implementation"});
});

router.get('/countGameImplementation', function(req, res, next) {
  res.render('countGameImplementation', {title:"Unit D Counting Game Implementation"});
});

router.get('/desktopFracImplementation', function(req, res, next) {
  res.render('desktopFracImplementation', {title:"Unit B Desktop Fractions Implementation"});
});

router.get('/iHaveImplementation', function(req, res, next) {
  res.render('iHaveImplementation', {title:"Unit F I Have, Who Has Implementation"});
});

router.get('/brownieImplementation', function(req, res, next) {
  res.render('brownieImplementation', {title:"Unit B Brownie Sharing Implementation"});
});

router.get('/buildingFlagsImplementation', function(req, res, next) {
  res.render('buildingFlagsImplementation', {title:"Op B Building Flags Implementation"});
});


router.get('/buildStageImplementation', function(req, res, next) {
  res.render('buildStageImplementation', {title:"Op D Building a Stage Implementation"});
});


router.get('/changeWholesImplementation', function(req, res, next) {
  res.render('changeWholesImplementation', {title:"Changing Wholes Implementation"});
});


// GET tasks student thinking pages
router.get('/walkLineStudentThinking', function(req, res, next) {
  res.render('walkLineStudentThinking', {title:"Unit A Walk the Line Student Thinking"});
});

router.get('/turfTouchStudentThinking', function(req, res, next) {
  res.render('turfTouchStudentThinking', {title:"Op E Turf Touchdown Student Thinking"});
});


router.get('/recipeStudentThinking', function(req, res, next) {
  res.render('recipeStudentThinking', {title:"Comp A Recipe Task Student Thinking"});
});

router.get('/relayRaceStudentThinking', function(req, res, next) {
  res.render('relayRaceStudentThinking', {title:"Op D Relay Race Student Thinking"});
});

router.get('/shapeSetsStudentThinking', function(req, res, next) {
  res.render('shapeSetsStudentThinking', {title:"Unit F Fraction Shape Sets Student Thinking"});
});

router.get('/paperFoldStudentThinking', function(req, res, next) {
  res.render('paperFoldStudentThinking', {title:"Comp E Pretty Powerful Paper Folding Student Thinking"});
});

router.get('/countGameStudentThinking', function(req, res, next) {
  res.render('countGameStudentThinking', {title:"Unit D Counting Game Student Thinking"});
});

router.get('/desktopFracStudentThinking', function(req, res, next) {
  res.render('desktopFracStudentThinking', {title:"Unit B Desktop Fractions Student Thinking"});
});

router.get('/iHaveStudentThinking', function(req, res, next) {
  res.render('iHaveStudentThinking', {title:"Unit F I Have, Who Has Student Thinking"});
});

router.get('/brownieStudentThinking', function(req, res, next) {
  res.render('brownieStudentThinking', {title:"Unit B Brownie Sharing Student Thinking"});
});

router.get('/buildingFlagsStudentThinking', function(req, res, next) {
  res.render('buildingFlagsStudentThinking', {title:"Op B Building Flags Student Thinking"});
});


router.get('/buildStageStudentThinking', function(req, res, next) {
  res.render('buildStageStudentThinking', {title:"Op D Building a Stage Student Thinking"});
});


router.get('/changeWholesStudentThinking', function(req, res, next) {
  res.render('changeWholesStudentThinking', {title:"Changing Wholes Student Thinking"});
});


module.exports = router;
