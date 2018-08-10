
// gets a new object
// (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('John', 'Smith');

console.log(g);

// use the chainable methods
g.greet().greet(true).log().setLang('es').greet();

// greet guest (test default properties)
var guest = G$();

guest.greet(true);


// use the object on the click of the login button
$('#login').click(function() {

  // create a new 'Greetr' object
  // (let's pretend we know the name from the login form)
  var loginGreeter = G$('Sebastian', 'Kulig');

  // hide select dropdown after login
  // $('.logindiv').hide();

  // fire off the HTML greeting, passing the '#greeting' as the seelctor and the chosen language, and log the welcome as well
  loginGreeter.setLang($('#lang').val())
  .HTMLGreeting('#greeting', true)
  .log();
});
