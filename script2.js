$(document).ready(function(){
  $("#submitButton").click(function(){
      alert("hello");
    $.get("demo_test.txt", function(data, status){
      console("Data: " + data + "\nStatus: " + status);
    });
  });
});