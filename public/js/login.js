'use strict'

$(function () {
  const config = {
    apiKey: "AIzaSyBBV3cMOYenI3-EhdQI9Us6W3GkMJGnrpk",
    authDomain: "entact-7a8da.firebaseapp.com",
    databaseURL: "https://entact-7a8da.firebaseio.com",
    storageBucket: "entact-7a8da.appspot.com",
    messagingSenderId: "411092546108"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');


  btnSignup.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    console.log("ENTERED");
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
    //document.location.href = "file:///Users/Teodor/Documents/CSE170/entact/public/browseEvents.html";
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      // logged in
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      // not logged in
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });

});