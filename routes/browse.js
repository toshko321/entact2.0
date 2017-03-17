// Get all of our friend data
var data = require('../events.json');

exports.view = function(req,res){
	data["browseA"] = true;
	res.render('browse',data);
}

exports.viewA = function(req, res){
  	data["browseA"] = true;
	res.render('browse', data);
};

exports.viewB = function(req, res){
  	data["browseA"] = false;
	res.render('browse', data);
};

