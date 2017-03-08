var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	// Add new friend's data to data object
	var newName = req.query.name;
	var newDescription = req.query.description;
	var newFriend = {
		"name": newName, 
		"description": newDescription,
		"imageURL": "http://lorempixel.com/400/400/people"
	};

	data.friends.push(newFriend);
	console.log(data);
	res.render('add', data);
	// Render index.handlebars
 }