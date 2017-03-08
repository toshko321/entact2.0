$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) 
    {
      if (user) 
      {
        console.log("User email: " + user.email);
        document.getElementById('signInBtn').style.display = 'none';
        //btn.style.display = 'none';
        var uid = firebase.auth().currentUser.uid;
        console.log("Current User ID: " + uid);
        var rootRef = firebase.database().ref().child('/allEvents/');
        var from = firebase.database().ref().child('/allEvents/');
        var to = firebase.database().ref().child('/users/').child(uid);
        rootRef.on("child_added", snap => {
            var theUid = snap.child("theUid").val();
            console.log("Current Post ID: " + theUid);
            var eventName = snap.child("EventName").val();
            var creator = snap.child("Creator").val();
            var details = snap.child("Details").val();
            var location = snap.child("Where").val();
            var time = snap.child("Time").val();
            var items = snap.child("Items").val();
            var members = snap.child("Members").val();
            var date = snap.child("Date").val();
            console.log("it actually works doe");

            if(theUid != uid)
            {
              '<!-- Join Button -->'+
                                                '<div class="mdl-typography--text-right">'+
                                                  '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent join-event" data-toggle="modal" data-target="#MyModal" onclick="testText();moveFbRecord(oldRef,newRef)">Join Event</button>'+
                                                '</div>'+
            }

            });
          }
          else
          {
            console.log("user is null again");
          }
        });
});