"use strict";

$(function () {
  var config = {
    apiKey: "AIzaSyBBV3cMOYenI3-EhdQI9Us6W3GkMJGnrpk",
    authDomain: "entact-7a8da.firebaseapp.com",
    databaseURL: "https://entact-7a8da.firebaseio.com",
    storageBucket: "entact-7a8da.appspot.com",
    messagingSenderId: "411092546108"
  };
  firebase.initializeApp(config);

  var state = {
    email: '',
    password: ''
  };
});