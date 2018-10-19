//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET tasks digital paper pages

/*
router.get('/compOrder', function(req, res, next) {
  res.render('compOrder', {
    title: "Comparing and Ordering Fractions (Gr 6)"
  });
});

router.get('/digitalTasks', function(req, res, next) {
  res.render('digitalTasks', {
    title: "Digital Paper Tasks"
  });
});

router.get('/equivFrac', function(req, res, next) {
  res.render('equivFrac', {
    title: "Equivalence of Fractions (Jr - Int)"
  });
});

router.get('/fracRep', function(req, res, next) {
  res.render('fracRep', {
    title: "Fractions Representation (Jr-Int)"
  });
});

router.get('/impSetRep', function(req, res, next) {
  res.render('impSetRep', {
    title: "Improper Fractions with Set Representations (Gr 6)"
  });
});


router.get('/orderNumLine', function(req, res, next) {
  res.render('orderNumLine', {
    title: "Ordering on a Number Line (Gr 7)"
  });
});

router.get('/rep', function(req, res, next) {
  res.render('rep', {
    title: "Representations (Jr)"
  });
});

router.get('/setAreaMod', function(req, res, next) {
  res.render('setAreaMod', {
    title: "Fractions Representations with Set Area Models (Gr 6)"
  });
});

router.get('/setRep', function(req, res, next) {
  res.render('setRep', {
    title: "Set Representations (Jr)"
  });
});
*/


// GET tasks pathway pages

router.get('/brownie', function(req, res, next) {
  res.render('brownie', {
    title: "Unit B Brownie Sharing"
  });
});

router.get('/buildingFlags', function(req, res, next) {
  res.render('buildingFlags', {
    title: "Op B Building Flags"
  });
});


router.get('/buildStage', function(req, res, next) {
  res.render('buildStage', {
    title: "Op D Building a Stage"
  });
});


router.get('/changeWholes', function(req, res, next) {
  res.render('changeWholes', {
    title: "Changing Wholes"
  });
});


router.get('/compARecipeBLM1', function(req, res, next) {
  res.render('compARecipeBLM1', {
    title: "Recipe Task BLM"
  });
});

router.get('/comp', function(req, res, next) {
  res.render('comp', {
    title: "Comparing Fractions"
  });
});


router.get('/compARecipeBLM2', function(req, res, next) {
  res.render('compARecipeBLM2', {
    title: "Recipe Task BLM2"
  });
});


router.get('/countGame', function(req, res, next) {
  res.render('countGame', {
    title: "Unit D Counting Game"
  });
});

router.get('/desktopFrac', function(req, res, next) {
  res.render('desktopFrac', {
    title: "Unit B Desktop Fractions"
  });
});

router.get('/iHave', function(req, res, next) {
  res.render('iHave', {
    title: "Unit F I Have, Who Has"
  });
});


router.get('/op', function(req, res, next) {
  res.render('op', {
    title: "Operations"
  });
});

router.get('/buildFlags', function(req, res, next) {
  res.render('buildFlags', {
    title: "Op B Building Flags"
  });
});


router.get('/opBBuildFlagsBLM1', function(req, res, next) {
  res.render('opBBuildFlagsBLM1', {
    title: "Building Flags BLM"
  });
});


router.get('/opBBuildFlagsBLM2', function(req, res, next) {
  res.render('opBBuildFlagsBLM2', {
    title: "Building Flags BLM2"
  });
});


router.get('/opDBuildStageBLM1', function(req, res, next) {
  res.render('opDBuildStageBLM1', {
    title: "Building a Stage BLM1"
  });
});


router.get('/opDBuildStageBLM2', function(req, res, next) {
  res.render('opDBuildStageBLM2', {
    title: "Building a Stage BLM2"
  });
});

router.get('/opDBuildStageBLM3', function(req, res, next) {
  res.render('opDBuildStageBLM3', {
    title: "Building a Stage BLM3"
  });
});


