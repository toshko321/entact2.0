var user_state;
var currentPost;

$(document).ready(function() {
    removeBtn();
});

function removeBtn()
{
    firebase.auth().onAuthStateChanged(function(user) 
    {
      if (user) 
      {
        user_state = user;
        document.getElementById('signInBtn').style.display = 'none';
        document.getElementById('registerBtn').style.display = 'none';
      }
    });
}

function submitClick() 
{
    
      if (user_state)
      {
        //var newPostKey = firebase.database().ref().child('users').push().key;
        // User is signed in.
        var theUid = firebase.auth().currentUser.uid;
        var name = document.getElementById("name");
        var creator = document.getElementById("creator");
        var details = document.getElementById("details");
        var location = document.getElementById("location");
        var time = document.getElementById("time");
        var items = document.getElementById("items");
        var members = document.getElementById("members");
        var date = document.getElementById("date");

        var messageText1 = name.value;
        var messageText7 = creator.value;
        var messageText2 = details.value;
        var messageText3 = location.value;
        var messageText4 = time.value;
        var messageText5 = items.value;
        var messageText6 = members.value;
        var messageText8 = date.value;

        var rootRef = firebase.database().ref();
        var key = firebase.auth().currentUser.key;
        var storesRef = rootRef.child('/users/').child(theUid);
        var storesRef2 = rootRef.child('/allEvents/');
        var newStoreRef = storesRef.push();
        var newStoreRef2 = storesRef2.push();
        var newPostKey = newStoreRef.key;
        currentPost = newStoreRef.key;
        var newPostKey2 = newStoreRef2.key;
        console.log("newPostKey: " + newPostKey);
        console.log("newPostKey2: " + newPostKey2);
        console.log("storesRef2: " + storesRef2);

        if(messageText1 != "" && messageText2 != "" && messageText3 != "" && messageText4 != ""
            && messageText5 != "" && messageText6 != "" && messageText7 != "")
        {
            newStoreRef.update
            ({
                'theUid': theUid,
                'postKey': newPostKey,
                EventName: messageText1,
                Details: messageText2,
                Where: messageText3,
                Time: messageText4,
                Items: messageText5,
                Members: messageText6,
                Creator: messageText7,
                Date: messageText8
            }),
            newStoreRef2.update
            ({
                'theUid': theUid,
                'postKey': newPostKey,
                EventName: messageText1,
                Details: messageText2,
                Where: messageText3,
                Time: messageText4,
                Items: messageText5,
                Members: messageText6,
                Creator: messageText7,
                Date: messageText8
            });
        }

        document.getElementById("name").value = "";
        document.getElementById("creator").value = "";
        document.getElementById("details").value = "";
        document.getElementById("location").value = "";
        document.getElementById("time").value = "";
        document.getElementById("items").value = "";
        document.getElementById("members").value = "";
        document.getElementById("date").value = "";
        
        // Display the creation confirmation
        dialog.showModal();

      }

      else
      {
        // No user is signed in.
        console.log("user is null");
      }

}
