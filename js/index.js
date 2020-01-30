var user="org";
var password ="123";

function logIn()
{
  if (user==(document.getElementById("username").value)){
      if (password==(document.getElementById("pass").value)){
          alert("Correct Password");
          //return "location.href ='home/'";
          //windows.location.replace("home.html");
          location.href='home/';
       }
      else {
          //alert("Incorrect password.");
      }
  }
  else {
    //alert("Invalid username.");
  }
}