router.get('/opDRelayRaceBLM', function(req, res, next) {
  res.render('opDRelayRaceBLM', {
    title: "Relay Race BLM"
  });
});

router.get('/opETurfBLM', function(req, res, next) {
  res.render('opETurfBLM', {
    title: "Turf Touchdown BLM"
  });
});


router.get('/paperFold', function(req, res, next) {
  res.render('paperFold', {
    title: "Comp E Pretty Powerful Paper Folding"
  });
});

router.get('/pathwayTasks', function(req, res, next) {
  res.render('pathwayTasks', {
    title: "Fraction Pathways Tasks"
  });
});


router.get('/recipe', function(req, res, next) {
  res.render('recipe', {
    title: "Comp A Recipe Task"
  });
});

router.get('/relayRace', function(req, res, next) {
  res.render('relayRace', {
    title: "Op D Relay Race"
  });
});

router.get('/shapeSets', function(req, res, next) {
  res.render('shapeSets', {
    title: "Unit F Fraction Shape Sets"
  });
});


router.get('/turfTouch', function(req, res, next) {
  res.render('turfTouch', {
    title: "Op E Turf Touchdown"
  });
});

router.get('/unit', function(req, res, next) {
  res.render('unit', {
    title: "Unit Fractions"
  });
});

router.get('/unitBDesktopBLM', function(req, res, next) {
  res.render('unitBDesktopBLM', {
    title: "Desktop Fractions BLM"
  });
});


router.get('/unitFChangeWholesBLM', function(req, res, next) {
  res.render('unitFChangeWholesBLM', {
    title: "Changing Wholes BLM"
  });
});

router.get('/walkLine', function(req, res, next) {
  res.render('walkLine', {
    title: "Unit A Walk the Line"
  });
});

router.get('/equivalencyComp', function(req, res, next) {
  res.render('equivalencyComp', {
    title: "Comp A Equivalency Comparisons"
  });
});





// GET tasks template pages
router.get('/walkLineTemplate', function(req, res, next) {
  res.render('walkLineTemplate', {
    title: "Unit A Walk the Line Template"
  });
});

router.get('/turfTouchdownTemplate', function(req, res, next) {
  res.render('turfTouchdownTemplate', {
    title: "Op E Turf Touchdown Template"
  });
});


router.get('/recipeTemplate', function(req, res, next) {
  res.render('recipeTemplate', {
    title: "Comp A Recipe Task Template"
  });
});

router.get('/relayRaceTemplate', function(req, res, next) {
  res.render('relayRaceTemplate', {
    title: "Op D Relay Race Template"
  });
});

router.get('/shapeSetsTemplate', function(req, res, next) {
  res.render('shapeSetsTemplate', {
    title: "Unit F Fraction Shape Sets Template"
  });
});

router.get('/paperFoldTemplate', function(req, res, next) {
  res.render('paperFoldTemplate', {
    title: "Comp E Pretty Powerful Paper Folding Template"
  });
});

router.get('/countGameTemplate', function(req, res, next) {
  res.render('countGameTemplate', {
    title: "Unit D Counting Game Template"
  });
});

router.get('/desktopFracTemplate', function(req, res, next) {
  res.render('desktopFracTemplate', {
    title: "Unit B Desktop Fractions Template"
  });
});

router.get('/iHaveTemplate', function(req, res, next) {
  res.render('iHaveTemplate', {
    title: "Unit F I Have, Who Has Template"
  });
});

router.get('/brownieTemplate', function(req, res, next) {
  res.render('brownieTemplate', {
    title: "Unit B Brownie Sharing Template"
  });
});

router.get('/buildingFlagsTemplate', function(req, res, next) {
  res.render('buildingFlagsTemplate', {
    title: "Op B Building Flags Template"
  });
});


router.get('/buildStageTemplate', function(req, res, next) {
  res.render('buildStageTemplate', {
    title: "Op D Building a Stage Template"
  });
});


