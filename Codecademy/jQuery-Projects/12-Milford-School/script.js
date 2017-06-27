$(document).ready(function() {
  
  $(".dropdown img").click(function() {
    $(".dropdown-menu").toggle();
  });
  
  $("form").submit(function() {
    var email = $('#email').val();
    if(email === "") {
      $("p.email-error").text("Please enter your email.");
    };
    return false;
  });
  
  $("form").submit(function() {
    var pass = $('#password').val();
    if(pass === "") {
      $("p.password-error").text("Please enter your password.");  
    };
    return false;
  });
});

