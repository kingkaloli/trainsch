$(function () {

    var config = {
        apiKey: "AIzaSyDbOePEDeZldaF-9l6vANvD76dh152xPX8",
        authDomain: "kalolitonight.firebaseapp.com",
        databaseURL: "https://kalolitonight.firebaseio.com",
        projectId: "kalolitonight",
        storageBucket: "kalolitonight.appspot.com",
        messagingSenderId: "1030317983164"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

var name = "";
var role = "";
var startDate = 0;
var monthlyRate = "";
$("#submit-button").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

    name = $("#name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#start").val().trim();
    monthlyRate = $("#month-rate").val().trim()
    console.log(role);

        database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    });

});
database.ref().on("child_added", function(childSnapshot) {
    $("#testRow").append("<div><span class='member-name'>" +
      childSnapshot.val().name);      
      $("#testrole").append("<div><span class='member-name'>" +
      childSnapshot.val().role);   
      $("#testDate").append("<div><span class='member-name'>" +
      childSnapshot.val().startDate); 
      
  });
});