router.get('/changeWholesTemplate', function(req, res, next) {
  res.render('changeWholesTemplate', {
    title: "Changing Wholes Template"
  });
});


// GET tasks implementation pages
router.get('/walkLineImplementation', function(req, res, next) {
  res.render('walkLineImplementation', {
    title: "Unit A Walk the Line Implementation"
  });
});

router.get('/turfTouchdownImplementation', function(req, res, next) {
  res.render('turfTouchdownImplementation', {
    title: "Op E Turf Touchdown Implementation"
  });
});


router.get('/recipeImplementation', function(req, res, next) {
  res.render('recipeImplementation', {
    title: "Comp A Recipe Task Implementation"
  });
});

router.get('/relayRaceImplementation', function(req, res, next) {
  res.render('relayRaceImplementation', {
    title: "Op D Relay Race Implementation"
  });
});

router.get('/shapeSetsImplementation', function(req, res, next) {
  res.render('shapeSetsImplementation', {
    title: "Unit F Fraction Shape Sets Implementation"
  });
});

router.get('/paperFoldImplementation', function(req, res, next) {
  res.render('paperFoldImplementation', {
    title: "Comp E Pretty Powerful Paper Folding Implementation"
  });
});

router.get('/countGameImplementation', function(req, res, next) {
  res.render('countGameImplementation', {
    title: "Unit D Counting Game Implementation"
  });
});

router.get('/desktopFracImplementation', function(req, res, next) {
  res.render('desktopFracImplementation', {
    title: "Unit B Desktop Fractions Implementation"
  });
});

router.get('/iHaveImplementation', function(req, res, next) {
  res.render('iHaveImplementation', {
    title: "Unit F I Have, Who Has Implementation"
  });
});

router.get('/brownieImplementation', function(req, res, next) {
  res.render('brownieImplementation', {
    title: "Unit B Brownie Sharing Implementation"
  });
});

router.get('/buildingFlagsImplementation', function(req, res, next) {
  res.render('buildingFlagsImplementation', {
    title: "Op B Building Flags Implementation"
  });
});


router.get('/buildStageImplementation', function(req, res, next) {
  res.render('buildStageImplementation', {
    title: "Op D Building a Stage Implementation"
  });
});


router.get('/changeWholesImplementation', function(req, res, next) {
  res.render('changeWholesImplementation', {
    title: "Changing Wholes Implementation"
  });
});


// GET tasks student thinking pages
router.get('/walkLineStudentThinking', function(req, res, next) {
  res.render('walkLineStudentThinking', {
    title: "Unit A Walk the Line Student Thinking"
  });
});

router.get('/turfTouchStudentThinking', function(req, res, next) {
  res.render('turfTouchStudentThinking', {
    title: "Op E Turf Touchdown Student Thinking"
  });
});


router.get('/recipeStudentThinking', function(req, res, next) {
  res.render('recipeStudentThinking', {
    title: "Comp A Recipe Task Student Thinking"
  });
});

router.get('/relayRaceStudentThinking', function(req, res, next) {
  res.render('relayRaceStudentThinking', {
    title: "Op D Relay Race Student Thinking"
  });
});

router.get('/shapeSetsStudentThinking', function(req, res, next) {
  res.render('shapeSetsStudentThinking', {
    title: "Unit F Fraction Shape Sets Student Thinking"
  });
});

router.get('/paperFoldStudentThinking', function(req, res, next) {
  res.render('paperFoldStudentThinking', {
    title: "Comp E Pretty Powerful Paper Folding Student Thinking"
  });
});

router.get('/countGameStudentThinking', function(req, res, next) {
  res.render('countGameStudentThinking', {
    title: "Unit D Counting Game Student Thinking"
  });
});

router.get('/desktopFracStudentThinking', function(req, res, next) {
  res.render('desktopFracStudentThinking', {
    title: "Unit B Desktop Fractions Student Thinking"
  });
});

