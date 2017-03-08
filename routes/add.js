var data = require("../data.json");

exports.addFriend = function(req, res) {    
    // Your code goes here
    // Add new friend's data to data object
    var newName = req.query.name;
    var newCreator = req.query.creator;
    var newDescription = req.query.description;
    var newLocation = req.query.location;
    var newTime = req.query.time;
    var newItems = req.query.items;
    var newMembers = req.query.members;
    var newDate = req.query.date;
    
    var newFriend = {
        "name": newName, 
        "description": newDescription,
        "creator": newCreator,
        "location": newLocation,
        "time": newTime,
        "items": newItems,
        "members": newMembers,
        "date": newDate
        
    };

    data.friends.unshift(newFriend);
    console.log(data);
    res.render('add', data);
    // Render index.handlebars
 }