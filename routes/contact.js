//routes and controllers are the same thing

'use strict'
 var express = require('express');
 var router = express.Router();
// var angular = require('angular');

var nodemailer = require('nodemailer');
//new mailer
var transporter = nodemailer.createTransport('smtps://username123%40gmail.com:password@smtp.gmail.com');
var mailOptions;

router.post('/contact-me', function(req,res,next){
      mailOptions = {
        // put gmail here
        to: 'admin@gmail.com',
        subject: req.body.subject,
        html: "Hello, you receive message from "+req.body.email+".<br/>Message:<br/>"+req.body.message
    };
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
        res.redirect('/');
    }
    console.log('Message sent: ' + info.response);
    res.redirect('/');
    });
});

//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back



//});

 module.exports = router;