router.get('/iHaveStudentThinking', function(req, res, next) {
  res.render('iHaveStudentThinking', {
    title: "Unit F I Have, Who Has Student Thinking"
  });
});

router.get('/brownieStudentThinking', function(req, res, next) {
  res.render('brownieStudentThinking', {
    title: "Unit B Brownie Sharing Student Thinking"
  });
});

router.get('/buildingFlagsStudentThinking', function(req, res, next) {
  res.render('buildingFlagsStudentThinking', {
    title: "Op B Building Flags Student Thinking"
  });
});


router.get('/buildStageStudentThinking', function(req, res, next) {
  res.render('buildStageStudentThinking', {
    title: "Op D Building a Stage Student Thinking"
  });
});


router.get('/changeWholesStudentThinking', function(req, res, next) {
  res.render('changeWholesStudentThinking', {
    title: "Changing Wholes Student Thinking"
  });
});

router.get('/familiarFractionsBenchmarksComparisons', function(req, res, next) {
  res.render('familiarFractionsBenchmarksComparisons', {
    title: "COMP B Familiar Fractions and Benchmarks Comparisons"
  });
});

router.get('/familiarFractionsBenchmarksComparisonsImplementation', function(req, res, next) {
  res.render('familiarFractionsBenchmarksComparisonsImplementation', {
    title: "COMP B Familiar Fractions and Benchmarks Comparisons - Teacher Notes"
  });
});

router.get('/generatingFractionsbetweenTwoNumbers', function(req, res, next) {
  res.render('generatingFractionsbetweenTwoNumbers', {
    title: "COMP C Generating Fractions between Two Numbers (Fraction Density)"
  });
});

router.get('/generatingFractionsbetweenTwoNumbersImplementation', function(req, res, next) {
  res.render('generatingFractionsbetweenTwoNumbersImplementation', {
    title: "COMP C Generating Fractions between Two Numbers (Fraction Density) - Teacher Notes"
  });
});

router.get('/comparingFractionsTask', function(req, res, next) {
  res.render('comparingFractionsTask', {
    title: "COMP E Comparing Fractions Task"
  });
});

router.get('/comparingFractionsTaskImplementation', function(req, res, next) {
  res.render('comparingFractionsTaskImplementation', {
    title: "COMP E Comparing Fractions Task - Teacher Notes"
  });
});

router.get('/equivalencyComparisonsImplementation', function(req, res, next) {
  res.render('equivalencyComparisonsImplementation', {
    title: "Comp A Equivalency Comparisons - Teacher Notes"
  });
});

router.get('/comparingFractionsNumeratorsDenominatorsTask', function(req, res, next) {
  res.render('comparingFractionsNumeratorsDenominatorsTask', {
    title: "Comp D Comparing Fractions with Like Numerators or Like Denominators"
  });
});

router.get('/flickGame', function(req, res, next) {
  res.render('flickGame', {
    title: "Op D The Flick Game"
  });
});

router.get('/livingNumberLine', function(req, res, next) {
  res.render('livingNumberLine', {
    title: "Unit A Living Number Line"
  });
});

router.get('/trainGame', function(req, res, next) {
  res.render('trainGame', {
    title: "OP C Train Game"
  });
});

router.get('/equalsGame', function(req, res, next) {
  res.render('equalsGame', {
    title: "OP E Equals Game"
  });
});

router.get('/grabBag', function(req, res, next) {
  res.render('grabBag', {
    title: "OP B Grab Bag"
  });
});

router.get('/unitRods', function(req, res, next) {
  res.render('unitRods', {
    title: "Unit E Unit Rods"
  });
});

router.get('/ribbonTask', function(req, res, next) {
  res.render('ribbonTask', {
    title: "Unit C Ribbon Task"
  });
});

router.get('/creatingSums', function(req, res, next) {
  res.render('creatingSums', {
    title: "OP E Creating Sums Close to One"
  });
});

