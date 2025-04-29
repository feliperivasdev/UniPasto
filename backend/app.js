var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carreraRouter = require('./routes/carrera');
var costosRouter = require('./routes/costos');
var materiaRouter = require('./routes/materia');
var planes_de_estudioRouter = require('./routes/planes_de_estudio');
var requisitos_admisionRouter = require('./routes/requisitos_admision');
var universidadRouter = require('./routes/universidad');
var usuarioRouter = require('./routes/usuario');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/carrera', carreraRouter);
app.use('/costos', costosRouter);
app.use('/materia', materiaRouter);
app.use('/planes_de_estudio', planes_de_estudioRouter);
app.use('/requisitos_admision', requisitos_admisionRouter);
app.use('/universidad', universidadRouter);
app.use('/usuario', usuarioRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
