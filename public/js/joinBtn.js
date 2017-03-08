$(document).on('click', '#join-event', function () {
    var uid = firebase.auth().currentUser.uid;
    var rootRef = firebase.database().ref().child('/allEvents/');
    var oldOne = firebase.database().ref().child('/allEvents/');
    var newOne = firebase.database().ref().child('/users/').child(uid);
    $("li").removeAttr("style");
    $("button").closest("li.active").css({"color": "red", "border": "2px solid red"});
    moveFbRecord(oldOne,newOne);
    $(this).closest("li").remove();
});

function moveFbRecord(oldRef, newRef) {
     console.log("Entered moveFbRecord");
     oldRef.once('value', function(snap)  {
          newRef.update( snap.val(), function(error) {
            console.log("snap val inside joinbtn: " + snap.key);
               //if( !error ) {  oldRef.remove(); }
               if( typeof(console) !== 'undefined' && console.error ) {  console.error(error); }
          });
     });
}