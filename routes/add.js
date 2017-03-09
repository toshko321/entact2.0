var data = require("../events.json");
var d3 = require("d3");

function uniqId() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
}

exports.addEvent = function(req, res) {    
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
    var newID = uniqId();

    var format = d3.timeFormat("%B %d, %Y");
    var formattedDate = format(new Date(newDate));
    var formattedTime = formatTime(newTime);
    
    var newEvent = {
        "id": newID,
        "name": newName, 
        "description": newDescription,
        "creator": newCreator,
        "location": newLocation,
        "time": formattedTime,
        "items": newItems,
        "members": newMembers,
        "date": formattedDate
    };

    data.events.unshift(newEvent);
    console.log(data);
    res.render('browse',data);
}

function formatTime(time24) 
{
  var ts = time24;
  var H = +ts.substr(0, 2);
  var h = (H % 12) || 12;
  h = (h < 10)?(h):h;  // leading 0 at the left for 1 digit hours
  var ampm = H < 12 ? " AM" : " PM";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};