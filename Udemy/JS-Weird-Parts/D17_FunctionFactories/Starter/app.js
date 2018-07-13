
// factory
function makeGreeting(language) {

  return function(firstname, lastname) {
    // language is passed to the outer function
    // language will be 'trapped/collected' in a closure
    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  }
}

//makeGreeting('es')('sebek', 'kulig');


var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Sebek', 'Kulig');
greetSpanish('Ania', 'P');