var restful = require('node-restful');

module.exports = function(app, route){
	//set up controller for rest
	var rest = restful.model(
		'movie',
		app.models.movie
	).methods(['get', 'put', 'post', 'delete']);
	
	//register this endpoint with the application 
	rest.register(app, route);
	
	//Return middleware
	return function(req, res, next){
		next();
	};
	
};