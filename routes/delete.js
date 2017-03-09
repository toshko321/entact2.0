var data = require("../events.json");

var eventID = req.query.id;

$.each(events, function(index, value){
  if(value.id == )
  {
   delete obj[index];
  }     

});

res.render('browse',data);