router.get('/thePaintedDoor', function(req, res, next) {
  res.render('thePaintedDoor', {
    title: "OP N The Painted Door"
  });
});

router.get('/bananaBreadBakeOff', function(req, res, next) {
  res.render('bananaBreadBakeOff', {
    title: "OP G Banana Bread Bake Off"
  });
});

router.get('/chrisIceCreamCarton', function(req, res, next) {
  res.render('chrisIceCreamCarton', {
    title: "OP L Chris' Ice Cream Carton"
  });
});

router.get('/mixedNumbers', function(req, res, next) {
  res.render('mixedNumbers', {
    title: "OP E Making Mixed Numbers"
  });
});

router.get('/ComposingandDecomposingOneSevenEighths', function(req, res, next) {
  res.render('ComposingandDecomposingOneSevenEighths', {
    title: "Composing and Decomposing 1-7/8"
  });
});

router.get('/buildingOperations', function(req, res, next) {
  res.render('buildingOperations', {
    title: "OP E Building to Operations with Relational Rods"
  });
});

// Link to Addtional Prompts and Curriculum Connections (They use the card layout from tasks but they are not tasks)
// UNIT A
router.get('/additionalPromptsUnitA', function(req, res, next) {
  res.render('additionalPromptsUnitA', {
    title: "Unit A Additional Prompts"
  });
});

router.get('/curriculumConnectionsUnitA', function(req, res, next) {
  res.render('curriculumConnectionsUnitA', {
    title: "Unit A Curriculum Connections"
  });
});

/*curriculum pages*/
router.get('/curriculumConnectionsUnit', function(req, res, next) {
  res.render('curriculumConnectionsUnit', {
    title: "Curriculum Connections - Unit"
  });
});
router.get('/curriculumConnectionsComparison', function(req, res, next) {
  res.render('curriculumConnectionsComparison', {
    title: "Unit A Curriculum Connections"
  });
});
router.get('/curriculumConnectionsAdditionSubtraction', function(req, res, next) {
  res.render('curriculumConnectionsAdditionSubtraction', {
    title: "Unit A Curriculum Connections"
  });
});
router.get('/curriculumConnectionsMultiplicationDivision', function(req, res, next) {
  res.render('curriculumConnectionsMultiplicationDivision', {
    title: "Unit A Curriculum Connections"
  });
});

//UNIT B
router.get('/additionalPromptsUnitB', function(req, res, next) {
  res.render('additionalPromptsUnitB', {
    title: "Unit B Additional Prompts"
  });
});

router.get('/curriculumConnectionsUnitB', function(req, res, next) {
  res.render('curriculumConnectionsUnitB', {
    title: "Unit B Curriculum Connections"
  });
});

//UNIT C
router.get('/additionalPromptsUnitC', function(req, res, next) {
  res.render('additionalPromptsUnitC', {
    title: "Unit C Additional Prompts"
  });
});

router.get('/curriculumConnectionsUnitC', function(req, res, next) {
  res.render('curriculumConnectionsUnitC', {
    title: "Unit C Curriculum Connections"
  });
});

//UNIT D
router.get('/additionalPromptsUnitD', function(req, res, next) {
  res.render('additionalPromptsUnitD', {
    title: "Unit D Additional Prompts"
  });
});

router.get('/curriculumConnectionsUnitD', function(req, res, next) {
  res.render('curriculumConnectionsUnitD', {
    title: "Unit D Curriculum Connections"
  });
});

//UNIT E
router.get('/additionalPromptsUnitE', function(req, res, next) {
  res.render('additionalPromptsUnitE', {
    title: "Unit E Additional Prompts"
  });
});

router.get('/curriculumConnectionsUnitE', function(req, res, next) {
  res.render('curriculumConnectionsUnitE', {
    title: "Unit E Curriculum Connections"
  });
});

