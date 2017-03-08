function onSignIn() 
{
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'prompt': 'select_account'
  });
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  dialogLogin.showModal();
  
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
};

function signOut() {
    firebase.auth().signOut().then(function() {
  // Sign-out successful. 
  dialogLogout.showModal();
  console.log("Logged out");
}, function(error) {
  // An error happened.
});
  }
