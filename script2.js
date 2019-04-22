$(document).ready(function(){
  $("#submitButton").click(function(){
      alert("hello");
        var textFirstName = document.getElementById("fieldFirstName").value;
        var textEmail = document.getElementById("fieldEmail").value;
        var textPhoneNumber = document.getElementById("fieldPhoneNumber").value;
        var textSecondName = document.getElementById("fieldSecondName").value;
      if (textFirstName == "" && textSecondName == "" && textPhoneNumber == "" && textEmail == "") {
          alert("Enter text in all the fields!");
          return false;
      };
      if (textFirstName == "") {
          alert("Enter text in field 'First Name'");
          return false;
      }; 
      if (textSecondName == "") {
          alert("Enter text in field 'Second Name'");
          return false;
      }; 
      if (textPhoneNumber == "") {
          alert("Enter text in field 'Phone Number'");
          return false;
      };
      if (textEmail == "") {
          alert("Enter text in field 'E-mail'");
          return false;
    };
    $.get("demo_test.txt", function(data, status){
      console("Data: " + data + "\nStatus: " + status);
    });
  });
});