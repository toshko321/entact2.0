
$(function () {
  var config = {
    apiKey: "AIzaSyBBV3cMOYenI3-EhdQI9Us6W3GkMJGnrpk",
    authDomain: "entact-7a8da.firebaseapp.com",
    databaseURL: "https://entact-7a8da.firebaseio.com",
    storageBucket: "entact-7a8da.appspot.com",
    messagingSenderId: "411092546108"
  };
  firebase.initializeApp(config);

  $('.js-form').on('submit', function (event) {
    event.preventDefault();
    var email = $('#js-email').val() || state.email;
    var password = $('#js-password').val() || state.password;
    var details = $('#js-details').val();
    var items = $('#js-items').val();
    var location = $('#js-location').val();
    var members = $('#js-members').val();

    console.log(email, password, message, items, location, members);
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
      $('#js-login-data').addClass('hidden');
      firebase.database().ref('messages').push({
        message: message,
        items: items,
        location: location,
        members: members
      });
      $('.js-form').trigger('reset');
    }).catch(function (error) {
      console.log(error);
    });
  });
});