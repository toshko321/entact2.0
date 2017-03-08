$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) 
    {
      if (user) 
      {
        document.getElementById('signInBtn').style.display = 'none';
        //document.getElementById('registerBtn').style.display = 'none';
        //btn.style.display = 'none';
        var uid = firebase.auth().currentUser.uid;
        console.log("Current User ID: " + uid);
        var rootRef = firebase.database().ref().child('/users/' + uid);
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

            $("#event_list").append(                                        
                                           '<li>' +
                                              '<!-- Event Header -->' +
                                              '<div class="collapsible-header">'+
                                                '<!-- Event Name -->' +
                                                '<div>'+
                                                  '<span class="list-item_title">'+ eventName +'</span>'+
                                                '</div>'+

                                                '<div>'+
                                                  '<!-- Date and Time -->'+
                                                  '<div>'+
                                                    '<i class="material-icons list-icon">today</i>'+
                                                    '<span>'+ date +', '+ time +'</span>'+
                                                    '<span style="margin-right: 5px; margin-left: 5px;"></span>'+
                                                  '</div>'+
                                                  '<!-- Location -->'+
                                                  '<div>'+
                                                    '<i class="material-icons list-icon">location_on</i>'+
                                                    '<span>'+ location +'</span>'+
                                                  '</div>'+
                                                '</div>'+
                                              '</div>'+

                                              '<!-- Event Body/Collapsed Area -->'+
                                              '<div class="collapsible-body mdl-color--indigo-50">'+
                                                '<!-- Event Description -->'+
                                                '<div>'+ details +'</div>'+
                                                '</br>'+
                                                '<!-- More Event Details -->'+
                                                 '<div style="display: inline-block;">'+
                                                  '<b>Items</b> '+ items +'</br>'+
                                                  '<b>Members</b> '+ members +'</br>'+
                                                  '<b> Created by</b> '+ creator+'</br>'  +
                                                '</div>'+
                                                '<!-- Cancel Button -->'+
                                                '<div class="mdl-typography--text-right">'+
                                                  '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" data-toggle="modal" data-target="#MyModal" onclick="testText()" id="delete-event">Delete Event</button>'+
                                                '</div>'+
                                              '</div>'+
                                            '</li>'+
                                            '<!-- End of List Item -->'
                                        
                                    );
        });
      }
    });



});