//UNIT F
router.get('/additionalPromptsUnitF', function(req, res, next) {
  res.render('additionalPromptsUnitF', {
    title: "Unit F Additional Prompts"
  });
});

router.get('/curriculumConnectionsUnitF', function(req, res, next) {
  res.render('curriculumConnectionsUnitF', {
    title: "Unit F Curriculum Connections"
  });
});

// COMP A
router.get('/additionalPromptsCompA', function(req, res, next) {
  res.render('additionalPromptsCompA', {
    title: "Comp A Additional Prompts"
  });
});

router.get('/curriculumConnectionsCompA', function(req, res, next) {
  res.render('curriculumConnectionsCompA', {
    title: "Comp A Curriculum Connections"
  });
});

// COMP B
router.get('/additionalPromptsCompB', function(req, res, next) {
  res.render('additionalPromptsCompB', {
    title: "Comp B Additional Prompts"
  });
});

router.get('/curriculumConnectionsCompB', function(req, res, next) {
  res.render('curriculumConnectionsCompB', {
    title: "Comp B Curriculum Connections"
  });
});

// COMP C
router.get('/additionalPromptsCompC', function(req, res, next) {
  res.render('additionalPromptsCompC', {
    title: "Comp C Additional Prompts"
  });
});

router.get('/curriculumConnectionsCompC', function(req, res, next) {
  res.render('curriculumConnectionsCompC', {
    title: "Comp C Curriculum Connections"
  });
});

// COMP D
router.get('/additionalPromptsCompD', function(req, res, next) {
  res.render('additionalPromptsCompD', {
    title: "Comp D Additional Prompts"
  });
});

router.get('/curriculumConnectionsCompD', function(req, res, next) {
  res.render('curriculumConnectionsCompD', {
    title: "Comp D Curriculum Connections"
  });
});

// COMP E
router.get('/additionalPromptsCompE', function(req, res, next) {
  res.render('additionalPromptsCompE', {
    title: "Comp E Additional Prompts"
  });
});

router.get('/curriculumConnectionsCompE', function(req, res, next) {
  res.render('curriculumConnectionsCompE', {
    title: "Comp E Curriculum Connections"
  });
});

