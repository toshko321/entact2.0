
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var login = require('./routes/login');
// var browse_A = require('./routes/browse_A');
// var browse_B = require('./routes/browse_B');
var browse = require('./routes/browse');
var add = require('./routes/add');
var createEvent = require('./routes/createEvent');
var faq = require('./routes/faq');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
// app.get('/', function(req,res) {
//     res.sendfile(__dirname + '/public/loginPage.html');
// });

app.get('/', login.view);
app.get('/add', add.addEvent);
app.get('/createEvent', createEvent.view);
app.get('/FAQ', faq.view);

// app.get('/browse', browse.view);
app.get('/browse', browse.view);
app.get('/browse_A', browse.viewA);
app.get('/browse_B', browse.viewB);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
