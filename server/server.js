var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//create application
var app = express();

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS support
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use('/hello', function(req, res, next){
	res.send('Helloworld');
	next();
});

//connect to MongoDB
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function(){
	//load models
	app.models = require('./models/index');
	//load routes
	routes = require('./routes');
	_.each(routes, function(controller, route){
		app.use(route, controller(app, route));
	});
	port = process.env.PORT || 8888;
	ip = process.env.IP || '127.0.0.1';
	console.log('Listening on port '+ port);
	app.listen(port, ip);
});