// OP A
router.get('/additionalPromptsOpA', function(req, res, next) {
  res.render('additionalPromptsOpA', {
    title: "Op A Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpA', function(req, res, next) {
  res.render('curriculumConnectionsOpA', {
    title: "Op A Curriculum Connections"
  });
});

// OP B
router.get('/additionalPromptsOpB', function(req, res, next) {
  res.render('additionalPromptsOpB', {
    title: "Op B Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpB', function(req, res, next) {
  res.render('curriculumConnectionsOpB', {
    title: "Op B Curriculum Connections"
  });
});

// OP C
router.get('/additionalPromptsOpC', function(req, res, next) {
  res.render('additionalPromptsOpC', {
    title: "Op C Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpC', function(req, res, next) {
  res.render('curriculumConnectionsOpC', {
    title: "Op C Curriculum Connections"
  });
});

// OP D
router.get('/additionalPromptsOpD', function(req, res, next) {
  res.render('additionalPromptsOpD', {
    title: "Op D Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpD', function(req, res, next) {
  res.render('curriculumConnectionsOpD', {
    title: "Op D Curriculum Connections"
  });
});

// OP E
router.get('/additionalPromptsOpE', function(req, res, next) {
  res.render('additionalPromptsOpE', {
    title: "Op E Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpE', function(req, res, next) {
  res.render('curriculumConnectionsOpE', {
    title: "Op E Curriculum Connections"
  });
});

// OP F
router.get('/additionalPromptsOpF', function(req, res, next) {
  res.render('additionalPromptsOpF', {
    title: "Op F Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpF', function(req, res, next) {
  res.render('curriculumConnectionsOpF', {
    title: "Op F Curriculum Connections"
  });
});

// OP G
router.get('/additionalPromptsOpG', function(req, res, next) {
  res.render('additionalPromptsOpG', {
    title: "Op G Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpG', function(req, res, next) {
  res.render('curriculumConnectionsOpG', {
    title: "Op G Curriculum Connections"
  });
});

// OP H
router.get('/additionalPromptsOpH', function(req, res, next) {
  res.render('additionalPromptsOpH', {
    title: "Op H Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpH', function(req, res, next) {
  res.render('curriculumConnectionsOpH', {
    title: "Op H Curriculum Connections"
  });
});

// OP I
router.get('/additionalPromptsOpI', function(req, res, next) {
  res.render('additionalPromptsOpI', {
    title: "Op I Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpI', function(req, res, next) {
  res.render('curriculumConnectionsOpI', {
    title: "Op I Curriculum Connections"
  });
});

// OP J
router.get('/additionalPromptsOpJ', function(req, res, next) {
  res.render('additionalPromptsOpJ', {
    title: "Op J Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpJ', function(req, res, next) {
  res.render('curriculumConnectionsOpJ', {
    title: "Op J Curriculum Connections"
  });
});

// OP K
router.get('/additionalPromptsOpK', function(req, res, next) {
  res.render('additionalPromptsOpK', {
    title: "Op K Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpK', function(req, res, next) {
  res.render('curriculumConnectionsOpK', {
    title: "Op K Curriculum Connections"
  });
});

// OP L
router.get('/additionalPromptsOpL', function(req, res, next) {
  res.render('additionalPromptsOpL', {
    title: "Op L Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpL', function(req, res, next) {
  res.render('curriculumConnectionsOpL', {
    title: "Op L Curriculum Connections"
  });
});

// OP M
router.get('/additionalPromptsOpM', function(req, res, next) {
  res.render('additionalPromptsOpM', {
    title: "Op M Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpM', function(req, res, next) {
  res.render('curriculumConnectionsOpM', {
    title: "Op M Curriculum Connections"
  });
});

// OP N
router.get('/additionalPromptsOpN', function(req, res, next) {
  res.render('additionalPromptsOpN', {
    title: "Op N Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpN', function(req, res, next) {
  res.render('curriculumConnectionsOpN', {
    title: "Op N Curriculum Connections"
  });
});

// OP O
router.get('/additionalPromptsOpO', function(req, res, next) {
  res.render('additionalPromptsOpO', {
    title: "Op O Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpO', function(req, res, next) {
  res.render('curriculumConnectionsOpO', {
    title: "Op O Curriculum Connections"
  });
});

// OP P
router.get('/additionalPromptsOpP', function(req, res, next) {
  res.render('additionalPromptsOpP', {
    title: "Op P Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpP', function(req, res, next) {
  res.render('curriculumConnectionsOpP', {
    title: "Op P Curriculum Connections"
  });
});

// OP Q
router.get('/additionalPromptsOpQ', function(req, res, next) {
  res.render('additionalPromptsOpQ', {
    title: "Op Q Additional Prompts"
  });
});
router.get('/curriculumConnectionsOpQ', function(req, res, next) {
  res.render('curriculumConnectionsOpQ', {
    title: "Op Q Curriculum Connections"
  });
});

// Classroom Resources manipulatives
router.get('/grade3PlanningMap', function(req, res, next) {
  res.render('grade3PlanningMap', {
    title: "Grade 3 Planning Map"
  })
})

router.get('/grade5-6PlanningMap', function(req, res, next) {
  res.render('grade5-6PlanningMap', {
    title: "Grade 5-6 Planning Map"
  })
})

router.get('/grade7-8PlanningMap', function(req, res, next) {
  res.render('grade7-8PlanningMap', {
    title: "Grade 7-8 Planning Map"
  })
})

router.get('/grade9AppliedPlanningMap', function(req, res, next) {
  res.render('grade9AppliedPlanningMap', {
    title: "Grade 9 Applied Planning Map"
  })
})

module.exports = router;
