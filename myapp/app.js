var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students');
var professorsRouter = require('./routes/professors');
var staffRouter = require('./routes/staff');
var courseRouter = require('./routes/courses');
var departmentRouter = require('./routes/department');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentsRouter);
app.use('/professors', professorsRouter);
app.use('/staff', staffRouter);
app.use('/course', courseRouter);
app.use('/department', departmentRouter);

// გილოცავთ მერვედ ფინალში გადასვლას! ♥ იმედია ესპანეთთანაც გვასახელებენ ბიჭები. სამწუხაროდ ჩვენი პროექტის სრულყოფილად დაწერა ვერ მოვახერხეთ (ფეხბურთის გამო) ♥
// სასიამოვნო იყო თქვენი ლექციების მოსმენა ♥. მიუხედავად იმისა რომ ძალიან ვპასიურობდით და დებილების შთაბეჭდილება დაგიტოვეთ
// ბევრი ცოდნა მივიღეთ. (მაგრამ არც ისეთი დებილებვი ვართ: ბარბარე ვეკუელია, ქეთევანი მათემატიკას ფლობს, ელენე გენიოსია) მადლობა კიდევ ერთხელ
// წარმატებები ♥ (სიყვარულით ქეთევანი, ბარბარე და ელენე!) ☻☺☻ ♥♥♥

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
