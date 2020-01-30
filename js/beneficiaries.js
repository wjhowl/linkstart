var firebaseRef = firebase.database().ref();
var myRef = firebase.database().ref();

var benName = document.getElementById("name");
var benAge = document.getElementById("age");
var benGender = document.getElementById("gender");
var benLocation = document.getElementById("location");
var benContact = document.getElementById("contact");
var benNotes = document.getElementById("notes");

function submitInfo()
{
  //window.alert("Successfully submitted!");
  var nameVal = benName.value;
  var ageVal = benAge.value;
  var genderVal  = benGender.value;
  var locationVal = benLocation.value;
  var contactVal = benContact.value;
  var notesVal = benNotes.value;

  var newData={
     Name: nameVal,
     Age: ageVal,
     Gender : genderVal,
     Location: locationVal,
     Contact: contactVal,
     Notes: notesVal
  }
  myRef.push(newData);
  window.location.href = "home.html";
}