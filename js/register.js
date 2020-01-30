var firebaseRef = firebase.database().ref();
var myRef = firebase.database().ref();

var orgName = document.getElementById("name");
var orgType = document.getElementById("type");
var orgPres = document.getElementById("president");
var orgHours = document.getElementById("hours");
var orgLocation = document.getElementById("location");
var orgPhone = document.getElementById("phone");
var orgEmail = document.getElementById("email");


function submitInfo()
{
  //window.alert("Successfully submitted!");
  var nameVal = orgName.value;
  var typeVal = orgType.value;
  var presVal  = orgPres.value;
  var hoursVal =  orgHours.value;
  var locationVal = orgLocation.value;
  var phoneVal = orgPhone.value;
  var emailVal = orgEmail.value;

  var newData={
     Name: nameVal,
     Type: typeVal,
     President : presVal,
     Hours : hoursVal,
     Location: locationVal,
     Phone: phoneVal,
     Email: emailVal
  }
  myRef.push(newData);
  window.location.href = "index.html";
}