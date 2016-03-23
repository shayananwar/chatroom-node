var express = require('express');
var path = require('path');

var app = express();


//local sets global variables use anywhere
//app.locals.data={anything} or anything 

// load configs
conf=require('./config/config.json');
app.locals={
  config:conf
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// include libraries
lib = require('./config/includes');
lib.includes(app, express, path);


// routes
routes = require('./config/routes');
routes.init(app);


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
