var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
// var users = require('./routes/users');
var digitalPaper = require('./routes/digitalPaper');
var litReviews = require('./routes/litReviews');
var pathway = require('./routes/pathway');
var planningSupports = require('./routes/planningSupports');
var plfSupports = require('./routes/plfSupports');
var research = require('./routes/research');
var supportDocs = require('./routes/supportDocs');
var tasks = require('./routes/tasks');
// var tasksDigitalPaper = require('./routes/tasksDigitalPaper');
// var tasksPathway = require('./routes/tasksPathway');

var contact = require('./routes/contact');
//var controllers = require('./controllers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/digitalPaper', digitalPaper);
app.use('/litReviews', litReviews);
app.use('/pathway', pathway);
app.use('/planningSupports', planningSupports);
app.use('/plfSupports', plfSupports);
app.use('/research', research);
app.use('/supportDocs', supportDocs);
// app.use('/tasksDigitalPaper', tasksDigitalPaper);
// app.use('/tasksPathway', tasksPathway);
app.use('/contact', contact);
app.use('/tasks', tasks);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
