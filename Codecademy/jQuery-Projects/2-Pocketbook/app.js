var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    if(firstName === "") {
      $("p.first-name-error").text("Please enter your first name.");
    } else {
      $("p.first-name-error").text("");
    }
  });
  
  $('form').submit(function() {
    var lastName = $('#last').val();
    if(lastName === "") {
      $("p.last-name-error").text("Please enter your last name.");
    } else {
      $("p.last-name-error").text("");
    }
  });
  
  $('form').submit(function() {
    var email = $('#email').val();
    if(email === "") {
      $("p.email-error").text("Please enter your email address.");
    } else if (email == "taken@email.com") {
      $("p.email-error").text("This email is already taken.");
    } else {
      $("p.email-error").text("");
    }
  });
    
  $('form').submit(function() {
    var pass = $('#password').val();
    if(pass === "") {
      $("p.password-error").text("Please enter your password.");
    } else if (pass.length < 8) {
      $("p.password-error").text("Try one with at least 8 characters.");
    } else {
      $("p.password-error").text("");
    }
    
    return false;
  });

  };


$(document).ready(main);

