var favicon = require('serve-favicon');
var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var expresssession = require('express-session');
// var MongoStore = require('connect-mongo')(expresssession);
// var dbconfig=require('./database.js');

function includes(app,express,path){
	// uncomment after placing your favicon in /public
	//app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	// app.use(cookieParser());
	// app.use(expresssession({
	// 	store: new MongoStore({
	// 	    url: 'mongodb://'+dbconfig.user+':'+dbconfig.pwd+'@'+dbconfig.host+':'+dbconfig.port+'/'+dbconfig.dbname
	// 	}),
	// 	secret: 'shayanzindabad',
	//   	resave: false,
	//   	saveUninitialized: true
	// }));
	
	app.use(express.static(path.join(__dirname, '../public')));
}

module.exports.includes=includes;