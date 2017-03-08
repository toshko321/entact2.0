$(document).on('click', '#delete-event', function () {
    console.log("Entered delete-event");
    var uid = firebase.auth().currentUser.uid;
    //var rootRef = firebase.database().ref().child('/allEvents/');
    var postKey = firebase.database().ref().child('/allEvents/');
    //console.log("Post Key: " + postKey);
    //var oldOne = firebase.database().ref().child('/allEvents/');
    var newOne = firebase.database().ref().child('/users/').child(uid);
    deleteFbRecord(newOne);
});

// not fully implemented, does same as moveFbRecord for now
function deleteFbRecord(ref) {
     console.log("Entered deleteFbRecord");
     ref.once("child_added", function(snapshot) {
        console.log("key inside: " + snapshot.key);
        ref.child(snapshot.key).remove();
    });
}